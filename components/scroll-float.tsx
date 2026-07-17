'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollFloatProps {
  children: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  animationDuration?: number;
  ease?: string;
  className?: string;
}

export function ScrollFloat({
  children,
  scrollStart = 'top 90%',
  scrollEnd = 'top 50%',
  stagger = 0.05,
  animationDuration = 0.8,
  ease = 'power2.out',
  className = ''
}: ScrollFloatProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll('.scroll-float-word');
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          y: '60px',
          opacity: 0,
        },
        {
          y: '0px',
          opacity: 1,
          stagger: stagger,
          duration: animationDuration,
          ease: ease,
          scrollTrigger: {
            trigger: el,
            start: scrollStart,
            end: scrollEnd,
            scrub: 1, // Smooth scrub effect
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, [scrollStart, scrollEnd, stagger, animationDuration, ease]);

  const words = children.split(' ');

  return (
    <span
      ref={containerRef}
      className={`inline-flex flex-wrap gap-x-[0.25em] gap-y-1 overflow-hidden py-2 ${className}`}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="scroll-float-word inline-block transform will-change-transform"
        >
          {word}
        </span>
      ))}
    </span>
  );
}
