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
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function PreliminarySubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, 'submissions'),
      where('round', '==', 'preliminary')
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const submissionsData: Submission[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
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
          timestamp: data.timestamp,
        });
      });
      // Sort client-side to find the newest submission
      submissionsData.sort((a, b) => {
        const aSeconds = a.timestamp?.seconds || 0;
        const bSeconds = b.timestamp?.seconds || 0;
        if (bSeconds - aSeconds !== 0) {
          return bSeconds - aSeconds;
        }
        const aNanos = a.timestamp?.nanoseconds || 0;
        const bNanos = b.timestamp?.nanoseconds || 0;
        return bNanos - aNanos;
      });
      setSubmissions(submissionsData);
      setLoading(false);
    });

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
            const submissionId = `Proj-${String(index + 1).padStart(2, '0')}`;
            return (
              <Link
                href={`/hackathon/submissions/${submission.id}`}
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
                        <Badge variant="outline">{submissionId}</Badge>
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
