'use client'

type Props = {
  type: 'form' | 'calendar'
  embedCode?: string
  height?: number
}

export default function GHLEmbed({ type, embedCode, height = 700 }: Props) {
  if (!embedCode) {
    return (
      <div
        className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-surface text-muted text-sm"
        style={{ height }}
      >
        <span className="text-2xl opacity-30">{type === 'calendar' ? '📅' : '📋'}</span>
        <span>
          GoHighLevel {type === 'calendar' ? 'Calendar' : 'Form'} — paste your GHL embed code as the{' '}
          <code className="text-accent">embedCode</code> prop
        </span>
      </div>
    )
  }

  return (
    <div
      className="rounded-xl overflow-hidden w-full"
      style={{ height, minHeight: height }}
      dangerouslySetInnerHTML={{ __html: embedCode }}
    />
  )
}
