import { Submission } from '@/lib/submissions';

const CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTAAnladwV4Nu4yRDsvhbeehbJ_7z0m_pxZi9cJg5sdjitHeg1Ig1pceaAPb_ZSKfy48oygFvlB-LHm/pub?output=csv';

function parseCSV(csvText: string): string[][] {
  const lines = csvText.split(/\r\n/);
  return lines.map((line) => {
    const columns = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    return columns.map((col) => col.trim().replace(/^"|"$/g, ''));
  });
}

function getYouTubeEmbedUrl(videoUrl: string): string | null {
  if (!videoUrl) return null;

  let videoId = null;
  try {
    const url = new URL(videoUrl);
    if (url.hostname === 'youtu.be') {
      videoId = url.pathname.slice(1);
    } else if (
      url.hostname === 'www.youtube.com' ||
      url.hostname === 'youtube.com'
    ) {
      if (url.pathname === '/watch') {
        videoId = url.searchParams.get('v');
      } else if (url.pathname.startsWith('/embed/')) {
        return videoUrl; // Already an embed URL
      }
    }
  } catch (error) {
    console.error('Invalid video URL:', videoUrl, error);
    return null;
  }

  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
}

export async function fetchSubmissions(): Promise<Submission[]> {
  try {
    const response = await fetch(CSV_URL, {
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch CSV: ${response.statusText}`);
    }
    const csvText = await response.text();
    const data = parseCSV(csvText);

    // Skip header row and filter out any empty rows
    const submissions: Submission[] = data.slice(1).map((row, index) => {
      const [
        timestamp,
        email,
        participant1,
        participant2,
        projectName,
        summary,
        painPoint,
        solution,
        appUrl,
        videoUrl,
        thumbnailUrl,
      ] = row;

      const participants = [participant1, participant2].filter(Boolean).join(' & ');
      const embedVideoUrl = getYouTubeEmbedUrl(videoUrl) || videoUrl;


      return {
        id: (index + 1).toString(),
        title: projectName,
        participants: participants,
        summary: summary,
        description: `Pain Point:\n${painPoint}\n\nSolution:\n${solution}`,
        imageId: thumbnailUrl, // Using imageId to store the thumbnail URL
        appUrl: appUrl,
        videoUrl: embedVideoUrl,
        round: 'preliminary',
      };
    }).filter(submission => submission.title); // Ensure project has a title

    return submissions;
  } catch (error) {
    console.error('Error fetching or parsing submissions:', error);
    return [];
  }
}
