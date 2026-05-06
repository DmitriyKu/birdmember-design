'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function EarlyAccess() {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState<'pilot' | 'cabin-crew' | ''>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!email || !role) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="early-access" className="py-24 md:py-32 px-4 relative overflow-hidden" aria-label="Apply for early access to the layover app">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#053d70] to-background" aria-hidden="true" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl transform -translate-y-1/2 -translate-x-1/2" aria-hidden="true" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2" aria-hidden="true" />

      <div className="max-w-xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Request access
          </h2>
          <p className="text-white/80 text-lg">
            Join the first wave of verified crew.
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Role
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <RoleButton active={role === 'pilot'} icon="✈️" label="Pilot" onClick={() => setRole('pilot')} />
                  <RoleButton active={role === 'cabin-crew'} icon="👤" label="Cabin Crew" onClick={() => setRole('cabin-crew')} />
                </div>
              </div>

              <Button
                type="submit"
                disabled={!email || !role || isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white text-lg h-14 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Apply now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              <p className="text-center text-white/50 text-sm">
                Access is limited
              </p>
            </div>
          </form>
        ) : (
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-primary/50 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">You&apos;re on the list!</h3>
            <p className="text-white/70">
              We&apos;ll be in touch soon. Welcome to the crew.
            </p>
          </div>
        )}

        <p className="text-center text-white/60 text-sm mt-6">
          Already <span className="text-white font-semibold">247</span> crew applied
        </p>
      </div>
    </section>
  )
}

function RoleButton({ active, icon, label, onClick }: { active: boolean; icon: string; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-4 rounded-xl border transition-all duration-300 text-left ${
        active ? 'bg-primary/20 border-primary text-white' : 'bg-white/5 border-white/20 text-white/80 hover:border-white/40'
      }`}
    >
      <span className="text-2xl mb-1 block">{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  )
}
