'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteContent } from '../lib/data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = siteContent.navigation

  return (
    <nav
      className="fixed w-full z-50 border-b"
      style={{
        background: 'rgba(5,20,36,0.55)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed5c2c] rounded">
              <Image
                src="/assets/logo/als-logo.png"
                alt="Apex Leadership Specialists"
                width={160}
                height={48}
                className="object-contain brightness-0 invert opacity-90"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.section ? (
                <a
                  key={index}
                  href={`#${item.section}`}
                  className="text-on-surface hover:text-secondary font-sans text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:text-secondary"
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  key={index}
                  href={item.url || '/'}
                  className="inline-flex items-center px-7 py-3.5 bg-secondary text-on-secondary font-semibold rounded-lg transition-all duration-200 hover:brightness-110 hover:shadow-glow-sm active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface relative z-10"
                >
                  {item.title}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="text-on-surface-variant hover:text-secondary transition-colors focus:outline-none p-1"
            >
              <svg className="h-6 w-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-outline-variant pb-6 pt-4">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                item.section ? (
                  <a
                    key={index}
                    href={`#${item.section}`}
                    className="text-on-surface hover:text-secondary font-medium py-2.5 px-2 transition-colors rounded-lg hover:bg-surface-bright"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    key={index}
                    href={item.url || '/'}
                    className="inline-flex items-center px-7 py-3.5 bg-secondary text-on-secondary font-semibold rounded-lg transition-all duration-200 hover:brightness-110 hover:shadow-glow-sm active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface relative z-10"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}


