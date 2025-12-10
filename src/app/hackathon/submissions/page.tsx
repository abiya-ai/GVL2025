'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function SubmissionsRedirectPage() {
  useEffect(() => {
    redirect('/hackathon/submissions/preliminary');
  }, []);

  return null;
}
