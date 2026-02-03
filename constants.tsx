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
    disclaimer: "The information provided on this website is for educational purposes only and is not intended to diagnose, treat, or cure any disease. Always consult with your physician before beginning any new treatment or diet"
  },
  home: {
    headline: "Suffering from Low Thyroid Symptoms in Denver? You Are Not Alone.",
    subheadline: "Why your labs are \"normal,\" but you still don’t feel well.",
    body: "If you are struggling with weight gain, fatigue, brain fog, or hair loss, you may have been told by other doctors that your thyroid is \"normal\" based on a simple TSH test. Yet, you continue to suffer.\n\nAt Denver Thyroid Support, Dr. David Arthur takes a different approach. We understand that \"normal\" is not the same as optimal. We utilize a comprehensive Neuroendocrine-Immune (NEI) approach to uncover the root causes of your condition that standard medicine often overlooks.",
    listTitle: "Does this sound like you?",
    listItems: [
      "You are taking thyroid medication but still feel tired and foggy.",
      "You cannot lose weight despite diet and exercise.",
      "You have been told your symptoms are \"just stress\" or \"part of aging.\""
    ],
    solution: "Dr. Arthur specializes in Functional Blood Chemistry Analysis (FBCA). Unlike the standard medical model that waits for a disease to progress before treating it, we look for functional imbalances in the Neuroendocrine-Immune Axis—the connection between your brain, hormones, and immune system."
  },
  symptoms: {
    headline: "Do You Recognize These Symptoms?",
    body: "Many of our patients in the Denver Metro area present with a specific pattern of symptoms that have gone unresolved by traditional care. These are the warning signs of a functional thyroid or metabolic imbalance:",
    list: [
      { title: "Weight Issues", desc: "Inability to lose weight or unexplained weight gain." },
      { title: "Energy Levels", desc: "Chronic fatigue, exhaustion, and lethargy (especially in the afternoon)." },
      { title: "Cognitive Issues", desc: "\"Brain fog,\" poor memory, lack of motivation, and depression." },
      { title: "Physical Changes", desc: "Hair loss (thinning on scalp or eyebrows), dry skin, and brittle nails." },
      { title: "Digestive Health", desc: "Constipation, bloating, or IBS symptoms." },
      { title: "Temperature", desc: "Cold hands and feet, or intolerance to cold." },
      { title: "Sleep", desc: "Insomnia or waking up tired." }
    ],
    note: "Why these symptoms persist: Research shows that up to 15% of hypothyroid patients treated with standard hormone replacement (levothyroxine) continue to suffer from these symptoms despite having normal TSH levels. This is often because the underlying autoimmune (Hashimoto’s), inflammatory, or gut-health triggers have not been addressed."
  },
  answers: {
    headline: "Why Your Lab Tests Look \"Normal\" When You Feel Sick.",
    section1Title: "The Problem with the \"Standard\" Range",
    section1Body: "Most doctors use \"pathological ranges\" to read your blood work. These ranges are averages based on the sick population visiting labs. You can be one point away from a disease diagnosis and still be considered \"normal,\" even though your function has declined significantly.",
    section2Title: "The Functional Approach: Normal vs. Optimal",
    section2Body: "Dr. Arthur uses Functional Blood Chemistry Analysis (FBCA). We use tighter, \"functional\" ranges that define optimal health, not just the absence of disease. This allows us to detect problems like blood sugar dysregulation, inflammation, and nutrient deficiencies before they become irreversible.",
    section3Title: "The TSH Trap",
    section3Body: "Standard care often relies solely on TSH (Thyroid Stimulating Hormone). However, thyroid physiology is complex. We look deeper at:",
    list: [
      { title: "Thyroid Antibodies (TPO & TgAb)", desc: "To detect Hashimoto’s Autoimmunity, which is the leading cause of hypothyroidism." },
      { title: "Conversion Issues", desc: "Can your body convert T4 (inactive) to T3 (active)? Inflammation and gut issues can block this process." },
      { title: "Reverse T3", desc: "High stress or trauma can cause your body to produce \"Reverse T3,\" which blocks your thyroid receptors, causing hypothyroid symptoms even if T4 levels look normal." }
    ]
  },
  methodology: {
    headline: "The Denver Thyroid Support Methodology.",
    subheadline: "We do not guess; we test. Dr. Arthur’s protocol is comprehensive and individualized, moving beyond the \"pill for every ill\" model.",
    steps: [
      {
        title: "1. Comprehensive Investigation",
        body: "We run a broad panel of over 85 biomarkers, checking not just the thyroid, but the systems that support it:",
        items: [
          "Complete Thyroid Panel: TSH, Free T3, Free T4, Reverse T3, TPO & Tg Antibodies.",
          "Inflammatory Markers: hs-CRP, Homocysteine, and Fibrinogen to detect systemic inflammation.",
          "Gut Health: Testing for \"Leaky Gut,\" infections (H. Pylori), and microbiome balance.",
          "Nutrient Status: Vitamin D, B12, Iron, Ferritin, and Selenium levels."
        ]
      },
      {
        title: "2. The Neuroendocrine-Immune (NEI) Framework",
        body: "Your thyroid does not work in isolation. We treat the NEI Axis, ensuring that your brain (neurology), hormones (endocrine), and immune system are communicating correctly. This includes addressing adrenal function and blood sugar regulation (insulin resistance), which are often the hidden drivers of thyroid dysfunction."
      },
      {
        title: "3. Targeted Nutritional Therapy",
        body: "We utilize evidence-based dietary protocols (such as the Autoimmune Protocol or Paleo) to reduce inflammation and support the immune system. We also use targeted supplementation to correct deficiencies in Zinc, Selenium, and Vitamin D that are essential for thyroid health."
      }
    ]
  },
  about: {
    name: "Dr. David Glenn Arthur, DC, DACNB, FACFN, CCCN",
    bio: "Dr. David Arthur is the clinic director at Colorado Functional Health and a leading expert in the functional management of thyroid and autoimmune disorders. He is dedicated to helping patients who fall through the cracks of the standard healthcare system.",
    credentials: [
      "Doctor of Chiropractic (DC): Parker College of Chiropractic.",
      "Board Certified in Integrative Medicine (BCIM).",
      "Diplomate, American Chiropractic Neurology Board (DACNB): Specializing in the brain-body connection.",
      "Fellow, American College of Functional Neurology (FACFN).",
      "Diplomate, College of Clinical Nutrition (DCCN): Expert in nutritional biochemistry and metabolic support."
    ],
    closing: "Dr. Arthur serves the Denver Metro area and consults with patients across the United States. His focus is on Functional Blood Chemistry Analysis, Immunology, and the management of Autoimmune Disorders like Hashimoto’s."
  }
};