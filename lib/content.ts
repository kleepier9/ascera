export type Review = {
  name: string
  location: string
  rating: number
  title: string
  body: string
  product: string
  verified: boolean
}

export const reviews: Review[] = [
  {
    name: "Maya R.",
    location: "Denver, CO",
    rating: 5,
    title: "The first pair that lasts a full workday",
    body: "I've tried a lot of compression and usually feel the dizziness creep back by lunch. With the Support-Web leggings I made it through a whole shift standing. The support map genuinely feels different from generic tights.",
    product: "Support-Web Compression Leggings",
    verified: true,
  },
  {
    name: "Jordan T.",
    location: "Austin, TX",
    rating: 5,
    title: "Finally, apparel that gets it",
    body: "The awareness tee started three conversations the first week. It looks like something I'd actually buy anyway, not a novelty shirt. That matters to me.",
    product: "\u201CMy Heart Has Its Own Tempo\u201D Tee",
    verified: true,
  },
  {
    name: "Priya S.",
    location: "Seattle, WA",
    rating: 4,
    title: "Great for travel days",
    body: "Wore the abdominal shorts on a long flight and felt so much steadier when I stood up. Sizing ran true to the guide. Wish they came in more colors.",
    product: "High-Rise Abdominal Compression Shorts",
    verified: true,
  },
  {
    name: "Elena M.",
    location: "Chicago, IL",
    rating: 5,
    title: "The calf sleeves are my everyday layer",
    body: "Discreet enough to wear under work pants and firm without cutting in. I own two pairs now and rotate them constantly.",
    product: "Calf Compression Sleeves",
    verified: true,
  },
  {
    name: "Sam K.",
    location: "Portland, OR",
    rating: 5,
    title: "Thoughtful from packaging to fit",
    body: "You can tell this was made by people who understand the daily reality. The fit guide actually asked the right questions and my size was spot on.",
    product: "Targeted Compression Tights",
    verified: true,
  },
  {
    name: "Dana L.",
    location: "Boston, MA",
    rating: 5,
    title: "Comfortable enough to forget I'm wearing them",
    body: "Light support tights that don't feel clinical. Soft waistband, no rolling. Exactly what I wanted for lower-key days.",
    product: "Everyday Comfort Compression Tights",
    verified: true,
  },
]

export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string }

export type JournalPost = {
  slug: string
  title: string
  category: string
  excerpt: string
  readingTime: string
  date: string
  image: string
  body: ArticleBlock[]
}

export const journalPosts: JournalPost[] = [
  {
    slug: "how-compression-works",
    title: "How graduated compression supports blood flow",
    category: "Understanding Compression",
    excerpt:
      "A plain-language look at what graduated compression does, why the numbers on the label matter, and how to think about support levels.",
    readingTime: "6 min read",
    date: "March 2025",
    image: "/images/support-map.png",
    body: [
      {
        type: "paragraph",
        text: "If you live with POTS or another form of dysautonomia, you have probably been told that compression might help. But what does that actually mean, and why do the numbers on the label matter? Here is a plain-language walk-through.",
      },
      { type: "heading", text: "What graduated compression does" },
      {
        type: "paragraph",
        text: "Graduated compression applies the most pressure at the extremities — the ankles and lower legs — and gradually eases as it moves up the body. The idea is to gently encourage blood to return upward rather than pooling in the lower half of the body when you stand.",
      },
      {
        type: "paragraph",
        text: "For many people with orthostatic intolerance, that pooling is part of what triggers lightheadedness, a racing heart, and fatigue on standing. Well-fitted compression can help reduce how much blood settles in the legs and abdomen.",
      },
      { type: "heading", text: "What the mmHg numbers mean" },
      {
        type: "paragraph",
        text: "The numbers you see — like 15–20 mmHg or 20–30 mmHg — describe how much pressure the garment applies, measured in millimeters of mercury. Higher numbers mean firmer support. We translate these into three clear levels so you don't have to memorize the ranges.",
      },
      {
        type: "list",
        items: [
          "Light Support — a gentle everyday hug, good for easing in.",
          "Moderate (15–20 mmHg) — steady, all-day support.",
          "Firm (20–30 mmHg) — our strongest support, mapped to key zones.",
        ],
      },
      { type: "heading", text: "Why placement matters" },
      {
        type: "paragraph",
        text: "Not all compression is created equal. Generic tights apply pressure uniformly, which is why we developed the Support-Web — a network of graduated panels placed by circulation zone, including abdominal support, which research suggests can be especially relevant for orthostatic symptoms.",
      },
      {
        type: "callout",
        text: "Compression may not be appropriate for everyone. Before starting, talk with a qualified healthcare professional about what's right for your body and condition.",
      },
    ],
  },
  {
    slug: "finding-your-right-support-level",
    title: "Finding your right support level",
    category: "Fit & Sizing",
    excerpt:
      "Light, moderate, or firm? How to think through support levels for your body, your routine, and the guidance of your care team.",
    readingTime: "5 min read",
    date: "February 2025",
    image: "/images/leggings.png",
    body: [
      {
        type: "paragraph",
        text: "Choosing a support level is personal. It depends on your symptoms, your daily routine, how your body responds, and the guidance of your care team. Here is how we think about it.",
      },
      { type: "heading", text: "Start with your day" },
      {
        type: "paragraph",
        text: "If you're mostly seated with occasional standing, a light or moderate level is often a comfortable place to begin. If you spend long stretches upright — commuting, working on your feet, traveling — firmer support may serve you better.",
      },
      { type: "heading", text: "Ease in if you're new" },
      {
        type: "paragraph",
        text: "Compression can feel unfamiliar at first. Many people start at a lighter level and work up as their body adjusts. There's no prize for jumping straight to the firmest option.",
      },
      {
        type: "list",
        items: [
          "New to compression? Try Light Support first.",
          "Want reliable all-day help? Moderate is a versatile default.",
          "Need maximum support for upright days? Choose Firm.",
        ],
      },
      {
        type: "callout",
        text: "Your healthcare provider may recommend a specific compression level for your needs. Their guidance always comes first.",
      },
    ],
  },
  {
    slug: "dressing-for-unpredictable-days",
    title: "Dressing for unpredictable days",
    category: "Living Well",
    excerpt:
      "Building a wardrobe that flexes with your symptoms — layering strategies, fabrics that breathe, and pieces that pull double duty.",
    readingTime: "7 min read",
    date: "February 2025",
    image: "/images/lifestyle.png",
    body: [
      {
        type: "paragraph",
        text: "When your symptoms can shift hour to hour, getting dressed becomes its own kind of planning. A flexible wardrobe takes some of that decision-making off your plate.",
      },
      { type: "heading", text: "Layer for temperature swings" },
      {
        type: "paragraph",
        text: "Temperature regulation can be tricky with dysautonomia. Breathable, layerable pieces let you adjust without a full outfit change. Compression sleeves and shorts layer easily under what you already own.",
      },
      { type: "heading", text: "Choose fabrics that work with you" },
      {
        type: "paragraph",
        text: "Look for moisture-wicking, four-way-stretch fabrics that move as you do and don't trap heat. Flatlock seams reduce chafing on days when everything already feels like too much.",
      },
      {
        type: "list",
        items: [
          "Keep a go-to 'low-effort' outfit ready for flare days.",
          "Favor pieces that pull double duty from home to out.",
          "Have discreet compression layers you can add or remove.",
        ],
      },
    ],
  },
]

