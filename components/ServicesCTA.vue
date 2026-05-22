<template>
  <section 
    id="services-cta" 
    class="w-full bg-refined-forest text-refined-cream p-5 sm:p-6 lg:p-7 relative border border-refined-stone/10 shadow-xs max-h-[calc(100vh-160px)] overflow-y-auto lg:sticky lg:top-32 flex flex-col justify-between"
  >
    <div class="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none">
      <div class="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </div>

    <div class="relative z-10 space-y-6 sm:space-y-8 my-auto">
      
      <div class="space-y-2.5">
        <span class="font-serif text-[10px] tracking-[0.25em] uppercase text-refined-cream/50 block">
          The Path to Vitality
        </span>
        <h2 class="font-sans text-xl sm:text-2xl tracking-wide font-light leading-snug">
          Begin Your Journey <br class="hidden sm:inline">of Refinement
        </h2>
        <p class="font-serif text-xs text-refined-cream/70 leading-relaxed">
          Every transformative protocol begins with an unhurried, data-driven diagnostic consultation tailored to your longevity.
        </p>
      </div>

      <div class="flex flex-col gap-2.5 items-stretch font-sans text-[11px] tracking-widest uppercase">
        <NuxtLink 
          to="/contact" 
          class="inline-block text-center bg-refined-cream text-refined-forest font-semibold py-3 px-4 hover:bg-white hover:tracking-[0.2em] transition-all duration-300 ease-out"
        >
          Schedule Appointment
        </NuxtLink>
        <NuxtLink 
          to="/contact?type=consultation" 
          class="inline-block text-center border border-refined-cream/20 text-refined-cream py-3 px-4 hover:border-refined-cream hover:bg-white/5 transition-colors duration-300"
        >
          Inquire Online
        </NuxtLink>
      </div>

      <div class="w-full h-[1px] bg-refined-cream/10"></div>

      <div class="space-y-3">
        <div class="space-y-0.5">
          <h3 class="font-sans text-[9px] tracking-[0.2em] uppercase font-semibold text-refined-cream/40">
            Explore More Practices
          </h3>
        </div>

        <div class="flex flex-col font-serif text-xs space-y-0.5">
          
          <NuxtLink 
            to="/services/medical-weight-loss" 
            class="group flex items-center justify-between py-2 border-b border-refined-cream/5 hover:border-refined-cream/20 transition-colors duration-300"
          >
            <span class="text-refined-cream/70 group-hover:text-white transition-colors">Medical Weight Loss</span>
            <span class="text-refined-sage text-[10px] transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </NuxtLink>

          <NuxtLink 
            to="/services/functional-medicine" 
            class="group flex items-center justify-between py-2 border-b border-refined-cream/5 hover:border-refined-cream/20 transition-colors duration-300"
          >
            <span class="text-refined-cream/70 group-hover:text-white transition-colors">Functional Medicine</span>
            <span class="text-refined-sage text-[10px] transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </NuxtLink>

          <NuxtLink 
            to="/services/iv-hydration" 
            class="group flex items-center justify-between py-2 border-b border-refined-cream/5 hover:border-refined-cream/20 transition-colors duration-300"
          >
            <span class="text-refined-cream/70 group-hover:text-white transition-colors">IV Hydration Therapy</span>
            <span class="text-refined-sage text-[10px] transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </NuxtLink>

          <NuxtLink 
            to="/services/Aesthetics" 
            class="group flex items-center justify-between py-2 border-b border-refined-cream/5 hover:border-refined-cream/20 transition-colors duration-300"
          >
            <span class="text-refined-cream/70 group-hover:text-white transition-colors">Medical Aesthetics</span>
            <span class="text-refined-sage text-[10px] transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </NuxtLink>

          <NuxtLink 
            to="/services/mens-health" 
            class="group flex items-center justify-between py-2 border-b border-refined-cream/5 hover:border-refined-cream/20 transition-colors duration-300"
          >
            <span class="text-refined-cream/70 group-hover:text-white transition-colors">Men’s Health Optimization</span>
            <span class="text-refined-sage text-[10px] transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </NuxtLink>

          <NuxtLink 
            to="/services/womens-health" 
            class="group flex items-center justify-between py-2 border-b border-refined-cream/5 hover:border-refined-cream/20 transition-colors duration-300"
          >
            <span class="text-refined-cream/70 group-hover:text-white transition-colors">Women’s Lifecycle Care</span>
            <span class="text-refined-sage text-[10px] transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </NuxtLink>

          <NuxtLink 
            to="/services" 
            class="group flex items-center justify-between pt-2.5 pb-0.5"
          >
            <span class="text-refined-cream font-sans text-[10px] tracking-wider uppercase font-medium border-b border-refined-cream/20 pb-0.5 hover:border-refined-cream group-hover:text-white transition-colors">View All Overview</span>
            <span class="text-refined-sage text-[10px] transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </NuxtLink>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Semantic layout structure mapping links
</script>

<style scoped>
/* Hide scrollbar tracking across premium web views while maintaining scrolling mechanics */
#services-cta::-webkit-scrollbar {
  width: 4px;
}
#services-cta::-webkit-scrollbar-thumb {
  background-color: rgba(250, 244, 234, 0.15);
  border-radius: 2px;
}
</style>