import Link from 'next/link';
import { Code2 } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-gray-800 transition-colors hover:text-primary"
        >
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-headline">Googlers' Vibe Lab</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/hackathon"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Hackathon
          </Link>
        </nav>
      </div>
    </header>
  );
}
