import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Nigel Cheong',
    role: 'Technical Lead',
    imageUrl: 'https://picsum.photos/seed/nigel/200/200',
    linkedinUrl: '#', // TODO: Add LinkedIn URL
    initials: 'NC',
  },
  {
    name: 'Abiya Arul Dass',
    role: 'Enablement Lead',
    imageUrl: 'https://picsum.photos/seed/abiya/200/200',
    linkedinUrl: '#', // TODO: Add LinkedIn URL
    initials: 'AD',
  },
  {
    name: 'Agnes Ang',
    role: 'Strategy & Ops Lead',
    imageUrl: 'https://picsum.photos/seed/agnes/200/200',
    linkedinUrl: '#', // TODO: Add LinkedIn URL
    initials: 'AA',
  },
  {
    name: 'Alkiff Amran',
    role: 'Marketing Lead',
    imageUrl: 'https://picsum.photos/seed/alkiff/200/200',
    linkedinUrl: '#', // TODO: Add LinkedIn URL
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
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors mx-auto mt-auto"
                    aria-label={`${member.name}'s LinkedIn Profile`}
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
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
