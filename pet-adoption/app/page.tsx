"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Shield, PawPrint } from "lucide-react"
import { useState, useEffect } from 'react';
import LoginModal from '../components/auth/LoginModal';
import SignupModal from '../components/auth/SignupModal';
import ParticleBackground from "@/components/ParticleBackground";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function LandingPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="relative flex flex-col min-h-screen bg-blue-50 text-gray-800">
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer">
              <PawPrint className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-blue-800">Pets</span>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <button onClick={toggleMenu} className="text-blue-600 hover:text-blue-800 transition-colors">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button onClick={() => setIsLoginOpen(true)} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              Log In
            </button>
            <button onClick={() => setIsSignupOpen(true)} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
              Sign Up
            </button>
          </div>
          {showMenu && (
            <div className="absolute right-4 top-full mt-2 bg-white rounded shadow-lg">
              <ul className="py-2">
                <li><Link href="/" className="block px-4 py-2 text-sm hover:bg-gray-200">Home</Link></li>
                <li><Link href="/adopter" className="block px-4 py-2 text-sm hover:bg-gray-200">Adopter</Link></li>
                <li><Link href="/ngo" className="block px-4 py-2 text-sm hover:bg-gray-200">NGO</Link></li>
                <li><Link href="/adopter/profile" className="block px-4 py-2 text-sm hover:bg-gray-200">Profile</Link></li>
                <li><Link href="/contact" className="block px-4 py-2 text-sm hover:bg-gray-200">Contact Us</Link></li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <main className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="absolute inset-0 z-10">
          <ParticleBackground />
        </div>
        <div className="relative z-20">
          <div className="flex flex-col md:flex-row w-full max-w-6xl p-8">
            {/* Left Half: Updated App text with stats and mission statements */}
            <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left text-white space-y-6 p-8">
              <div className="text-2xl text-teal-300">30M+ stray dogs in India</div>
              <h1 className="text-5xl">Pets</h1>
              <p className="text-lg text-white animate-fade">
                Did you know that millions of stray animals in India need loving homes every year? By adopting, you directly help reduce the stray population and free up resources for other rescues. Together, we can create a more compassionate community—one adoption at a time.
              </p>
              <AutoScrollingFeatures />
            </div>

            {/* Right Half: Updated CTA sections with descriptions */}
            <div className="md:w-1/2 flex flex-col justify-center space-y-8 p-4">
              <div className="w-full">
                <p className="text-lg text-gray-300 text-center md:text-left">
                  Looking for your perfect pet? Explore verified rescue listings, find in-depth profiles, and discover a new best friend that matches your lifestyle.
                </p>
                <div className="mt-2 flex justify-center md:justify-start">
                  <Link href="/adopter">
                    <Button className="bg-teal-700 text-white hover:bg-teal-800 transition-colors text-xl">
                      I'm an Adopter
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="w-full">
                <p className="text-lg text-gray-300 text-center md:text-left">
                  Are you an NGO or rescue organization? Streamline your adoption process, list your animals with detailed profiles, and connect with verified adopters—effortlessly.
                </p>
                <div className="mt-2 flex justify-center md:justify-start">
                  <Link href="/ngo">
                    <Button className="bg-orange-700 text-white hover:bg-orange-800 transition-colors text-xl">
                      I'm an NGO
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-blue-100 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-blue-600">
          <p>&copy; 2025 Pet Adoption App. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="#" className="hover:text-blue-800 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-blue-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-800 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </div>
  )
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function AutoScrollingFeatures() {
  const features = [
    { icon: <Shield className="h-6 w-6 text-teal-300" />, title: "Verified NGO Profiles", description: "Ensure you're working with trusted organizations" },
    { icon: <PawPrint className="h-6 w-6 text-teal-300" />, title: "Detailed Pet Profiles", description: "See each pet's unique story and personality" },
    { icon: <MessageCircle className="h-6 w-6 text-teal-300" />, title: "Secure In-App Messaging", description: "Communicate safely with rescue organizations" }
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-24 overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center space-x-2 text-lg animate-slideUp">
        {features[index].icon}
        <span>{features[index].title}: {features[index].description}</span>
      </div>
    </div>
  );
}

<style jsx>{`
  @keyframes fadeInOut {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
  .animate-fade {
    animation: fadeInOut 4s linear infinite;
  }

  @keyframes slideUp {
    0% { transform: translateY(100%); opacity: 0; }
    25% { transform: translateY(0); opacity: 1; }
    75% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100%); opacity: 0; }
  }
  .animate-slideUp {
    animation: slideUp 5s ease-in-out infinite;
  }
`}</style>

