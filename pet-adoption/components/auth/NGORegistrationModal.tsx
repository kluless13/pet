"use client"

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from "lucide-react";

interface NGORegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NGORegistrationModal({ isOpen, onClose }: NGORegistrationModalProps) {
  const [formData, setFormData] = React.useState({
    ngoName: "",
    registrationNumber: "", // Government registration number
    email: "",
    phone: "",
    address: "",
    website: "",
    description: "",
    founderName: "",
    yearEstablished: "",
    documents: null as File | null, // For registration certificate upload
  });

  const [step, setStep] = React.useState(1);
  const totalSteps = 3;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, documents: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement registration with Firebase
    console.log("NGO Registration submitted:", formData);
    // After successful submission, the NGO status will be set to "pending" in the database
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">NGO Registration</DialogTitle>
          <DialogDescription className="text-gray-400">
            Please provide your NGO details for verification. All fields are required for the verification process.
          </DialogDescription>
        </DialogHeader>

        {/* Progress Indicator */}
        <div className="w-full h-2 bg-gray-700 rounded-full mb-6">
          <div
            className="h-full bg-orange-600 rounded-full transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">NGO Name</label>
                <Input
                  name="ngoName"
                  value={formData.ngoName}
                  onChange={handleChange}
                  placeholder="Official registered name of your NGO"
                  className="bg-gray-800 border-gray-700"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">Registration Number</label>
                <Input
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  placeholder="Government-issued NGO registration number"
                  className="bg-gray-800 border-gray-700"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">Year Established</label>
                <Input
                  name="yearEstablished"
                  type="number"
                  min="1900"
                  max={new Date().getFullYear()}
                  value={formData.yearEstablished}
                  onChange={handleChange}
                  placeholder="Year your NGO was established"
                  className="bg-gray-800 border-gray-700"
                  required
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">Contact Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Official email address"
                  className="bg-gray-800 border-gray-700"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">Phone Number</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Official contact number"
                  className="bg-gray-800 border-gray-700"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">Address</label>
                <Textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Complete registered address"
                  className="bg-gray-800 border-gray-700"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">Website (Optional)</label>
                <Input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://your-ngo-website.com"
                  className="bg-gray-800 border-gray-700"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">NGO Description</label>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your NGO's mission, activities, and impact"
                  className="bg-gray-800 border-gray-700"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">Founder's Name</label>
                <Input
                  name="founderName"
                  value={formData.founderName}
                  onChange={handleChange}
                  placeholder="Name of the NGO founder"
                  className="bg-gray-800 border-gray-700"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">Registration Certificate</label>
                <Input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="bg-gray-800 border-gray-700"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Upload registration certificate (PDF, JPG, PNG)</p>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p className="font-medium mb-1">Verification Process</p>
                  <p>After submission, your application will be reviewed by our team. This typically takes 2-3 business days.
                     You'll receive updates via email about your verification status.</p>
                </div>
              </div>
            </div>
          )}

          <DialogFooter className="flex justify-between mt-6">
            <div className="flex gap-2">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  className="bg-transparent border-gray-600 text-white hover:bg-gray-800"
                >
                  Previous
                </Button>
              )}
              {step < totalSteps ? (
                <Button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  Submit for Verification
                </Button>
              )}
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
} 