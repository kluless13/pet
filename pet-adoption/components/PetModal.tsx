import React from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle } from 'lucide-react';

interface PetModalProps {
  pet: {
    id: string;
    name: string;
    age: string;
    breed: string;
    gender: string;
    images: string[];
    personality: string[];
    description: string;
    location: string;
    size: string;
    energyLevel: string;
    healthInfo: string;
  };
  onClose: () => void;
}

const PetModal: React.FC<PetModalProps> = ({ pet, onClose }) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gray-900 text-white border-gray-800">
        <DialogTitle className="text-2xl font-bold text-white">{pet.name}</DialogTitle>
        <div className="grid grid-cols-3 gap-6">
          {/* Left column - Image */}
          <div className="col-span-1">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src={pet.images[0]}
                alt={`Photo of ${pet.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>

          {/* Right column - Basic Info */}
          <div className="col-span-2 space-y-4">
            <div>
              <p className="text-xl text-gray-100">{pet.breed}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-gray-700 text-gray-100">
                {pet.gender}
              </Badge>
              <Badge variant="secondary" className="bg-gray-700 text-gray-100">
                {pet.age}
              </Badge>
              <Badge variant="secondary" className="bg-gray-700 text-gray-100">
                {pet.size}
              </Badge>
              <Badge variant="secondary" className="bg-gray-700 text-gray-100">
                {pet.energyLevel} Energy
              </Badge>
            </div>

            <div className="flex items-center gap-2 text-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{pet.location}</span>
            </div>
          </div>

          {/* Full width sections below */}
          <div className="col-span-3 space-y-6">
            {/* About Section */}
            <section>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">About</h3>
              <p className="text-gray-100">{pet.description}</p>
            </section>

            {/* Personality Section */}
            <section>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Personality</h3>
              <div className="flex flex-wrap gap-2">
                {pet.personality.map((trait, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-gray-700 text-gray-100"
                  >
                    {trait}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Health Information */}
            <section>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Health Information</h3>
              <p className="text-gray-100">{pet.healthInfo}</p>
            </section>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => {/* Handle adoption application */}}
              >
                Apply for Adoption
              </Button>
              <Button
                variant="outline"
                className="flex gap-2 border-gray-600 text-gray-100 hover:bg-gray-800 hover:text-white"
                onClick={() => {/* Handle NGO message */}}
              >
                <MessageCircle className="w-4 h-4" />
                Message NGO
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PetModal; 