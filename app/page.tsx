"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"

export default function ComingSoonPage() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50 flex items-center justify-center px-4 overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 z-0">
        <Image
          src="/images/logo-20ns-02.png"
          alt=""
          width={800}
          height={240}
          className="h-auto w-full max-w-4xl"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-2xl w-full text-center space-y-12 relative z-10">
        {/* Logo - Added fade-in and slide-down animation */}
        <div className="flex justify-center animate-fade-in-down">
          <Image
            src="/images/logo-20ns-02.png"
            alt="Naguib Selim Fabrics & More"
            width={400}
            height={120}
            className="h-auto w-full max-w-sm"
            priority
          />
        </div>

        {/* Main Heading - Added staggered fade-in animation */}
        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-5xl md:text-6xl font-serif text-amber-900 font-light tracking-wide">Coming Soon</h1>
          <p className="text-lg md:text-xl text-amber-800 font-light leading-relaxed max-w-lg mx-auto">
            Discover exquisite fabrics and luxury textiles crafted with passion and precision. We're preparing something
            extraordinary for you.
          </p>
        </div>

        {/* Email Subscription - Added floating animation and staggered entrance */}
        <form
          onSubmit={handleSubscribe}
          className="space-y-4 mt-12 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-6 py-3 bg-white text-amber-900 placeholder-amber-400 border-2 border-amber-200 rounded-full focus:outline-none focus:border-amber-600 transition-all duration-300 hover:shadow-md focus:shadow-lg flex-1 max-w-xs"
              aria-label="Email for notifications"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-amber-900 text-amber-50 rounded-full font-medium hover:bg-amber-800 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Notify Me
            </button>
          </div>
          {subscribed && (
            <p className="text-amber-700 text-sm font-medium animate-fade-in">✓ Thank you! We'll keep you updated.</p>
          )}
        </form>

        {/* Decorative Elements - Added pulse animation */}
        <div
          className="mt-16 pt-12 border-t-2 border-amber-200/50 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-amber-700 text-sm tracking-widest uppercase animate-pulse-subtle">
            Premium Fabrics Since 1970s
          </p>
        </div>
      </div>
    </main>
  )
}
