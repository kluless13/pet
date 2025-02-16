"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function AdoptionApplication({ petId }: { petId: string }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    experience: "",
    homeType: "",
    familySize: "",
    otherPets: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
        <p className="mb-6">Thank you for your adoption application. We will review your information and get in touch with you soon.</p>
        <Link href="/adopter" passHref>
          <Button className="bg-blue-600 hover:bg-blue-700">Return to Home</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Adoption Application</h1>
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-1/3 h-2 rounded-full ${step >= i ? "bg-blue-600" : "bg-gray-600"}`}></div>
              ))}
            </div>
            <p className="text-center">Step {step} of 3</p>
          </div>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mb-4 bg-gray-700"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mb-4 bg-gray-700"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mb-4 bg-gray-700"
                />
              </>
            )}
            {step === 2 && (
              <>
                <Input
                  type="text"
                  name="address"
                  placeholder="Home Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mb-4 bg-gray-700"
                />
                <Input
                  type="text"
                  name="homeType"
                  placeholder="Type of Home"
                  value={formData.homeType}
                  onChange={handleChange}
                  className="mb-4 bg-gray-700"
                />
                <Input
                  type="number"
                  name="familySize"
                  placeholder="Family Size"
                  value={formData.familySize}
                  onChange={handleChange}
                  className="mb-4 bg-gray-700"
                />
              </>
            )}
            {step === 3 && (
              <>
                <Textarea
                  name="experience"
                  placeholder="Previous Pet Experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="mb-4 bg-gray-700"
                />
                <Textarea
                  name="otherPets"
                  placeholder="Other Pets in the Household"
                  value={formData.otherPets}
                  onChange={handleChange}
                  className="mb-4 bg-gray-700"
                />
              </>
            )}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <Button type="button" onClick={() => setStep(step - 1)} variant="outline">
                  Previous
                </Button>
              )}
              {step < 3 ? (
                <Button type="button" onClick={() => setStep(step + 1)} className="bg-blue-600 hover:bg-blue-700">
                  Next
                </Button>
              ) : (
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Submit Application
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

