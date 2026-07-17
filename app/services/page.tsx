'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnimatedButton } from '@/components/animated-button'
import { CtaSection } from '@/components/cta-section'
import { Home, Building2, Hammer, Zap, Palette, Drill } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes, townhouses, and multi-family residential complexes built to perfection.',
      features: ['Custom Home Building', 'Townhouse Development', 'Apartment Complexes', 'Home Extensions'],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2600'
    },
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'Large-scale commercial projects including offices, retail, and industrial facilities.',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Data Centers'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2600'
    },
    {
      icon: Hammer,
      title: 'Renovation & Restoration',
      description: 'Transform existing structures with our expert renovation and restoration services.',
      features: ['Interior Remodeling', 'Historic Restoration', 'Facility Upgrades', 'Code Compliance'],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2600&q=80'
    },
    {
      icon: Palette,
      title: 'Interior Design & Finishing',
      description: 'Professional interior design and premium finishing touches for your space.',
      features: ['Space Planning', 'Material Selection', 'Lighting Design', 'Finishing Details'],
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2600&q=80'
    },
    {
      icon: Zap,
      title: 'MEP Installation',
      description: 'Complete mechanical, electrical, and plumbing system installation and integration.',
      features: ['Electrical Systems', 'HVAC Installation', 'Plumbing Systems', 'Automation'],
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=2600&q=80'
    },
    {
      icon: Drill,
      title: 'Project Management',
      description: 'Expert project oversight from conception through completion and handover.',
      features: ['Schedule Management', 'Budget Control', 'Quality Assurance', 'Stakeholder Communication'],
      image: 'https://images.unsplash.com/photo-1541888086225-ee5b31df6a8e?auto=format&fit=crop&w=2600&q=80'
    }
  ]

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-background border-b border-border py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">
                Our Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive construction solutions delivered with precision and excellence across all project types.
              </p>
            </div>
          </div>
        </section>

        {/* Services Zig-Zag Showcase */}
        <section className="bg-background py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
            {services.map((service, idx) => {
              const Icon = service.icon
              const isEven = idx % 2 === 0
              return (
                <div key={idx} className={`flex flex-col gap-12 lg:gap-24 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-square relative rounded-sm overflow-hidden group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="flex gap-4 mb-8">
                      <div className="p-4 bg-muted rounded-full">
                        <Icon size={32} className="text-foreground flex-shrink-0" />
                      </div>
                    </div>
                    <h3 className="text-4xl font-light tracking-wide mb-6">{service.title}</h3>
                    <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg">{service.description}</p>
                    <ul className="space-y-4">
                      {service.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-center gap-4 text-foreground font-light tracking-wide">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Process Section - Vertical Timeline */}
        <section className="bg-background border-b border-border py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-20 text-center">Our Process</h2>
            <div className="max-w-3xl mx-auto relative">
              <div className="absolute left-8 md:left-24 top-0 bottom-0 w-px bg-border"></div>
              <div className="space-y-16 relative">
                {[
                  { step: '01', title: 'Consultation & Site Visit', description: 'Meet with our team on-site. We assess the space, understand your requirements, and align on goals.' },
                  { step: '02', title: 'Planning & Design', description: 'Our architects develop detailed blueprints, 3D renderings, timelines, and transparent budgets.' },
                  { step: '03', title: 'Execution', description: 'Work begins. You receive regular progress updates while our supervisors manage the site daily.' },
                  { step: '04', title: 'Quality Assurance', description: 'Rigorous inspections ensure structural integrity, perfect finishes, and code compliance.' },
                  { step: '05', title: 'Handover & Warranty', description: 'We deliver a snag-free space on the committed date, backed by our comprehensive warranty.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 md:gap-16 items-start relative group">
                    <div className="flex-shrink-0 w-16 h-16 md:w-48 bg-background relative z-10 flex items-center justify-center md:justify-end md:pr-12">
                      <span className="text-5xl font-light text-muted-foreground/30 group-hover:text-primary transition-colors duration-500">{item.step}</span>
                    </div>
                    <div className="pt-2 pb-8 border-b border-border/50 group-hover:border-primary/50 transition-colors duration-500 w-full">
                      <h3 className="text-2xl font-light tracking-wide mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose - Bento Grid */}
        <section className="bg-muted/30 border-b border-border py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-20 text-center">Why Work With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Expert Team', description: 'Highly skilled professionals with decades of combined experience.', icon: Building2 },
                { title: 'Quality First', description: 'Rigorous quality control and meticulous attention to every detail.', icon: Hammer },
                { title: 'On Schedule', description: 'We deliver projects on time and strictly within budget parameters.', icon: Zap },
                { title: 'Safety Focused', description: 'Industry-leading safety standards across all daily operations.', icon: Drill },
                { title: 'Transparent', description: 'Clear communication and regular updates throughout your project.', icon: Palette },
                { title: 'Warranty', description: 'Comprehensive warranties and lasting post-project support.', icon: Home }
              ].map((reason, idx) => {
                const Icon = reason.icon
                return (
                  <div key={idx} className="group bg-background border border-border p-8 rounded-lg hover:border-foreground/20 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon size={24} className="flex-shrink-0" />
                    </div>
                    <h3 className="text-xl font-light tracking-wide mb-3">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <CtaSection 
          title="Ready to Start" 
          description="Let's discuss your project requirements and create a comprehensive service plan." 
          buttonText="GET A QUOTE" 
        />
      </main>
      <Footer />
    </>
  )
}
