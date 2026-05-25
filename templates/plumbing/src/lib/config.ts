import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Mock Plumbing",
    tagline: "Your Trusted Sugar Land Plumber",
    phone: "(281) 508-5991",
    phoneHref: "tel:+12815085991",
    email: "info@mockplumbing.com",
    address: "123 Main St",
    city: "Sugar Land",
    serviceAreas: ["Sugar Land", "Houston"],
    license: "Master Plumber #12345",
    since: "2003",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "slate",
    niche: "plumbing",
  },

  services: [
    { icon: "home", title: "Residential Plumbing", desc: "Expert plumbing solutions for your home, from repairs to installations.", urgent: false },
    { icon: "briefcase", title: "Commercial Plumbing", desc: "Reliable plumbing services to keep your business running smoothly.", urgent: false },
    { icon: "droplets", title: "Leak Detection & Repair", desc: "Advanced techniques to find and fix leaks quickly, preventing further damage.", urgent: true },
    { icon: "thermometer", title: "Water Heater Services", desc: "Installation, repair, and maintenance for all types of water heaters.", urgent: false },
    { icon: "wrench", title: "Drain & Toilet Stoppages", desc: "Fast and effective clearing of clogged drains and toilets.", urgent: true },
    { icon: "shield-check", title: "Whole House Filtration", desc: "Improve your water quality with professional whole-house filtration systems.", urgent: false }
  ],

  testimonials: [
    { name: "Alonzo G", location: "Sugar Land", stars: 5, text: "Chris and his assistant did an outstanding job fixing my slab leak. They were fast, efficient, and completed the work on the same day. If you want an honest plumber who knows his trade very well, call Mock Plumbing. I'm incredibly happy with the outcome and the peace of mind they provided." },
    { name: "Billy E.", location: "Sugar Land", stars: 5, text: "Our first experience was excellent, even with a complex external gas leak repair. The project scope grew, but Mock Plumbing shared the additional costs very fairly. Their service was personal and professional, with an immediate follow-up call. I will definitely call them for my next plumbing need." },
    { name: "Kathryn H.", location: "Houston", stars: 5, text: "I am 100 percent happy that I've found Mock Plumbing. Chris and Will are always on time, do great installations, and are very conscientious about cleaning up their work areas. They've done perfect toilet and faucet installations, and they're far less expensive than other Houston area plumbers. I'll use them permanently!" }
  ],

  trustBadges: [
    "Veteran-Owned Business", "20+ Years Experience", "Licensed Master Plumber", "Commitment to Excellence", "Fair & Honest Pricing", "24/7 Emergency Service"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Jobs Done", suffix: "+", decimals: 0 },
    { value: 20, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We respond quickly to your plumbing emergencies and service requests." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "You'll always know the cost before we start, with no hidden fees." },
    { icon: "award", title: "Certified Pros", desc: "Our team consists of licensed and highly skilled Master Plumbers." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction." },
    { icon: "phone", title: "Responsive & Knowledgeable", desc: "Our team is always ready to provide expert advice and solutions." },
    { icon: "truck", title: "Fully Equipped", desc: "Our trucks are stocked with the right tools for efficient, on-site repairs." }
  ],

  formServiceOptions: ["Residential Plumbing Services", "Commercial Plumbing Services", "Leak Detection", "Garbage Disposal Installation", "Toilet Stoppage", "Water Heater Installation"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!