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
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const rubricsUrl =
  'https://docs.google.com/document/d/e/2PACX-1vTtJ4RH37_tutWsecIXx_LjkkDCqef8V6V1U1z1ZIbIk75TPGyTo7ByNX4Q2EWClrxh9XyfTc-nBrI6/pub';
const onePagerUrl =
  'https://docs.google.com/presentation/d/109KpUxw9bNK9EdmhrcwEc2D5R-TV2MR5tFsbKgKqDfE/embed?start=false&loop=false&delayms=3000';

const galleryImageIds = [
  'hackathon-gallery-1',
  'hackathon-gallery-2',
  'hackathon-gallery-3',
];

export default function HackathonPage() {
  const imageMap = new Map(PlaceHolderImages.map((img) => [img.id, img]));
  const galleryImages = galleryImageIds
    .map((id) => imageMap.get(id))
    .filter(Boolean);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
        <section id="gallery" className="pb-8 md:pb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-headline">
            Event Gallery
          </h2>
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {galleryImages.map((image) => (
                <CarouselItem key={image.id}>
                  <div className="p-1">
                    <Card className="overflow-hidden rounded-xl">
                      <div className="relative w-full aspect-video">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          style={{ objectFit: 'cover' }}
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="h-14 w-14 -left-8 [&>svg]:h-8 [&>svg]:w-8" />
            <CarouselNext className="h-14 w-14 -right-8 [&>svg]:h-8 [&>svg]:w-8" />
          </Carousel>
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === current - 1 ? 'bg-primary' : 'bg-primary/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

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
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Hackathon | Googlers\' Vibe Lab',
  description: 'Hackathon details, rubrics, and one-pager.',
};
