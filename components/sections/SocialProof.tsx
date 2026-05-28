const stats = [
  { value: '50+', label: 'Automations Deployed' },
  { value: '3×', label: 'Avg. Lead Response Rate' },
  { value: '100%', label: 'Built Inside Your CRM' },
  { value: 'GHL & HS', label: 'Platform Expertise' },
]

export default function SocialProof() {
  return (
    <section className="py-16 border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl sm:text-4xl font-bold gradient-text-accent mb-1">{value}</div>
              <div className="text-sm text-muted">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
