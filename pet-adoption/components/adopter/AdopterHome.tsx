"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PawPrint, Search, Sliders, User } from "lucide-react"
import PetCard from "./PetCard"
import WelcomeModal from "./WelcomeModal"
import Link from "next/link"

export default function AdopterHome() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  const [pets, setPets] = useState([
    {
      id: "1",
      name: "Buddy",
      breed: "Golden Retriever",
      age: "2 years",
      distance: "5 miles",
      tagline: "Playful and energetic!",
      image: "/Dog_Emoji_large.webp"
    },
    {
      id: "2",
      name: "Max",
      breed: "Labrador Retriever",
      age: "3 years",
      distance: "4 miles",
      tagline: "Friendly and loyal!",
      image: "/Dog_Emoji_large.webp"
    },
    {
      id: "3",
      name: "Charlie",
      breed: "Beagle",
      age: "1.5 years",
      distance: "3 miles",
      tagline: "Curious and loving!",
      image: "/Dog_Emoji_large.webp"
    },
    {
      id: "4",
      name: "Cooper",
      breed: "Bulldog",
      age: "4 years",
      distance: "6 miles",
      tagline: "Calm and affectionate!",
      image: "/Dog_Emoji_large.webp"
    },
    {
      id: "5",
      name: "Rocky",
      breed: "German Shepherd",
      age: "2.5 years",
      distance: "7 miles",
      tagline: "Alert and protective!",
      image: "/Dog_Emoji_large.webp"
    },
    {
      id: "6",
      name: "Duke",
      breed: "Poodle",
      age: "3 years",
      distance: "5 miles",
      tagline: "Smart and elegant!",
      image: "/Dog_Emoji_large.webp"
    },
    {
      id: "7",
      name: "Bear",
      breed: "Rottweiler",
      age: "4 years",
      distance: "8 miles",
      tagline: "Strong and devoted!",
      image: "/Dog_Emoji_large.webp"
    },
    {
      id: "8",
      name: "Toby",
      breed: "Boxer",
      age: "2 years",
      distance: "3 miles",
      tagline: "Energetic and fun-loving!",
      image: "/Dog_Emoji_large.webp"
    },
    {
      id: "9",
      name: "Jack",
      breed: "Dachshund",
      age: "1 year",
      distance: "2 miles",
      tagline: "Small but full of spirit!",
      image: "/Dog_Emoji_large.webp"
    },
    {
      id: "10",
      name: "Oliver",
      breed: "Siberian Husky",
      age: "3 years",
      distance: "6 miles",
      tagline: "Adventurous and free!",
      image: "/Dog_Emoji_large.webp"
    },
    {
      id: "11",
      name: "Zeus",
      breed: "Doberman",
      age: "2.5 years",
      distance: "5 miles",
      tagline: "Bold and fearless!",
      image: "/Dog_Emoji_large.webp"
    },
    {
      id: "12",
      name: "Loki",
      breed: "Shiba Inu",
      age: "1.5 years",
      distance: "4 miles",
      tagline: "Mischievous and smart!",
      image: "/Dog_Emoji_large.webp"
    }
  ])

  const filteredPets = pets.filter(pet => pet.name.toLowerCase().includes(searchQuery.toLowerCase()))

  useEffect(() => {
    if (localStorage.getItem("welcomeClosed") === "true") {
      setShowWelcome(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <WelcomeModal isOpen={showWelcome} onClose={() => { setShowWelcome(false); localStorage.setItem("welcomeClosed", "true"); }} />

      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <PawPrint className="h-8 w-8 text-blue-400 mr-2" />
          <span className="text-xl font-bold">Pets</span>
        </div>
        <Link href="/adopter/profile" passHref>
          <Button variant="ghost" className="rounded-full">
            <User className="h-6 w-6" />
          </Button>
        </Link>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex mb-6">
          <Input
            type="search"
            placeholder="Search pets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow mr-2 bg-gray-800 text-white"
          />
          <Button variant="outline" className="bg-gray-800">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button variant="outline" className="ml-2 bg-gray-800">
            <Sliders className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </main>
    </div>
  )
}

