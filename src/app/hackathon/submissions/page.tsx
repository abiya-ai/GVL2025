import { Button } from '@/components/ui/button';
import { ArrowLeft, Inbox } from 'lucide-react';
import Link from 'next/link';

export default function SubmissionsPage() {
  return (
    <div className="container mx-auto flex h-[70vh] flex-col items-center justify-center text-center">
      <Inbox className="w-16 h-16 text-primary mb-4" />
      <h1 className="text-4xl font-bold tracking-tight font-headline md:text-5xl mb-4">
        Hackathon Submissions
      </h1>
      <p className="text-muted-foreground mb-8 max-w-lg">
        This page will display all the project submissions for the hackathon.
        Functionality to view submissions is coming soon!
      </p>
      <Button asChild variant="outline">
        <Link href="/hackathon">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Hackathon Page
        </Link>
      </Button>
    </div>
  );
}

export const metadata = {
    title: 'Hackathon Submissions | Googlers\' Vibe Lab',
    description: 'View all hackathon project submissions.',
};
