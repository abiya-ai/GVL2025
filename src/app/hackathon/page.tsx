
'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Eye } from 'lucide-react';
import Link from 'next/link';

const rubricsUrl =
  'https://docs.google.com/document/d/e/2PACX-1vTtJ4RH37_tutWsecIXx_LjkkDCqef8V6V1U1z1ZIbIk75TPGyTo7ByNX4Q2EWClrxh9XyfTc-nBrI6/pub';
const onePagerUrl =
  'https://docs.google.com/presentation/d/109KpUxw9bNK9EdmhrcwEc2D5R-TV2MR5tFsbKgKqDfE/embed?start=false&loop=false&delayms=3000';

export default function HackathonPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 md:py-12 bg-background">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-12 gap-4">
        <h1 className="text-4xl font-bold tracking-tight font-headline md:text-5xl">
          Hackathon
        </h1>
        <Button asChild>
          <Link href="/hackathon/submissions">
            <Eye className="mr-2 h-5 w-5" />
            View Submissions
          </Link>
        </Button>
      </div>

      <div className="space-y-12">
        <Card className="overflow-hidden">
          <CardHeader>
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
              <CardTitle>Hackathon One-Pager</CardTitle>
              <Button
                variant="link"
                asChild
                className="p-0 h-auto whitespace-nowrap"
              >
                <a
                  href={onePagerUrl.replace(
                    '/embed?start=false&loop=false&delayms=3000',
                    '/edit'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Open in new tab <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <CardDescription className="pt-2">
              Get a quick overview of the hackathon event.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative h-[80vh] w-full overflow-hidden rounded-md border">
              <iframe
                src={onePagerUrl}
                className="h-full w-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Hackathon One-Pager"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader>
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
              <CardTitle>Hackathon Rubrics</CardTitle>
              <Button
                variant="link"
                asChild
                className="p-0 h-auto whitespace-nowrap"
              >
                <a
                  href={rubricsUrl.replace('/pub', '/edit')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Open in new tab <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <CardDescription className="pt-2">
              Review the judging criteria and rubrics for the hackathon.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative h-[80vh] w-full overflow-hidden rounded-md border">
              <iframe
                src={`${rubricsUrl}?embedded=true`}
                className="h-full w-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Hackathon Rubrics"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
