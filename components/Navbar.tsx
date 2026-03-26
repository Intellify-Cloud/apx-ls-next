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
      className="fixed w-full z-50 border-b border-white/[0.06]"
      style={{ background: 'rgba(10, 10, 15, 0.85)', backdropFilter: 'blur(12px)' }}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded">
              <Image
                src="/assets/img/logo/als-logo.png"
                alt="Apex Leadership Specialists"
                width={150}
                height={45}
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
                  className="text-zinc-400 hover:text-amber-400 font-sans text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:text-amber-400"
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  key={index}
                  href={item.url || '/'}
                  className="inline-flex items-center px-4 py-2 bg-amber-500 text-[#0A0A0F] text-sm font-semibold rounded-lg transition-all duration-200 hover:brightness-110 hover:shadow-amber-btn active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]"
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
              className="text-zinc-400 hover:text-amber-400 transition-colors focus:outline-none p-1"
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
          <div className="md:hidden border-t border-white/[0.06] pb-6 pt-4">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                item.section ? (
                  <a
                    key={index}
                    href={`#${item.section}`}
                    className="text-zinc-400 hover:text-amber-400 font-medium py-2.5 px-2 transition-colors rounded-lg hover:bg-white/[0.04]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    key={index}
                    href={item.url || '/'}
                    className="text-zinc-400 hover:text-amber-400 font-medium py-2.5 px-2 transition-colors rounded-lg hover:bg-white/[0.04]"
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
