import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { Heart, X, Info } from "lucide-react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import PetModal from './PetModal';

interface PetCardProps {
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
    size: 'Small' | 'Medium' | 'Large';
    energyLevel: 'Low' | 'Medium' | 'High';
    healthInfo: string;
  };
  onSwipe: (direction: string) => void;
}

const PetCard: React.FC<PetCardProps> = ({ pet, onSwipe }) => {
  const [showModal, setShowModal] = useState(false);
  const controls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(false);

  // Reset animation when pet changes
  useEffect(() => {
    controls.set({ scale: 0.95, opacity: 0, x: 0, rotate: 0 });
    controls.start({ scale: 1, opacity: 1 });
    setIsAnimating(false);
  }, [pet.id, controls]);

  const handleInfoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowModal(true);
  };

  const handleSwipeAnimation = async (direction: 'left' | 'right') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    await controls.start({
      x: direction === 'right' ? 500 : -500,
      rotate: direction === 'right' ? 20 : -20,
      opacity: 0,
      transition: { duration: 0.5 }
    });
    onSwipe(direction);
  };

  const handleLike = async (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    await handleSwipeAnimation('right');
  };

  const handleDislike = async (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    await handleSwipeAnimation('left');
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={controls}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-[360px] h-[600px] bg-gray-900 rounded-3xl shadow-xl overflow-hidden"
        style={{ transformOrigin: 'center' }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(_, info: PanInfo) => {
          if (isAnimating) return;
          const swipe = info.offset.x;
          if (swipe < -100) {
            void handleDislike();
          } else if (swipe > 100) {
            void handleLike();
          }
        }}
      >
        {/* Main Image */}
        <div className="relative w-full h-[65%] overflow-hidden">
          <Image
            src={pet.images[0]}
            alt={`Photo of ${pet.name}, a ${pet.breed}`}
            fill
            className="object-cover"
            sizes="(max-width: 360px) 100vw, 360px"
            priority
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/pet-placeholder.jpg';
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>

        {/* Pet Info */}
        <div className="absolute bottom-20 w-full p-6 text-white">
          <div className="space-y-2">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white">{pet.name}</h2>
                <p className="text-lg text-gray-50">{pet.gender} • {pet.age}</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-50">{pet.breed}</p>
            
            {/* Location */}
            <div className="flex items-center gap-1 text-gray-50">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{pet.location}</span>
            </div>

            {/* Personality Traits */}
            <div className="flex flex-wrap gap-2 mt-3">
              {pet.personality.slice(0, 3).map((trait, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-gray-800 text-gray-50 hover:bg-gray-700"
                >
                  {trait}
                </Badge>
              ))}
              {pet.personality.length > 3 && (
                <Badge variant="secondary" className="bg-gray-800 text-gray-50">
                  +{pet.personality.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-8">
          <motion.button 
            onClick={handleDislike}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-gray-900 shadow-lg flex items-center justify-center border-2 border-red-500 text-red-500 hover:bg-red-600 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </motion.button>
          <motion.button 
            onClick={handleInfoClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-gray-900 shadow-lg flex items-center justify-center border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white transition-colors"
          >
            <Info className="w-8 h-8" />
          </motion.button>
          <motion.button 
            onClick={handleLike}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-gray-900 shadow-lg flex items-center justify-center border-2 border-green-500 text-green-500 hover:bg-green-600 hover:text-white transition-colors"
          >
            <Heart className="w-8 h-8" />
          </motion.button>
        </div>

        {/* Size and Energy Level Indicators */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Badge variant="secondary" className="bg-gray-900/90 text-gray-50">
            {pet.size}
          </Badge>
          <Badge variant="secondary" className="bg-gray-900/90 text-gray-50">
            {pet.energyLevel} Energy
          </Badge>
        </div>
      </motion.div>

      {/* Pet Modal */}
      {showModal && (
        <PetModal
          pet={pet}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default PetCard; 