const steps = [
  {
    number: 1,
    title: 'Business Analysis',
    description:
      'We analyze your current processes, lead sources, team structure, and service areas to create your automation blueprint.',
  },
  {
    number: 2,
    title: 'CRM Connection',
    description:
      'Seamlessly connect your existing CRM and calendar systems with our platform for unified data management.',
  },
  {
    number: 3,
    title: 'AI Training',
    description:
      'We configure your AI agents with your FAQs, pricing, service areas, and brand voice for authentic interactions.',
  },
  {
    number: 4,
    title: 'Launch & Optimize',
    description:
      'Go live with monitoring and continuous optimization of prompts, routing, and performance metrics.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background bg-grid relative">
      <div className="absolute inset-0 bg-black/[0.07] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            The Process
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">How It Works</h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            A simple, structured process so you know what's happening every step of the way.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="relative h-full bg-surface border border-border rounded-2xl p-8 flex flex-col items-center text-center group hover:border-accent/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6 shrink-0 shadow-lg shadow-accent/25 group-hover:shadow-accent/45 transition-shadow duration-300">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
