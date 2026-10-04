// Single source of truth for service content. The overview page and each
// detail page both read from here, so updating copy only happens in one
// place. TODO: review every field marked (TODO) before launch.

export const services = [
  {
    slug: 'ai-solutions',
    name: 'AI Solutions',
    tagline: 'Turn raw operational data into automatic, explainable answers.',
    summary:
      "We build AI systems that read messy, high-volume operational data - logs, tickets, sensor streams - and surface what's actually wrong, in plain language, instead of leaving a human to dig through it.",
    intro:
      "Most teams already collect enough data to know what's going wrong. The bottleneck isn't data, it's the hours spent manually reading through it. We build AI systems that close that gap: models and pipelines that read raw operational data continuously and return a specific, explainable answer - not just an alert.",
    capabilities: [
      {
        title: 'Root cause analysis',
        body: 'AI pipelines that read log streams, tickets, or telemetry and identify the likely cause of an incident, ranked and explained.',
      },
      {
        title: 'AI agents & chatbots',
        body: 'LLM-powered assistants that answer operational or customer questions grounded in your own documentation and data.',
      },
      {
        title: 'Workflow automation',
        body: 'Automated triage, ticket routing, and report generation that removes repetitive manual review work from your team.',
      },
      {
        title: 'Model integration',
        body: 'Bringing LLM and ML capability into existing systems through clean APIs, without a rebuild of what already works.',
      },
    ],
  },
  {
    slug: 'data-solutions',
    name: 'Data Solutions',
    tagline: 'Clean pipelines and dashboards your AI - and your team - can trust.',
    summary:
      'Good AI needs good data underneath it. We design the pipelines, storage, and dashboards that turn scattered operational data into something reliable enough to build decisions on.',
    intro:
      'Every AI system we build sits on top of a data layer, and most of the actual engineering work happens there: cleaning, structuring, and pipelining data so it is trustworthy enough to automate against. This is also a standalone service for teams that need visibility before they need automation.',
    capabilities: [
      {
        title: 'Data pipelines',
        body: 'Ingesting and structuring data from logs, APIs, or databases into a consistent, queryable format.',
      },
      {
        title: 'Operational dashboards',
        body: 'Purpose-built dashboards that show the handful of numbers a team actually needs, not a generic BI template.',
      },
      {
        title: 'Analytics & reporting',
        body: 'Recurring analysis and reporting that replaces manual spreadsheet work with a repeatable pipeline.',
      },
      {
        title: 'Data foundation for AI',
        body: 'Preparing and validating datasets so an AI or ML layer built on top of them is reliable, not just fast.',
      },
    ],
  },
  {
    slug: 'web-development',
    name: 'Web Development',
    tagline: 'The interfaces and applications that make the AI and data usable.',
    summary:
      'The best backend system is only useful if someone can actually see and act on it. We build the dashboards, internal tools, and customer-facing applications that sit on top of our AI and data work.',
    intro:
      "This is the layer people actually touch, so it's built with the same care as the systems underneath it: fast, clear, and built around what the user needs to do, not just what data exists.",
    capabilities: [
      {
        title: 'Internal dashboards',
        body: 'Purpose-built interfaces for operations, support, or admin teams to act on what the AI and data layers surface.',
      },
      {
        title: 'Company & product websites',
        body: 'Fast, SEO-conscious websites and landing pages built to actually convert visitors into conversations.',
      },
      {
        title: 'Web applications',
        body: 'Full-stack applications - from a customer portal to a small SaaS product - built with a modern, maintainable stack.',
      },
      {
        title: 'API & systems integration',
        body: 'Connecting your front end cleanly to the AI and data services underneath it, and to third-party tools you already use.',
      },
    ],
  },
]

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug)
