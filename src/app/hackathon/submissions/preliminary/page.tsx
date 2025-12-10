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
import { fetchSubmissions } from '@/lib/submissions-fetcher';

export default async function PreliminarySubmissionsPage() {
  const preliminarySubmissions = await fetchSubmissions();

  return (
    <>
      {preliminarySubmissions.length > 0 ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {preliminarySubmissions.map((submission, index) => {
            const submissionId = `Proj-${String(index + 1).padStart(2, '0')}`;
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
                          unoptimized // Required for external URLs without a defined hostname
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
            Project submissions for the preliminary round will appear here.
          </p>
        </div>
      )}
    </>
  );
}
