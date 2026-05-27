// utils/team.ts

export interface TeamMember {
  name: string
  role: string
  image: string
  biography: string
  credentials?: string[]
  specialties?: string[]
}

export const teamData: TeamMember[] = [
  {
    name: "Elena Rostova, APRN",
    role: "Clinical Director & Lead Practitioner",
    image: "/mspa-image-3.png", // Replace with your actual asset path
    biography: "With over a decade of advanced clinical experience in endocrinology and medical aesthetics, Elena founded Refined with a singular vision: to bridge the gap between rigorous internal metabolic science and subtle, sophisticated exterior artistry.",
    credentials: ["MSN, University of Connecticut", "Board Certified APRN", "Advanced Peptide Therapy Certified"],
    specialties: ["Bioidentical Hormone Optimization", "Facial Anatomical Rebalancing", "GLP-1 Protocol Design"]
  },
  {
    name: "Marcus Vance",
    role: "Metabolic Conditioning Specialist",
    image: "/mspa-image-6.png", // Replace with your actual asset path
    biography: "Marcus specializes in body composition architecture and lean mass preservation. He designs custom lifestyle movement frameworks that run in tandem with clinical peptide therapies, ensuring long-term metabolic health.",
    credentials: ["BS, Exercise Physiology", "CSCS *D", "Precision Nutrition Level 2"],
    specialties: ["Hypertrophy Signal Training", "Zone-2 Cardio Mapping", "Skeletal Mass Preservation"]
  },
  {
    name: "Elena Rostova, APRN",
    role: "Clinical Director & Lead Practitioner",
    image: "/mspa-image-3.png", // Replace with your actual asset path
    biography: "With over a decade of advanced clinical experience in endocrinology and medical aesthetics, Elena founded Refined with a singular vision: to bridge the gap between rigorous internal metabolic science and subtle, sophisticated exterior artistry.",
    credentials: ["MSN, University of Connecticut", "Board Certified APRN", "Advanced Peptide Therapy Certified"],
    specialties: ["Bioidentical Hormone Optimization", "Facial Anatomical Rebalancing", "GLP-1 Protocol Design"]
  },
  {
    name: "Marcus Vance",
    role: "Metabolic Conditioning Specialist",
    image: "/mspa-image-6.png", // Replace with your actual asset path
    biography: "Marcus specializes in body composition architecture and lean mass preservation. He designs custom lifestyle movement frameworks that run in tandem with clinical peptide therapies, ensuring long-term metabolic health.",
    credentials: ["BS, Exercise Physiology", "CSCS *D", "Precision Nutrition Level 2"],
    specialties: ["Hypertrophy Signal Training", "Zone-2 Cardio Mapping", "Skeletal Mass Preservation"]
  }
]