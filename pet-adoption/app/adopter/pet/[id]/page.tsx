import PetProfile from "@/components/adopter/PetProfile"

export default function PetProfilePage({ params }: { params: { id: string } }) {
  return <PetProfile petId={params.id} />
}

