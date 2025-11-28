
import { sessions } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Video,
  Presentation,
  ExternalLink,
  ArrowLeft,
  CalendarDays,
} from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { format } from 'date-fns';

export default function SessionPage({ params }: { params: { slug: string } }) {
  const session = sessions.find((s) => s.slug === params.slug);

  if (!session) {
    notFound();
  }

  const recordingButton = session.recordingUrl ? (
    <Button size="lg" asChild className="w-full">
      <a
        href={session.recordingUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Video className="mr-2 h-5 w-5" /> View Recording
      </a>
    </Button>
  ) : (
    <Button size="lg" className="w-full" disabled>
      <Video className="mr-2 h-5 w-5" /> View Recording
    </Button>
  );

  const slidesButton = session.slidesUrl ? (
    <Button size="lg" variant="secondary" asChild className="w-full">
      <a
        href={session.slidesUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Presentation className="mr-2 h-5 w-5" /> Access Slides
      </a>
    </Button>
  ) : (
    <Button size="lg" variant="secondary" className="w-full" disabled>
      <Presentation className="mr-2 h-5 w-5" /> Access Slides
    </Button>
  );

  return (
    <>
      <div className="container mx-auto max-w-5xl px-4 py-8 md:py-12">
        <Button variant="ghost" className="mb-8" asChild>
          <Link href="/#sessions">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Sessions
          </Link>
        </Button>

        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="secondary" className="py-1 px-3 text-sm">
              Workshop
            </Badge>
            <div className="flex items-center text-sm text-foreground/80">
              <CalendarDays className="mr-2 h-4 w-4" />
              <span>{format(new Date(session.date), 'PPP')}</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight font-headline md:text-5xl">
            {session.title}
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            {session.description}
          </p>
        </div>

        <div className="my-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {recordingButton}
          {slidesButton}
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 pb-8 md:pb-12">
        <Card className="overflow-hidden">
          <CardHeader>
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
              <CardTitle>Lab Document</CardTitle>
              {session.labDocUrl && (
                <Button
                  variant="link"
                  asChild
                  className="p-0 h-auto whitespace-nowrap"
                >
                  <a
                    href={session.labDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Open in new tab <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
            <CardDescription className="pt-2">
              {session.labDocUrl
                ? 'Follow along with the hands-on lab below.'
                : 'The lab document will be available after the session.'}
            </CardDescription>
          </CardHeader>
          {session.labDocUrl && (
            <CardContent>
              <div className="relative h-[80vh] w-full overflow-hidden rounded-md border">
                <iframe
                  src={session.labDocUrl}
                  className="h-full w-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Lab Document"
                ></iframe>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return sessions.map((session) => ({
    slug: session.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const session = sessions.find((s) => s.slug === params.slug);
  if (!session) {
    return {
      title: 'Session Not Found',
    };
  }
  return {
    title: `${session.title} | Googlers' Vibe Lab`,
    description: session.description,
  };
}
