<template>
  <section class="w-full bg-refined-cream py-24 lg:py-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      
      <div 
        v-motion
        :initial="{ opacity: 0, x: -30 }"
        :visible="{ opacity: 1, x: 0, transition: { duration: 1400, ease: 'easeOut' } }"
        class="col-span-1 lg:col-span-6 relative aspect-[4/4] lg:w-full bg-refined-stone/20 overflow-hidden shadow-sm"
      >
        <img 
          src="/mspa-image-3.png" 
          alt="Refined Provider and Patient Interaction"
          loading="lazy"
          decoding="async"
          class=" lg:w-full lg:h-full object-cover object-center select-none scale-102 hover:scale-105 transition-transform duration-1000"
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
          Rooted in clinical science. Tailored entirely to you.
        </span>

        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 200 } }"
          class="font-sans text-3xl sm:text-4xl text-refined-forest tracking-wide leading-tight animate-none"
        >
          At Refined Health & Aesthetics, your well-being is our priority.
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
            Led by expert Nurse Practitioners, we investigate the root causes of fatigue, weight resistance,
            and physical decline to restore your total vitality. By seamlessly integrating traditional medicine
            with advanced holistic care, we provide personalized pathways to help you function at your
            absolute best.
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
            <p class="font-serif text-[11px] text-refined-forest/60 mt-1">Nurse Practitioner–Led</p>
          </div>
          <div class="border-x border-refined-stone/40">
            <h4 class="font-sans text-xs tracking-widest text-refined-forest uppercase font-semibold">Integrity</h4>
            <p class="font-serif text-[11px] text-refined-forest/60 mt-1">Root-Cause Focused</p>
          </div>
          <div>
            <h4 class="font-sans text-xs tracking-widest text-refined-forest uppercase font-semibold">Excellence</h4>
            <p class="font-serif text-[11px] text-refined-forest/60 mt-1">You-Centered Always</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>