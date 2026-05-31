'use client'

import { useState, useEffect } from 'react'

const ROLES = [
  'appointment booker',
  'after-hours agent',
  'support agent',
  'sales assistant',
]

const TYPE_SPEED = 80
const DELETE_SPEED = 50
const PAUSE_AFTER_TYPED = 1800
const PAUSE_BEFORE_NEXT = 400

export default function TypewriterRole() {
  const [displayed, setDisplayed] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing')

  useEffect(() => {
    const role = ROLES[roleIndex]

    if (phase === 'typing') {
      if (displayed.length < role.length) {
        const t = setTimeout(
          () => setDisplayed(role.slice(0, displayed.length + 1)),
          TYPE_SPEED
        )
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('deleting'), PAUSE_AFTER_TYPED)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'deleting') {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          DELETE_SPEED
        )
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % ROLES.length)
          setPhase('typing')
        }, PAUSE_BEFORE_NEXT)
        return () => clearTimeout(t)
      }
    }
  }, [displayed, phase, roleIndex])

  return (
    <span
      style={{ fontFamily: 'var(--font-playfair)' }}
      className="italic font-normal"
    >
      {displayed}
      <span
        className="inline-block w-[2px] bg-white ml-1 align-middle animate-[blink_1s_ease-in-out_infinite]"
        style={{ height: '0.85em' }}
      />
    </span>
  )
}
