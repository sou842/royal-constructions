'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'SERVICES', href: '/services' },
    { name: 'CONTACT', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-light text-xl tracking-tight">
            ROYAL
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-xs tracking-widest">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={cn(
                    "transition",
                    isActive ? "text-primary font-semibold" : "text-foreground hover:opacity-50"
                  )}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background pb-6 space-y-4 pt-4 px-4">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block transition text-xs tracking-widest",
                    isActive ? "text-primary font-medium" : "text-foreground hover:opacity-50"
                  )}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
