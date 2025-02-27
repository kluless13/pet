'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { firebaseApp } from '@/lib/firebase'
import type { FirebaseApp } from 'firebase/app'
import AdopterNav from '@/components/adopter/AdopterNav'

export default function AdopterLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const app = firebaseApp as FirebaseApp | undefined;
    if (!app) return;
    
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, () => {
      setIsLoading(false);
    });
    return unsubscribe;
  }, [router]);

  if (isLoading) {
    return <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>;
  }

  return (
    <>
      {children}
      <AdopterNav />
    </>
  );
} 