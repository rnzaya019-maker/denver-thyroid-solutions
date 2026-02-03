import { Character, IllustrationPrompt } from './types';

// --- STYLE BIBLE ---
export const BRAND_COLORS = {
  TEAL: '#2A9D8F', // Trust, Medical, Calm
  YELLOW: '#E9C46A', // Optimism, Energy
  CORAL: '#F4A261', // Warmth, Humanity
  DARK: '#264653', // Grounding, Text
  TERRACOTTA: '#E76F51', // Action, Urgency
  CREAM: '#F8F9FA', // Canvas, Space
};

export const STYLE_GUIDE = {
  palette: Object.values(BRAND_COLORS),
  shapes: "Soft, organic, rounded forms. No sharp corners. Fluid transitions.",
  shading: "Flat design with soft, diffuse drop shadows for depth. No harsh gradients.",
  texture: "Subtle grain or paper texture overlays to feel human/tactile.",
  composition: "Generous negative space (white/cream space). Centralized focus or gentle asymmetry.",
};

// --- CHARACTERS ---
export const CHARACTERS: Character[] = [
  {
    name: "Pip",
    personality: "Energetic, bouncing, curious.",
    description: "A small, round, bright yellow orb representing energy and metabolism.",
    color: BRAND_COLORS.YELLOW
  },
  {
    name: "Atlas",
    personality: "Supportive, steady, calm.",
    description: "A sturdy, teal, oblong shape that often holds up other shapes, representing thyroid structure.",
    color: BRAND_COLORS.TEAL
  },
  {
    name: "Muna",
    personality: "Fluid, connecting, wise.",
    description: "A coral-colored, cloud-like form that changes shape to bridge gaps, representing the brain-body connection.",
    color: BRAND_COLORS.CORAL
  }
];

// --- ILLUSTRATION PROMPTS ---
export const SCENE_PROMPTS: IllustrationPrompt[] = [
  {
    id: "symptoms-metaphor",
    title: "Symptoms despite normal labs",
    context: "Hero/Intro",
    prompt: "Minimalist abstract vector illustration. A calm cream background. In the center, a character (Atlas) looks slightly deflated and transparent, holding a piece of paper that says 'NORMAL'. Floating around are small gray fog clouds representing fatigue. Soft lighting, pastel tones of teal and coral. No clutter."
  },
  {
    id: "weight-loss",
    title: "Weight loss resistance",
    context: "Symptoms Section",
    prompt: "Abstract flat illustration. A gentle uphill slope. Pip (the yellow energetic ball) is trying to roll up the hill but is being held back by a soft, heavy, terracotta-colored heavy blanket shape. Represents resistance without being scary. Warm lighting."
  },
  {
    id: "brain-body",
    title: "Brain-body connection",
    context: "Methodology",
    prompt: "Muna (the coral cloud) is gently glowing, with soft lines connecting a stylized brain shape at the top to a stylized thyroid shape (butterfly) below. The lines are flowing like water, representing communication. Clean negative space, optimistic mood."
  },
  {
    id: "reevaluation",
    title: "Reevaluation / deeper investigation",
    context: "Answers",
    prompt: "Top-down view of a round table. Atlas and Pip are looking at a magnifying glass that reveals colorful geometric patterns hidden underneath a plain gray surface. Represents looking deeper. Teal and yellow palette."
  },
  {
    id: "hope-progress",
    title: "Hope + clarity / progress",
    context: "Success/About",
    prompt: "A bright sunrise scene using abstract semi-circles. Pip is bouncing high in the air, leaving a trail of sparkles. Atlas is standing tall and solid. The fog has cleared. Very bright, yellow and orange dominant palette."
  },
  {
    id: "local-trust",
    title: "Local Denver trust + calm clinic",
    context: "Contact",
    prompt: "A stylized, abstract skyline of Denver mountains in the background (soft teal). In the foreground, a welcoming open door shape in warm wood tones. Soft plants on either side. Inviting, safe, calm. Headspace art style."
  }
];

