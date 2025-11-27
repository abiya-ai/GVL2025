import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TriangleAlert } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto flex h-[60vh] flex-col items-center justify-center text-center">
      <TriangleAlert className="w-16 h-16 text-destructive mb-4" />
      <h2 className="text-3xl font-bold mb-2 font-headline">Session Not Found</h2>
      <p className="text-muted-foreground mb-6">
        Oops! We couldn't find the workshop session you were looking for.
      </p>
      <Button asChild>
        <Link href="/">Return to All Sessions</Link>
      </Button>
    </div>
  );
}
