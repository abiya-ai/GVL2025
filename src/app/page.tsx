
'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { sessions } from '@/lib/data';
import { stories } from '@/lib/stories';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Info, BookCopy } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import * as React from 'react';

export default function Home() {
  const imageMap = new Map(PlaceHolderImages.map((img) => [img.id, img]));
  const heroBgImage = imageMap.get('session-general');
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <>
      <section className="relative py-20 md:py-32 bg-white overflow-hidden">
        {heroBgImage && (
          <Image
            src={heroBgImage.imageUrl}
            alt={heroBgImage.description}
            fill
            className="object-cover opacity-10"
            data-ai-hint={heroBgImage.imageHint}
          />
        )}
        <div className="container relative mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 font-headline">
            Welcome to Googlers' Vibe Lab
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A 3-week vibe coding program designed to empower non-tech employees
            to strengthen their AI & Digital Acumen!
          </p>
          <Button size="lg" asChild>
            <Link href="#sessions">
              Explore Sessions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-headline">
            Tools You&apos;ll Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Firebase Studio 🔥</CardTitle>
                <CardDescription>
                  The interactive, AI-assisted development environment you&apos;ll use
                  to build and modify your application.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild className="w-full md:w-auto">
                  <a
                    href="https://studio.firebase.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Launch Studio <ExternalLink className="ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Gemini 🤖</CardTitle>
                <CardDescription>
                  Your creative AI partner. Use it to generate ideas, write
                  code, and explore possibilities.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild className="w-full md:w-auto">
                  <a
                    href="https://gemini.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Gemini <ExternalLink className="ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>GVL 101 Cookbook 📖</CardTitle>
                <CardDescription>
                  A compilation of common elements and layouts for beginner
                  vibe coders. You can also access this at go/gvl101.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild className="w-full md:w-auto">
                  <a
                    href="https://vibe-coding-ui-cheatsheet-253658775005.asia-southeast1.run.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore Cookbook <BookCopy className="ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="sessions" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-headline">
            Available Workshops
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sessions.map((session) => {
              const image = imageMap.get(session.imageId);
              return (
                <Link
                  href={`/sessions/${session.slug}`}
                  key={session.id}
                  className="group block"
                >
                  <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2 rounded-xl">
                    <CardHeader className="p-0">
                      {image && (
                        <div className="relative w-full h-48">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-t-xl"
                            data-ai-hint={image.imageHint}
                          />
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="font-headline mb-2">
                        {session.title}
                      </CardTitle>
                      <CardDescription>{session.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      
      <section id="success-stories" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-2 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline">
              Success Stories
            </h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-primary/10 hover:text-primary"
                  >
                    <Info className="h-6 w-6 text-muted-foreground" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    Have a cool project you've vibe-coded? Reach out to the GVL
                    team to get it featured!
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent>
              {stories.map((story) => {
                const image = imageMap.get(story.imageId);
                return (
                  <CarouselItem
                    key={story.id}
                    className="md:basis-1/2 lg:basis-1/2"
                  >
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col overflow-hidden rounded-xl">
                        <a
                          href={story.appUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          {image && (
                            <div className="relative w-full h-48">
                              <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                style={{ objectFit: 'cover' }}
                                className="rounded-t-xl"
                                data-ai-hint={image.imageHint}
                              />
                            </div>
                          )}
                        </a>
                        <CardHeader>
                          <a
                            href={story.appUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <CardTitle className="font-headline mb-2 flex items-center">
                              {story.title}{' '}
                              <ExternalLink className="ml-2 h-5 w-5" />
                            </CardTitle>
                          </a>
                          <p className="text-sm text-muted-foreground">
                            Credit: {story.authorName}{' '}
                            {story.authorHandle && story.authorUrl && (
                              <a
                                href={story.authorUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                {story.authorHandle}
                              </a>
                            )}
                          </p>
                          <CardDescription className="pt-2">
                            {story.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="h-14 w-14 -left-4 [&>svg]:h-8 [&>svg]:w-8" />
            <CarouselNext className="h-14 w-14 -right-4 [&>svg]:h-8 [&>svg]:w-8" />
          </Carousel>
        </div>
      </section>
    </>
  );
}
