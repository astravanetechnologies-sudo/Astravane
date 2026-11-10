/* Portfolio content. Images live in public/work/<slug>/ as <file>.webp plus a smaller <file>-sm.webp.
   image-sizes.json holds each picture's pixel size so the page can reserve space before it loads. */
import sizes from "./image-sizes.json";

const base = import.meta.env.BASE_URL;

/** kind: "screen" (wide screenshot), "cover" (composed overview), "phone" (portrait screenshot). */
function gallery(slug, items) {
  return items.map(([file, caption, kind = "screen"]) => {
    const [w, h] = sizes[`${slug}/${file}`] ?? [1600, 1000];
    return { src: `${base}work/${slug}/${file}.webp`, sm: `${base}work/${slug}/${file}-sm.webp`, w, h, caption, kind };
  });
}

export const categories = [
  { id: "all", label: "All work" },
  { id: "platform", label: "Platforms & ERPs" },
  { id: "webapp", label: "Web apps" },
  { id: "site", label: "Websites & stores" },
  { id: "mobile", label: "Mobile apps" },
];

/* A project with a `url` shows a "Live" badge and a "Visit site" link. Client sites that no longer
   open are listed without one; the old address is kept in a comment beside each. */
export const projects = [
  /* ------------------------------------------------------------ Platforms and business systems */
  {
    slug: "mechamanpro",
    title: "MechaManPro",
    kind: "platform",
    label: "Automotive platform",
    industry: "Automotive",
    frame: "browser",
    tagline: "Workshop management for garages and MOT centres",
    summary: "A workshop management platform that follows every vehicle from check-in to invoice.",
    points: [
      "Reception check-in, a live workshop board and a mechanic portal with MOT checklists, parts and labour.",
      "Appointments, customer records with ledgers and loyalty tiers, staff availability and low-stock alerts.",
      "Billing and point of sale, a general-ledger economy tracker and a built-in AI diagnostics assistant.",
    ],
    features: ["Reception & check-in", "Live workshop board", "MOT checklists", "Appointments", "Customer ledgers", "Parts inventory", "Billing / POS", "AI diagnostics"],
    tags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
    images: gallery("mechamanpro", [
      ["01-dashboard", "Dashboard: revenue, bays, bookings and stock alerts at a glance"],
      ["02-live-board", "Live board: every vehicle by workshop stage"],
      ["03-mechanic-portal", "Mechanic portal: MOT checklist, parts and labour"],
    ]),
  },
  {
    slug: "emr",
    title: "Hospital Management System",
    kind: "platform",
    label: "Healthcare platform",
    industry: "Healthcare",
    frame: "browser",
    tagline: "One patient record across the whole hospital",
    summary: "An integrated hospital information system (HMIS / EMR) covering registration, outpatient care, billing and medical records.",
    points: [
      "Front office: patient registration, appointment scheduling, queue management and inquiries.",
      "Outpatient clinical workspace: triage, consultations, SOAP notes, diagnostic and pharmacy referrals.",
      "Billing and receivables, medical records with an audit trail, critical care and sterile supply tracking.",
    ],
    features: ["Patient registration", "Appointments & queues", "OPD triage", "Clinical notes (SOAP)", "Lab & radiology orders", "e-Prescriptions", "Billing", "ICU & CSSD"],
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
    images: gallery("emr", [
      ["04-opd", "Outpatient queue: triage, vitals and encounter status"],
      ["06-diagnostics", "Diagnostics: lab and radiology orders"],
      ["09-billing", "Billing: invoices and accounts receivable"],
    ]),
  },

  {
    slug: "shusui-erp",
    title: "Shusui-V4 ERP",
    kind: "platform",
    label: "ERP",
    industry: "Retail & E-commerce",
    frame: "browser",
    summary: "An ERP for retailers and wholesalers that runs sales, purchasing, stock and accounts across every shop and warehouse in one system.",
    points: [
      "Point of sale with barcode search, pricing per metre, yard or piece, held sales, bill discounts and sales tax.",
      "Quotations, sales orders, invoices, receipts and returns, plus purchase orders, goods receipts, supplier bills and payments.",
      "Stock on hand across every warehouse and shop at moving-average cost, with rolls and batches, reorder levels and reorder suggestions.",
      "Dashboard and reports: sales, gross and net profit, expenses, receivables, payables, cash and bank, and stock value.",
    ],
    features: ["Point of sale", "Quotations & sales orders", "Invoices & receipts", "Purchasing & supplier bills", "Multi-warehouse stock", "Rolls & batches", "Reorder suggestions", "Profit & cash dashboard"],
    tags: ["Next.js", "React", "TypeScript", "Firebase", "Tailwind CSS"],
    images: gallery("shusui-erp", [
      ["01-dashboard", "Dashboard: sales, profit, receivables, cash and stock value"],
      ["02-pos", "Point of sale: product search, cart and payment"],
      ["03-stock-on-hand", "Stock on hand: quantities and value in every warehouse"],
    ]),
  },
  {
    slug: "car-auction-platform",
    title: "Japanese Car Auction Platform",
    kind: "platform",
    label: "Auction platform",
    industry: "Automotive",
    frame: "browser",
    summary: "A platform for Japanese used-car exporters: each licensee runs its own buyer portal and back office, and a command centre oversees every portal.",
    points: [
      "Buyer portal: auction lots, stock, bids and favourites, and a step-by-step tracker for every car won, from invoice and payment to shipping and documents.",
      "Back office: bid desk, purchases and shipping, payments with telegraphic transfer checks, buyers, inbox and email. Each step updates the buyer's timeline and notifies them.",
      "Command centre: licensees and licence billing, live activity, bids, win rate and value won across every portal.",
    ],
    features: ["Auction lots & bidding", "Bid desk", "Purchase tracking", "Shipping & documents", "Invoices & TT payments", "Buyer notifications", "Multi-licensee portals", "Licence billing"],
    tags: ["Multi-tenant", "Buyer portal", "Back office"],
    images: gallery("car-auction-platform", [
      ["01-buyer-purchase", "Buyer portal: a won car from auction to delivery"],
      ["02-back-office", "Back office: purchases and shipping"],
      ["03-command-centre", "Command centre: every licensee at a glance"],
    ]),
  },

  /* ------------------------------------------------------------ Websites and online stores */
  {
    slug: "alpha-builders",
    title: "Alpha Builders Group",
    kind: "site",
    label: "Company website",
    industry: "Construction & Real Estate",
    frame: "browser",
    url: "https://alphabuildersgroup.com/",
    address: "alphabuildersgroup.com",
    summary: "Marketing website for a luxury custom home builder in Austin, Texas.",
    points: [
      "Multi-page site covering services, project portfolio, blog and FAQ.",
      "An estimate request call to action carried through every page.",
      "Built on WordPress and responsive across devices.",
    ],
    tags: ["WordPress", "Elementor", "Responsive"],
    images: gallery("alpha-builders", [
      ["01-home", "Home page"],
      ["02-services", "Services overview"],
      ["03-about", "Company story"],
      ["04-projects", "Project showcase and reasons to choose the builder"],
      ["05-why-alpha", "Building and civil construction section"],
      ["06-service-page", "Service page: design and interior decoration"],
      ["07-blog", "Blog"],
    ]),
  },
  {
    slug: "z6-consulting",
    title: "Zero/Six Consulting",
    kind: "site",
    label: "Company website",
    industry: "Construction & Real Estate",
    frame: "browser",
    url: "https://www.z6consulting.com/",
    address: "z6consulting.com",
    summary: "Website for a building-envelope consulting firm, covering expertise, projects, education and resources.",
    points: [
      "A deep service structure with dedicated pages for commissioning, peer reviews, inspections and testing.",
      "Project showcase, leadership team and training course pages.",
      "Built on WordPress and responsive across devices.",
    ],
    tags: ["WordPress", "Elementor", "Responsive"],
    images: gallery("z6-consulting", [
      ["01-home", "Home page"],
      ["02-about", "About the firm"],
      ["03-projects", "Projects"],
      ["04-expertise", "Areas of expertise"],
      ["05-leadership", "Leadership team"],
      ["06-pre-construction", "Service page: pre-construction project management"],
      ["07-training", "Training course page"],
      ["08-overview", "Site overview", "cover"],
    ]),
  },
  {
    slug: "mluqman-attar-house",
    title: "M Luqman Attar House",
    kind: "site",
    label: "Online store",
    industry: "Retail & E-commerce",
    frame: "browser",
    url: "https://mluqmanattarhouse.com/",
    address: "mluqmanattarhouse.com",
    summary: "Online fragrance store for an attar and perfume house in Pakistan.",
    points: [
      "Storefront with collections for attars, perfumes and best sellers, plus seasonal sale campaigns.",
      "Brand visuals and banners for the store.",
      "Product pages with pricing, discounts and WhatsApp contact.",
    ],
    tags: ["Shopify", "E-commerce", "Branding"],
    images: gallery("mluqman-attar-house", [
      ["01-home", "Storefront home page"],
      ["02-best-sellers", "Best-selling and luxury perfumes"],
      ["03-collections", "Attar collections"],
      ["04-campaign", "Sale campaign banner"],
      ["05-brand-banner", "Brand banner", "cover"],
      ["06-earlier-storefront", "Earlier storefront design"],
      ["07-earlier-products", "Earlier storefront: products and reviews"],
      ["08-mobile", "Mobile storefront", "phone"],
    ]),
  },
  {
    slug: "access-ability-assist",
    title: "Access Ability Assist",
    kind: "site",
    label: "Company website",
    industry: "Healthcare",
    frame: "browser",
    url: "https://accessabilityassist.com.au/",
    address: "accessabilityassist.com.au",
    summary: "Website for a registered NDIS disability support provider in Melbourne.",
    points: [
      "Clear service pages for support coordination, accommodation, daily living and transport.",
      "Built with accessibility in mind: readable type, clear structure and simple navigation.",
      "Built on WordPress and responsive across devices.",
    ],
    tags: ["WordPress", "Accessibility", "Responsive"],
    images: gallery("access-ability-assist", [
      ["01-home", "Home page"],
      ["02-support", "Support services introduction"],
      ["03-services", "Service catalogue"],
      ["04-approach", "NDIS support services"],
      ["05-values", "Core values section"],
      ["06-overview", "Site overview", "cover"],
    ]),
  },
  {
    slug: "work-supplies",
    title: "Work Supplies",
    kind: "site",
    label: "Online store",
    industry: "Retail & E-commerce",
    frame: "plain",
    // Not linked: https://worksupplies.net.au/ answered with a security block page when checked on 10 Oct 2026.
    // Add  url: "https://worksupplies.net.au/", address: "worksupplies.net.au"  here if it opens normally for you.
    summary: "Online store for an Australian workplace and office supplies retailer.",
    points: [
      "Large catalogue organised by category, from safety gear and printers to janitorial and packaging.",
      "Product search, cart and checkout.",
      "Built on WordPress.",
    ],
    tags: ["WordPress", "E-commerce"],
    images: gallery("work-supplies", [
      ["01-overview", "Store overview", "cover"],
      ["02-storefront", "Storefront header and category navigation"],
    ]),
  },
  {
    slug: "mertzon-construction",
    title: "Mertzon Construction",
    kind: "site",
    label: "Company website",
    industry: "Construction & Real Estate",
    frame: "browser",
    // Not linked: the old preview address https://mertzon.previewbiz.com/ no longer opens (checked 10 Oct 2026).
    summary: "Website for a Houston construction company, presenting its services and project delivery systems.",
    points: [
      "Sections for pre-construction, construction services and project delivery systems.",
      "Contact page with a map and an enquiry form.",
    ],
    tags: ["Corporate website", "Responsive"],
    images: gallery("mertzon-construction", [
      ["01-home", "Home page"],
      ["02-services", "Construction services"],
      ["03-contact", "Contact page with map"],
      ["04-brand", "Brand splash screen"],
    ]),
  },
  {
    slug: "the-animal-clinic",
    title: "The Animal Clinic",
    kind: "site",
    label: "Company website",
    industry: "Healthcare",
    frame: "browser",
    // Not linked: the old preview address https://animalclinic.previewbiz.com/ no longer opens (checked 10 Oct 2026).
    summary: "Website for a long-established veterinary clinic in Galveston, Texas.",
    points: [
      "About, services and contact pages with a friendly, approachable look.",
      "Service request and appointment forms.",
    ],
    tags: ["Website", "Forms"],
    images: gallery("the-animal-clinic", [
      ["01-about", "About the clinic"],
      ["02-request-service", "Request a service"],
      ["03-contact", "Contact page"],
      ["04-overview", "Site overview", "cover"],
    ]),
  },
  {
    slug: "taok-visuals",
    title: "TAOK Visuals",
    kind: "site",
    label: "Company website",
    industry: "Media & Entertainment",
    frame: "browser",
    // Not linked: https://toakvisual.com/ is no longer registered (checked 10 Oct 2026).
    summary: "Website for a veteran-owned creative media studio with rentable studio space.",
    points: [
      "Pages for studio spaces, packages, services, blog and FAQ.",
      "A dark, media-led design built around the studio's own visuals.",
    ],
    tags: ["Website", "Dark theme"],
    images: gallery("taok-visuals", [
      ["01-about", "About the studio"],
      ["02-brand", "Brand splash screen"],
      ["03-faq", "Frequently asked questions"],
      ["04-overview", "Site overview", "cover"],
    ]),
  },
  {
    slug: "rickys-dry-cleaners",
    title: "Ricky's Dry Cleaners",
    kind: "site",
    label: "Company website",
    industry: "Local Services",
    frame: "browser",
    // Not linked: https://rickydrycleaners.com/ is no longer registered (checked 10 Oct 2026).
    summary: "Website for a Houston dry cleaner offering pick-up and delivery.",
    points: [
      "Service pages, service-area pages and a prominent option to schedule a pickup.",
      "About and FAQ sections that set out the company's commitments.",
    ],
    tags: ["Website", "Local services"],
    images: gallery("rickys-dry-cleaners", [
      ["01-pickup-delivery", "Pick-up and delivery service"],
      ["02-service-areas", "Service areas"],
      ["03-commitment", "Company commitments"],
      ["04-overview", "Site overview", "cover"],
    ]),
  },

  /* ------------------------------------------------------------ Web apps */
  {
    slug: "bookify",
    title: "Bookify",
    kind: "webapp",
    label: "Web app",
    industry: "Education & Productivity",
    frame: "plain",
    summary: "An online library where readers browse by genre, read or download books and manage their account.",
    points: [
      "Book catalogue organised by genre with detail pages, reading and download options.",
      "Reader accounts with sign-in and a chat room.",
    ],
    features: ["Genre catalogue", "Read online", "PDF downloads", "Reader accounts", "Chat room"],
    tags: ["React", "Node.js"],
    images: gallery("bookify", [
      ["01-cover", "Bookify overview", "cover"],
      ["02-home", "Home page"],
      ["03-library", "Library by genre"],
      ["04-book", "Book detail page"],
      ["05-sign-in", "Sign in"],
    ]),
  },
  {
    slug: "wheels-and-deals",
    title: "Wheels & Deals",
    kind: "webapp",
    label: "Marketplace",
    industry: "Automotive",
    frame: "plain",
    summary: "A used-car marketplace: search listings, sell a car and browse by make.",
    points: [
      "Search and browse used cars by make, with a bold, sporty look.",
      "Seller flow for listing a car, plus buyer and seller accounts.",
    ],
    features: ["Used-car search", "Browse by make", "Sell-your-car flow", "Buyer & seller accounts"],
    tags: ["Marketplace", "Web app"],
    images: gallery("wheels-and-deals", [
      ["01-cover", "Wheels & Deals overview", "cover"],
      ["02-home", "Home page and search"],
      ["03-sell", "Sell your car"],
      ["04-services", "Services"],
      ["05-sign-in", "Sign in and sign up"],
    ]),
  },
  {
    slug: "krayana-near-me",
    title: "KrayanaNearme",
    kind: "webapp",
    label: "Marketplace",
    industry: "Retail & E-commerce",
    frame: "plain",
    summary: "A grocery platform that helps shoppers find nearby stores and order everyday items.",
    points: [
      "Nearby shop discovery with featured stores and top-rated products.",
      "Product browsing with filters, product pages and cart.",
    ],
    features: ["Nearby shop discovery", "Featured stores", "Product filters", "Cart"],
    tags: ["Location-based", "Google Maps", "Firebase"],
    images: gallery("krayana-near-me", [
      ["01-cover", "KrayanaNearme overview", "cover"],
      ["02-shops", "Featured shops"],
      ["03-products", "Product listing with filters"],
      ["04-product", "Product page"],
    ]),
  },
  {
    slug: "play-prism",
    title: "Play Prism",
    kind: "webapp",
    label: "Web app",
    industry: "Media & Entertainment",
    frame: "plain",
    summary: "A gaming lounge web app: browse PC and console titles, book play sessions and shop accessories.",
    points: [
      "Game catalogue for PC and console with session booking by the hour.",
      "Accessories store with cart and checkout.",
    ],
    tags: ["Booking", "E-commerce"],
    images: gallery("play-prism", [
      ["01-cover", "Play Prism overview", "cover"],
      ["02-store", "PC accessories store"],
      ["03-pc-games", "PC games"],
      ["04-console-games", "Console games and booking"],
      ["05-cart", "Cart and checkout"],
    ]),
  },
  {
    slug: "ai-fitex",
    title: "AI Fitex",
    kind: "webapp",
    label: "AI web app",
    industry: "Fitness & Wellness",
    frame: "plain",
    summary: "An AI fitness trainer on the web, with daily tips, chat-style coaching and subscriptions.",
    points: ["AI trainer chat, daily fitness tips and subscription plans."],
    tags: ["AI", "Web app"],
    images: gallery("ai-fitex", [["01-cover", "AI Fitex overview", "cover"]]),
  },
  {
    slug: "management-suite",
    title: "Management Suite",
    kind: "platform",
    label: "Manufacturing system",
    industry: "Manufacturing",
    frame: "plain",
    summary: "A production management and planning system with dashboards for planning and progress.",
    points: ["Production planning dashboards and progress tracking."],
    features: ["Production planning", "Progress dashboards"],
    tags: ["Dashboard", "Operations"],
    images: gallery("management-suite", [["01-cover", "Management Suite overview", "cover"]]),
  },
  {
    slug: "mealover",
    title: "Mealover",
    kind: "webapp",
    label: "Web app",
    industry: "Food & Travel",
    frame: "plain",
    summary: "A food-ordering web app with restaurant listings, menus and a cart.",
    points: ["Restaurant listings by cuisine, menus, deals and cart."],
    tags: ["Food ordering", "Web app"],
    images: gallery("mealover", [["01-cover", "Mealover overview", "cover"]]),
  },

  /* ------------------------------------------------------------ Mobile apps */
  {
    slug: "fitflex",
    title: "FitFlex",
    kind: "mobile",
    label: "Mobile app",
    industry: "Fitness & Wellness",
    frame: "plain",
    summary: "A fitness app with trainer profiles, appointment booking and personalised meal plans.",
    points: [
      "Trainer profiles with ratings, working hours and appointment booking.",
      "Meal plan builder and account sign-up with social login.",
    ],
    tags: ["Flutter", "iOS & Android"],
    images: gallery("fitflex", [
      ["01-cover", "FitFlex overview", "cover"],
      ["02-welcome", "Welcome screen", "phone"],
      ["03-trainer", "Trainer profile", "phone"],
      ["04-meal-plan", "Meal plan builder", "phone"],
      ["05-sign-up", "Create an account", "phone"],
    ]),
  },
  {
    slug: "morbal",
    title: "Morbal",
    kind: "mobile",
    label: "Mobile app",
    industry: "Retail & E-commerce",
    frame: "plain",
    summary: "A shopping app for bags and apparel with catalogue, product pages and checkout.",
    points: [
      "Category browsing, product pages with colour options, cart and checkout.",
      "Interface designed in Figma and built with Flutter.",
    ],
    tags: ["Flutter", "Figma", "E-commerce"],
    images: gallery("morbal", [
      ["01-cover", "Morbal overview", "cover"],
      ["02-home", "Home and categories", "phone"],
      ["03-product", "Product page", "phone"],
      ["04-sign-in", "Sign in", "phone"],
      ["05-design-board", "Design board in Figma"],
    ]),
  },
  {
    slug: "flowo",
    title: "Flowo",
    kind: "mobile",
    label: "Mobile app",
    industry: "Retail & E-commerce",
    frame: "plain",
    summary: "A flower shop app with catalogue, product details, cart and store inventory tools.",
    points: [
      "Shopper flow for browsing, product details and cart.",
      "Shop-side tools for inventory and adding products.",
      "Interface designed in Figma and built with React Native.",
    ],
    tags: ["React Native", "Figma", "E-commerce"],
    images: gallery("flowo", [
      ["01-cover", "Flowo overview", "cover"],
      ["02-welcome", "Welcome and login", "phone"],
      ["03-menu", "Menu", "phone"],
      ["04-catalogue", "New products", "phone"],
      ["05-product", "Product details", "phone"],
      ["06-design-board", "Design board in Figma"],
    ]),
  },
  {
    slug: "caft",
    title: "CAFT",
    kind: "mobile",
    label: "Mobile app",
    industry: "Automotive",
    frame: "plain",
    summary: "A vehicle tracking app with live location, trip history, fuel and performance summaries.",
    points: [
      "Live vehicle tracking on a map with status and alerts.",
      "Daily and weekly summaries for distance, fuel and running cost.",
    ],
    tags: ["Flutter", "Firebase", "Maps"],
    images: gallery("caft", [
      ["01-cover", "CAFT overview", "cover"],
      ["02-vehicle-summary", "Vehicle summary", "phone"],
      ["03-live-tracking", "Live tracking", "phone"],
      ["04-fuel-summary", "Fuel summary", "phone"],
    ]),
  },
  {
    slug: "funitur",
    title: "Funitur",
    kind: "mobile",
    label: "Mobile app",
    industry: "Retail & E-commerce",
    frame: "plain",
    summary: "A furniture shopping app with categories, product pages and add to cart.",
    points: ["Browse by category, view product details and colour options, add to cart."],
    tags: ["Flutter", "E-commerce"],
    images: gallery("funitur", [
      ["01-cover", "Funitur overview", "cover"],
      ["02-product", "Product page", "phone"],
      ["03-categories", "Browse by category", "phone"],
      ["04-catalogue", "Catalogue in landscape"],
      ["05-detail", "Product detail in landscape"],
    ]),
  },
  {
    slug: "eat-bite",
    title: "Eat Bite",
    kind: "mobile",
    label: "Mobile app",
    industry: "Food & Travel",
    frame: "plain",
    summary: "A restaurant discovery app with trending places, categories and profiles.",
    points: ["Trending restaurants, cuisine categories, friends activity and user profiles."],
    tags: ["Mobile app", "Food"],
    images: gallery("eat-bite", [["01-cover", "Eat Bite overview", "cover"]]),
  },
  {
    slug: "listex",
    title: "Listex",
    kind: "mobile",
    label: "Mobile app",
    industry: "Education & Productivity",
    frame: "plain",
    summary: "A task and to-do app with daily lists and progress tracking.",
    points: ["Daily task lists, custom lists and completion progress."],
    tags: ["Mobile app", "Productivity"],
    images: gallery("listex", [["01-cover", "Listex overview", "cover"]]),
  },
  {
    slug: "travelos",
    title: "Travelos",
    kind: "mobile",
    label: "Mobile app",
    industry: "Food & Travel",
    frame: "plain",
    summary: "A travel app for discovering destinations and booking stays.",
    points: ["Destination discovery, recommendations and stay booking."],
    tags: ["Mobile app", "Travel"],
    images: gallery("travelos", [["01-cover", "Travelos overview", "cover"]]),
  },
];

/* Software (platforms, web apps, mobile apps) shows at most three screens; websites show every page. */
export const SOFTWARE_SCREENS = 3;
for (const p of projects) if (p.kind !== "site") p.images = p.images.slice(0, SOFTWARE_SCREENS);

/* Small fixed-shape cover used by the moving wall in the hero and the "What we build" tiles. */
for (const p of projects) p.thumb = p.images[0].sm.replace("-sm.webp", "-xs.webp");

/** For <img onError>: a project without the small thumbnail shows its normal cover instead. */
export function fallbackCover(event, project) {
  const img = event.currentTarget;
  if (!img.src.endsWith(project.images[0].sm)) img.src = project.images[0].sm;
}

export const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));

/* Systems featured in the Platforms section, in order. */
export const showcase = ["mechamanpro", "emr", "shusui-erp", "car-auction-platform", "management-suite", "wheels-and-deals", "bookify", "krayana-near-me"].map((slug) => bySlug[slug]);

export const totalPictures = projects.reduce((n, p) => n + p.images.length, 0);
