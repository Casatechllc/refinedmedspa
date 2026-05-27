<template>
  <section id="about-hero" class="w-full bg-refined-cream pt-28 lg:pt-36 pb-20 lg:pb-28 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-16 lg:space-y-24">
      
      <header class="max-w-4xl space-y-4">
        <span 
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
          class="font-serif text-xs tracking-[0.25em] uppercase text-refined-sage block"
        >
          Behind the Practice
        </span>
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 100 } }"
          class="font-sans text-4xl sm:text-5xl lg:text-7xl text-refined-forest tracking-wide font-light leading-tight"
        >
          A Shared Vision, <br class="hidden sm:inline" />Rooted in Family.
        </h1>
        <div class="w-12 h-[1px] bg-refined-stone/40 pt-4"></div>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 300 } }"
          class="lg:col-span-5 space-y-8"
        >
          <div class="relative aspect-[4/5] w-full max-h-[75vh] mx-auto lg:mx-0 bg-refined-stone/20 overflow-hidden shadow-sm">
            <img 
              src="/mspa-image-3.png" 
              alt="Refined Founders — Mother and Twin Daughters Team" 
              loading="eager"
              decoding="async"
              class="w-full h-full object-cover object-center select-none hover:scale-103 transition-transform duration-1000"
            />
            <div class="absolute inset-4 border border-refined-cream/15 pointer-events-none"></div>
          </div>

          <div class="font-serif text-sm sm:text-base text-refined-forest/80 space-y-6 leading-relaxed">
            <p>
              As Nurse Practitioners working in high-acuity environments and Intensive Care Units, we cared for patients during their most critical and fragile moments. We loved the science of medicine, but witnessing the heavy toll of reactive healthcare sparked a profound shift in our perspective.
            </p>
            <p>
              Day after day, we found ourselves asking the same question: <strong>How can we care for people before they ever reach this point?</strong> We realized that traditional medicine is built to react to illness, but it often lacks the space, time, and tools to help people proactively thrive. We knew our patients deserved a higher standard of care—a collaborative environment where the focus wasn't just on surviving but on optimizing how you look, feel, and function every single day.
            </p>
          </div>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 500 } }"
          class="col-span-7 space-y-8 lg:pt-24"
        >
          <div class="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full max-h-[75vh] mx-auto lg:mx-0 bg-refined-stone/20 overflow-hidden shadow-sm">
            <img 
              src="/home-hero.png" 
              alt="Refined Health and Aesthetics Clinical Sanctuary Environment" 
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover object-center select-none hover:scale-103 transition-transform duration-1000"
            />
            <div class="absolute inset-4 border border-refined-cream/15 pointer-events-none"></div>
          </div>

          <div class="font-serif text-sm sm:text-base text-refined-forest/80 space-y-6 leading-relaxed max-w-7xl">
            <p>
              Refined Health &amp; Aesthetics was born from that exact realization. As a mother and twin-daughter team, we brought our decades of combined clinical expertise together to build a completely new kind of practice. We wanted to bridge the gap between cutting-edge medical science and unhurried, heartfelt connection.
            </p>
            
            <p class="font-medium text-refined-forest italic border-l-2 border-refined-sage/40 pl-4 py-1">
              Working as a family allows us to provide a level of seamless continuity and genuine warmth that traditional clinics simply cannot match. When you step into our practice, you aren't stepping into a cold medical office; you are entering a sanctuary built on deep generational empathy, absolute trust, and a shared dedication to your total-body wellness.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
// Transitions are powered natively via v-motion bindings
</script>