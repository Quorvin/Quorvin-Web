// Starter articles - replace/expand as you publish. Each `body` entry is
// rendered as either a paragraph ({ type: 'p' }) or a subheading
// ({ type: 'h2' }) in reading order.

export const insights = [
  {
    slug: 'why-log-intelligence-matters',
    title: 'Why "just add more alerts" stops working at scale',
    date: '2026-09-01',
    readTime: '4 min read',
    excerpt:
      'More monitoring usually means more noise, not more clarity. Here is why root-cause AI is a different approach than traditional alerting.',
    body: [
      { type: 'p', text: "Most operations teams respond to growing incident volume the same way: add more monitoring, more alert rules, more dashboards. It works for a while. Then the team ends up with hundreds of alerts a day, most of them low-signal, and the real problem - finding the root cause fast - gets harder, not easier." },
      { type: 'h2', text: 'Alerts tell you something happened. They rarely tell you why.' },
      { type: 'p', text: "A threshold-based alert can tell you that error rates spiked at 3:14am. It can't tell you that the spike was caused by a downstream service timing out after a config change three hours earlier. That connection still has to be made by a person, reading logs, cross-referencing recent deploys, and forming a hypothesis - the slowest part of any incident." },
      { type: 'h2', text: 'What root-cause AI actually changes' },
      { type: 'p', text: "The shift we build toward is having a system read the same raw logs a human would, but continuously and at a volume no person could keep up with, then propose a ranked, explained root cause before a human is even paged. The human's job moves from searching to confirming - which is a much faster loop." },
      { type: 'p', text: "This doesn't replace monitoring. It sits on top of it, turning the flood of alerts your monitoring already produces into a short, explained list of what is actually worth acting on." },
    ],
  },
  {
    slug: 'choosing-ai-vendor-checklist',
    title: 'What to actually check before hiring an AI vendor',
    date: '2026-08-18',
    readTime: '5 min read',
    excerpt:
      "A short, practical checklist for evaluating an AI or data vendor beyond the pitch deck - what to ask, and what a real answer sounds like.",
    body: [
      { type: 'p', text: "Most AI vendor pitches sound similar: LLMs, automation, faster decisions. The differences that actually matter show up in the details, not the headline claims. Here is what we'd suggest asking before signing anything." },
      { type: 'h2', text: 'Ask what happens when the model is wrong' },
      { type: 'p', text: "Every AI system makes mistakes. A vendor who has thought seriously about this will have a clear answer about confidence scoring, human review steps, and fallback behavior. A vague answer here is a bigger warning sign than any technical detail." },
      { type: 'h2', text: 'Ask to see the data flow, not just the demo' },
      { type: 'p', text: "A polished demo says little about how a system behaves on your actual, messy production data. Ask where your data will live, how it moves through the pipeline, and what happens to it after processing - the answer should be specific, not just reassuring." },
      { type: 'h2', text: 'Ask for a small, bounded first project' },
      { type: 'p', text: "A vendor confident in their work should be comfortable starting with something small and well-defined rather than asking for a large commitment up front. If every proposal is a multi-month platform build with no smaller entry point, that's worth questioning." },
    ],
  },
]

export const getInsightBySlug = (slug) => insights.find((i) => i.slug === slug)
