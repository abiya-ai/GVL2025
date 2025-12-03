
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
      'Inspired by the 1970s and emerging trend of film & digital cameras, this Photobooth App lets you snap moments and arrange them in a classic, photobooth-style strip. Skip the travel just to find a photobooth, your next "cool" moment is now readily available anytime straight from your device!',
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
      "This app brings retail shopping experience from start to finish without the need to leave your house - do it right at the comfort of your palm! Choose the product that you like, then upload a picture of yourself to visualise how you'll look like in various occasions and environment!",
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
