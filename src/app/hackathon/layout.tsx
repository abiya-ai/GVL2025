export default function HackathonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

export const metadata = {
  title: 'Hackathon | Googlers\' Vibe Lab',
  description: 'Hackathon details, rubrics, and one-pager.',
};
