/**
 * ============================================================================
 *  SERVICES OFFER — the commercial core of the site.
 *  Everything here is content, not logic. Edit freely.
 * ============================================================================
 */

/**
 * TODO(abhijit): replace with your real Calendly / Cal.com link.
 * Until then the site links to WhatsApp + email instead, so no CTA is dead.
 * You can find a free booking page at cal.com (no card needed).
 */
export const bookingUrl = '';

/** Fallback CTAs used when bookingUrl is empty. */
export const contactLinks = {
  whatsapp: 'https://wa.me/919985727779?text=Hi%20Abhijit%2C%20I%27d%20like%20to%20talk%20about%20an%20AI%20architecture%20call.',
  email: 'mailto:sar.abhijit2003@gmail.com?subject=AI%20Architecture%20Call',
};

export interface ServiceOffering {
  id: string;
  /** Short label used in nav + eyebrows */
  label: string;
  title: string;
  /** The one-sentence promise. Lead with the outcome, not the technique. */
  promise: string;
  /** Who it's for — the more specific, the better it self-qualifies. */
  forWhom: string;
  deliverables: string[];
  /** Single flagship tier id that this offering maps to, if any */
  tierId?: string;
}

export const serviceOfferings: ServiceOffering[] = [
  {
    id: 'architecture',
    label: 'Architecture',
    title: 'AI Architecture Review',
    promise:
      'Leave a 90-minute call with a written, buildable plan — not a slide deck of what-if.',
    forWhom:
      'Founders and eng leads who have an AI idea, an existing prototype, or a chatbot that underperforms, and need someone to tell them what to actually build.',
    deliverables: [
      'Live teardown of your current stack, data, and bottlenecks',
      'A written architecture recommendation you can hand to any engineer',
      'Cost and timeline estimate for the first shippable version',
      'An honest verdict on whether AI is the right tool at all',
    ],
    tierId: 'deep-dive',
  },
  {
    id: 'rag',
    label: 'RAG & Agents',
    title: 'RAG & Agent Troubleshooting',
    promise:
      'For chatbots that hallucinate, ignore your documents, or answer the same question three different ways.',
    forWhom:
      'Teams who already shipped a retrieval-based assistant and are now living with the consequences.',
    deliverables: [
      'Diagnosis of chunking, retrieval, and prompt failure points',
      'Fix recommendations ranked by effort vs. impact',
      'Evaluation strategy so you can measure the improvement',
    ],
    tierId: 'deep-dive',
  },
  {
    id: 'scaling',
    label: 'Production',
    title: 'Taking AI to Production',
    promise:
      'The gap between a working notebook and software you can charge money for is where most AI projects die.',
    forWhom:
      'Teams with a prototype and no path to reliability, cost control, or monitoring.',
    deliverables: [
      'Deployment, cost, and reliability review',
      'Model and vendor strategy — including when to stop using an LLM',
      'A realistic build-vs-buy recommendation',
    ],
    tierId: 'deep-dive',
  },
];

