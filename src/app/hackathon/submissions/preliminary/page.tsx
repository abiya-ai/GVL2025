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
          description: '', // This can be populated if needed from other fields
          round: 'preliminary',
        });
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
            const submissionId = `Proj-${submission.id.substring(0, 4)}`;
            return (
              <Link
                href={`/hackathon/submissions/${submission.id}`}
                key={submission.id}
                className="group block text-left"
              >
                <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2 rounded-xl">
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
