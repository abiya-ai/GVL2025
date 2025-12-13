import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin } from 'lucide-react';

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.75 8.36,4.73 12.19,4.73C15.22,4.73 17.01,5.7 18.25,6.85L16.2,8.8C15.11,7.9 13.9,7.27 12.19,7.27C9.91,7.27 7.9,9.09 7.9,11.5C7.9,13.91 9.91,15.73 12.19,15.73C14.78,15.73 16.04,14.06 16.27,12.91H12.18V10.18H21.35C21.45,10.61 21.5,11.09 21.5,11.59C21.5,16.35 18.4,20 12.19,20C7.35,20 3.5,16.44 3.5,11.5C3.5,6.56 7.35,3 12.19,3C16.12,3 19.45,4.93 21.35,7.56L18.25,9.66V11.1Z"
      fill="#4285F4"
    />
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
