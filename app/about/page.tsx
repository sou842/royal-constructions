'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimatedButton } from '@/components/animated-button'
import { CtaSection } from '@/components/cta-section'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-background border-b border-border py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">
                About Royal
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We&apos;re a team of architects, engineers, and craftspeople united by a single vision: to build spaces that endure and inspire.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-background border-b border-border py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-light tracking-tight mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Founded in 1999, Royal Constructions began as a small team with a big ambition: to redefine quality in construction. Over 25 years, we&apos;ve grown to become one of the region&apos;s most trusted builders.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our philosophy remains unchanged: meticulous attention to detail, uncompromising standards, and genuine partnerships with our clients. Every project reflects our commitment to excellence.
                </p>
              </div>
              <div className="aspect-square relative rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2942&q=80"
                  alt="Construction project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="bg-background border-b border-border py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-light tracking-tight mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional construction services that transform visions into reality, creating spaces that enhance lives and stand the test of time.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light tracking-tight mb-4">Our Values</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex gap-3">
                    <span className="font-medium text-foreground">Integrity</span>
                    <span>Building trust through transparency and honesty</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-medium text-foreground">Excellence</span>
                    <span>Pursuing perfection in every detail</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-medium text-foreground">Innovation</span>
                    <span>Embracing new methods and technologies</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-medium text-foreground">Responsibility</span>
                    <span>Building sustainably for future generations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-background border-b border-border py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light tracking-tight mb-16">Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: 'James Mitchell', role: 'Founder & CEO', bio: '25+ years in construction management', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop' },
                { name: 'Sarah Chen', role: 'Chief Architect', bio: 'Award-winning design and innovation', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop' },
                { name: 'Michael Torres', role: 'Operations Director', bio: 'Expert in project delivery and quality', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop' }
              ].map((member, idx) => (
                <div key={idx} className="border-b border-border pb-8 group cursor-default">
                  <div className="aspect-square relative rounded-sm mb-6 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-light tracking-wide mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-background border-b border-border py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <div className="text-5xl font-light mb-3">500+</div>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div>
                <div className="text-5xl font-light mb-3">150+</div>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div>
                <div className="text-5xl font-light mb-3">$2B+</div>
                <p className="text-sm text-muted-foreground">Construction Value</p>
              </div>
              <div>
                <div className="text-5xl font-light mb-3">25</div>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Let's Work Together" 
          description="Have a project in mind? Our team is ready to discuss how we can bring your vision to life." 
          buttonText="GET IN TOUCH" 
        />
      </main>
      <Footer />
    </>
  )
}
