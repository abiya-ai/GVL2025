import { submissions } from '@/lib/submissions';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function SubmissionDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const submission = submissions.find((s) => s.id === params.id);
  const submissionIndex = submissions.findIndex((s) => s.id === params.id);

  if (!submission) {
    notFound();
  }

  const submissionId = `Proj-${String(submissionIndex + 1).padStart(2, '0')}`;

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

        <Card>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap text-foreground/80">
              {submission.description}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button size="lg" asChild>
          <a
            href={submission.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            View Deployed Application <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return submissions.map((submission) => ({
    id: submission.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const submission = submissions.find((s) => s.id === params.id);
  if (!submission) {
    return {
      title: 'Submission Not Found',
    };
  }
  return {
    title: `${submission.title} | Hackathon Submission`,
    description: submission.summary,
  };
}
