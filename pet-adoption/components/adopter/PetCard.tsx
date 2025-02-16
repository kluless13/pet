import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Pet {
  id: string;
  name: string;
  breed: string;
  age: string;
  distance: string;
  tagline: string;
  image: string;
}

interface PetCardProps {
  pet: Pet;
}

export default function PetCard({ pet }: PetCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{pet.name}</h3>
            <p className="text-sm text-gray-400">{pet.breed}</p>
          </div>
          <Button variant="ghost" className="text-red-400 hover:text-red-300">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          {pet.age} • {pet.distance}
        </p>
        <p className="text-sm mt-2">{pet.tagline}</p>
        <Link href={`/adopter/pet/${pet.id}`} passHref>
          <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">View Details</Button>
        </Link>
      </div>
    </div>
  )
}

