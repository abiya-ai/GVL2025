import { Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-center gap-4 py-8 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Code2 className="h-6 w-6 text-primary" />
          <div className="text-center text-sm leading-loose text-muted-foreground md:text-left flex items-center gap-1">
            Vibe Coded on Firebase with ❤️
          </div>
        </div>
      </div>
    </footer>
  );
}
