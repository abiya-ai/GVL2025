'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Users } from 'lucide-react';
import Link from 'next/link';
import { Submission } from '@/lib/submissions';
import { db } from '@/firebase/config';
import { collection, onSnapshot, query, Timestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

type SubmissionWithId = Submission & { displayId: string };

export default function PreliminarySubmissionsPage() {
  const [submissions, setSubmissions] = useState<SubmissionWithId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'submissions'));
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const submissionsData: Submission[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();

          let timestamp: Date | null = null;
          if (data.timestamp && typeof data.timestamp.toDate === 'function') {
            timestamp = data.timestamp.toDate();
          } else if (data.timestamp) {
            // Fallback for different timestamp formats if needed
            const parsedDate = new Date(data.timestamp);
            if (!isNaN(parsedDate.getTime())) {
              timestamp = parsedDate;
            }
          }

          submissionsData.push({
            id: doc.id,
            title: data.project_name,
            participants: [data.participant1, data.participant2]
              .filter(Boolean)
              .join(' & '),
            summary: data.summary,
            imageId: data.thumbnail_url,
            appUrl: data.app_url,
            videoUrl: data.video_url,
            painPoint: data.pain_point,
            solution: data.solution,
            round: 'preliminary',
            timestamp: timestamp,
          });
        });

        // 1. Sort chronologically from OLDEST to NEWEST to assign IDs
        const sortedForId = submissionsData.sort((a, b) => {
          const timeA = a.timestamp ? a.timestamp.getTime() : 0;
          const timeB = b.timestamp ? b.timestamp.getTime() : 0;
          return timeA - timeB;
        });

        // 2. Assign chronological IDs
        const submissionsWithIds = sortedForId.map(
          (sub, index) =>
            ({
              ...sub,
              displayId: `Proj-${String(index + 1).padStart(2, '0')}`,
            } as SubmissionWithId)
        );
        
        // 3. Sort from NEWEST to OLDEST for display
        const sortedForDisplay = submissionsWithIds.sort((a, b) => {
          const timeA = a.timestamp ? a.timestamp.getTime() : 0;
          const timeB = b.timestamp ? b.timestamp.getTime() : 0;
          return timeB - timeA;
        });

        setSubmissions(sortedForDisplay);
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching submissions: ', error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="h-full overflow-hidden rounded-xl">
            <CardHeader className="p-0">
              <Skeleton className="w-full aspect-video rounded-t-xl" />
            </CardHeader>
            <CardContent className="p-6">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6 mt-2" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <>
      {submissions.length > 0 ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {submissions.map((submission, index) => {
            const isNewest = index === 0;
            return (
              <Link
                href={`/hackathon/submissions/${submission.id}?pid=${submission.displayId}`}
                key={submission.id}
                className="group block text-left"
              >
                <Card className="relative h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2 rounded-xl">
                  {isNewest && (
                    <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground font-bold py-1 px-3 z-10">
                      New 🔥
                    </Badge>
                  )}
                  <CardHeader className="p-0">
                    {submission.imageId && (
                      <div className="relative w-full aspect-video">
                        <Image
                          src={submission.imageId}
                          alt={`${submission.title} thumbnail`}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-t-xl bg-muted"
                          unoptimized
                        />
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="font-headline text-xl mb-1">
                          {submission.title}
                        </CardTitle>
                        <Badge variant="outline" className="whitespace-nowrap">
                          {submission.displayId}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <Users className="mr-2 h-4 w-4" />
                        <span>{submission.participants}</span>
                      </div>
                      <CardDescription className="text-foreground/80">
                        {submission.summary}
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="w-full text-center p-8 border rounded-lg bg-muted/20">
          <p className="text-muted-foreground">
            No preliminary round submissions found.
          </p>
        </div>
      )}
    </>
  );
}
