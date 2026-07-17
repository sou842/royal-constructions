import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white'
  href?: string
  showArrow?: boolean
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
}

export function AnimatedButton({
  variant = 'primary',
  href,
  showArrow = false,
  children,
  className,
  target,
  rel,
  ...props
}: AnimatedButtonProps) {
  const isSecondary = variant === 'secondary'
  const isWhite = variant === 'white'
  
  const baseClasses = cn(
    "relative group overflow-hidden px-8 py-4 rounded-full text-sm tracking-wide uppercase transition-all duration-300 inline-flex items-center justify-center cursor-pointer",
    isSecondary 
      ? "border border-foreground text-foreground" 
      : isWhite
        ? "bg-white text-primary"
        : "bg-primary text-primary-foreground",
    className
  )

  const backgroundSpanClasses = cn(
    "absolute inset-0 w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out",
    isSecondary ? "bg-foreground" : isWhite ? "bg-black/10" : "bg-white/10"
  )

  const contentSpanClasses = cn(
    "relative z-10 flex items-center justify-center gap-2 transition-colors duration-300",
    isSecondary && "group-hover:text-background"
  )

  const innerContent = (
    <>
      <span className={backgroundSpanClasses} />
      <span className={contentSpanClasses}>
        {children}
        {showArrow && (
          <ArrowRight 
            size={18} 
            className="transform group-hover:translate-x-1.5 transition-transform duration-300" 
          />
        )}
      </span>
    </>
  )

  if (href) {
    const isExternal = href.startsWith('http') || target === '_blank'
    if (isExternal) {
      return (
        <a href={href} target={target} rel={rel} className={baseClasses}>
          {innerContent}
        </a>
      )
    }
    return (
      <Link href={href} className={baseClasses}>
        {innerContent}
      </Link>
    )
  }

  return (
    <button className={baseClasses} {...props}>
      {innerContent}
    </button>
  )
}
