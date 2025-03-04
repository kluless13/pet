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
  },
  {
    id: "13",
    name: "Luna",
    breed: "French Bulldog",
    age: "1 year",
    gender: "Female",
    location: "Austin, TX",
    description: "Luna is a sweet and affectionate Frenchie who loves cuddles and short walks. Perfect for apartment living!",
    healthInfo: "All vaccinations complete, spayed",
    personality: ["Affectionate", "Calm", "Good with children"],
    images: ['https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1024'],
    size: 'Small',
    energyLevel: 'Low',
  },
  {
    id: "14",
    name: "Shadow",
    breed: "Border Collie",
    age: "3 years",
    gender: "Male",
    location: "Portland, OR",
    description: "Shadow is an incredibly intelligent and agile Border Collie. He excels at agility training and needs an active family.",
    healthInfo: "Fully vaccinated, excellent health",
    personality: ["Intelligent", "Athletic", "Trainable"],
    images: ['https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1024'],
    size: 'Medium',
    energyLevel: 'High',
  },
  {
    id: "15",
    name: "Bella",
    breed: "Bernese Mountain Dog",
    age: "2 years",
    gender: "Female",
    location: "Denver, CO",
    description: "Bella is a gentle giant who loves snow and outdoor adventures. She's great with families and other pets.",
    healthInfo: "Regular check-ups, all vaccinations current",
    personality: ["Gentle", "Patient", "Loving"],
    images: ['https://images.unsplash.com/photo-1612940960267-4549a58fb257?q=80&w=1024'],
    size: 'Large',
    energyLevel: 'Medium',
  }
]; 