export interface PricingTier {
  id: string;
  name: string;
  duration: string;
  priceInr: string;
  priceUsd?: string;
  /** Short qualifier under the price */
  priceNote: string;
  bestFor: string;
  includes: string[];
  /** The one tier visually emphasized. Exactly one. */
  featured?: boolean;
  ctaLabel: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'clarity',
    name: 'Clarity Call',
    duration: '30 min · video',
    priceInr: 'Free',
    priceNote: 'No pitch, no obligation',
    bestFor: 'You have an idea and want a straight answer on whether it is worth building.',
    includes: [
      '30 minutes on a video call',
      'Your problem explained and pressure-tested',
      'A clear recommendation on what to do next',
    ],
    ctaLabel: 'Book a free call',
  },
  {
    id: 'deep-dive',
    name: 'Architecture Deep-Dive',
    duration: '90 min · video + written plan',
    priceInr: '₹6,999',
    priceUsd: '$89',
    priceNote: 'Pay before the call',
    bestFor:
      'You need a real plan — a working team, a budget, or a board asking questions you cannot answer.',
    includes: [
      '90 minutes of deep technical discussion',
      'Teardown of your current or proposed stack',
      'A written architecture plan, delivered within 48 hours',
      'Cost and timeline estimate',
      'Two follow-up email questions for 14 days',
    ],
    featured: true,
    ctaLabel: 'Book the deep-dive',
  },
  {
    id: 'build',
    name: 'Build Partnership',
    duration: 'Ongoing · scoped projects',
    priceInr: 'From ₹40,000',
    priceUsd: 'From $550',
    priceNote: 'Scoped after the call',
    bestFor:
      'You liked the plan and want it actually built, by the person who wrote it.',
    includes: [
      'Fixed scope and price, agreed in writing first',
      'Direct build work — no handoff, no account manager',
      'Weekly demos against a written spec',
      'You own the code and the infrastructure',
    ],
    ctaLabel: 'Discuss a project',
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  detail: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'You book a slot',
    detail:
      'Pick a time that works. A short intake note comes with the invite so I can read your situation before we speak.',
  },
  {
    step: '02',
    title: 'We talk for 30 minutes',
    detail:
      'You describe the problem, I ask the uncomfortable questions. You will leave this call knowing whether to build, buy, or stop.',
  },
  {
    step: '03',
    title: 'You get a written plan',
    detail:
      'Within 48 hours: the recommended architecture, what it costs, how long it takes, and what I would cut if the budget is tight.',
  },
  {
    step: '04',
    title: 'You decide, no pressure',
    detail:
      'Take the plan and hire whoever you want. If you would rather I built it, we scope it then — not before.',
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: 'I am not technical. Will I understand the call?',
    a: 'Yes. I regularly work with founders who cannot read code. I explain trade-offs in business terms — cost, risk, timeline — and tell you plainly when a decision is a technical one you can safely delegate.',
  },
  {
    q: 'What technology stack do you recommend?',
    a: 'Usually LangChain or LangGraph with a vector store, FastAPI, and whatever hosting fits your scale — not whatever is trending. I will tell you when the boring option beats the interesting one.',
  },
  {
    q: 'Can you work with our existing developers?',
    a: 'Yes, and I prefer it. The Architecture Deep-Dive is designed so your own team can execute the plan. I only take on Build Partnerships where you genuinely want me to write the code.',
  },
  {
    q: 'What if my problem is not AI?',
    a: 'Then I will tell you on the first call, and I will not take your money to prove it. Plenty of projects are better solved with a spreadsheet, a cron job, or a rule-based system.',
  },
  {
    q: 'Do you offer refunds if the plan is not useful?',
    a: 'The Clarity Call is free, so there is no risk there. For the Deep-Dive, if the written plan is not useful to you, say so within 7 days and I will refund it in full.',
  },
  {
    q: 'What timezone do you work in?',
    a: 'I am based in India (IST) and regularly take calls with clients in the US and UK. Calls are scheduled in your timezone, not mine.',
  },
];

/** Social proof — every entry is a real, verifiable engagement. No invented metrics. */
export interface CaseStudy {
  client: string;
  context: string;
  role: string;
  outcome: string;
  /** Optional live link to shipped work */
  link?: string;
  linkLabel?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    client: 'Nuevosol Energy',
    context:
      'Engineers were spending hours manually searching internal technical documents to answer routine questions.',
    role: 'Built the Agentic RAG solution',
    outcome: 'Cut manual file-search time with a retrieval chatbot built on LangGraph and ChromaDB.',
  },
  {
    client: 'Prodigal AI',
    context:
      'A video-editing platform needed to turn raw footage into publish-ready content without manual timeline work.',
    role: 'Agentic AI Intern',
    outcome:
      'Shipped automation on the Dhanur AI platform and was named Intern of the Month, April 2025.',
  },
  {
    client: 'Astraveda',
    context:
      'Petroleum analytics needed both a conversational assistant over data and OCR on scanned documents.',
    role: 'Freelance AI Engineer — full ownership',
    outcome:
      'Architected and shipped Ask Astra (chatbot) and Click Astra (OCR) in production, end to end: Next.js, FastAPI, LangGraph, AWS, Supabase.',
    link: 'https://www.petro-astra.in/',
    linkLabel: 'Visit petro-astra.in',
  },
];
