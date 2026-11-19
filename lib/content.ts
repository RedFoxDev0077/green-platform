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
    text: "A tasting menu composed for you and served in your home, chalet or villa. Our chef and maître d' handle everything, down to the last glass.",
    image: "/img/salmon.jpg",
    guests: "2 – 24 guests",
  },
  {
    slug: "weddings",
    title: "Weddings & Celebrations",
    kicker: "Once in a lifetime",
    text: "From the welcome apéro to the late-night bites. Each course is designed around your story, the season and the venue.",
    image: "/img/wedding.jpg",
    guests: "30 – 250 guests",
  },
  {
    slug: "corporate",
    title: "Corporate & Receptions",
    kicker: "Impress, effortlessly",
    text: "Board dinners, product launches and client receptions, run with Swiss precision and a calm, discreet team.",
    image: "/img/reception.jpg",
    guests: "10 – 400 guests",
  },
  {
    slug: "apero",
    title: "Apéro Riche & Cocktail",
    kicker: "Standing, sparkling",
    text: "Elegant bites, a curated bar and signature cocktails. Made for long summer evenings and lively gatherings.",
    image: "/img/cocktail.jpg",
    guests: "20 – 300 guests",
  },
  {
    slug: "chalet",
    title: "Chalet & Villa Season",
    kicker: "Your private chef",
    text: "A dedicated chef for the ski week or the lakeside summer: breakfast to dinner, planned around your days.",
    image: "/img/alpine.jpg",
    guests: "Full stays",
  },
];

export type Dish = { name: string; note: string; tags?: string[] };
export type MenuCourse = { id: string; label: string; image: string; dishes: Dish[] };

export const menu: MenuCourse[] = [
  {
    id: "apero",
    label: "Apéro",
    image: "/img/figs.jpg",
    dishes: [
      { name: "Alpine trout tartare", note: "Cucumber, dill crème, rye crisp", tags: ["Lake"] },
      { name: "Gruyère AOP gougères", note: "Warm, with black truffle honey", tags: ["Veg"] },
      { name: "Fig & goat cheese tartlet", note: "Thyme, walnut, aged balsamic", tags: ["Veg"] },
      { name: "Beef tataki", note: "Smoked salt, yuzu kosho, shiso" },
    ],
  },
  {
    id: "starters",
    label: "Starters",
    image: "/img/starter.jpg",
    dishes: [
      { name: "Garden beetroot", note: "Textures of beet, horseradish, hazelnut", tags: ["Vegan"] },
      { name: "Lake Geneva perch", note: "Beurre noisette, capers, lemon pearls", tags: ["Lake"] },
      { name: "Soft-poached farm egg", note: "Morels, asparagus, vin jaune sauce", tags: ["Veg"] },
      { name: "Wild herb velouté", note: "Sorrel, crème fraîche, chive oil", tags: ["Veg"] },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    image: "/img/salmon.jpg",
    dishes: [
      { name: "Swiss beef fillet", note: "Pommes Anna, glazed shallots, jus" },
      { name: "Crisp-skin char", note: "Fennel, saffron beurre blanc, samphire", tags: ["Lake"] },
      { name: "Free-range poultry", note: "Morel cream, spring vegetables" },
      { name: "Celeriac 'steak'", note: "Black garlic, barley risotto, herbs", tags: ["Vegan"] },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    image: "/img/dessert.jpg",
    dishes: [
      { name: "Grand cru Swiss chocolate", note: "Caramel, cocoa nib, sea salt" },
      { name: "Raspberry & vanilla", note: "Mille-feuille, Madagascar vanilla", tags: ["Veg"] },
      { name: "Meringue & double crème", note: "Crème double de la Gruyère, wild berries", tags: ["Veg"] },
      { name: "Petits fours", note: "With coffee and digestifs" },
    ],
  },
];

export const pillars = [
  {
    title: "Seasonal & local",
    text: "Menus follow the Swiss seasons. We cook with produce from farms, dairies and fisheries we know by name.",
  },
  {
    title: "Mindful kitchen",
    text: "Whole-ingredient cooking, planned portions and reusable service ware. Generous for you, gentle on the land.",
  },
  {
    title: "Discreet service",
    text: "Our team works quietly in the background, so you can stay with your guests.",
  },
  {
    title: "Fully bespoke",
    text: "No fixed packages. Every menu is written for your guests, dietary needs and setting.",
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
    text: "Our chef writes a proposal for your event. For larger occasions we hold a private tasting.",
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
    a: "For private dinners, two to three weeks is usually enough. For weddings and large receptions, we recommend contacting us 3 to 9 months ahead, especially for summer and the ski season.",
  },
  {
    q: "Can you accommodate dietary requirements?",
    a: "Yes. Vegetarian, vegan, gluten-free, lactose-free, halal and allergy-specific menus are designed with the same care as every other course.",
  },
  {
    q: "Do you provide staff, tableware and drinks?",
    a: "We can provide everything: chefs, waiting staff, sommelier, tableware, linen and a curated wine and cocktail selection. Or just the parts you need.",
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
  "Apéro / cocktail",
  "Chalet / villa stay",
  "Something else",
];

export const preferences = [
  "Tasting menu",
  "Sharing / family style",
  "Buffet",
  "Standing apéro",
  "Vegetarian focus",
  "Vegan options",
  "Gluten-free",
  "Wine pairing",
  "Cocktail bar",
];
