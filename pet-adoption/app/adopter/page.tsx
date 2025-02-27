'use client';

import React, { useState } from 'react';
import PetCard from '@/components/PetCard';
import { mockPets } from '@/data/mockPets';

export default function AdopterPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: string) => {
    console.log('Swiped:', direction);
    // Move to next pet after swipe
    if (currentIndex < mockPets.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // If we've gone through all pets
  if (currentIndex >= mockPets.length) {
    return (
      <main className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
        <div className="text-white text-2xl">No more pets to show!</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="relative w-full flex justify-center">
          <PetCard pet={mockPets[currentIndex]} onSwipe={handleSwipe} />
        </div>
      </div>
    </main>
  );
}

