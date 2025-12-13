
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin } from 'lucide-react';

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-3 0 262 262"
    {...props}
  >
    <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/>
    <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/>
    <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/>
    <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/>
  </svg>
);

const teamMembers = [
  {
    name: 'Nigel Cheong',
    role: 'Technical Lead',
    imageUrl: 'https://picsum.photos/seed/nigel/200/200',
    linkedinUrl: 'https://www.linkedin.com/in/nigelcheongsingapore',
    googleUrl: 'https://moma.corp.google.com/person/nigelcheong',
    initials: 'NC',
  },
  {
    name: 'Abiya Arul Dass',
    role: 'Enablement Lead',
    imageUrl: 'https://picsum.photos/seed/abiya/200/200',
    linkedinUrl: 'https://www.linkedin.com/in/abiya-immaculate-arul-dass/',
    googleUrl: 'https://moma.corp.google.com/person/abiyaaruldass',
    initials: 'AD',
  },
  {
    name: 'Agnes Ang',
    role: 'Strategy & Ops Lead',
    imageUrl: 'https://picsum.photos/seed/agnes/200/200',
    linkedinUrl: 'https://www.linkedin.com/in/theagnesang/',
    googleUrl: 'https://moma.corp.google.com/person/agnesang',
    initials: 'AA',
  },
  {
    name: 'Alkiff Amran',
    role: 'Marketing Lead',
    imageUrl: 'https://picsum.photos/seed/alkiff/200/200',
    linkedinUrl: 'https://www.linkedin.com/in/alkiffamran/',
    googleUrl: 'https://moma.corp.google.com/person/alkiff',
    initials: 'AA',
  },
];

export default function AboutUsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 font-headline">
            About Googlers' Vibe Lab
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our mission is to empower non-technical Googlers with the skills
            and confidence to bring their ideas to life through code.
          </p>
        </div>

        <div className="mb-20">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-3xl font-headline">
                Our Story
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground space-y-4 max-w-4xl mx-auto">
              <p>
                Googlers' Vibe Lab (GVL) started as a grassroots initiative by a
                few passionate Googlers who saw a gap between brilliant ideas
                and the ability to prototype them. Many non-technical
                colleagues had innovative concepts but lacked the coding skills
                to build even a simple proof-of-concept.
              </p>
              <p>
                We wanted to change that. GVL was born to create a fun,
                supportive, and "vibe-y" environment where anyone, regardless
                of their role, could learn the basics of modern web development
                and AI integration. Through hands-on workshops and a vibrant
                community, we provide the tools and guidance to turn a spark of
                an idea into a functional application.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-headline">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="text-center flex flex-col items-center p-8"
              >
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage
                    src={member.imageUrl}
                    alt={`Photo of ${member.name}`}
                  />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex flex-col flex-grow justify-between">
                  <p className="text-muted-foreground mb-4 min-h-[40px]">{member.role}</p>
                   <div className="flex justify-center items-center gap-4 mt-auto">
                    <a
                      href={member.googleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      aria-label={`${member.name}'s Google Profile`}
                    >
                      <GoogleIcon className="h-6 w-6" />
                    </a>
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      aria-label={`${member.name}'s LinkedIn Profile`}
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'About Us | Googlers\' Vibe Lab',
  description: 'Learn about the mission and the team behind Googlers\' Vibe Lab.',
};
