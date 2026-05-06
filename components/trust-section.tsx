'use client'

import { ShieldCheck, UserX, Eye, Lock } from 'lucide-react'

export function TrustSection() {
  const trustPoints = [
    {
      icon: ShieldCheck,
      title: 'Manual verification',
      description: 'Every application is reviewed by our team'
    },
    {
      icon: UserX,
      title: 'No passengers',
      description: 'Strictly for airline professionals'
    },
    {
      icon: Eye,
      title: 'No fake profiles',
      description: 'Real crew, verified credentials'
    },
    {
      icon: Lock,
      title: 'Privacy-first',
      description: 'Your data stays private and secure'
    }
  ]

  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#053d70] to-background" aria-hidden="true" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            This is not a public network.
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Every member is verified crew. No exceptions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
              <p className="text-white/60 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
