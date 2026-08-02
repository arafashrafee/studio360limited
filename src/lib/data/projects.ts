import type { Project } from "@/types";

function gallery(slug: string, count: number) {
  return Array.from({ length: count }, (_, i) => `/projects/${slug}/${i + 1}.png`);
}

export const projects: Project[] = [
  {
    slug: "al-alakaba",
    title: "Al Alakaba",
    category: "Architecture",
    typology: "Mixed-Use Concept Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/al-alakaba/1.png",
    gallery: gallery("al-alakaba", 3),
    excerpt:
      "An early-stage concept study exploring curved massing against a rectilinear skyline.",
    description: [
      "Al Alakaba was developed as a concept study — a chance to test how a curved, banded volume could sit against the rigid grid of a typical commercial skyline without disappearing into it.",
      "The study explores a red masonry service core against a glazed, curving office volume, a contrast carried through in material and geometry alike.",
    ],
    services: ["Architecture"],
    featured: true,
  },
  {
    slug: "aholi-mansion",
    title: "Aholi Mansion",
    category: "Residential",
    typology: "Residential Apartment Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/aholi-mansion/1.png",
    gallery: gallery("aholi-mansion", 4),
    excerpt:
      "A landscaped residential tower where every balcony doubles as a garden ledge.",
    description: [
      "Aholi Mansion stacks private residences behind a facade that treats greenery as a structural material, not an afterthought. Planter ledges wrap the elevation floor by floor, softening the building's profile against the street.",
      "The ground floor is pulled back to give residents a shaded arrival court, separating pedestrian entry from the vehicle ramp without walling the building off from its neighborhood.",
    ],
    services: ["Architecture", "Construction"],
  },
  {
    slug: "habib",
    title: "Habib",
    category: "Residential",
    typology: "Residential Apartment Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/habib/1.png",
    gallery: gallery("habib", 3),
    excerpt:
      "A brick-clad residential tower that reads as warm and material against a glass-heavy skyline.",
    description: [
      "Habib takes a familiar apartment typology and reworks its facade around a single move: a full-height brick spine flanked by deep, planted balconies on either side, giving every unit a private outdoor room.",
      "Against a backdrop of glass towers, the building's terracotta and brick palette was a deliberate choice — a residential address that reads as textured and grounded rather than corporate.",
    ],
    services: ["Architecture", "Engineering"],
    featured: true,
  },
  {
    slug: "jolshiri",
    title: "Jolshiri",
    category: "Residential",
    typology: "Residential Apartment Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/jolshiri/1.png",
    gallery: gallery("jolshiri", 3),
    excerpt:
      "A slender residential tower with a rooftop canopy of trees planted three storeys above the street.",
    description: [
      "Jolshiri's massing narrows as it rises, freeing a rooftop terrace large enough to plant mature trees above the top floor — a private grove visible from blocks away once the canopy fills in.",
      "Timber soffits and recessed lighting warm each balcony, giving the tower a quiet, lantern-like presence after dark.",
    ],
    services: ["Architecture", "Interior Design"],
    featured: true,
  },
  {
    slug: "rich-properties",
    title: "Rich Properties",
    category: "Commercial",
    typology: "Commercial Office Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/rich-properties/1.png",
    gallery: gallery("rich-properties", 3),
    excerpt:
      "A slim glass office tower designed to stand apart on a dense commercial skyline.",
    description: [
      "Rich Properties compresses a full office program onto a narrow footprint, using a folded glass curtain wall to break up what would otherwise be a flat, featureless tower face.",
      "A rooftop communications mast and a sculptural crown give the building a distinct silhouette day and night, useful signage for a client competing for visibility on a crowded street.",
    ],
    services: ["Architecture", "Engineering", "Space Maker"],
    featured: true,
  },
  {
    slug: "shuchana",
    title: "Shuchana",
    category: "Residential",
    typology: "Residential Apartment Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/shuchana/1.png",
    gallery: gallery("shuchana", 3),
    excerpt:
      "A brick-and-white residential building organized around a rounded corner entry.",
    description: [
      "Shuchana's massing turns a tight corner site into an advantage — a rounded stair volume marks the entry and gives the building a soft edge against the street on both frontages.",
      "Alternating brick and rendered-white bays give the facade rhythm without relying on applied ornament, keeping long-term maintenance simple for the owners.",
    ],
    services: ["Architecture", "Construction"],
    featured: true,
  },
  {
    slug: "suchana-development-house",
    title: "Suchana Development House",
    category: "Commercial",
    typology: "Mixed-Use Retail & Residential Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/suchana-development-house/1.png",
    gallery: gallery("suchana-development-house", 3),
    excerpt:
      "A mixed-use tower with a double-height retail podium anchoring a busy street corner.",
    description: [
      "Suchana Development House stacks a glazed retail podium beneath residential and office floors, giving ground-floor tenants full-height street visibility while keeping upper floors quiet and private.",
      "Vertical brise-soleil fins on the tower's upper register cut solar gain on the west face while giving the building a distinct rhythm against its glass-box neighbors.",
    ],
    services: ["Architecture", "Space Maker"],
    featured: true,
  },
  {
    slug: "nexus-boulevard",
    title: "Nexus Boulevard",
    category: "Residential",
    typology: "Residential Apartment Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/nexus-boulevard/1.png",
    gallery: gallery("nexus-boulevard", 9),
    excerpt:
      "A residential tower with a full-height green spine and ground-floor retail frontage.",
    description: [
      "Nexus Boulevard wraps a slim residential tower around a planted vertical spine, giving every unit a layer of greenery between the living space and the street below.",
      "A double-height retail frontage at grade activates the boulevard, giving the tower a public presence beyond its residential upper floors.",
    ],
    services: ["Architecture"],
  },
  {
    slug: "coxs-bazar-hotel",
    title: "Cox's Bazar Hotel",
    category: "Commercial",
    typology: "Beachfront Hotel Tower",
    location: "Cox's Bazar, Bangladesh",
    coverImage: "/projects/coxs-bazar-hotel/1.png",
    gallery: gallery("coxs-bazar-hotel", 3),
    excerpt:
      "A brick-clad hotel tower designed for long sightlines across the coastline.",
    description: [
      "Cox's Bazar Hotel stacks guest floors above a masonry base, with deep balconies on every room oriented to maximize coastal views.",
      "The brick and white-render palette was chosen to weather well in a salt-air climate, keeping long-term maintenance costs down for the operator.",
    ],
    services: ["Architecture", "Construction"],
  },
  {
    slug: "green-bay",
    title: "Green Bay",
    category: "Residential",
    typology: "Residential Apartment Towers",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/green-bay/1.png",
    gallery: gallery("green-bay", 3),
    excerpt:
      "Twin residential towers split by a shared planted breezeway.",
    description: [
      "Green Bay splits a single large residential program into two slender towers separated by a narrow breezeway, improving natural ventilation and daylight to every unit.",
      "Rooftop pavilions cap each tower, giving upper-floor residents private outdoor rooms above the surrounding skyline.",
    ],
    services: ["Architecture"],
  },
  {
    slug: "hotel-midway",
    title: "Hotel Midway",
    category: "Commercial",
    typology: "Hotel & Office Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/hotel-midway/1.png",
    gallery: gallery("hotel-midway", 3),
    excerpt:
      "A sculptural high-rise with a faceted glass crown marking the city skyline.",
    description: [
      "Hotel Midway breaks from the flat-faced tower typology with a folded, faceted upper register that catches light differently through the day.",
      "A cantilevered sky terrace midway up the tower gives guests a dramatic pause point between the lower office floors and upper guest rooms.",
    ],
    services: ["Architecture", "Engineering"],
  },
  {
    slug: "jolshiri-project-2",
    title: "Jolshiri Project 2",
    category: "Residential",
    typology: "Residential Apartment Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/jolshiri-project-2/1.png",
    gallery: gallery("jolshiri-project-2", 3),
    excerpt:
      "A stone-clad residential tower with a rooftop tree marking the skyline.",
    description: [
      "This second Jolshiri commission takes a quieter material approach than its neighbor — warm stone cladding and timber accents replace brick, with a single rooftop tree left as the building's only ornament.",
      "Ground-floor retail units give the tower street-level activity without compromising the privacy of the residences above.",
    ],
    services: ["Architecture", "Interior Design"],
  },
  {
    slug: "jolshiri-project-3",
    title: "Jolshiri Project 3",
    category: "Residential",
    typology: "Residential Apartment Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/jolshiri-project-3/1.png",
    gallery: gallery("jolshiri-project-3", 3),
    excerpt:
      "A corner residential tower with terracotta banding against a white frame.",
    description: [
      "The third tower in the Jolshiri series sits on a prominent corner site, using terracotta banding against a white structural frame to give the building a clear address from both approaching streets.",
      "Deep-set balconies wrap the corner, giving every unit dual-aspect views over the surrounding neighborhood.",
    ],
    services: ["Architecture", "Construction"],
  },
  {
    slug: "keshwani-hospital",
    title: "Keshwani Hospital",
    category: "Institutional",
    typology: "Hospital Tower",
    location: "Chattogram, Bangladesh",
    coverImage: "/projects/keshwani-hospital/1.png",
    gallery: gallery("keshwani-hospital", 6),
    excerpt:
      "A glazed hospital tower set within an open green campus.",
    description: [
      "Keshwani Hospital was planned around daylight and orientation — patient floors wrap a glazed curtain wall facing the adjacent park, while service cores sit on the building's western face to buffer afternoon heat.",
      "Planted terraces break up the tower's height at intervals, giving staff and visitors accessible outdoor space on multiple floors rather than confining it to the ground plane.",
    ],
    services: ["Architecture", "Engineering"],
  },
  {
    slug: "khorshed-alam-residence",
    title: "Khorshed Alam Residence",
    category: "Residential",
    typology: "Residential Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/khorshed-alam-residence/1.png",
    gallery: gallery("khorshed-alam-residence", 3),
    excerpt:
      "A glass-and-stone residential tower set among a dense mixed-use block.",
    description: [
      "This private residential commission pairs a full glass curtain wall on one face with a solid stone-clad service core on the other, giving the tower a clear front and back within a dense urban block.",
      "Planted vertical louvres on the service face soften the tower's silhouette and provide shading to the units behind it.",
    ],
    services: ["Architecture", "Engineering"],
  },
  {
    slug: "navana-dhanshiri",
    title: "Navana Dhanshiri",
    category: "Commercial",
    typology: "Commercial Showroom Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/navana-dhanshiri/1.png",
    gallery: gallery("navana-dhanshiri", 3),
    excerpt:
      "A faceted showroom tower designed to read clearly after dark.",
    description: [
      "Navana Dhanshiri wraps a ground-floor automotive showroom in full-height glazing, with a folded metal-panel tower above lit to stay legible against the night skyline.",
      "The building's angular massing was driven by sightlines from the adjacent boulevard, ensuring the showroom signage remains visible from both directions of traffic.",
    ],
    services: ["Architecture", "Space Maker"],
  },
  {
    slug: "reza-residence",
    title: "Reza Residence",
    category: "Residential",
    typology: "Residential Apartment Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/reza-residence/1.png",
    gallery: gallery("reza-residence", 3),
    excerpt:
      "A terracotta-and-white residential tower with a folded rooftop canopy.",
    description: [
      "Reza Residence uses a simple material palette — white render and terracotta banding — to give a mid-rise residential tower a calm, consistent street presence.",
      "A folded canopy at roof level shelters the building's communal terrace, the only shared amenity space built into an otherwise fully private residential plan.",
    ],
    services: ["Architecture", "Construction"],
  },
  {
    slug: "salsabil-city-center",
    title: "Salsabil City Center",
    category: "Commercial",
    typology: "Mixed-Use Retail & Residential Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/salsabil-city-center/1.png",
    gallery: gallery("salsabil-city-center", 3),
    excerpt:
      "A retail podium and residential tower anchoring a major street corner.",
    description: [
      "Salsabil City Center stacks a full-glazed, double-height retail podium beneath a residential tower, giving ground-floor tenants maximum street frontage on a high-traffic corner.",
      "Recessed upper-floor balconies keep the residential units visually separated from the commercial activity below, while sharing the same structural grid.",
    ],
    services: ["Architecture", "Space Maker"],
  },
  {
    slug: "southern-general-hospital",
    title: "Southern General Hospital",
    category: "Institutional",
    typology: "General Hospital",
    location: "Bangladesh",
    coverImage: "/projects/southern-general-hospital/1.png",
    gallery: gallery("southern-general-hospital", 3),
    excerpt:
      "A completed general hospital delivering care to its surrounding district.",
    description: [
      "Southern General Hospital was designed and delivered as a fully operational district hospital, with a terracotta-and-glass facade chosen for durability and easy maintenance in daily clinical use.",
      "The tower's compact footprint concentrates patient, diagnostic, and administrative floors within a single efficient structure suited to its urban site.",
    ],
    services: ["Architecture", "Engineering", "Construction"],
  },
  {
    slug: "united-city",
    title: "United City",
    category: "Residential",
    typology: "Residential Apartment Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/united-city/1.png",
    gallery: gallery("united-city", 3),
    excerpt:
      "A terracotta-banded residential tower on a tight urban infill site.",
    description: [
      "United City fits a full residential program onto a narrow infill plot, using terracotta banding and deep balconies to break up the tower's height along the street.",
      "A recessed glazed entry at grade separates resident access from the surrounding streetscape, giving the building a quiet, secure arrival sequence.",
    ],
    services: ["Architecture", "Construction"],
  },
  {
    slug: "bahauddin-villa",
    title: "Bahauddin Villa",
    category: "Residential",
    typology: "Residential Apartment Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/bahauddin-villa/1.png",
    gallery: gallery("bahauddin-villa", 6),
    excerpt:
      "A stone-and-glass residential tower with a planted balcony ledge on every floor.",
    description: [
      "Bahauddin Villa wraps a full-height service spine in textured stone, flanked by cantilevered balconies that carry greenery up the building's face floor by floor.",
      "A recessed, arched entry canopy and street-facing wall give residents a quiet buffer from the road while keeping the tower's presence legible from a distance, day or night.",
    ],
    services: ["Architecture", "Construction"],
  },
  {
    slug: "baki-house",
    title: "Baki House",
    category: "Residential",
    typology: "Residential Apartment Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/baki-house/1.png",
    gallery: gallery("baki-house", 3),
    excerpt:
      "A slender tower splitting dark glazed volumes around a warm timber-clad core.",
    description: [
      "Baki House sets two dark, glass-fronted volumes apart, using the gap to thread a timber-toned service core up the building's full height as its defining feature.",
      "Deep balconies on both faces keep the tower legible from the street while giving every unit an outdoor room shielded from direct sun.",
    ],
    services: ["Architecture", "Engineering"],
  },
  {
    slug: "bashundhara-heights",
    title: "Bashundhara Heights",
    category: "Residential",
    typology: "Residential Apartment Tower",
    location: "Bashundhara, Dhaka, Bangladesh",
    coverImage: "/projects/bashundhara-heights/1.png",
    gallery: gallery("bashundhara-heights", 3),
    excerpt:
      "A brick-and-render residential tower composed around a folded corner elevation.",
    description: [
      "Bashundhara Heights alternates brick piers and rendered white bays across a folded elevation, giving the tower a strong vertical rhythm that reads clearly against its neighbors.",
      "A recessed, landscaped ground floor separates resident arrival from the street, with covered parking tucked beneath the building's raised massing.",
    ],
    services: ["Architecture", "Construction"],
  },
  {
    slug: "mofiqul-islam-united-city",
    title: "MofiQul Islam United City",
    category: "Residential",
    typology: "Residential Apartment Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/mofiqul-islam-united-city/1.png",
    gallery: gallery("mofiqul-islam-united-city", 3),
    excerpt:
      "A banded residential tower using terracotta piers to break up a long street elevation.",
    description: [
      "MofiQul Islam United City runs terracotta and warm-grey banding across a long elevation, using vertical piers to break the facade into a legible rhythm of bays.",
      "A ground-floor arrival canopy and street wall give the building a formal entry sequence distinct from the residential floors stacked above.",
    ],
    services: ["Architecture", "Construction"],
  },
  {
    slug: "safat-south-breeze",
    title: "Safat South Breeze",
    category: "Residential",
    typology: "Residential Apartment Tower",
    location: "Dhaka, Bangladesh",
    coverImage: "/projects/safat-south-breeze/1.png",
    gallery: gallery("safat-south-breeze", 3),
    excerpt:
      "A stepped residential tower fronting a park, its balconies angled to catch the open outlook.",
    description: [
      "Safat South Breeze sits at a park entrance, its balconies staggered and angled to give upper floors a clear line of sight over the surrounding tree canopy.",
      "Warm stone cladding and a recessed lobby give the tower a quiet, residential-scaled base despite its height, with direct pedestrian access to the park frontage.",
    ],
    services: ["Architecture", "Interior Design"],
  },
  {
    slug: "shantinagar",
    title: "Shantinagar Residence",
    category: "Residential",
    typology: "Residential Apartment Tower",
    location: "Shantinagar, Dhaka, Bangladesh",
    coverImage: "/projects/shantinagar/1.png",
    gallery: gallery("shantinagar", 3),
    excerpt:
      "A brick-clad tower on a corner plot, its chamfered edge marking the building's main entry.",
    description: [
      "Shantinagar Residence uses a chamfered corner to mark its entry, with brick piers and white balcony trays repeating up the tower to keep the facade calm and orderly.",
      "Ground-floor parking and a landscaped street buffer separate the building from the busy corner it occupies, without walling it off from the neighborhood.",
    ],
    services: ["Architecture", "Construction"],
  },
  {
    slug: "triplex-residence-natore",
    title: "Triplex Residence at Natore",
    category: "Residential",
    typology: "Triplex Villa",
    location: "Natore, Bangladesh",
    coverImage: "/projects/triplex-residence-natore/1.png",
    gallery: gallery("triplex-residence-natore", 12),
    excerpt:
      "A copper-toned triplex villa set into open countryside, with a rooftop pool and planted terraces.",
    description: [
      "The Triplex Residence at Natore stacks three floors of living space behind a warm copper-toned facade, set well back from the road within its own landscaped grounds.",
      "A rooftop pool and stepped planted terraces give each level its own outdoor room, framed by open farmland and tree cover on every side.",
    ],
    services: ["Architecture", "Interior Design", "Space Maker"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getRelatedProjects(slug: string, limit = 3) {
  const current = getProjectBySlug(slug);
  if (!current) return [];
  const sameCategory = projects.filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const rest = projects.filter(
    (p) => p.slug !== slug && p.category !== current.category
  );
  return [...sameCategory, ...rest].slice(0, limit);
}

export const projectCategories: Project["category"][] = [
  "Architecture",
  "Interior",
  "Commercial",
  "Residential",
  "Institutional",
];
