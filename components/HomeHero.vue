<template>
  <section class="relative min-h-[90vh] w-full bg-refined-cream flex items-center justify-end overflow-hidden">
    
    <div 
        v-motion
        :initial="{ opacity: 0, scale: 1.02 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 1600, ease: 'easeOut' } }"
        class="absolute inset-0 w-full h-full z-0 bg-refined-stone/10"
        >
        <img 
            src="/home-hero.png" 
            alt="Refined Sanctuary Spa Environment"
            loading="eager"
            decoding="async"
            class="w-full h-full object-cover object-left md:object-center select-none"
        />
        
        <div class="absolute inset-0 bg-gradient-to-l from-refined-cream/80 via-refined-cream/40 to-transparent lg:from-refined-cream/40 pointer-events-none"></div>
    </div>
    
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-16 flex justify-end">
      <div class="w-full lg:max-w-xl flex flex-col justify-center items-start space-y-8 bg-refined-cream/30 lg:bg-transparent p-6 sm:p-8 lg:p-0 rounded-sm backdrop-blur-[2px] lg:backdrop-blur-none">
        
        <div
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 200, ease: 'easeOut' } }"
          class="flex items-center space-x-2"
        >
          <span class="font-serif text-xs tracking-[0.25em] uppercase text-refined-forest/90">
            Feel seen. Live well
          </span>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 400, ease: 'easeOut' } }"
          class="w-full max-w-[340px] sm:max-w-[400px] py-2"
        >
          <NuxtImg 
            src="/logo-long-alt-transparent.png" 
            alt="Refined Health and Aesthetics"
            width="700"
            height="170"
            format="webp"
            loading="eager"
            class="w-full h-auto object-contain text-refined-forest"
          />
        </div>

        <div 
          v-motion
          :initial="{ width: 0 }"
          :enter="{ width: '4rem', transition: { duration: 1000, delay: 700, ease: 'easeInOut' } }"
          class="h-[1px] bg-refined-stone"
        ></div>

        <p
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 800, ease: 'easeOut' } }"
          class="font-serif text-base sm:text-lg text-refined-forest/90 italic max-w-sm leading-relaxed"
        >
          Thoughtful Medicine. Whole-Person Focus. Life-Changing Results
        </p>

        <div
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { duration: 1000, delay: 1000 } }"
          class="pt-4"
        >
          <NuxtLink 
            to="#appointments" 
            class="group relative inline-flex items-center justify-center overflow-hidden border border-refined-forest/30 bg-transparent px-8 py-3.5 text-xs tracking-[0.2em] uppercase text-refined-forest transition-colors duration-500 hover:text-refined-cream hover:border-refined-forest"
          >
            <span class="absolute inset-0 z-0 bg-refined-forest translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
            
            <span class="relative z-10 font-sans font-medium">
              Explore The Experience
            </span>
          </NuxtLink>
        </div>

      </div>
    </div>

  </section>
</template>