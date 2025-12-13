
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin } from 'lucide-react';

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    {...props}
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
    <path d="M1 1h22v22H1z" fill="none" />
  </svg>
);

const teamMembers = [
  {
    name: 'Nigel Cheong',
    role: 'Technical Lead',
    imageUrl: 'https://picsum.photos/seed/nigel/200/200',
    linkedinUrl: 'https://www.linkedin.com/in/nigelcheong/',
    googleUrl: 'https://moma.corp.google.com/person/nigelcheong',
    initials: 'NC',
  },
  {
    name: 'Abiya Arul Dass',
    role: 'Enablement Lead',
    imageUrl: 'https://picsum.photos/seed/abiya/200/200',
    linkedinUrl: 'https://www.linkedin.com/in/abiya-arul-dass/',
    googleUrl: 'https://moma.corp.google.com/person/abiyaaruldass',
    initials: 'AD',
  },
  {
    name: 'Agnes Ang',
    role: 'Strategy & Ops Lead',
    imageUrl: 'https://picsum.photos/seed/agnes/200/200',
    linkedinUrl: 'https://www.linkedin.com/in/agnesangjiahui/',
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
