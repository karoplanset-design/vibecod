import assetMap from "@/spec/asset-map.json";

const IMAGE_ASSETS = {
  homeHero: assetMap["home-hero"].recommended_path,
  homeComparisonBefore: "/images/hero/after.png",
  homeComparisonAfter: "/images/hero/before.png",
  riversideHomePreview: assetMap["project-riverside"].recommended_path,
  riversideHero: assetMap["contact-dining"].recommended_path,
  forestHomePreview: assetMap["project-forest-house"].recommended_path,
  studio: assetMap["studio-philosophy"].recommended_path,
  monoHomePreview: assetMap["project-mono-residence"].recommended_path,
  services: assetMap["project-atelier-04"].recommended_path,
  atelierProjectsPreview: "/images/projects/atelier-04/atelier-living-room.webp",
  atelierHero: "/images/projects/atelier-04/atelier-kitchen.webp",
  atelierDiningRoom: "/images/projects/atelier-04/atelier-dining-room.webp",
  atelierBedroom: "/images/projects/atelier-04/atelier-bedroom.webp",
  atelierHallway: "/images/projects/atelier-04/atelier-hallway.webp",
  atelierBathroom: "/images/projects/atelier-04/atelier-bathroom.webp",
  atelierHomePreview: "/images/projects/atelier-04/atelier-home-lounge.webp",
  riversideProjectsPreview: "/images/projects/riverside-apartment/riverside-project-preview.webp",
  riversideKitchen: "/images/projects/riverside-apartment/riverside-kitchen.webp",
  riversideDiningRoom: "/images/projects/riverside-apartment/riverside-dining-room.webp",
  forestProjectsPreview: "/images/projects/forest-house/forest-project-preview.webp",
  forestBedroom: "/images/projects/forest-house/forest-bedroom.webp",
  forestHallway: "/images/projects/forest-house/forest-hallway.webp",
  forestBathroom: "/images/projects/forest-house/forest-bathroom.webp",
  monoProjectsPreview: "/images/projects/mono-residence/mono-project-preview.webp",
  monoEntry: "/images/projects/mono-residence/mono-entry.webp",
  monoDressingIsland: "/images/projects/mono-residence/mono-dressing-island.webp",
  monoWardrobe: "/images/projects/mono-residence/mono-wardrobe.webp",
  contact: "/images/global/contact-bathroom.webp",
  journalOffice: "/images/journal/journal-office.webp",
  journalEntry: "/images/journal/journal-entry.webp",
  journalCorridor: "/images/journal/journal-corridor.webp",
} as const;

export const siteImageMap = {
  homeHero: IMAGE_ASSETS.homeHero,
  homeComparisonBefore: IMAGE_ASSETS.homeComparisonBefore,
  homeComparisonAfter: IMAGE_ASSETS.homeComparisonAfter,
  studio: IMAGE_ASSETS.studio,
  services: IMAGE_ASSETS.services,
  contact: IMAGE_ASSETS.contact,
  journal: [
    IMAGE_ASSETS.journalOffice,
    IMAGE_ASSETS.journalEntry,
    IMAGE_ASSETS.journalCorridor,
  ],
} as const;

export const projectImageMap = {
  "riverside-apartment": {
    homePreviewImage: IMAGE_ASSETS.riversideHomePreview,
    previewImage: IMAGE_ASSETS.riversideProjectsPreview,
    heroImage: IMAGE_ASSETS.riversideHero,
    galleryImages: [
      IMAGE_ASSETS.riversideKitchen,
      IMAGE_ASSETS.riversideDiningRoom,
    ],
    homePreviewAlt: "Riverside Apartment home preview",
    previewAlt: "Riverside Apartment living room preview",
    heroAlt: "Riverside Apartment dining area",
    galleryAlts: [
      "Riverside Apartment kitchen",
      "Riverside Apartment dining room",
    ],
  },
  "forest-house": {
    homePreviewImage: IMAGE_ASSETS.forestHomePreview,
    previewImage: IMAGE_ASSETS.forestProjectsPreview,
    heroImage: IMAGE_ASSETS.forestBedroom,
    galleryImages: [
      IMAGE_ASSETS.forestHallway,
      IMAGE_ASSETS.forestBathroom,
    ],
    homePreviewAlt: "Forest House home preview",
    previewAlt: "Forest House fireplace lounge preview",
    heroAlt: "Forest House bedroom",
    galleryAlts: [
      "Forest House hallway",
      "Forest House bathroom",
    ],
  },
  "mono-residence": {
    homePreviewImage: IMAGE_ASSETS.monoHomePreview,
    previewImage: IMAGE_ASSETS.monoProjectsPreview,
    heroImage: IMAGE_ASSETS.monoEntry,
    galleryImages: [
      IMAGE_ASSETS.monoDressingIsland,
      IMAGE_ASSETS.monoWardrobe,
    ],
    homePreviewAlt: "Mono Residence home preview",
    previewAlt: "Mono Residence study preview",
    heroAlt: "Mono Residence entry hall",
    galleryAlts: [
      "Mono Residence dressing island",
      "Mono Residence wardrobe",
    ],
  },
  "atelier-04": {
    homePreviewImage: IMAGE_ASSETS.atelierHomePreview,
    previewImage: IMAGE_ASSETS.atelierProjectsPreview,
    heroImage: IMAGE_ASSETS.atelierHero,
    galleryImages: [
      IMAGE_ASSETS.atelierDiningRoom,
      IMAGE_ASSETS.atelierBedroom,
      IMAGE_ASSETS.atelierHallway,
      IMAGE_ASSETS.atelierBathroom,
    ],
    homePreviewAlt: "Atelier 04 home lounge preview",
    previewAlt: "Atelier 04 living room",
    heroAlt: "Atelier 04 kitchen",
    galleryAlts: [
      "Atelier 04 dining room",
      "Atelier 04 bedroom",
      "Atelier 04 hallway",
      "Atelier 04 bathroom",
    ],
  },
} as const;

export type ProjectSlug = keyof typeof projectImageMap;

export function getProjectImages(slug: string) {
  return projectImageMap[slug as ProjectSlug];
}
