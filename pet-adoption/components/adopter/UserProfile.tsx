"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { PawPrint } from "lucide-react"

export default function UserProfile() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "(123) 456-7890",
    location: "New York, NY",
    preferences: "Small dogs, low-shedding",
    notifications: true,
  })
  const [updated, setUpdated] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleToggle = () => {
    setProfile({ ...profile, notifications: !profile.notifications })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Profile updated:", profile)
    setUpdated(true)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4 flex items-center">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <PawPrint className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-xl font-bold text-blue-800 dark:text-blue-300">Pets</span>
          </div>
        </Link>
      </header>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">User Profile</h1>
        {updated && <p className="text-green-400 mb-4">Profile updated successfully!</p>}
        <div className="bg-gray-800 rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              value={profile.name}
              onChange={handleChange}
              className="mb-4 bg-gray-700"
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={profile.email}
              onChange={handleChange}
              className="mb-4 bg-gray-700"
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={profile.phone}
              onChange={handleChange}
              className="mb-4 bg-gray-700"
            />
            <Input
              type="text"
              name="location"
              placeholder="Location"
              value={profile.location}
              onChange={handleChange}
              className="mb-4 bg-gray-700"
            />
            <Textarea
              name="preferences"
              placeholder="Adoption Preferences"
              value={profile.preferences}
              onChange={handleChange}
              className="mb-4 bg-gray-700"
            />
            <div className="flex items-center justify-between mb-4">
              <span>Receive Notifications</span>
              <Switch checked={profile.notifications} onCheckedChange={handleToggle} />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Update Profile
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

