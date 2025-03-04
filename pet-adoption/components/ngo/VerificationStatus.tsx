"use client"

import { AlertCircle, CheckCircle2, Clock, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VerificationStatusProps {
  status: 'pending' | 'verified' | 'rejected';
  rejectionReason?: string;
  submittedAt: Date;
}

export default function VerificationStatus({ status, rejectionReason, submittedAt }: VerificationStatusProps) {
  const statusConfig = {
    pending: {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Verification in Progress",
      description: "Your application is being reviewed by our team. This typically takes 2-3 business days.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    verified: {
      icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
      title: "Verification Complete",
      description: "Your NGO has been verified. You can now start listing pets for adoption.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    rejected: {
      icon: <XCircle className="w-8 h-8 text-red-500" />,
      title: "Verification Rejected",
      description: rejectionReason || "Your verification was not approved. Please check your email for details.",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
  };

  const config = statusConfig[status];
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(submittedAt);

  return (
    <div className="bg-gray-900 rounded-lg p-6 max-w-2xl mx-auto">
      <div className={`${config.bgColor} rounded-lg p-6 flex items-start space-x-4`}>
        {config.icon}
        <div>
          <h3 className={`text-lg font-semibold ${config.color}`}>{config.title}</h3>
          <p className="text-gray-300 mt-1">{config.description}</p>
          <p className="text-gray-400 text-sm mt-2">Submitted: {formattedDate}</p>
        </div>
      </div>

      {status === 'rejected' && (
        <div className="mt-6 flex flex-col items-center">
          <div className="bg-gray-800 p-4 rounded-lg w-full mb-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-300 font-medium">Reason for Rejection</p>
                <p className="text-sm text-gray-400 mt-1">{rejectionReason}</p>
              </div>
            </div>
          </div>
          <Button
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={() => window.location.href = '/ngo/register'}
          >
            Submit New Application
          </Button>
        </div>
      )}

      {status === 'verified' && (
        <div className="mt-6 flex justify-center">
          <Button
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => window.location.href = '/ngo/dashboard'}
          >
            Go to NGO Dashboard
          </Button>
        </div>
      )}

      {status === 'pending' && (
        <div className="mt-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-gray-300 font-medium mb-2">What happens next?</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Our team will review your submitted documents</li>
              <li>• We may contact you for additional information</li>
              <li>• You&apos;ll receive an email notification about the decision</li>
              <li>• Typical verification time is 2-3 business days</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
} 