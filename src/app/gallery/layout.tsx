export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

export const metadata = {
  title: 'Event Gallery | Googlers\' Vibe Lab',
  description: 'Photos from our workshops and hackathon.',
};
