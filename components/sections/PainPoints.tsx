import { Clock, AlertTriangle, TrendingDown } from 'lucide-react'
import Card from '@/components/ui/Card'

const points = [
  {
    icon: Clock,
    title: 'Leads Going Cold',
    body: 'Manual follow-up is slow. By the time you reach out, your prospect has already moved on to someone else.',
  },
  {
    icon: AlertTriangle,
    title: 'Inconsistent Nurture',
    body: 'Without automation, campaigns fall through the cracks. Deals stall. Revenue stays flat.',
  },
  {
    icon: TrendingDown,
    title: 'No Time to Build It',
    body: "You're running a business. Building a proper automation stack takes expertise and time you don't have.",
  },
]

export default function PainPoints() {
  return (
    <section className="py-20 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted mb-12">
          Sound familiar?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="bg-background border-border">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Icon size={18} className="text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-2">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
