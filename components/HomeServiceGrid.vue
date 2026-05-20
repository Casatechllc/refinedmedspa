<template>
  <section class="w-full bg-refined-cream pb-24 lg:pb-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
      
      <div class="max-w-xl mb-16 lg:mb-24 space-y-4">
        <span 
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
          class="font-serif text-xs tracking-[0.2em] uppercase text-refined-sage block"
        >
          Bespoke Services
        </span>
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 100 } }"
          class="font-sans text-3xl sm:text-4xl text-refined-forest tracking-wide"
        >
          Pro-Active Preservation Rituals
        </h2>
        <p 
          v-motion
          :initial="{ opacity: 0 }"
          :visible="{ opacity: 1, transition: { duration: 1200, delay: 300 } }"
          class="font-serif text-sm sm:text-base text-refined-forest/70 leading-relaxed"
        >
          Stripping away clinical jargon to provide transparent, intentional care. We design custom pathways tailored specifically to your skin's timeline.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
        
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 100 } }"
          class="group space-y-6 cursor-pointer"
        >
          <div class="aspect-[3/4] w-full overflow-hidden bg-refined-stone/20 relative shadow-xs">
            <img 
              src="/mspa-image-2.png" 
              alt="Expression Softening Treatments"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
          </div>
          <div class="space-y-2">
            <h3 class="font-sans text-xl text-refined-forest tracking-wide">Expression Softening</h3>
            <p class="font-serif text-xs tracking-widest text-refined-sage uppercase font-medium">Injectables & Neuromodulators</p>
            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed pt-2">
              Subtle, highly precise micro-treatments that relax overactive muscle patterns while preserving your completely natural range of facial expressions.
            </p>
          </div>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 300 } }"
          class="group space-y-6 md:translate-y-12 cursor-pointer"
        >
          <div class="aspect-[3/4] w-full overflow-hidden bg-refined-stone/20 relative shadow-xs">
            <img 
              src="/mspa-image-1.png" 
              alt="Collagen Preservation Rituals"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
          </div>
          <div class="space-y-2">
            <h3 class="font-sans text-xl text-refined-forest tracking-wide">Collagen Preservation</h3>
            <p class="font-serif text-xs tracking-widest text-refined-sage uppercase font-medium">Cellular Regeneration</p>
            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed pt-2">
              Stimulating structural skin health from beneath the surface. Focused on density, fluid bounce, and locking down deep hydration frameworks.
            </p>
          </div>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 500 } }"
          class="group space-y-6 cursor-pointer"
        >
          <div class="aspect-[3/4] w-full overflow-hidden bg-refined-stone/20 relative shadow-xs">
            <img 
              src="/mspa-image-4.png" 
              alt="Advanced Aesthetic Therapy"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
          </div>
          <div class="space-y-2">
            <h3 class="font-sans text-xl text-refined-forest tracking-wide">Aesthetic Therapy</h3>
            <p class="font-serif text-xs tracking-widest text-refined-sage uppercase font-medium">Subsurface Refinement</p>
            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed pt-2">
              Advanced clinical skin therapies, dermaplaning, and bespoke resurfacing scripts designed to deeply illuminate skin clarity and texture profile.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>