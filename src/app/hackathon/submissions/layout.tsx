import { SubmissionsTabs } from '@/components/layout/submissions-tabs';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SubmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      </div>
      <SubmissionsTabs />
      <div className="mt-8">{children}</div>
    </div>
  );
}

export const metadata = {
  title: "Hackathon Submissions | Googlers' Vibe Lab",
  description: 'View all hackathon project submissions.',
};
