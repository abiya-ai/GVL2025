export type Submission = {
  id: string;
  title: string;
  participants: string;
  summary: string;
  description: string;
  imageId: string;
  appUrl: string;
  videoUrl: string;
};

export const submissions: Submission[] = [
  {
    id: '1',
    title: 'AI Story Generator',
    participants: 'Alice & Bob',
    summary:
      'An interactive app that generates personalized short stories for children based on their favorite characters and settings.',
    description:
      'Our project leverages a powerful language model to create unique and engaging stories for kids. Parents can input a few parameters like the main character, a location, and a moral, and the AI weaves a complete narrative. The goal is to make reading more fun and interactive. The UI is designed to be simple and colorful, appealing to a young audience. We used Next.js for the frontend and a Genkit flow for the backend AI integration.',
    imageId: 'submission-project',
    appUrl: '#',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '2',
    title: 'Community Garden Planner',
    participants: 'Charlie',
    summary:
      'A tool for local communities to plan and manage shared garden spaces, track planting schedules, and coordinate tasks.',
    description:
      "This web application helps community members collaborate on gardening projects. It features a visual grid layout for planning garden beds, a shared calendar for tracking planting and harvesting times, and a simple task manager. We built a Firestore backend to store all the garden data in real-time, allowing multiple users to see updates instantly. The frontend is built with React and uses ShadCN components for a clean, modern look.",
    imageId: 'submission-project',
    appUrl: '#',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '3',
    title: 'Retro Recipe Finder',
    participants: 'Diana & Eve',
    summary:
      "Rediscover culinary classics with this app that sources and displays recipes from vintage cookbooks using OCR and AI.",
    description:
      "We wanted to bring classic recipes to a new generation. Our application allows users to search for recipes from a curated collection of digitized vintage cookbooks. We used Google's Vision AI to perform OCR on scanned cookbook pages, and then a Gemini model to structure the extracted text into a readable recipe format (ingredients, instructions, etc.). The app presents recipes on digital cards with a retro design aesthetic to match the theme.",
    imageId: 'submission-project',
    appUrl: '#',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];
