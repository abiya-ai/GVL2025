
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
  {
    id: '2',
    title: 'Ecommerce Proof of Concept',
    description:
      'A proof-of-concept demo for an ecommerce site, focusing on up-selling products with an attractive product page, search, and filtering.',
    imageId: 'ecommerce-poc',
    appUrl: 'https://cymbal-retail-vto-253658775005.asia-southeast1.run.app/',
    authorName: 'GVL Team',
    authorHandle: '',
    authorUrl: '',
  },
];
