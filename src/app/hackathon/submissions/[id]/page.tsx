'use client';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, ExternalLink, Video } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Submission } from '@/lib/submissions';
import { db } from '@/firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

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

  return videoId ? `https://www.youtube.com/embed/${videoId}` : videoUrl; // Fallback to original URL
}

export default function SubmissionDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [submission, setSubmission] = useState<Submission | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const fetchSubmission = async () => {
        const docRef = doc(db, 'submissions', params.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const videoUrl = getYouTubeEmbedUrl(data.video_url) || data.video_url;
          
          setSubmission({
            id: docSnap.id,
            title: data.project_name,
            participants: [data.participant1, data.participant2]
              .filter(Boolean)
              .join(' & '),
            summary: data.summary,
            imageId: data.thumbnail_url,
            appUrl: data.app_url,
            videoUrl: videoUrl,
            description: `Pain Point:\n${data.pain_point}\n\nSolution:\n${data.solution}`,
            round: 'preliminary',
          });
        } else {
          setSubmission(null);
        }
        setLoading(false);
      };

      fetchSubmission();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="container mx-auto max-w-5xl px-4 py-8 md:py-12">
        <Skeleton className="h-8 w-48 mb-8" />
        <div className="space-y-6 mb-10">
           <Skeleton className="h-12 w-3/4" />
           <Skeleton className="h-6 w-1/2" />
        </div>
        <Skeleton className="w-full aspect-video rounded-md" />
      </div>
    )
  }

  if (!submission) {
    notFound();
  }

  const hasVideo = submission.videoUrl && submission.videoUrl.trim() !== '';
  const submissionId = `Proj-${submission.id.substring(0, 4)}`;

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 md:py-12">
      <Button variant="ghost" className="mb-8" asChild>
        <Link href="/hackathon/submissions">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Submissions
        </Link>
      </Button>

      <div className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="text-4xl font-bold tracking-tight font-headline md:text-5xl">
            {submission.title}
          </h1>
          <Badge variant="secondary" className="py-1 px-3 text-sm">
            {submissionId}
          </Badge>
        </div>
        <div className="flex items-center text-lg text-muted-foreground">
          <Users className="mr-2 h-5 w-5" />
          <span>{submission.participants}</span>
        </div>
      </div>

      <div className="my-10 space-y-10">
        {hasVideo ? (
          <Card>
            <CardHeader>
              <CardTitle>Video Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video w-full overflow-hidden rounded-md border">
                <iframe
                  src={submission.videoUrl}
                  className="absolute top-0 left-0 h-full w-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${submission.title} Video Demo`}
                ></iframe>
              </div>
            </CardContent>
          </Card>
        ) : (
          submission.imageId && (
            <Card>
              <CardHeader>
                <CardTitle>Project Thumbnail</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video w-full overflow-hidden rounded-md border">
                  <Image
                    src={submission.imageId}
                    alt={`${submission.title} thumbnail`}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="bg-muted"
                    unoptimized
                  />
                </div>
              </CardContent>
            </Card>
          )
        )}

        <Card>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>{submission.summary}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap text-foreground/80">
              {submission.description}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center flex justify-center gap-4">
        {submission.appUrl && (
          <Button size="lg" asChild>
            <a
              href={submission.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              Try App <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        )}
        {hasVideo && (
            <Button size="lg" variant="secondary" asChild>
               <a
                 href={submission.videoUrl.includes('embed') ? submission.videoUrl.replace('/embed/','/watch?v=') : submission.videoUrl}
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <Video className="mr-2 h-5 w-5" /> Watch Video
               </a>
            </Button>
         )}
      </div>
    </div>
  );
}
