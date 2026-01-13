"use client"

import type React from "react"

import Image from "next/image"
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react"

export default function ComingSoonPage() {

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Golden-bronze satin fabric background image */}
      <div className="absolute inset-0">
        <Image
          src="https://cdn.shopify.com/s/files/1/0949/0949/7707/files/Landing_Page_Design_1_2.png?v=1768291748"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
          style={{ objectPosition: 'center' }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-amber-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Logo - Top Left */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
          <Image
            src="https://cdn.shopify.com/s/files/1/0949/0949/7707/files/logo_ns-03_1.png?v=1768291739"
            alt="Naguib Selim Fabrics & More"
            width={200}
            height={80}
            className="h-auto w-auto max-w-[180px] md:max-w-[220px] brightness-0 invert"
            priority
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>

        {/* Main Content - Centered */}
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-3xl w-full text-center space-y-8">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-amber-100 font-light tracking-wide">
              Launching soon!
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-amber-100 font-bold leading-relaxed max-w-2xl mx-auto drop-shadow-lg" dir="rtl">
              قريب جداً، بنقدم خبرة وشغل سنين في الأقمشة بشكل جديد وأسهل من أي وقت فات.
              <br />
              مش مجرد قماش.. دي تجربة كاملة
            </p>
          </div>
        </div>

        {/* Social Media Icons - Bottom Center */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/company/naguibselim/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-200 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://www.facebook.com/share/14Udwota2xU/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-200 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://www.instagram.com/naguibselimtex?igsh=MXRmNW0wcG04eWdxbg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-200 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.youtube.com/@naguibselim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-200 transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
