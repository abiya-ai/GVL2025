'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Tabs,
  TabsList,
  TabsTrigger as RadixTabsTrigger,
} from '@/components/ui/tabs';

export function SubmissionsTabs() {
  const pathname = usePathname();

  const tabs = [
    { name: 'Preliminary Round', href: '/hackathon/submissions/preliminary' },
    { name: 'Final Round', href: '/hackathon/submissions/final' },
  ];

  // Find the current active tab to set the default value for the Tabs component
  const activeTab =
    tabs.find((tab) => pathname.startsWith(tab.href))?.href || tabs[0].href;

  return (
    <Tabs defaultValue={activeTab} className="w-full flex justify-center">
      <TabsList>
        {tabs.map((tab) => (
          <RadixTabsTrigger value={tab.href} key={tab.href} asChild>
            <Link
              href={tab.href}
              className={cn(
                'data-[state=active]:shadow-sm',
                pathname.startsWith(tab.href)
                  ? 'bg-background text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {tab.name}
            </Link>
          </RadixTabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
