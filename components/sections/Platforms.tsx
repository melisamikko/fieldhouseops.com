export default function Platforms() {
  return (
    <section className="py-20 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
            Our Platforms
          </p>
          <h2 className="text-4xl font-bold text-white">We Live Inside Your CRM</h2>
          <p className="text-muted text-lg mt-4 max-w-xl mx-auto">
            We don't add complexity — we plug directly into the tools you're already using.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border bg-background p-8">
            <div className="text-2xl font-bold text-white mb-1">GoHighLevel</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Primary Platform
            </div>
            <p className="text-muted text-sm leading-relaxed">
              We're power users. We build your entire CRM, pipeline, automation workflows, and
              funnels inside GHL — and hand it over completely ready to run. From the chat widget to
              the booked appointment.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/60">
              <li>→ CRM & Pipeline Setup</li>
              <li>→ Funnel & Landing Page Build</li>
              <li>→ Automation Workflows</li>
              <li>→ Appointment Calendars</li>
              <li>→ Chat & Lead Capture</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-background p-8">
            <div className="text-2xl font-bold text-white mb-1">HubSpot</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan mb-4">
              Full Integration
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Already in HubSpot? We integrate directly into your existing stack and layer in the
              automation you're missing — without disrupting what's already working.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/60">
              <li>→ Workflow Automation</li>
              <li>→ Lead Nurture Sequences</li>
              <li>→ Contact & Deal Management</li>
              <li>→ Email Campaign Setup</li>
              <li>→ Reporting & Tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
