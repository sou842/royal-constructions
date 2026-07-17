import { AnimatedButton } from '@/components/animated-button'

interface CtaSectionProps {
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
}

export function CtaSection({
  title,
  description,
  buttonText,
  buttonHref = '/contact'
}: CtaSectionProps) {
  return (
    <section className="bg-primary text-white border-t border-border py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-8">
            {title}
          </h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl">
            {description}
          </p>
          {buttonText && (
            <AnimatedButton href={buttonHref} variant="white" showArrow>
              {buttonText}
            </AnimatedButton>
          )}
        </div>
      </div>
    </section>
  )
}
