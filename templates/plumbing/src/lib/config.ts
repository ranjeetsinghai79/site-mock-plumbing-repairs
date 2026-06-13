import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Mock Plumbing",
    tagline: "Expert Plumbing, Done Right, Always.",
    phone: "(281) 508-5991",
    phoneHref: "tel:+12815085991",
    email: "info@mockplumbing.com",
    address: "123 Main St",
    city: "Sugar Land",
    serviceAreas: ["Sugar Land, TX", "Richmond, TX"],
    license: "Licensed Master Plumber (Chris Mock)",
    since: "2003",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "slate",
    niche: "plumbing",
  },

  services: [
    { icon: "home", title: "Residential Plumbing", desc: "Comprehensive plumbing solutions for your home, ensuring comfort and functionality.", urgent: false },
    { icon: "briefcase", title: "Commercial Plumbing", desc: "Reliable plumbing services for businesses, minimizing downtime and maximizing efficiency.", urgent: false },
    { icon: "droplets", title: "Leak Detection & Repair", desc: "Advanced technology to quickly find and fix leaks, preventing costly water damage.", urgent: true },
    { icon: "thermometer", title: "Water Heater Services", desc: "Installation, repair, and maintenance for all types of water heaters.", urgent: false },
    { icon: "wrench", title: "Drain & Sewer Cleaning", desc: "Effective solutions for clogged drains and sewer backups, restoring proper flow.", urgent: true },
    { icon: "shield-check", title: "Whole House Filtration", desc: "Installations to provide clean, filtered water throughout your entire home.", urgent: false }
  ],

  testimonials: [
    { name: "Alonzo G", location: "Sugar Land, TX", stars: 5, text: "Chris and his assistant did an outstanding job fixing my slab leak. They were fast and efficient, completing the work on the same day. If you want an honest plumber that knows his trade very well, call Mock Plumbing. I was truly impressed by their professionalism and speed." },
    { name: "Billy E.", location: "Richmond, TX", stars: 5, text: "My first experience was excellent. It wasn't a simple project – an external gas leak with below-ground repairs. The scope was more complex than initially quoted, but Mock Plumbing shared the additional costs very fairly. Their service was personal and professional, and they even addressed a follow-up call-out almost immediately. I will definitely be calling them for my next plumbing need." },
    { name: "Sarah K.", location: "Sugar Land, TX", stars: 5, text: "Mock Plumbing installed our new water heater quickly and efficiently. Chris was incredibly knowledgeable and explained everything clearly. The price was fair, and the service was top-notch. We're so happy with the hot water, and it was a stress-free experience from start to finish." }
  ],

  trustBadges: [
    "Veteran-Owned Business", "20+ Years Experience", "Licensed Master Plumber", "Fully Insured", "Same-Day Service", "5-Star Rated"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Jobs Done", suffix: "+", decimals: 0 },
    { value: 20, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize your emergency, arriving quickly to diagnose and resolve issues." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Clear, honest quotes before any work begins, so you know exactly what to expect." },
    { icon: "award", title: "Certified Pros", desc: "Our team consists of licensed and highly trained Master Plumbers." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work, ensuring you're completely happy with the results." },
    { icon: "phone", title: "24/7 Support", desc: "Our team is ready to assist you anytime, day or night, for urgent plumbing needs." },
    { icon: "truck", title: "Fully Equipped", desc: "Our vehicles are stocked with the right tools and parts for efficient service." }
  ],

  formServiceOptions: ["Residential Plumbing Services", "Commercial Plumbing Services", "Leak Detection", "Garbage Disposal Installation", "Toilet Stoppage", "Lavatory Stoppage", "Whole House Stoppage", "Toilet Install", "Faucet Repair", "Faucet Changeout", "Main Water Line Leak", "Water Heater Flush", "Water Heater Installation", "Water Heater Repair", "Whole House Filtration", "Slab Leak Repair", "External Gas Leak Repair", "Plugged Sink Drain Repair", "Sewage Backup Repair", "Express Water System Installation"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!