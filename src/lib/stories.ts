export type Story = {
  id: string;
  title: string;
  description: string;
  imageId: string;
  appUrl: string;
};

export const stories: Story[] = [
  {
    id: '1',
    title: 'Photobooth App',
    description:
      'An app that lets you take photos and arranges them in a classic photobooth-style strip.',
    imageId: 'photobooth',
    appUrl: 'https://photobooth-e6253.web.app/',
  },
  {
    id: '2',
    title: 'Smart Recipe Finder',
    description:
      'A handy tool that suggests recipes based on the ingredients you have in your fridge, reducing food waste.',
    imageId: 'recipe-app',
    appUrl: '#',
  },
];
