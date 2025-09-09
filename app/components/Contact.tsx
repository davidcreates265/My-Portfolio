"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { Mail, Send, User, MessageSquare } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"
import { FORMSPREE_FORM_ID } from '@/config/formspree';

interface FormData {
  name: string
  email: string
  message: string
}

type ContactFormProps = {
  formData: FormData
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  clearForm: () => void
}

function ContactForm({ formData, handleChange, clearForm }: ContactFormProps) {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID)
  const [showNotification, setShowNotification] = useState(false)

  // Handle successful submission with useEffect
  useEffect(() => {
    if (state.succeeded) {
      setShowNotification(true)
      clearForm()
      const timer = setTimeout(() => setShowNotification(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [state.succeeded, clearForm])

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        {showNotification && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-center">
            <p className="text-green-400 font-semibold">Message sent successfully! I will get back to you soon.</p>
          </div>
        )}

        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                <User size={16} className="inline mr-2" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all"
                placeholder="Your full name"
              />
            </div>

            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                <Mail size={16} className="inline mr-2" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all"
                placeholder="your.email@example.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                <MessageSquare size={16} className="inline mr-2" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all resize-none"
                placeholder="Tell me about your project or just say hello..."
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full flex justify-center items-center py-4 px-6 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 rounded-lg shadow-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send size={20} className="mr-2" />
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Or reach out directly:</p>
          <a
            href="mailto:davidcreatesmw@gmail.com"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition-colors"
          >
            <Mail size={20} className="mr-2" />
            davidcreatesmw@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }, [])

  const clearForm = useCallback(() => {
    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }, [])

  return <ContactForm formData={formData} handleChange={handleChange} clearForm={clearForm} />
}

export default Contact
