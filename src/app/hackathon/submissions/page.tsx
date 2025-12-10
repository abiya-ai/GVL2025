
import { Button } from '@/components/ui/button';
import { ArrowLeft, Inbox } from 'lucide-react';
import Link from 'next/link';
import { submissions } from '@/lib/submissions';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Users } from 'lucide-react';

export default function SubmissionsPage() {
  const imageMap = new Map(PlaceHolderImages.map((img) => [img.id, img]));

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 md:py-12 bg-background">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/hackathon">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Hackathon Page
        </Link>
      </Button>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline md:text-5xl mb-4">
          Hackathon Submissions 🚀
        </h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Welcome, Judges! We're excited for you to see the innovative
          <br />
          projects submitted. ✨
        </p>
        {submissions.length > 0 ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {submissions.map((submission, index) => {
              const image = imageMap.get(submission.imageId);
              const submissionId = `Proj-${String(index + 1).padStart(2, '0')}`;
              return (
                <Link
                  href={`/hackathon/submissions/${submission.id}`}
                  key={submission.id}
                  className="group block text-left"
                >
                  <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2 rounded-xl">
                    <CardHeader className="p-0">
                      {image && (
                        <div className="relative w-full h-48">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-t-xl"
                            data-ai-hint={image.imageHint}
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
                        <CardDescription className="text-foreground/80">{submission.summary}</CardDescription>
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
              Project submissions will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Hackathon Submissions | Googlers\' Vibe Lab',
  description: 'View all hackathon project submissions.',
};
