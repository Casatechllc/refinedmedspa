<template>
  <section class="w-full bg-refined-cream py-24 lg:py-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      
      <div 
        v-motion
        :initial="{ opacity: 0, x: -30 }"
        :visible="{ opacity: 1, x: 0, transition: { duration: 1400, ease: 'easeOut' } }"
        class="col-span-1 lg:col-span-6 relative aspect-[4/5] w-full bg-refined-stone/20 overflow-hidden shadow-sm"
      >
        <img 
          src="/mspa-image-3.png" 
          alt="Refined Provider and Patient Interaction"
          loading="lazy"
          decoding="async"
          class="w-full h-full object-cover object-center select-none scale-102 hover:scale-105 transition-transform duration-1000"
        />
        <div class="absolute inset-4 border border-refined-cream/20 pointer-events-none"></div>
      </div>

      <div class="col-span-1 lg:col-span-6 space-y-8 lg:max-w-xl">
        
        <span 
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 100 } }"
          class="font-serif text-xs tracking-[0.25em] uppercase text-refined-sage block"
        >
          Our Positioning Statement
        </span>

        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 200 } }"
          class="font-sans text-3xl sm:text-4xl text-refined-forest tracking-wide leading-tight animate-none"
        >
          Where medical precision meets personalized wellness.
        </h2>

        <div 
          v-motion
          :initial="{ width: 0 }"
          :visible="{ width: '3rem', transition: { duration: 1000, delay: 400 } }"
          class="h-[1px] bg-refined-stone"
        ></div>

        <div 
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 500 } }"
          class="space-y-6 text-sm sm:text-base text-refined-forest/80 font-serif leading-relaxed"
        >
          <p>
            Welcome to an elevated healthcare experience designed to help you feel and function at your absolute best. We provide personalized medical weight loss, functional medicine, hormone health, aesthetics, and IV hydration therapies explicitly designed to support long-term wellness and structural optimization.
          </p>
          <p>
            Our practice looks beyond surface symptoms to understand the complete picture of health—interconnecting physical, emotional, and functional wellbeing. Grounded in extensive clinical critical care experience, we deliver thoughtful, evidence-based care tailored precisely to your unique biology, goals, and lifestyle.
          </p>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0 }"
          :visible="{ opacity: 1, transition: { duration: 1200, delay: 700 } }"
          class="pt-6 grid grid-cols-3 gap-4 text-center border-t border-refined-stone/40"
        >
          <div>
            <h4 class="font-sans text-xs tracking-widest text-refined-forest uppercase font-semibold">Personalization</h4>
            <p class="font-serif text-[11px] text-refined-forest/60 mt-1">Tailored Biology</p>
          </div>
          <div class="border-x border-refined-stone/40">
            <h4 class="font-sans text-xs tracking-widest text-refined-forest uppercase font-semibold">Integrity</h4>
            <p class="font-serif text-[11px] text-refined-forest/60 mt-1">Transparent Care</p>
          </div>
          <div>
            <h4 class="font-sans text-xs tracking-widest text-refined-forest uppercase font-semibold">Excellence</h4>
            <p class="font-serif text-[11px] text-refined-forest/60 mt-1">Evidence-Based</p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>