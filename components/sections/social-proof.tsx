'use client'

export function SocialProof() {
  const airlines = [
    { name: 'Emirates', color: '#D71920' },
    { name: 'British Airways', color: '#075AAA' },
    { name: 'Lufthansa', color: '#05164D' },
    { name: 'Singapore Airlines', color: '#F9A825' },
    { name: 'Qatar Airways', color: '#5C0632' },
    { name: 'Delta', color: '#003366' },
  ]

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-white/70 text-lg mb-8">
          Early crew from multiple airlines are already joining
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {airlines.map((airline) => (
            <div
              key={airline.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: airline.color }} />
              <span className="text-white/80 font-medium text-sm">{airline.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="flex -space-x-3">
            {['JD', 'SK', 'MR', 'AL', 'TC'].map((initials, index) => (
              <div
                key={initials}
                className="w-10 h-10 rounded-full border-2 border-background flex items-center justify-center text-white text-xs font-bold"
                style={{
                  backgroundColor: index % 2 === 0 ? '#3A8FCE' : '#F1870D',
                  zIndex: 5 - index,
                }}
              >
                {initials}
              </div>
            ))}
            <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-background flex items-center justify-center text-white text-xs font-medium">
              +50
            </div>
          </div>
          <p className="text-white/70 text-sm">
            <span className="text-white font-semibold">50+</span> crew applied this week
          </p>
        </div>
      </div>
    </section>
  )
}
