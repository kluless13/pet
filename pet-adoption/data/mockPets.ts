export interface Pet {
  id: string;
  name: string;
  breed: string;
  age: string;
  gender: string;
  location: string;
  description: string;
  healthInfo: string;
  personality: string[];
  images: string[];
  size: 'Small' | 'Medium' | 'Large';
  energyLevel: 'Low' | 'Medium' | 'High';
}

export const mockPets: Pet[] = [
  {
    id: "1",
    name: "Buddy",
    breed: "Golden Retriever",
    age: "2 years",
    gender: "Male",
    location: "New York, NY",
    description: "Buddy is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks. He's great with kids and other dogs.",
    healthInfo: "Up to date on vaccinations, neutered",
    personality: ["Friendly", "Energetic", "Good with kids", "Good with other dogs"],
    images: ['https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1024'],
    size: 'Large',
    energyLevel: 'High',
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
    personality: ["Alert", "Protective", "Intelligent"],
    images: ['https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=1024'],
    size: 'Large',
    energyLevel: 'High',
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
    personality: ["Mischievous", "Smart", "Independent"],
    images: ['https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1024'],
    size: 'Medium',
    energyLevel: 'High',
  }
]; 