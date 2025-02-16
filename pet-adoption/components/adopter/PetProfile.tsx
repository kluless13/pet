"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle } from "lucide-react"
import Link from "next/link"

// Updated dummy pet data with 12 entries
const dummyPets = [
  {
    id: "1",
    name: "Buddy",
    breed: "Golden Retriever",
    age: "2 years",
    gender: "Male",
    location: "New York, NY",
    description: "Buddy is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks. He's great with kids and other dogs.",
    healthInfo: "Up to date on vaccinations, neutered",
    personality: ["Friendly", "Energetic", "Good with kids", "Good with other dogs"]
  },
  {
    id: "2",
    name: "Max",
    breed: "Labrador Retriever",
    age: "3 years",
    gender: "Male",
    location: "Los Angeles, CA",
    description: "Max is very loyal and loves to play fetch. He is a great family dog.",
    healthInfo: "Vaccinated, neutered",
    personality: ["Loyal", "Friendly", "Energetic"]
  },
  {
    id: "3",
    name: "Charlie",
    breed: "Beagle",
    age: "1.5 years",
    gender: "Male",
    location: "Chicago, IL",
    description: "Charlie is curious and loving, always eager to explore new smells.",
    healthInfo: "Vaccinated",
    personality: ["Curious", "Playful"]
  },
  {
    id: "4",
    name: "Cooper",
    breed: "Bulldog",
    age: "4 years",
    gender: "Male",
    location: "Houston, TX",
    description: "Cooper is calm and affectionate with a laid-back personality.",
    healthInfo: "Vaccinated",
    personality: ["Calm", "Gentle"]
  },
  {
    id: "5",
    name: "Rocky",
    breed: "German Shepherd",
    age: "2.5 years",
    gender: "Male",
    location: "Philadelphia, PA",
    description: "Rocky is alert and protective, making him an excellent companion.",
    healthInfo: "Up to date on vaccinations",
    personality: ["Alert", "Protective"]
  },
  {
    id: "6",
    name: "Duke",
    breed: "Poodle",
    age: "3 years",
    gender: "Male",
    location: "San Diego, CA",
    description: "Duke is smart and elegant, with a playful demeanor.",
    healthInfo: "Vaccinated",
    personality: ["Smart", "Elegant"]
  },
  {
    id: "7",
    name: "Bear",
    breed: "Rottweiler",
    age: "4 years",
    gender: "Male",
    location: "Dallas, TX",
    description: "Bear is strong and devoted, a reliable companion.",
    healthInfo: "Neutered",
    personality: ["Strong", "Devoted"]
  },
  {
    id: "8",
    name: "Toby",
    breed: "Boxer",
    age: "2 years",
    gender: "Male",
    location: "Miami, FL",
    description: "Toby is energetic and fun-loving, always ready for a game.",
    healthInfo: "Vaccinated",
    personality: ["Energetic", "Fun-loving"]
  },
  {
    id: "9",
    name: "Jack",
    breed: "Dachshund",
    age: "1 year",
    gender: "Male",
    location: "Seattle, WA",
    description: "Jack is small but full of spirit, perfect for a busy family.",
    healthInfo: "Vaccinated",
    personality: ["Spirited", "Courageous"]
  },
  {
    id: "10",
    name: "Oliver",
    breed: "Siberian Husky",
    age: "3 years",
    gender: "Male",
    location: "Denver, CO",
    description: "Oliver is adventurous and free, with a strong independent streak.",
    healthInfo: "Vaccinated",
    personality: ["Adventurous", "Independent"]
  },
  {
    id: "11",
    name: "Zeus",
    breed: "Doberman",
    age: "2.5 years",
    gender: "Male",
    location: "Boston, MA",
    description: "Zeus is bold and fearless, with a commanding presence.",
    healthInfo: "Up to date on vaccinations",
    personality: ["Bold", "Fearless"]
  },
  {
    id: "12",
    name: "Loki",
    breed: "Shiba Inu",
    age: "1.5 years",
    gender: "Male",
    location: "San Francisco, CA",
    description: "Loki is mischievous and smart, bringing a spark to any household.",
    healthInfo: "Vaccinated",
    personality: ["Mischievous", "Smart"]
  }
]

export default function PetProfile({ petId }: { petId: string }) {
  const [pet, setPet] = useState<any>(null)
  const [isFavorited, setIsFavorited] = useState(false)

  useEffect(() => {
    const foundPet = dummyPets.find(p => p.id === petId)
    setPet(foundPet || dummyPets[0])
  }, [petId])

  if (!pet) return <div>Loading...</div>

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img src="/Dog_Emoji_large.webp" alt={pet.name} className="w-full h-64 object-cover" />
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold">{pet.name}</h1>
                <p className="text-gray-400">
                  {pet.breed} • {pet.age} • {pet.gender}
                </p>
                <p className="text-gray-400">{pet.location}</p>
              </div>
              <Button
                variant="outline"
                className={`${isFavorited ? "text-red-600" : "text-red-400"} hover:text-red-300`}
                onClick={() => setIsFavorited(!isFavorited)}
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>
            <p className="mt-4">{pet.description}</p>
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Health Information</h2>
              <p>{pet.healthInfo}</p>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Personality</h2>
              <div className="flex flex-wrap gap-2">
                {pet.personality.map((trait: string, index: number) => (
                  <span key={index} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-between">
          <Link href={`/adopter/apply/${pet.id}`} passHref>
            <Button className="bg-blue-600 hover:bg-blue-700">Apply for Adoption</Button>
          </Link>
          <Button variant="outline" className="bg-gray-800">
            <MessageCircle className="h-5 w-5 mr-2" />
            Message NGO
          </Button>
        </div>
      </div>
    </div>
  )
}

