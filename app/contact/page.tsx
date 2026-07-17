'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useState, FormEvent, ChangeEvent } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimatedButton } from '@/components/animated-button'
import { CtaSection } from '@/components/cta-section'

interface FormData {
  name: string
  email: string
  phone: string
  projectType: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: 'residential',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', projectType: 'residential', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-background py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have a project in mind? We&apos;d love to discuss how we can help bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-background border-b border-border py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-light tracking-tight mb-2">Send us a Message</h2>
              <p className="text-muted-foreground text-sm">We&apos;ll respond within 24 hours.</p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-primary/10 border border-primary rounded-sm text-foreground text-sm">
                Thank you! We&apos;ve received your message and will be in touch shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs tracking-widest font-medium text-foreground mb-3">NAME *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-1 focus:ring-foreground text-sm"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs tracking-widest font-medium text-foreground mb-3">EMAIL *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-1 focus:ring-foreground text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs tracking-widest font-medium text-foreground mb-3">PHONE</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-1 focus:ring-foreground text-sm"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-xs tracking-widest font-medium text-foreground mb-3">PROJECT TYPE *</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-1 focus:ring-foreground text-sm"
                >
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                  <option value="renovation">Renovation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs tracking-widest font-medium text-foreground mb-3">PROJECT DETAILS *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-1 focus:ring-foreground text-sm resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <AnimatedButton
                type="submit"
                className="w-full"
                showArrow
              >
                SEND MESSAGE
              </AnimatedButton>
            </form>
          </div>
        </section>

                {/* Contact Info */}
        <section className="bg-background border-b border-border py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div className="flex gap-4">
                <Phone size={24} className="text-foreground flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-light tracking-wide mb-2">Phone</h3>
                  <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail size={24} className="text-foreground flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-light tracking-wide mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm">hello@royal-constructions.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin size={24} className="text-foreground flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-light tracking-wide mb-2">Address</h3>
                  <p className="text-muted-foreground text-sm">123 Construction Ave<br />City, State 12345</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Let's Build" 
          description="Ready to start your project? Reach out to our team for a free consultation and personalized quote." 
        />
      </main>
      <Footer />
    </>
  )
}
