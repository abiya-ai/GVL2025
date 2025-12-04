
export type Session = {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageId: string;
  recordingUrl: string;
  slidesUrl: string;
  labDocUrl: string;
  date: string;
};

export const sessions: Session[] = [
  {
    id: '1',
    slug: 'basic-prototyping',
    title: 'Basic Frontend / Backend app Prototyping',
    description:
      'Learn the fundamentals of building a full-stack application from the ground up, including UI, backend logic, and database integration.',
    imageId: 'session-react',
    recordingUrl:
      'https://drive.google.com/file/d/1NZ_Z7SllJwGgZnpax-s4vIPm-u01ya_7/view?usp=sharing',
    slidesUrl:
      'https://docs.google.com/presentation/d/15vfWDOFSuWCbFaokRsKyRhuqiku2muubbdTkDgLdVqU/edit?usp=sharing',
    labDocUrl:
      'https://docs.google.com/document/d/e/2PACX-1vTFgdLMRfBlEtYgF0cjEjt6mzCN2sbEj3Dxd6NKOIqbQG-d6Lm7W6jetty9BXi9HSgcJL6VUJPkqCbF/pub?embedded=true',
    date: '2025-11-26',
  },
  {
    id: '2',
    slug: 'design-and-ux',
    title: 'Design, Branding, and User Experience Customization',
    description:
      'Learn how to customize the look and feel of your application, from colors and fonts to layout and branding.',
    imageId: 'session-nextjs',
    recordingUrl: '#',
    slidesUrl: '#',
    labDocUrl: '',
    date: '2025-12-03',
  },
  {
    id: '3',
    slug: 'google-services-integration',
    title: 'Google Services Integration and App Sharing',
    description:
      'Discover how to integrate various Google services into your app and learn the best practices for sharing your creation with the world.',
    imageId: 'session-typescript',
    recordingUrl: '#',
    slidesUrl: '#',
    labDocUrl: '',
    date: '2025-12-10',
  },
];
