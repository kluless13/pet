'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold">My Applications</h1>
      <p>No applications submitted yet.</p>
      <Link href="/adopter" passHref>
        <Button className="bg-blue-600 hover:bg-blue-700">Return to Home</Button>
      </Link>
    </div>
  );
} 