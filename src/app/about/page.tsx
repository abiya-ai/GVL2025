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
      d="M12.0001 12.0001L12.0001 11.9984C12.0001 7.21553 15.9324 3.29026 20.7303 3.29026C20.7323 3.29026 20.7342 3.2903 20.7362 3.29033L20.7367 3.28867C18.5986 1.25883 15.4526 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C15.4526 24 18.5986 22.7412 20.7367 20.7113L20.7362 20.7097C20.7342 20.7097 20.7323 20.7098 20.7303 20.7098C15.9324 20.7098 12.0001 16.7845 12.0001 12.0016L12.0001 12.0001Z"
      fill="#FBBB00"
    />
    <path
      d="M23.9992 12.0001C23.9992 11.2016 23.9324 10.4121 23.8052 9.6416H12V14.3584H18.7834C18.5806 15.6585 17.9622 16.8273 17.0601 17.683L17.0621 17.6806L20.7365 20.7107L20.7366 20.7098C22.793 18.6475 23.9992 15.5456 23.9992 12.0001Z"
      fill="#518EF8"
    />
    <path
      d="M20.7303 3.29026L17.0573 6.31933L17.0602 6.31726C15.866 5.23353 14.1258 4.60742 12 4.60742C8.68656 4.60742 5.86875 6.67139 4.70581 9.6416H12V14.3584H4.70581C4.63943 14.8812 4.60742 15.4141 4.60742 15.9525C4.60742 16.4883 4.63943 17.0212 4.70581 17.544H12V22.2608H4.70581C5.86875 25.231 8.68656 27.2949 12 27.2949C14.1258 27.2949 15.866 26.6688 17.0602 25.5851L17.0573 25.5829L20.7303 28.612C18.5966 30.6402 15.4526 31.899 12 31.899C5.37258 31.899 0 26.5264 0 19.899C0 13.2716 5.37258 7.89899 12 7.89899C15.4526 7.89899 18.5966 9.15783 20.7303 11.1859L20.7303 3.29026Z"
      transform="translate(0, -7.89899)"
      fill="#28B446"
    />
    <path
      d="M20.7366 20.7098L17.0621 17.6806C17.9622 16.8273 18.5806 15.6585 18.7834 14.3584H12V9.6416H23.8052C23.9324 10.4121 23.9992 11.2016 23.9992 12.0001C23.9992 15.5456 22.793 18.6475 20.7366 20.7098Z"
      fill="#F14336"
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
