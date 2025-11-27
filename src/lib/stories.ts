export type Story = {
  id: string;
  title: string;
  description: string;
  imageId: string;
  appUrl: string;
  authorName: string;
  authorHandle: string;
  authorUrl: string;
};

export const stories: Story[] = [
  {
    id: '1',
    title: 'Photobooth App',
    description:
      'An app that lets you take photos and arranges them in a classic photobooth-style strip.',
    imageId: 'photobooth',
    appUrl: 'https://photobooth-e6253.web.app/',
    authorName: 'Gwen Yap',
    authorHandle: '@yaphui',
    authorUrl: 'https://moma.corp.google.com/person/yaphui?q=gwen%20yap',
  },
];
