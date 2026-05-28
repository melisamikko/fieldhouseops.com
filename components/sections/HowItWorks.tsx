const steps = [
  {
    number: '01',
    title: 'Audit',
    description:
      'We analyze your current sales process and identify exactly where automation will have the biggest impact.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'We build your complete automation stack inside GoHighLevel or HubSpot — funnels, workflows, sequences.',
  },
  {
    number: '03',
    title: 'Launch',
    description:
      "We run the campaigns, ads, and nurture sequences. Your pipeline starts filling. You don't lift a finger.",
  },
  {
    number: '04',
    title: 'Hand Off',
    description:
      'Appointments land on your calendar. You work your pipeline and do the job. We stay on standby.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
            The Process
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-accent/40 to-transparent z-0" />
              )}
              <div className="relative z-10 bg-surface border border-border rounded-xl p-6">
                <div className="text-4xl font-bold text-accent/30 font-mono mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
