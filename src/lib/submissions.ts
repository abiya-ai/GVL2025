export type Submission = {
  id: string;
  title: string;
  participants: string;
  summary: string;
  description: string;
  imageId: string; // This will now hold the direct URL to the thumbnail
  appUrl: string;
  videoUrl: string;
  round: 'preliminary' | 'final';
};

// Static submissions are no longer needed as they are fetched from the Google Sheet.
export const submissions: Submission[] = [];
