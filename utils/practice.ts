// utils/practice.ts

export interface BusinessDay {
  days: string
  hours: string
  isByAppointmentOnly?: boolean
}

export interface PracticeConfig {
  name: string
  address: {
    street: string
    cityStateZip: string
    googleMapsLink: string
  }
  catchmentAreas: string[]
  contact: {
    phoneDisplay: string
    phoneRaw: string
    faxDisplay: string
    faxRaw: string
    email: string
  }
  socials: {
    instagramDisplay: string
    instagramLink: string
  }
  schedule: BusinessDay[]
}

export const practiceDetails: PracticeConfig = {
  name: "Refined Health & Aesthetics",
  address: {
    street: "2337 Whitney Ave",
    cityStateZip: "Hamden, CT 06518",
    getEmbedLink: (apiKey: string) => {
      return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:ChIJ4aYwMl7b54kRakMgtF94VH4`
    },
    googleMapsLink: `https://maps.google.com/?q=2337+Whitney+Ave+Hamden+CT+06518`
  },
  catchmentAreas: ["New Haven", "North Haven", "Wallingford", "Cheshire"],
  contact: {
    phoneDisplay: "(203) 902-6377",
    phoneRaw: "+12039026377",
    faxDisplay: "(203) 724-2281",
    faxRaw: "+12037242281",
    email: "concierge@refined.com"
  },
  socials: {
    instagramDisplay: "@refined.health.aesthetics",
    instagramLink: "https://instagram.com/refined.health.aesthetics"
  },
  // ADDED: Structured, easily editable clinical operating hours matrix
  schedule: [
    {
      days: "Monday — Thursday",
      hours: "09:00 AM – 06:00 PM"
    },
    {
      days: "Friday",
      hours: "09:00 AM – 04:00 PM"
    },
    {
      days: "Saturday & Sunday",
      hours: "Closed",
      isByAppointmentOnly: true
    }
  ]
}