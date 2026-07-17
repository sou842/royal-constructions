'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CursorGrid } from '@/components/cursor-grid'
import { ScrollFloat } from '@/components/scroll-float'
import Link from 'next/link'
import { AnimatedButton } from '@/components/animated-button'
import {
  ArrowRight,
  Star,
  CheckCircle2,
  Building2,
  ShieldCheck,
  MapPin,
  ClipboardCheck,
  Ruler,
  Hammer,
  Award,
  Quote
} from 'lucide-react'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* HERO SECTION */}
        <section className="bg-background min-h-[90vh] flex items-center pt-24 pb-12 md:pt-32 md:pb-24 border-b border-border relative group/hero">
          <CursorGrid
            cellSize={70}
            color="#155dfc"
            radius={140}
            falloff="linear"
            holdTime={400}
            fadeDuration={800}
            lineWidth={1.2}
            maxOpacity={1}
            fillOpacity={0}
            gridOpacity={0}
            cellRadius={0}
            clickPulse
            pulseSpeed={600}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

              {/* Left Column: Text */}
              <div className="max-w-2xl p-3 rounded-lg bg-background">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-foreground/30"></div>
                  <span className="uppercase tracking-widest text-xs font-medium text-muted-foreground">Pune's Premier Turnkey Contractor</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-8">
                  Precision Civil.<br />
                  <span className="text-muted-foreground">Premium Interior Finishing.</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
                  Turnkey residential and commercial transformations across Pune — delivered on time, within budget, exactly as promised. From the foundation to the final coat of paint.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 mb-16">
                  {/* Primary button with expanding highlight overlay */}
                  <AnimatedButton 
                    href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20site%20visit" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    BOOK FREE SITE VISIT
                  </AnimatedButton>

                  {/* Secondary outline button with full sweep fill and animating arrow */}
                  <AnimatedButton 
                    href="#portfolio" 
                    variant="secondary"
                    showArrow
                  >
                    VIEW OUR WORK
                  </AnimatedButton>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
                  <div>
                    <div className="text-3xl md:text-4xl font-light tracking-tight mb-2 text-foreground">200+</div>
                    <p className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-widest">Projects Delivered</p>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-light tracking-tight mb-2 text-foreground">4.6</div>
                    <p className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-widest">Google Rating</p>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-light tracking-tight mb-2 text-foreground">100%</div>
                    <p className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-widest">On-Time Delivery</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="relative h-[60vh] lg:h-[80vh] w-full hidden md:block">
                <div className="absolute inset-0 bg-muted border border-border">
                  <img
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1200&q=80"
                    alt="Premium living space"
                    className="w-full h-full object-cover opacity-90"
                  />
                  {/* Decorative Architectural Lines */}
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b border-l border-foreground/20"></div>
                  <div className="absolute -top-6 -right-6 w-24 h-24 border-t border-r border-foreground/20"></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TRUST BADGES */}
        <section className="border-y border-border bg-muted/30 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { icon: Star, title: "4.6 / 5.0 Google Rating", sub: "41+ verified reviews" },
                { icon: CheckCircle2, title: "100% On-Time", sub: "Every project, every time" },
                { icon: Building2, title: "200+ Projects", sub: "Residential & commercial" },
                { icon: ShieldCheck, title: "No Hidden Costs", sub: "Full transparency" },
                { icon: MapPin, title: "Serving Pune", sub: "Since 2010" }
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-4">
                  <div className="text-muted-foreground">
                    <badge.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-light tracking-wide text-foreground uppercase text-xs mb-1">{badge.title}</h4>
                    <p className="text-xs text-muted-foreground">{badge.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 md:mb-24">
              <span className="text-primary font-medium tracking-wider text-sm uppercase mb-3 block">What We Do</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground flex flex-col items-start">
                <ScrollFloat>Two Disciplines.</ScrollFloat>
                <ScrollFloat className="font-semibold">One Turnkey Promise.</ScrollFloat>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Service 1 */}
              <div className="group relative">
                <div className="aspect-[4/3] overflow-hidden mb-8 relative bg-muted">
                  <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80" alt="Civil construction and waterproofing work in Pune" className="object-cover w-full h-full transition-all duration-700" />
                  <div className="absolute top-4 right-4 z-20 text-white px-4 py-2 text-sm font-light tracking-widest">
                    01
                  </div>
                </div>
                <span className="text-muted-foreground text-xs font-medium uppercase tracking-widest mb-3 block">Civil & Structural</span>
                <h3 className="text-2xl font-light tracking-wide mb-4 text-foreground">Civil Works & Waterproofing</h3>
                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                  From slab laying to structural repairs, our civil team delivers engineered precision at every stage. Specialist waterproofing systems with 10-year warranties for Pune's monsoon-prone climate.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["RCC Work", "Waterproofing", "Tile Flooring", "Plastering", "Brick Work"].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-border text-muted-foreground text-xs uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
                <Link href="#" className="inline-flex items-center gap-2 text-foreground font-light text-sm tracking-widest hover:gap-4 transition-all uppercase">
                  Explore Civil Services <ArrowRight size={16} />
                </Link>
              </div>

              {/* Service 2 */}
              <div className="group relative mt-0 lg:mt-24">
                <div className="aspect-[4/3] overflow-hidden mb-8 relative bg-muted">
                  <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80" alt="Premium interior design and modular kitchen in Pune" className="object-cover w-full h-full transition-all duration-700" />
                  <div className="absolute top-4 right-4 z-20 text-white px-4 py-2 text-sm font-light tracking-widest">
                    02
                  </div>
                </div>
                <span className="text-muted-foreground text-xs font-medium uppercase tracking-widest mb-3 block">Interiors & Fit-Outs</span>
                <h3 className="text-2xl font-light tracking-wide mb-4 text-foreground">Interior Design & Modular Kitchens</h3>
                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                  Bespoke interiors that balance your lifestyle with your vision. From precision-fit modular kitchens to seamless false ceilings — every millimetre is crafted to match your 3D design render.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Modular Kitchen", "False Ceiling", "Wardrobes", "Flooring", "Painting"].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-border text-muted-foreground text-xs uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
                <Link href="#" className="inline-flex items-center gap-2 text-foreground font-light text-sm tracking-widest hover:gap-4 transition-all uppercase">
                  Explore Interior Services <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION (BEFORE/AFTER) */}
        <section id="portfolio" className="py-24 md:py-32 bg-muted/30 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
              <span className="text-primary font-medium tracking-wider text-sm uppercase mb-3 block">Transformation Gallery</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-6 flex flex-col items-center">
                <ScrollFloat>The Evidence</ScrollFloat>
                <ScrollFloat className="font-semibold">Speaks for Itself.</ScrollFloat>
              </h2>
              <p className="text-lg text-muted-foreground mt-6">
                Hover (or tap on mobile) each image to reveal the finished transformation. This is the standard we hold ourselves to on every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Bathroom Renovation", loc: "Tingre Nagar, Pune — 18 Days",
                  before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=700&q=70",
                  after: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=700&q=80"
                },
                {
                  title: "Modular Kitchen", loc: "Dhanori, Pune — 22 Days",
                  before: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=700&q=70",
                  after: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=700&q=80"
                },
                {
                  title: "Full Living Room", loc: "Viman Nagar, Pune — 30 Days",
                  before: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=700&q=70",
                  after: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700&q=80"
                }
              ].map((proj, i) => (
                <div key={i} className="flex flex-col">
                  <div className="relative aspect-[3/4] overflow-hidden mb-6 group cursor-pointer">
                    {/* Before Image */}
                    <img src={proj.before} alt={`Before ${proj.title}`} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-100 group-hover:opacity-0" />
                    <div className="absolute top-4 left-4 z-20 text-white px-3 py-1 text-xs font-light tracking-widest transition-opacity duration-500 group-hover:opacity-0">
                      BEFORE
                    </div>

                    {/* After Image */}
                    <img src={proj.after} alt={`After ${proj.title}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-0 group-hover:opacity-100" />
                    <div className="absolute top-4 left-4 z-20 text-white px-3 py-1 text-xs font-light tracking-widest opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      AFTER
                    </div>
                  </div>
                  <h4 className="text-xl font-light tracking-wide text-foreground mb-1">{proj.title}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{proj.loc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <AnimatedButton href="/projects" variant="secondary" showArrow>
                VIEW FULL PORTFOLIO
              </AnimatedButton>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 md:mb-24">
              <span className="text-primary font-medium tracking-wider text-sm uppercase mb-3 block">How We Work</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground flex flex-col items-start">
                <ScrollFloat>No Guesswork.</ScrollFloat>
                <ScrollFloat className="font-semibold">A Proven Process.</ScrollFloat>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative">
              <div className="hidden lg:block absolute top-12 left-16 right-16 h-px bg-border -z-10" />
              {[
                { icon: ClipboardCheck, step: "01", title: "Free Site Consultation", desc: "We visit your site at zero cost. Our engineers assess the space, understand your requirements, and identify structural needs." },
                { icon: Ruler, step: "02", title: "3D Design & Fixed Quote", desc: "You receive a photorealistic 3D render and a detailed quotation. The price you sign is the price you pay — no revisions." },
                { icon: Hammer, step: "03", title: "Scheduled Execution", desc: "Work begins on a signed timeline. You get weekly WhatsApp progress updates. Our supervisor is on-ground every day." },
                // { icon: Award, step: "04", title: "Delivery & Warranty", desc: "We hand over a snag-free space on the committed date. Every project comes with a post-completion warranty." }
              ].map((p, i) => (
                <div key={i} className="relative bg-background">
                  <span className="text-5xl font-light text-muted-foreground/30 mb-6 block tracking-tighter">
                    {p.step}
                  </span>
                  <div className="text-left">
                    <h4 className="text-xl font-light tracking-wide text-foreground mb-3">{p.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16 md:mb-24">
              <span className="text-primary-foreground/60 font-medium tracking-wider text-sm uppercase mb-3 block">Client Testimonials</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-primary-foreground mb-6 flex flex-col items-start">
                <ScrollFloat>Trusted by Homeowners</ScrollFloat>
                <ScrollFloat className="font-semibold">& Businesses.</ScrollFloat>
              </h2>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/10 backdrop-blur-sm">
                <div className="flex gap-1 text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <span className="font-medium text-sm">4.6/5.0 from 41 Google Reviews</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  q: "They completed my entire 3BHK renovation — civil work, kitchen, and false ceiling — in exactly 42 days as promised. The 3D render was an exact match. Not a single rupee over the quoted amount.",
                  i: "RK", n: "Rajesh Kulkarni", p: "3BHK Renovation — Dhanori"
                },
                {
                  q: "We were sceptical about contractors after two bad experiences. Royal Constructions completely changed our perception. The waterproofing quality is exceptional — no seepage at all.",
                  i: "PS", n: "Priya Sharma", p: "Waterproofing & Bathroom — Tingre Nagar"
                },
                {
                  q: "I run a commercial office space. The team worked weekends and completed the fit-out without a single day of delay. The modular workstations and false ceiling look incredibly professional.",
                  i: "AM", n: "Aditya Marathe", p: "Commercial Fit-Out — Kharadi"
                }
              ].map((t, i) => (
                <div 
                  key={i} 
                  className={`relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl flex flex-col justify-between group hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 transition-all duration-500 ${i === 1 ? 'md:translate-y-8' : ''}`}
                >
                  <Quote size={120} className="absolute -top-6 -right-6 text-white/5 rotate-12 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110" />
                  <div className="relative z-10">
                    <div className="flex gap-1 text-yellow-400 mb-8">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-primary-foreground/90 leading-relaxed mb-10 font-light text-lg">"{t.q}"</p>
                  </div>
                  <div className="flex items-center gap-5 pt-6 border-t border-white/10 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-foreground to-white/60 text-primary flex items-center justify-center font-medium text-xl flex-shrink-0 shadow-lg">
                      {t.i}
                    </div>
                    <div>
                      <h5 className="font-medium tracking-wide text-base mb-1">{t.n}</h5>
                      <p className="text-sm text-primary-foreground/60">{t.p}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 md:py-32 bg-background border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-primary font-medium tracking-wider text-sm uppercase mb-3 block">Start Your Project</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
              Ready to <span className="font-semibold">Transform Your Space?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Book a free, no-obligation site visit and consultation. Our engineer will visit your site, assess the scope, and provide a transparent 3D quote — at zero cost to you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <AnimatedButton href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                BOOK FREE SITE VISIT ON WHATSAPP
              </AnimatedButton>
              <AnimatedButton href="tel:+91XXXXXXXXXX" variant="secondary">
                CALL DIRECTLY
              </AnimatedButton>
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              ✓ Free consultation &nbsp;·&nbsp; ✓ No obligation &nbsp;·&nbsp; ✓ Fixed-price quote
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
