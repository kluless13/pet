"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import NGORegistrationModal from '@/components/auth/NGORegistrationModal';
import VerificationStatus from '@/components/ngo/VerificationStatus';
import { Shield } from 'lucide-react';

interface NGO {
  id: string;
  name: string;
  description: string;
  image: string;
  verificationStatus?: 'pending' | 'verified' | 'rejected';
  submittedAt?: Date;
  rejectionReason?: string;
}

export default function NGOPage() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [currentNGO, setCurrentNGO] = useState<NGO | null>(null);

  // Mock function to get NGO status - replace with actual Firebase implementation
  useEffect(() => {
    // TODO: Replace with actual Firebase auth and database check
    const mockNGOData = {
      id: "123",
      name: "Sample NGO",
      description: "Sample description",
      image: "https://via.placeholder.com/300x200.png?text=NGO",
      verificationStatus: "pending" as const,
      submittedAt: new Date(),
    };
    setCurrentNGO(mockNGOData);
  }, []);

  // Sample verified NGOs
  const verifiedNGOs: NGO[] = [
    {
      id: "1",
      name: "Happy Tails NGO",
      description: "Rescue and care for abandoned animals.",
      image: "https://via.placeholder.com/300x200.png?text=NGO+1",
      verificationStatus: "verified",
    },
    {
      id: "2",
      name: "Paws and Claws",
      description: "Dedicated to pet adoption and welfare.",
      image: "https://via.placeholder.com/300x200.png?text=NGO+2",
      verificationStatus: "verified",
    },
    {
      id: "3",
      name: "Furry Friends",
      description: "Providing shelter for rescued pets.",
      image: "https://via.placeholder.com/300x200.png?text=NGO+3",
      verificationStatus: "verified",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">NGO Partnership Program</h1>
          <p className="text-xl text-gray-300 mb-8">
            Join our network of verified animal welfare organizations and connect with potential adopters.
          </p>
          {!currentNGO && (
            <Button
              onClick={() => setIsRegistrationOpen(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 h-auto"
            >
              Register Your NGO
            </Button>
          )}
        </div>
      </div>

      {/* Verification Status */}
      {currentNGO && currentNGO.verificationStatus && (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <VerificationStatus
            status={currentNGO.verificationStatus}
            submittedAt={currentNGO.submittedAt || new Date()}
            rejectionReason={currentNGO.rejectionReason}
          />
        </div>
      )}

      {/* Verified NGOs Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Verified NGOs</h2>
          <div className="flex items-center text-green-500">
            <Shield className="w-5 h-5 mr-2" />
            <span>Verified Partners</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {verifiedNGOs.map((ngo) => (
            <div key={ngo.id} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <img src={ngo.image} alt={ngo.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{ngo.name}</h3>
                  <Shield className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-gray-400 mb-4">{ngo.description}</p>
                <Link href={`/ngo/${ngo.id}`} passHref>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    View Profile
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Modal */}
      <NGORegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </div>
  );
} 