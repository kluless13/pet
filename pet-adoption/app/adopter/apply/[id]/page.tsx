import AdoptionApplication from "@/components/adopter/AdoptionApplication"

export default function ApplicationPage({ params }: { params: { id: string } }) {
  return <AdoptionApplication petId={params.id} />
}

