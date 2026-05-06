'use client'

import { Plane, Clock, HelpCircle } from 'lucide-react'

export function ProblemSection() {
  const problems = [
    {
      icon: Plane,
      text: "You land in a new city",
    },
    {
      icon: HelpCircle,
      text: "You don't know who's there",
    },
    {
      icon: Clock,
      text: 'Time is limited',
    },
  ]

  return (
    <section id="problem" className="py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#053d70] to-background" aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16 text-balance">
          Layovers are short. Connections shouldn&apos;t be.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/10"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
              </div>
              <p className="text-white/90 text-lg font-medium">{problem.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl md:text-2xl text-white/70 italic">
            &ldquo;There&apos;s no place built for crew to connect.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
