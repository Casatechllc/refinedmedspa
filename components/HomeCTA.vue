<template>
  <section id="cta-choices" class="w-full bg-refined-cream overflow-hidden">
    
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-20 lg:py-24">
      <div class="text-center max-w-xl mx-auto mb-12 lg:mb-16 space-y-3">
        <span class="font-serif text-xs tracking-[0.2em] uppercase text-refined-sage block">Begin Your Refinement</span>
        <h2 class="font-sans text-2xl sm:text-3xl text-refined-forest tracking-wide">Select Your Path To Vitality</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 100 } }"
          class="bg-white border border-refined-stone/30 p-8 flex flex-col justify-between text-center space-y-6 transition-all duration-300 hover:border-refined-sage/60 group"
        >
          <div class="space-y-3">
            <h3 class="font-sans text-lg text-refined-forest tracking-wide group-hover:text-refined-sage transition-colors">Comprehensive Consultation</h3>
            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed">
              Meet directly with our advanced clinical team to analyze your lab markers, review metabolic health, and explore functional root causes.
            </p>
          </div>
          <div class="pt-2">
            <NuxtLink to="/contact?type=consultation" class="inline-block w-full bg-refined-forest text-white font-sans text-xs tracking-widest uppercase py-3 px-6 hover:bg-refined-sage transition-colors duration-300">
              Book Consultation
            </NuxtLink>
          </div>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 200 } }"
          class="bg-white border border-refined-stone/30 p-8 flex flex-col justify-between text-center space-y-6 transition-all duration-300 hover:border-refined-sage/60 group"
        >
          <div class="space-y-3">
            <h3 class="font-sans text-lg text-refined-forest tracking-wide group-hover:text-refined-sage transition-colors">IV Therapy Infusion</h3>
            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed">
              Schedule your targeted cellular replenishment session. Instantly restore baseline nutrient levels, maximize energy reserves, and clear burnout.
            </p>
          </div>
          <div class="pt-2">
            <NuxtLink to="/contact?type=iv-therapy" class="inline-block w-full bg-refined-forest text-white font-sans text-xs tracking-widest uppercase py-3 px-6 hover:bg-refined-sage transition-colors duration-300">
              IV Therapy Appointment
            </NuxtLink>
          </div>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 300 } }"
          class="bg-white border border-refined-stone/30 p-8 flex flex-col justify-between text-center space-y-6 transition-all duration-300 hover:border-refined-sage/60 group"
        >
          <div class="space-y-3">
            <h3 class="font-sans text-lg text-refined-forest tracking-wide group-hover:text-refined-sage transition-colors">Aesthetic Consultation</h3>
            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed">
              Partner with an experienced practitioner to curate a subtle, custom protocol that honors your natural anatomical frame and skin texture.
            </p>
          </div>
          <div class="pt-2">
            <NuxtLink to="/contact?type=aesthetics" class="inline-block w-full bg-refined-forest text-white font-sans text-xs tracking-widest uppercase py-3 px-6 hover:bg-refined-sage transition-colors duration-300">
              Aesthetic Consultation
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>

    <div class="relative w-full bg-refined-forest py-24 lg:py-32 overflow-hidden flex items-center justify-center">
      
      <div class="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none">
        <img src="/home-hero.png" class="w-full h-full object-cover object-center filter grayscale scale-105" alt="" />
      </div>

      <div class="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-8">
        <div class="space-y-3">
          <span 
            v-motion
            :initial="{ opacity: 0, y: 10 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
            class="font-serif text-xs tracking-[0.3em] uppercase text-refined-cream/60 block"
          >
            Your Invitation
          </span>
          <h2 
            v-motion
            :initial="{ opacity: 0, y: 15 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 100 } }"
            class="font-sans text-4xl sm:text-5xl lg:text-6xl text-refined-cream tracking-wide font-light leading-tight"
          >
            Start Your Wellness Journey Today
          </h2>
          <p 
            v-motion
            :initial="{ opacity: 0 }"
            :visible="{ opacity: 1, transition: { duration: 1200, delay: 300 } }"
            class="font-serif text-sm sm:text-base text-refined-cream/70 max-w-xl mx-auto leading-relaxed"
          >
            Step into our serene clinical space and shift your physical baseline toward balance. Your dedicated wellness architecture begins with a single step.
          </p>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.98 }"
          :visible="{ opacity: 1, scale: 1, transition: { duration: 1000, delay: 400 } }"
          class="pt-4"
        >
          <NuxtLink to="/contact" class="inline-block bg-refined-cream text-refined-forest font-sans text-xs tracking-widest uppercase font-semibold py-4 px-10 rounded-none shadow-sm hover:bg-white hover:tracking-[0.3em] transition-all duration-300 ease-out">
            Schedule Care Now
          </NuxtLink>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
// Transitions are powered natively via v-motion templates layer
</script>