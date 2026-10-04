// TODO: this file currently holds ONE use case based on the log-analyzer
// product, written from what the system does rather than from verified
// client-reported numbers. Before publishing, either (a) get sign-off from
// the client this was built for to name them and confirm the figures, or
// (b) keep it phrased generically as it is now. Do not add specific
// percentages/metrics here unless you can stand behind them.

export const useCases = [
  {
    slug: 'telco-log-intelligence',
    industry: 'Telecommunications',
    stack: ['FastAPI', 'Groq', 'React', 'TypeScript'],
    title: 'Cutting through log noise for a telecom operations team',
    excerpt:
      'An AI pipeline that reads raw network logs continuously and returns a ranked, explained root cause instead of a wall of alerts.',
    challenge:
      "Network operations teams generate an enormous volume of log data, but most incidents still get triaged manually: an engineer scans recent logs, cross-references tickets, and tries to piece together what actually happened. That process is slow, inconsistent between engineers, and hard to scale as log volume grows.",
    approach:
      "We built a backend service that ingests log data, uses an LLM (via Groq for low-latency inference) to identify likely root causes, and ranks them with a plain-language explanation. A companion dashboard lets the operations team review flagged incidents, see the reasoning behind each suggested cause, and manage the resulting tickets in one place, instead of switching between raw logs and a separate ticketing tool.",
    outcome:
      "The result is a system that turns raw, high-volume log data into a short list of explained, actionable root causes - shifting the operations team's job from manually reading logs to reviewing and confirming AI-suggested findings. It's an ongoing project we continue to refine as we see it run against real traffic.",
  },
]

export const getUseCaseBySlug = (slug) => useCases.find((u) => u.slug === slug)
