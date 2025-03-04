'use client';

import React, { useState, useEffect } from 'react';
import PetCard from '../../components/adopter/PetCard';
import { mockPets } from '@/data/mockPets';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export default function AdopterPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedPets, setLikedPets] = useState<string[]>([]);
  const [dislikedPets, setDislikedPets] = useState<string[]>([]);

  // Load liked and disliked pets from localStorage on component mount
  useEffect(() => {
    const storedLikedPets = localStorage.getItem('likedPets');
    const storedDislikedPets = localStorage.getItem('dislikedPets');
    
    if (storedLikedPets) {
      setLikedPets(JSON.parse(storedLikedPets));
    }
    if (storedDislikedPets) {
      setDislikedPets(JSON.parse(storedDislikedPets));
    }

    // Find the first pet that hasn't been interacted with
    const allInteractedPets = [...JSON.parse(storedLikedPets || '[]'), ...JSON.parse(storedDislikedPets || '[]')];
    const firstUnseenIndex = mockPets.findIndex(pet => !allInteractedPets.includes(pet.id));
    setCurrentIndex(firstUnseenIndex >= 0 ? firstUnseenIndex : mockPets.length);
  }, []);

  const handleSwipe = (direction: string) => {
    const currentPet = mockPets[currentIndex];
    
    if (direction === 'right') {
      const updatedLikedPets = [...likedPets, currentPet.id];
      setLikedPets(updatedLikedPets);
      localStorage.setItem('likedPets', JSON.stringify(updatedLikedPets));
      console.log('Liked:', currentPet.name);
    } else {
      const updatedDislikedPets = [...dislikedPets, currentPet.id];
      setDislikedPets(updatedDislikedPets);
      localStorage.setItem('dislikedPets', JSON.stringify(updatedDislikedPets));
      console.log('Disliked:', currentPet.name);
    }

    // Move to next pet immediately
    setCurrentIndex(prevIndex => {
      const nextIndex = prevIndex + 1;
      console.log('Moving to next pet:', nextIndex < mockPets.length ? mockPets[nextIndex].name : 'No more pets');
      return nextIndex;
    });
  };

  // If we've gone through all pets
  if (currentIndex >= mockPets.length) {
    return (
      <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4 space-y-8">
        <div className="text-white text-2xl text-center">No more pets to show!</div>
        
        {likedPets.length > 0 && (
          <div className="bg-gray-900 p-6 rounded-lg max-w-md w-full">
            <h2 className="text-white text-xl mb-4 flex items-center">
              <Heart className="w-6 h-6 text-red-500 mr-2" />
              Your Liked Pets ({likedPets.length})
            </h2>
            <div className="space-y-3">
              {likedPets.map(petId => {
                const pet = mockPets.find(p => p.id === petId);
                return pet ? (
                  <div key={pet.id} className="flex items-center justify-between bg-gray-800 p-3 rounded">
                    <div className="text-white">
                      <div className="font-semibold">{pet.name}</div>
                      <div className="text-sm text-gray-400">{pet.breed}</div>
                    </div>
                    <Button
                      variant="outline"
                      className="text-blue-400 hover:text-blue-300"
                      onClick={() => window.location.href = `/adopter/pet/${pet.id}`}
                    >
                      View Profile
                    </Button>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        )}

        <Button
          variant="outline"
          className="text-white border-white hover:bg-gray-800"
          onClick={() => {
            localStorage.removeItem('likedPets');
            localStorage.removeItem('dislikedPets');
            setLikedPets([]);
            setDislikedPets([]);
            setCurrentIndex(0);
          }}
        >
          Start Over
        </Button>
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

