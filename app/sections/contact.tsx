"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl lg:text-5xl text-slate-900">Get in Touch</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Have questions about our services or products? We&apos;d love to hear from you. Reach out anytime.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="text-green-700" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Phone</h3>
                  <p className="text-slate-600">+234 (803) 525-6322</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="text-green-700" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600">hello@aregreats.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="text-green-700" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Location</h3>
                  <p className="text-slate-600">Rural Agricultural District</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-amber-50 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-green-600 transition-colors bg-white text-slate-900"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-green-600 transition-colors bg-white text-slate-900"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-green-600 transition-colors bg-white text-slate-900"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">Service Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-green-600 transition-colors bg-white text-slate-900"
                >
                  <option value="">Select a service</option>
                  <option value="general-farming">General Farming</option>
                  <option value="agroprocessing">Agroprocessing</option>
                  <option value="equipment">Equipment & Inputs</option>
                  <option value="consulting">Consulting & Training</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-green-600 transition-colors resize-none bg-white text-slate-900"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-700 text-white font-medium rounded-lg hover:bg-green-800 transition-colors duration-300"
              >
                Send Inquiry
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">Thank you! We&apos;ll be in touch soon.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