export const BLOG_COVERS = [
  { title: "Why TSH alone can miss patterns", promptId: "reevaluation" },
  { title: "Persistent fatigue when labs look normal", promptId: "symptoms-metaphor" },
  { title: "What reevaluation can include", promptId: "brain-body" }
];

// --- WEBSITE CONTENT (Verbatim from MD) ---
export const CONTENT = {
  contact: {
    phone: "720-248-4770",
    phoneHref: "tel:7202484770",
    address: "7200 E. Hampden Ave. Suite 206, Denver, CO 80224",
    serviceAreas: [
      "Washington Virginia Vale",
      "Hilltop",
      "Englewood",
      "Virginia Village"
    ],
    disclaimer: "The information provided on this website is for educational purposes only and is not intended to diagnose, treat, or cure any disease. Always consult with your physician before beginning any new treatment or diet"
  },
  location: {
    headline: "Visit Colorado Functional Health",
    body: "Our Denver clinic is easy to reach and designed to feel calm, welcoming, and focused on you. Schedule a visit to explore a functional medicine approach to thyroid health that considers your full story.",
    mapEmbedUrl: "https://www.google.com/maps?q=Colorado+Functional+Health+Denver+Functional+Medicine+Doctor+7200+E+Hampden+Ave+Denver+CO+80224&output=embed",
    mapLink: "https://www.google.com/maps/place/Colorado+Functional+Health+-+Denver+Functional+Medicine+Doctor",
    quickFacts: [
      "Convenient to Washington Virginia Vale and Virginia Village.",
      "Short drive for clients from Englewood and Hilltop.",
      "Located in the Poplar Professional Building."
    ]
  },
  insights: [
    {
      title: "A Personalized, Functional Medicine Approach",
      body: "We take time to understand what might be disrupting thyroid function, including gut health, stress load, and nutrient balance. Your plan is tailored, not templated."
    },
    {
      title: "Looking Beneath the Surface",
      body: "In-depth testing and lifestyle evaluation help us connect the dots behind persistent symptoms. The goal is clarity, not guesswork."
    },
    {
      title: "A Calm Space for Lasting Change",
      body: "Our Denver clinic offers a welcoming environment for thoughtful, long-term support. We listen carefully and build realistic strategies you can follow."
    }
  ],
  testimonials: [] as { name: string; quote: string }[],
  home: {
    headline: "Feeling off but told your thyroid is “normal”?",
    subheadline: "Colorado Functional Health helps you uncover what’s beneath the surface.",
    body: "Your thyroid affects everything from your energy to your sleep and mood. At Colorado Functional Health in Denver, we take a deeper look at the factors that may be influencing your thyroid health—gut imbalances, stress load, hormone shifts, and nutrient needs.\n\nOur functional wellness tools are designed to help you move forward with clarity, not confusion. When you better understand your thyroid, you can take meaningful steps toward lasting change. We’re conveniently located near Washington Virginia Vale and welcome patients across the Denver metro area.",
    listTitle: "Common reasons people reach out",
    listItems: [
      "Fatigue, temperature sensitivity, or mood swings that don’t add up.",
      "Difficulty losing weight even with consistent lifestyle changes.",
      "“Normal” labs that don’t reflect how you feel day to day."
    ],
    solution: "We blend in-depth lab testing with a whole-body evaluation so your plan fits your biology, lifestyle, and long-term goals."
  },
  symptoms: {
    headline: "Do You Recognize These Thyroid-Related Symptoms?",
    body: "Clients from Hilltop, Englewood, and surrounding Denver neighborhoods often share a pattern of symptoms that traditional care hasn’t resolved. These signs may point to thyroid or metabolic imbalance:",
    list: [
      { title: "Weight Issues", desc: "Inability to lose weight or unexplained weight gain." },
      { title: "Energy Levels", desc: "Chronic fatigue, exhaustion, and lethargy (especially in the afternoon)." },
      { title: "Cognitive Issues", desc: "\"Brain fog,\" poor memory, lack of motivation, and depression." },
      { title: "Physical Changes", desc: "Hair loss (thinning on scalp or eyebrows), dry skin, and brittle nails." },
      { title: "Digestive Health", desc: "Constipation, bloating, or IBS symptoms." },
      { title: "Temperature", desc: "Cold hands and feet, or intolerance to cold." },
      { title: "Sleep", desc: "Insomnia or waking up tired." }
    ],
    note: "Why these symptoms persist: Standard thyroid care may stop at TSH. We look at digestion, hormones, inflammation, and lifestyle factors that can keep symptoms active even when labs appear “normal.”"
  },
  answers: {
    headline: "Answers Come From Looking Deeper.",
    section1Title: "A Functional Medicine Perspective",
    section1Body: "Functional medicine asks why symptoms are happening, not just what they are. That means looking at nutrition, stress, gut health, and lifestyle patterns that can influence thyroid function.",
    section2Title: "In-Depth Testing + Lifestyle Insight",
    section2Body: "We use in-depth lab testing and lifestyle evaluation to build a clear picture of what is happening beneath the surface. This approach helps turn confusing symptoms into a practical plan forward.",
    section3Title: "Beyond the TSH Screen",
    section3Body: "Thyroid physiology is complex. We explore multiple data points and patterns, including:",
    list: [
      { title: "Thyroid antibodies & immune signals", desc: "To understand if autoimmunity or inflammation is contributing." },
      { title: "Conversion patterns", desc: "How efficiently your body converts thyroid hormones into active forms." },
      { title: "Whole-body drivers", desc: "Stress load, gut health, nutrient status, and blood sugar regulation." }
    ]
  },
  methodology: {
    headline: "Our Whole-Body Thyroid Approach.",
    subheadline: "We combine modern lab testing with functional wellness strategies to uncover contributors and build realistic, effective plans.",
    steps: [
      {
        title: "1. Comprehensive Investigation",
        body: "We run a broad panel of biomarkers to look at the thyroid and the systems that influence it:",
        items: [
          "Complete thyroid markers and functional ranges.",
          "Inflammatory and immune signals.",
          "Gut health patterns and microbiome balance.",
          "Nutrient status that supports thyroid resilience."
        ]
      },
      {
        title: "2. The Neuroendocrine-Immune (NEI) Framework",
        body: "Your thyroid does not work in isolation. We consider the neuroendocrine-immune axis—how your brain, hormones, and immune system communicate—and how stress or blood sugar patterns may affect thyroid function."
      },
      {
        title: "3. Targeted Nutritional Therapy",
        body: "We create a sustainable plan that aligns nutrition, lifestyle, and targeted support with your body’s unique needs."
      }
    ]
  },
  about: {
    name: "Dr. David Glenn Arthur, DC, DACNB, FACFN, CCCN",
    bio: "Dr. David Arthur is the clinic director at Colorado Functional Health and a trusted guide for patients seeking a deeper understanding of thyroid health. He focuses on root-cause insights, realistic strategies, and clear communication that help patients feel empowered in their next steps.",
    credentials: [
      "Doctor of Chiropractic (DC): Parker College of Chiropractic.",
      "Board Certified in Integrative Medicine (BCIM).",
      "Diplomate, American Chiropractic Neurology Board (DACNB): Specializing in the brain-body connection.",
      "Fellow, American College of Functional Neurology (FACFN).",
      "Diplomate, College of Clinical Nutrition (DCCN): Expert in nutritional biochemistry and metabolic support."
    ],
    closing: "Clients from Englewood, Virginia Village, Hilltop, and across the Denver metro area often find the short drive to Colorado Functional Health well worth the clarity and direction they gain."
  }
};