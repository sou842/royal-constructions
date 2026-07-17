'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimatedButton } from '@/components/animated-button'
import { CtaSection } from '@/components/cta-section'
import { useState } from 'react'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    { name: 'Modern Office Complex', category: 'commercial', location: 'Downtown', year: 2023, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2600' },
    { name: 'Luxury Residential Tower', category: 'residential', location: 'Waterfront', year: 2023, image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2600' },
    { name: 'Shopping Mall Renovation', category: 'commercial', location: 'Central District', year: 2022, image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80&w=2600' },
    { name: 'Family Home Development', category: 'residential', location: 'Suburbs', year: 2022, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2600' },
    { name: 'Industrial Warehouse', category: 'industrial', location: 'Port Area', year: 2023, image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2600' },
    { name: 'Heritage Building Restoration', category: 'restoration', location: 'Historic District', year: 2021, image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80&w=2600' },
    { name: 'Tech Campus Expansion', category: 'commercial', location: 'Innovation Hub', year: 2023, image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=2600' },
    { name: 'Sustainable Housing Project', category: 'residential', location: 'Green Zone', year: 2022, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2600' }
  ]

  const categories = ['all', 'residential', 'commercial', 'industrial', 'restoration']

  const filtered = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-background border-b border-border py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">
                Our Projects
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore our portfolio of exceptional construction projects spanning residential, commercial, and specialized sectors.
              </p>
            </div>
          </div>
        </section>

        {/* Filter */}
        <section className="bg-background border-b border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 text-xs tracking-widest transition capitalize rounded-full cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-primary text-white'
                      : 'bg-background border border-border text-foreground hover:bg-foreground/5'
                  }`}
                >
                  {cat === 'all' ? 'ALL PROJECTS' : cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="bg-background border-b border-border py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project, idx) => (
                <div key={idx} className="group cursor-default">
                  <div className="relative aspect-square rounded-sm overflow-hidden mb-6">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-light tracking-wide">{project.name}</h3>
                    <div className="flex justify-between items-baseline text-xs text-muted-foreground">
                      <span className="capitalize">{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-background border-b border-border py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <div className="text-5xl font-light mb-3">500+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <div className="text-5xl font-light mb-3">$2B+</div>
                <p className="text-sm text-muted-foreground">Total Value</p>
              </div>
              <div>
                <div className="text-5xl font-light mb-3">99%</div>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-5xl font-light mb-3">0</div>
                <p className="text-sm text-muted-foreground">Safety Incidents</p>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Start Your Project" 
          description="Have a project in mind? Let's discuss how we can bring your vision to life." 
          buttonText="GET IN TOUCH" 
        />
      </main>
      <Footer />
    </>
  )
}
