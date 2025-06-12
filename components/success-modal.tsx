"use client"

import { CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative animate-in fade-in-0 zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Thank you for your interest in WhiteMartech Solutions. We've received your query and our team will get back
            to you within 24 hours.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700">
              <strong>Next Steps:</strong> Our integration specialists will review your requirements and contact you
              with a customized solution proposal.
            </p>
          </div>

          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Continue Exploring
          </Button>
        </div>
      </div>
    </div>
  )
}
