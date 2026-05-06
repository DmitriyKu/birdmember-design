'use client'

import { FileCheck, ShieldCheck, Users } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: FileCheck,
      title: 'Apply',
      description: 'Submit your application with basic crew details',
    },
    {
      number: '02',
      icon: ShieldCheck,
      title: 'Get verified',
      description: 'Our team verifies your airline credentials',
    },
    {
      number: '03',
      icon: Users,
      title: 'Connect on your next layover',
      description: 'Start meeting verified crew worldwide',
    },
  ]

  return (
    <section id="how-it-works" className="py-24 md:py-32 px-4" aria-label="How the pilot networking process works">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            How it works
          </h2>
          <p className="text-white/70 text-lg">
            Three simple steps to join the crew social network
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary" aria-hidden="true" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center group">
              <div className="relative inline-flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors relative z-10 backdrop-blur-sm">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
