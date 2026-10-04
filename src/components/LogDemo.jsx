import { useEffect, useState } from 'react'
import '../styles/log-demo.css'

// Example lines only - not client data. The caption says so on screen.
const LINES = [
  { time: '10:41:58', level: 'INFO', text: 'routing-svc config v214 applied', role: 'cause' },
  { time: '10:42:01', level: 'WARN', text: 'gateway-3 upstream timeout after 3 retries', role: 'alert' },
  { time: '10:42:03', level: 'INFO', text: 'auth-svc token refresh ok', role: 'other' },
  { time: '10:42:04', level: 'ERROR', text: 'bts-node-12 connection reset by peer', role: 'alert' },
  { time: '10:42:05', level: 'INFO', text: 'billing-api health check ok', role: 'other' },
  { time: '10:42:06', level: 'WARN', text: 'gateway-3 upstream timeout after 3 retries', role: 'alert' },
  { time: '10:42:07', level: 'INFO', text: 'cdn-edge cache hit ratio 0.94', role: 'other' },
]

export default function LogDemo() {
  // People who prefer reduced motion get the finished state straight away.
  const [resolved, setResolved] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  // One orchestrated moment: after a short pause the log resolves by itself.
  useEffect(() => {
    if (resolved) return undefined
    const id = setTimeout(() => setResolved(true), 1600)
    return () => clearTimeout(id)
  }, [resolved])

  return (
    <figure className={`log-demo ${resolved ? 'is-resolved' : ''}`}>
      <div className="log-demo__bar">
        <figcaption className="log-demo__caption">Example logs, not client data</figcaption>
        <button
          type="button"
          className="log-demo__toggle"
          onClick={() => setResolved((v) => !v)}
        >
          {resolved ? 'Show raw logs' : 'Find the root cause'}
        </button>
      </div>

      <ol className="log-demo__lines" aria-label="Example log lines">
        {LINES.map((line) => (
          <li key={line.time} className={`log-demo__line log-demo__line--${line.role}`}>
            <span className="log-demo__time">{line.time}</span>
            <span className="log-demo__level">{line.level}</span>
            <span>{line.text}</span>
          </li>
        ))}
      </ol>

      <div className="log-demo__result" role="status" aria-live="polite">
        {resolved ? (
          <p className="log-demo__answer">
            <strong>Root cause: routing config v214</strong>
            <span>
              Applied at 10:41:58. It cut connections to bts-node-12. 3 alerts trace back to this
              one change.
            </span>
          </p>
        ) : (
          <p className="log-demo__hint">7 log lines. 3 alerts. Which change caused them?</p>
        )}
      </div>
    </figure>
  )
}
