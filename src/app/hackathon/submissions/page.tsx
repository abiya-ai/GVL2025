import { Button } from '@/components/ui/button';
import { ArrowLeft, Inbox } from 'lucide-react';
import Link from 'next/link';

export default function SubmissionsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 md:py-12">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/hackathon">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Hackathon Page
        </Link>
      </Button>
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-4 mb-8">
          <Inbox className="w-12 h-12 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight font-headline md:text-5xl">
            Hackathon Submissions
          </h1>
        </div>
        <div className="w-full text-center p-8 border rounded-lg bg-muted/20">
          <p className="text-muted-foreground">
            Project submissions will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Hackathon Submissions | Googlers\' Vibe Lab',
  description: 'View all hackathon project submissions.',
};
