
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
    title: 'Cymbal Retail Shopping Experience',
    description:
      'A proof-of-concept demo for an ecommerce site, focusing on up-selling products with an attractive product page, search, and filtering.',
    imageId: 'ecommerce-poc',
    appUrl: 'https://cymbal-retail-vto-253658775005.asia-southeast1.run.app/',
    authorName: 'Nigel Cheong',
    authorHandle: '@nigelcheong',
    authorUrl: 'https://moma.corp.google.com/person/nigelcheong@google.com',
  },
  {
    id: '3',
    title: 'AI Fraud Defense Demo',
    description: 'A POC app simulating how Agentic AI can help prevent fraud among users using voice intervention and real-time analysis.',
    imageId: 'fraud-detection',
    appUrl: 'https://guardian-agent-fraud-defense-demo-596731483925.us-west1.run.app/',
    authorName: 'Asif Saleem',
    authorHandle: '@asifsaleem',
    authorUrl: 'https://moma.corp.google.com/person/asifsaleem'
  },
  {
    id: '4',
    title: 'BankGen Onboarding Demo',
    description: 'Helps banks automate KYC by verifying users with government-issued credentials to streamline account creation.',
    imageId: 'bank-kyc',
    appUrl: 'https://bankgen-onboarding-596731483925.us-west1.run.app/',
    authorName: 'Asif Saleem',
    authorHandle: '@asifsaleem',
    authorUrl: 'https://moma.corp.google.com/person/asifsaleem'
  }
];
