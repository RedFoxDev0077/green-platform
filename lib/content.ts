/** All page copy in one place, so wording can be changed without touching layout. */

export type Experience = {
  slug: string;
  title: string;
  kicker: string;
  text: string;
  image: string;
  guests: string;
};

export const experiences: Experience[] = [
  {
    slug: "private-dining",
    title: "Private Dining",
    kicker: "At your table",
    text: "A Mediterranean tasting menu composed for you and served in your home, chalet or villa. Our chef and maître d' take care of everything, down to the last glass.",
    image: "/img/prawns.jpg",
    guests: "2 – 24 guests",
  },
  {
    slug: "weddings",
    title: "Weddings & Celebrations",
    kicker: "Once in a lifetime",
    text: "From the welcome apéritivo to the late-night bites, a long Mediterranean feast designed around your story and the season.",
    image: "/img/wedding.jpg",
    guests: "30 – 250 guests",
  },
  {
    slug: "corporate",
    title: "Corporate & Receptions",
    kicker: "Impress, effortlessly",
    text: "Board dinners, launches and client receptions with the warmth of the South and the precision of Switzerland.",
    image: "/img/reception.jpg",
    guests: "10 – 400 guests",
  },
  {
    slug: "aperitivo",
    title: "Apéritivo & Cocktail",
    kicker: "Standing, sparkling",
    text: "Mezze, crudi and finger food with a curated bar of spritz, Mediterranean wines and signature cocktails.",
    image: "/img/cocktail.jpg",
    guests: "20 – 300 guests",
  },
  {
    slug: "villa",
    title: "Villa & Lakeside Season",
    kicker: "Your private chef",
    text: "A dedicated chef for your summer by the lake or your winter in the mountains: breakfast to dinner, planned around your days.",
    image: "/img/lake.jpg",
    guests: "Full stays",
  },
];

export type Dish = { name: string; note: string; tags?: string[] };
export type MenuCourse = { id: string; label: string; image: string; dishes: Dish[] };

export const menu: MenuCourse[] = [
  {
    id: "mezze",
    label: "Mezze",
    image: "/img/figs.jpg",
    dishes: [
      { name: "Burrata & heirloom tomatoes", note: "Basil oil, aged balsamic, sea salt", tags: ["Veg"] },
      { name: "Whipped feta", note: "Wild thyme honey, pistachio, warm pita", tags: ["Veg"] },
      { name: "Smoky baba ganoush", note: "Pomegranate, tahini, za'atar flatbread", tags: ["Vegan"] },
      { name: "Fig, prosciutto & olives", note: "Taggiasca olives, rosemary grissini" },
    ],
  },
  {
    id: "crudo",
    label: "Crudo & Starters",
    image: "/img/prawns.jpg",
    dishes: [
      { name: "Sea bream crudo", note: "Blood orange, fennel, Sicilian olive oil", tags: ["Sea"] },
      { name: "Grilled red prawns", note: "Garlic, chili, lemon, parsley", tags: ["Sea"] },
      { name: "Octopus carpaccio", note: "Capers, celery, lemon zest", tags: ["Sea"] },
      { name: "Charred artichokes", note: "Mint, gremolata, aged pecorino", tags: ["Veg"] },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    image: "/img/paella.jpg",
    dishes: [
      { name: "Paella del mar", note: "Saffron rice, mussels, prawns, aioli", tags: ["Sea"] },
      { name: "Salt-baked sea bass", note: "Lemon, herbs, salsa verde", tags: ["Sea"] },
      { name: "Slow-roasted lamb", note: "Rosemary, garlic, smoked aubergine" },
      { name: "Hand-made orecchiette", note: "Broccoli rabe, chili, toasted breadcrumbs", tags: ["Veg"] },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    image: "/img/dessert.jpg",
    dishes: [
      { name: "Olive oil cake", note: "Amalfi lemon, mascarpone, candied peel", tags: ["Veg"] },
      { name: "Pistachio tiramisù", note: "Espresso, Bronte pistachio", tags: ["Veg"] },
      { name: "Crema catalana", note: "Orange blossom, burnt sugar", tags: ["Veg"] },
      { name: "Baklava & petits fours", note: "With coffee and limoncello" },
    ],
  },
];

export const pillars = [
  {
    title: "Mare: the sea",
    text: "Line-caught fish and shellfish, chosen fresh and treated simply: fire, lemon and the best olive oil.",
  },
  {
    title: "Terra: the land",
    text: "Sun-ripened vegetables, herbs and grains, from Mediterranean growers and Swiss farms we know by name.",
  },
  {
    title: "Generous, never heavy",
    text: "Mediterranean cooking is about sharing. Abundant tables, light flavours and dishes made to be passed around.",
  },
  {
    title: "Fully bespoke",
    text: "No fixed packages. Every menu is written for your guests, their dietary needs and the setting.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Conversation",
    text: "Tell us about the occasion, the guests and the place. We reply within 24 hours with first ideas.",
  },
  {
    step: "02",
    title: "Menu design",
    text: "Our chef writes a Mediterranean proposal for your event. For larger occasions we hold a private tasting.",
  },
  {
    step: "03",
    title: "The day",
    text: "We arrive early, set up, cook on site and serve. Every detail is handled discreetly.",
  },
  {
    step: "04",
    title: "Farewell",
    text: "We clear and clean everything before we leave. All that remains is the memory.",
  },
];

export const faqs = [
  {
    q: "Which regions of Switzerland do you serve?",
    a: "We cater across Switzerland, including cities, lakeside villas and mountain chalets. Travel is quoted transparently with your proposal.",
  },
  {
    q: "How far in advance should we book?",
    a: "For private dinners, two to three weeks is usually enough. For weddings and large receptions, we recommend contacting us 3 to 9 months ahead, especially for summer.",
  },
  {
    q: "Can you accommodate dietary requirements?",
    a: "Yes. Mediterranean cooking is naturally rich in vegetarian and vegan dishes, and we also prepare gluten-free, lactose-free, halal and allergy-specific menus with the same care.",
  },
  {
    q: "Do you provide staff, tableware and drinks?",
    a: "We can provide everything: chefs, waiting staff, sommelier, tableware, linen and a curated Mediterranean wine and cocktail selection. Or just the parts you need.",
  },
  {
    q: "Is a tasting possible before the event?",
    a: "For weddings and larger events, a private tasting is part of the menu design process. For smaller dinners, we share detailed menu descriptions and photos.",
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing depends on the menu, number of guests, service style and location. After a short conversation you receive a clear, itemised proposal with no hidden costs.",
  },
];

export const eventTypes = [
  "Private dinner",
  "Wedding",
  "Corporate event",
  "Apéritivo / cocktail",
  "Villa / chalet stay",
  "Something else",
];

export const preferences = [
  "Tasting menu",
  "Sharing / family style",
  "Mezze buffet",
  "Standing apéritivo",
  "Seafood focus",
  "Vegetarian focus",
  "Vegan options",
  "Gluten-free",
  "Wine pairing",
  "Cocktail bar",
];
