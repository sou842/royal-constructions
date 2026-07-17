import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-light text-xl tracking-tight mb-4">ROYAL</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">Premium construction services delivered with precision, integrity, and uncompromising quality.</p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs tracking-widest font-medium mb-6">NAVIGATION</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" className="text-foreground/70 hover:text-foreground transition">Home</Link></li>
                <li><Link href="/about" className="text-foreground/70 hover:text-foreground transition">About</Link></li>
                <li><Link href="/projects" className="text-foreground/70 hover:text-foreground transition">Projects</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs tracking-widest font-medium mb-6">SERVICES</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/services" className="text-foreground/70 hover:text-foreground transition">Overview</Link></li>
                <li><Link href="/contact" className="text-foreground/70 hover:text-foreground transition">Get Started</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-sm">
              <Phone size={16} className="text-muted-foreground" />
              <span className="text-foreground">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail size={16} className="text-muted-foreground" />
              <span className="text-foreground">hello@royal-constructions.com</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <p className="text-xs text-muted-foreground">&copy; 2024 Royal Constructions. All rights reserved.</p>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
