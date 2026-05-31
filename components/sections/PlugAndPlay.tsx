import { integrations } from '@/lib/integrations'

export default function PlugAndPlay() {
  return (
    <section id="integrations" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Plug-and-Play
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            We connect your field service platform into one automated system —
            no rip-and-replace, no starting from scratch.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {integrations.map(({ name, logo }) => (
            <img
              key={name}
              src={logo}
              alt={name}
              className="h-10 sm:h-12 w-auto max-w-full object-contain"
            />
          ))}
        </div>

        <p className="text-center text-sm text-muted mt-10 max-w-xl mx-auto">
          Don&apos;t see your platform?{' '}
          <span className="text-primary font-medium">
            We integrate with 1000&apos;s more.
          </span>
        </p>
      </div>
    </section>
  )
}
