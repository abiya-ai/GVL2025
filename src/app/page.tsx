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
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function Home() {
  const imageMap = new Map(PlaceHolderImages.map((img) => [img.id, img]));
  const heroBgImage = imageMap.get('session-general');

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
      
      <section id="success-stories" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-headline">
            Success Stories
          </h2>
          <div className="flex justify-center">
            {stories.map((story) => {
              const image = imageMap.get(story.imageId);
              return (
                <a
                  href={story.appUrl}
                  key={story.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block max-w-lg"
                >
                  <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2 rounded-xl">
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
                    <CardHeader>
                      <CardTitle className="font-headline mb-2 flex items-center">
                        {story.title} <ExternalLink className="ml-2 h-5 w-5" />
                      </CardTitle>
                      <CardDescription>{story.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
