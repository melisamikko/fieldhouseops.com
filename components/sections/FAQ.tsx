'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Is this a lead generation service?',
    answer:
      "No — we don't generate leads. We build and manage the automation systems that handle your leads once they come in: instant follow-up, qualification, appointment booking, and nurture sequences. You keep your existing lead sources; we make sure nothing slips through the cracks.",
  },
  {
    question: 'Can the AI actually book appointments in my CRM?',
    answer:
      "Yes. Our AI connects directly to your CRM and calendar. When a lead qualifies, it checks availability and books the appointment without any human involvement — your team sees it exactly like a manually booked call.",
  },
  {
    question: 'What happens during after-hours and weekends?',
    answer:
      "The system runs 24/7. Leads that come in at 2am get an instant reply, get qualified, and can book an appointment — all before your team walks in Monday morning.",
  },
  {
    question: 'Will automation replace my team members?',
    answer:
      "No. It removes the repetitive follow-up work that burns out your team and lets good leads go cold. Your people focus on the conversations that matter; the system handles everything before and after.",
  },
  {
    question: 'How quickly can we get started?',
    answer:
      "Most clients are live within 7–14 days of onboarding. We handle the entire build — you just need to join a kickoff call and approve the flows before we go live.",
  },
  {
    question: 'What about data security and compliance?',
    answer:
      "We use enterprise-grade platforms and follow best practices for data handling. All automations are built to comply with CAN-SPAM, TCPA, and GDPR where applicable. We can walk through specifics on your strategy call.",
  },
  {
    question: 'How do I connect with my CRM?',
    answer:
      "We connect and integrate natively with all major CRMs. On your kickoff call, we'll confirm your stack and handle the connection setup for you.",
  },
  {
    question: "What's included in the setup process?",
    answer:
      "Strategy call → workflow design → build → testing → go-live. We write the copy, build the automations, connect your tools, and train you on how to monitor everything. No technical skills required on your end.",
  },
  {
    question: 'How do I stop the AI from responding to a customer?',
    answer:
      "Move the contact to a pipeline stage set to opted-out, or add a specific tag — we configure this during setup based on your workflow. You can pause any contact manually in seconds.",
  },
  {
    question: "Why is the AI asking for information that's already in my CRM?",
    answer:
      "This usually means a field isn't mapped correctly or wasn't populated when the contact was created. We can audit your field mapping and fix it so the AI pulls existing data before asking.",
  },
  {
    question: "My CRM data isn't syncing properly. What should I do?",
    answer:
      "Check your trigger conditions first — most sync issues come from a missing tag or a contact not hitting the right pipeline stage. If it's still not resolved, reach out via your client portal and we'll investigate within one business day.",
  },
  {
    question: 'Why did the bot start responding again after I moved a lead to Nurture?',
    answer:
      "The Nurture stage likely has an active automation attached to it. We can add a condition to check the contact's opt-out status before sending, or restructure the stage logic — let us know and we'll fix it.",
  },
  {
    question: "Emails aren't sending or I'm seeing failed email notifications. Why?",
    answer:
      "This is usually a sending domain or SMTP configuration issue. Verify your domain is authenticated in your email provider settings. If everything looks correct, reach out and we'll pull the logs.",
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <button
      onClick={() => setOpen((o) => !o)}
      className="w-full text-left bg-surface border border-border rounded-2xl px-6 py-5 group hover:border-accent/50 hover:shadow-md transition-all duration-200 focus:outline-none"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-semibold text-primary leading-snug">{question}</span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border border-border group-hover:border-accent group-hover:bg-accent/10 transition-all duration-200 mt-0.5 ${open ? 'bg-accent/10 border-accent' : ''}`}
        >
          <svg
            className={`w-3.5 h-3.5 text-accent transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
      {open && (
        <p className="mt-4 text-muted text-sm leading-relaxed border-t border-border pt-4">
          {answer}
        </p>
      )}
    </button>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">Frequently Asked Questions</h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            Get answers to the most common questions about our automation systems, pricing, and
            implementation process.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
