
'use client';
import { Card } from '@/components/ui/card';
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

const galleryImageIds = [
  'hackathon-gallery-1',
  'hackathon-gallery-2',
  'hackathon-gallery-3',
  'hackathon-gallery-4',
  'hackathon-gallery-5',
  'hackathon-gallery-6',
  'hackathon-gallery-7',
  'hackathon-gallery-8',
  'hackathon-gallery-9',
];

export default function GalleryPage() {
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
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
          Event Gallery
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          A glimpse into our vibrant workshops and hackathon.
        </p>
      </div>

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
    </div>
  );
}
