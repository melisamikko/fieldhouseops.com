import { Check } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const dfyItems = [
  'Landing page design & build',
  'Ad campaign setup & management',
  'Automated nurture sequences',
  'Appointment setting & calendar management',
  'Full handoff — right to your pipeline',
]

const diyItems = [
  'Custom training sessions & SOPs',
  'GoHighLevel & HubSpot walkthroughs',
  'Hands-on coaching & Q&A',
  'Templates and workflows you own',
  'Ongoing support options',
]

function Track({
  badge,
  title,
  description,
  items,
  accent = false,
}: {
  badge: string
  title: string
  description: string
  items: string[]
  accent?: boolean
}) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border p-8 flex flex-col',
        accent ? 'border-accent bg-accent/5' : 'border-border bg-surface'
      )}
    >
      {accent && (
        <div className="absolute -top-3 left-8">
          <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <div className="inline-flex mb-4">
        <span
          className={cn(
            'text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full',
            accent ? 'bg-accent/20 text-accent' : 'bg-background border border-border text-muted'
          )}
        >
          {badge}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-muted text-sm leading-relaxed mb-6">{description}</p>
      <ul className="space-y-3 flex-1">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-primary/80">
            <Check
              size={15}
              className={cn('mt-0.5 shrink-0', accent ? 'text-accent' : 'text-primary')}
            />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button href="https://api.leadconnectorhq.com/widget/booking/AbI2CP9wUW3wzclGFr49" variant={accent ? 'primary' : 'ghost'} className="w-full">
          Get Started
        </Button>
      </div>
    </div>
  )
}

export default function ServiceTracks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Two Ways to Work With Us
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            We do it for you, or we teach you how. Either way, you walk away with a working
            automation system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Track
            badge="Done For You"
            title="We Build & Run It"
            description="You hand us the keys. We build your entire automation stack, launch the campaigns, set the appointments, and hand it all over to you."
            items={dfyItems}
            accent={true}
          />
          <Track
            badge="We Teach You"
            title="Learn to Run It Yourself"
            description="Want to own the process? We train you and your team to build, manage, and scale your automation in-house."
            items={diyItems}
          />
        </div>
      </div>
    </section>
  )
}
