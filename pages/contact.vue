<template>
  <main class="w-full bg-refined-cream pt-4 lg:pt-8">
    
    <header class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mb-16 lg:mb-24">
      <div class="max-w-4xl space-y-4">
        <span class="font-serif text-xs tracking-[0.25em] uppercase text-refined-sage block">Initiate Continuity</span>
        <h1 class="font-sans text-4xl sm:text-5xl lg:text-7xl text-refined-forest tracking-wide font-light leading-tight">
          Connect With Us
        </h1>
      </div>
      <div class="w-full h-[1px] bg-refined-stone/30 mt-12 sm:mt-16"></div>
    </header>

    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-24 lg:pb-36">
      
      <div class="lg:col-span-5 space-y-12">
        
        <div class="space-y-6">
          <div class="space-y-1">
            <span class="font-serif text-xs tracking-[0.2em] uppercase text-refined-sage block">The Sanctuary Space</span>
            <h2 class="font-sans text-xl sm:text-2xl text-refined-forest font-light">Refined Studio Location</h2>
          </div>
          
          <div class="font-serif text-sm text-refined-forest/80 space-y-5 leading-relaxed">
            <div>
              <p class="font-sans font-semibold text-[10px] tracking-widest uppercase text-refined-forest/40">Studio Address</p>
              <p class="mt-0.5">{{ practiceDetails.address.street }}</p>
              <p>{{ practiceDetails.address.cityStateZip }}</p>
              <a 
                :href="practiceDetails.address.googleMapsLink" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-block font-sans text-xs text-refined-sage hover:text-refined-forest underline underline-offset-4 pt-1"
              >
                Get Directions ↗
              </a>
            </div>

            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="font-sans font-semibold text-[10px] tracking-widest uppercase text-refined-forest/40">Direct Line</p>
                  <p class="mt-0.5 hover:text-refined-sage transition-colors">
                    <a :href="`tel:${practiceDetails.contact.phoneRaw}`">{{ practiceDetails.contact.phoneDisplay }}</a>
                  </p>
                </div>
                <div>
                  <p class="font-sans font-semibold text-[10px] tracking-widest uppercase text-refined-forest/40">Secure Fax</p>
                  <p class="mt-0.5 hover:text-refined-sage transition-colors">
                    <a :href="`fax:${practiceDetails.contact.faxRaw}`">{{ practiceDetails.contact.faxDisplay }}</a>
                  </p>
                </div>
              </div>

              <div class="pt-1">
                <p class="font-sans font-semibold text-[10px] tracking-widest uppercase text-refined-forest/40">Digital Envelope</p>
                <p class="mt-0.5 hover:text-refined-sage transition-colors break-all sm:break-normal">
                  <a :href="`mailto:${practiceDetails.contact.email}`">{{ practiceDetails.contact.email }}</a>
                </p>
              </div>
            </div>

            <div>
              <p class="font-sans font-semibold text-[10px] tracking-widest uppercase text-refined-forest/40">Social Journal</p>
              <p class="mt-0.5 text-refined-sage hover:text-refined-forest transition-colors font-medium">
                <a :href="practiceDetails.socials.instagramLink" target="_blank" rel="noopener noreferrer" class="inline-flex items-center space-x-1.5">
                  <span>{{ practiceDetails.socials.instagramDisplay }}</span>
                  <span class="text-xs">↗</span>
                </a>
              </p>
            </div>

            <div>
              <p class="font-sans font-semibold text-[10px] tracking-widest uppercase text-refined-forest/40">Proudly Serving</p>
              <p class="mt-0.5 text-xs text-refined-forest/70 italic">
                Serving {{ practiceDetails.catchmentAreas.join(', ') }} &amp; surrounding areas
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white/50 border border-refined-stone/20 p-6 space-y-4 shadow-2xs">
          <p class="font-sans font-semibold text-[10px] tracking-widest uppercase text-refined-forest/50">Clinical Practitioner Hours</p>
          <div class="font-serif text-xs sm:text-sm text-refined-forest/80 space-y-2">
            <div 
              v-for="(slot, index) in practiceDetails.schedule" 
              :key="index"
              class="flex justify-between border-b border-refined-stone/10 last:border-b-0 pb-1.5 last:pb-0"
            >
              <span>{{ slot.days }}</span>
              <span v-if="slot.isByAppointmentOnly" class="text-refined-sage italic font-medium">
                By Appointment Only
              </span>
              <span v-else class="font-sans font-light">
                {{ slot.hours }}
              </span>
            </div>
          </div>
        </div>
        
        <div class="w-full aspect-video sm:aspect-[16/10] bg-refined-stone/20 border border-refined-stone/30 relative shadow-2xs overflow-hidden">
          <iframe 
            :src="mapEmbedUrl" 
            class="w-full h-full border-0 absolute inset-0 contrast-110 opacity-90"
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Refined Studio Location Map"
          ></iframe>
        </div>

      </div>

      <div class="lg:col-span-7 mt-8 lg:mt-0">
        <ContactForm />
      </div>

    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { practiceDetails } from '~/utils/practice'

const config = useRuntimeConfig()

const mapEmbedUrl = computed(() => {
  return practiceDetails.address.getEmbedLink(config.public.googleMapsApiKey)
})

definePageMeta({
  layout: 'default'
})

useHead({
  title: 'Connect With Our Studio — Intake Requests & Personal Consultation Mapping'
})
</script>