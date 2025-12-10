
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
  cheatsheetUrl?: string;
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
    recordingUrl: 'https://drive.google.com/file/d/1Gji88qjOCQAdY0yJ9Y1v9QImZ5pSblzD/view?usp=drive_link&resourcekey=0-JBsrNnSkYBY8LzaU68xEqw',
    slidesUrl:
      'https://docs.google.com/presentation/d/1FlTd1p4PUAVYTgD_FFgMe41maSctVlLRwJe9IjfHYrY/edit?usp=sharing',
    labDocUrl: '',
    date: '2025-12-03',
    cheatsheetUrl: 'https://vibe-coding-ui-cheatsheet-253658775005.asia-southeast1.run.app/',
  },
  {
    id: '3',
    slug: 'google-services-integration',
    title: 'Google Services Integration and App Sharing',
    description:
      'Discover how to integrate various Google services into your app and learn the best practices for sharing your creation with the world.',
    imageId: 'session-typescript',
    recordingUrl: 'https://drive.google.com/file/d/1F7JZ0U4USkuXoFdP8Mlfzr7902-Iq0kf/view?usp=drive_link',
    slidesUrl: 'https://docs.google.com/presentation/d/10iOEksxqNCxIGfUYuIsn7lKWp1o5GVYQ9VtUbrJpbLY/edit?usp=sharing',
    labDocUrl: 'https://docs.google.com/document/d/1e7KL0g2j5FhBrW-r5Orl1iEuaFQARX19_TRtpH-dW2Q/edit?usp=sharing',
    date: '2025-12-10',
  },
];

