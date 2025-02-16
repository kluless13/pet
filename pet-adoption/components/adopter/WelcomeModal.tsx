"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function WelcomeModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 text-white">
        <DialogHeader>
          <DialogTitle>Welcome, Future Pet Parent!</DialogTitle>
          <DialogDescription>
            We're excited to help you find your perfect pet match. Our app connects you with loving animals from trusted
            rescue organizations. Start your journey to pet parenthood today!
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onClose} className="bg-blue-600 hover:bg-blue-700">
            Let's Get Started
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

