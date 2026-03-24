'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteContent } from '../lib/data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = siteContent.navigation

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/img/logo/als-logo.png"
                alt="Apex Leadership Specialists"
                width={160}
                height={48}
                className="object-contain py-3 px-4"
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
                  className="text-gray-700 hover:text-accent font-medium transition-colors"
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  key={index}
                  href={item.url || '/'}
                  className="text-gray-700 hover:text-accent font-medium transition-colors"
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
              className="text-gray-700 hover:text-accent focus:outline-none"
            >
              <svg className="h-6 w-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                item.section ? (
                  <a
                    key={index}
                    href={`#${item.section}`}
                    className="text-gray-700 hover:text-accent font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    key={index}
                    href={item.url || '/'}
                    className="text-gray-700 hover:text-accent font-medium transition-colors"
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