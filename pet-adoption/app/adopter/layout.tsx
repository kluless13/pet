'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// @ts-ignore: Firebase auth module types might need additional configuration
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import { firebaseApp } from '@/lib/firebase'
import AdopterNav from '@/components/adopter/AdopterNav'

export default function AdopterLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setIsLoading(false);
    });
    return unsubscribe;
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {children}
      <AdopterNav />
    </>
  );
} 