export function getPost(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug)
}

export type Faq = {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: "How do I choose the right support level?",
    answer:
      "We label every garment with a support level: Light Support for gentle everyday wear, Moderate (15\u201320 mmHg) for steady all-day support, and Firm (20\u201330 mmHg) for the most compression. Our Support Finder walks you through it, and we always recommend confirming with your healthcare provider.",
  },
  {
    question: "Is compression right for everyone?",
    answer:
      "Not necessarily. Compression may not be appropriate for certain conditions. We strongly encourage you to speak with a qualified healthcare professional about your individual needs before starting.",
  },
  {
    question: "How should compression wear fit?",
    answer:
      "It should feel snug and supportive but never painful, and it shouldn't pinch, roll, or leave deep marks. Use our sizing guide and measure yourself for the best fit. If something doesn't feel right, our returns window has you covered.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer 60-day returns on unworn items in original condition. Because fit is so personal, we make exchanges easy — reach out and we'll help you dial in the right size.",
  },
  {
    question: "How do I care for my compression garments?",
    answer:
      "Machine wash cold on a gentle cycle and lay flat or hang to dry. Avoid fabric softener, bleach, and high heat, which break down the elastane that gives compression its support over time.",
  },
  {
    question: "How long do compression garments last?",
    answer:
      "With proper care, most people replace compression wear every 4\u20136 months of regular use, as the fibers naturally lose some of their stretch and support over time.",
  },
]

export type ResourceLink = {
  name: string
  description: string
  href: string
}

export type ResourceGroup = {
  title: string
  description: string
  links: ResourceLink[]
}

export const resourceGroups: ResourceGroup[] = [
  {
    title: "Understanding your condition",
    description:
      "Trusted organizations for learning about POTS and dysautonomia.",
    links: [
      {
        name: "Dysautonomia International",
        description:
          "Patient advocacy, research funding, and physician-reviewed education on autonomic disorders.",
        href: "https://www.dysautonomiainternational.org",
      },
      {
        name: "Standing Up to POTS",
        description:
          "Awareness, research, and support resources focused on POTS specifically.",
        href: "https://www.standinguptopots.org",
      },
      {
        name: "The Dysautonomia Project",
        description:
          "Educational tools built to help patients and clinicians recognize and manage autonomic dysfunction.",
        href: "https://thedysautonomiaproject.org",
      },
    ],
  },
  {
    title: "Finding care",
    description: "Starting points for connecting with knowledgeable providers.",
    links: [
      {
        name: "Autonomic specialist directories",
        description:
          "Many advocacy organizations maintain lists of clinicians experienced with dysautonomia.",
        href: "https://www.dysautonomiainternational.org/page.php?ID=14",
      },
      {
        name: "Questions to ask your provider",
        description:
          "Come prepared with questions about compression, symptoms, and daily management.",
        href: "/learn/finding-your-right-support-level",
      },
    ],
  },
  {
    title: "Community & support",
    description: "You are not navigating this alone.",
    links: [
      {
        name: "Peer support groups",
        description:
          "Online and local communities where people share day-to-day strategies and encouragement.",
        href: "https://www.dysautonomiainternational.org/page.php?ID=39",
      },
      {
        name: "The Vanté Journal",
        description:
          "Our own plain-language guides on compression, fit, and living well.",
        href: "/learn",
      },
    ],
  },
]

export const valueProps = [
  {
    title: "Designed with the community",
    body: "Every piece is developed with input from people living with POTS and dysautonomia.",
  },
  {
    title: "Support you can feel",
    body: "Clearly labeled light, moderate, and firm support so you know exactly what you're getting.",
  },
  {
    title: "Made to be worn daily",
    body: "Breathable, durable fabrics that hold their support wash after wash.",
  },
  {
    title: "60-day fit guarantee",
    body: "Fit is personal. Easy exchanges and returns so you can find your right size.",
  },
]
