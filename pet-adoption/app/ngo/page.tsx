"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface NGO {
  id: string;
  name: string;
  description: string;
  image: string;
}

export default function NGOPage() {
  const ngos: NGO[] = [
    {
      id: "1",
      name: "Happy Tails NGO",
      description: "Rescue and care for abandoned animals.",
      image: "https://via.placeholder.com/300x200.png?text=NGO+1",
    },
    {
      id: "2",
      name: "Paws and Claws",
      description: "Dedicated to pet adoption and welfare.",
      image: "https://via.placeholder.com/300x200.png?text=NGO+2",
    },
    {
      id: "3",
      name: "Furry Friends",
      description: "Providing shelter for rescued pets.",
      image: "https://via.placeholder.com/300x200.png?text=NGO+3",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">NGO Profiles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ngos.map((ngo) => (
          <div key={ngo.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img src={ngo.image} alt={ngo.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{ngo.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{ngo.description}</p>
              <Link href={`/ngo/${ngo.id}`} passHref>
                <Button className="bg-blue-600 text-white hover:bg-blue-700">View Profile</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 