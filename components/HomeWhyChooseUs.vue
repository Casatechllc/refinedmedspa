<template>
  <section id="why-choose-us" class="w-full bg-white py-20 lg:py-28 overflow-hidden border-t border-refined-stone/20">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        <div class="lg:col-span-5 space-y-6">
          <span 
            v-motion
            :initial="{ opacity: 0, y: 15 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
            class="font-serif text-xs tracking-[0.25em] uppercase text-refined-sage block"
          >
            The Refined Difference
          </span>
          <h2 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 100 } }"
            class="font-sans text-3xl sm:text-4xl text-refined-forest tracking-wide leading-tight"
          >
            A Higher Standard of Dedicated Wellness
          </h2>
          <p 
            v-motion
            :initial="{ opacity: 0 }"
            :visible="{ opacity: 1, transition: { duration: 1200, delay: 300 } }"
            class="font-serif text-sm sm:text-base text-refined-forest/70 leading-relaxed"
          >
            We bridge advanced clinical science with a deeply attentive, peaceful sanctuary setting. Our team focuses on understanding your history, tracking your long-term vitality goals, and refining your unique paths to wellness.
          </p>

          <div 
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 1200, delay: 400 } }"
            class="pt-6 border-t border-refined-stone/30 mt-8 space-y-3"
          >
            <h4 class="font-sans text-xs tracking-widest uppercase font-semibold text-refined-forest">
              Mother–Daughter Founded
            </h4>
            <p class="font-serif text-sm text-refined-forest/80 italic leading-relaxed">
              "We established this practice out of a shared vision to bring professional medical proficiency together with genuine, family-oriented care. To us, you are not a chart number—you are an extension of our community."
            </p>
          </div>
        </div>

        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
          
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 100 } }"
            class="space-y-3"
          >
            <div class="w-6 h-6 border border-refined-sage/60 rounded-full flex items-center justify-center font-serif text-[10px] text-refined-sage select-none">
              01
            </div>
            <h3 class="font-sans text-lg text-refined-forest tracking-wide">Clinical Expertise</h3>
            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed">
              Led exclusively by advanced medical nurse practitioners. We combine rigorous evidence-based protocols with precise, custom diagnostic testing to guide your body back into balance safely.
            </p>
          </div>

          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 200 } }"
            class="space-y-3"
          >
            <div class="w-6 h-6 border border-refined-sage/60 rounded-full flex items-center justify-center font-serif text-[10px] text-refined-sage select-none">
              02
            </div>
            <h3 class="font-sans text-lg text-refined-forest tracking-wide">Personalized Care</h3>
            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed">
              We reject one-size-fits-all treatments. We dedicate significant time during each consultation to listen to your history, map your symptoms, and design fully individual care paths.
            </p>
          </div>

          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 300 } }"
            class="space-y-3"
          >
            <div class="w-6 h-6 border border-refined-sage/60 rounded-full flex items-center justify-center font-serif text-[10px] text-refined-sage select-none">
              03
            </div>
            <h3 class="font-sans text-lg text-refined-forest tracking-wide">Modern Environment</h3>
            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed">
              Every detail of our spa practice has been curated to promote profound sensory rest. Unwind in a quiet, minimalist space crafted to feel like a high-end wellness sanctuary.
            </p>
          </div>

          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 400 } }"
            class="space-y-3"
          >
            <div class="w-6 h-6 border border-refined-sage/60 rounded-full flex items-center justify-center font-serif text-[10px] text-refined-sage select-none">
              04
            </div>
            <h3 class="font-sans text-lg text-refined-forest tracking-wide">Mother–Daughter Team</h3>
            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed">
              Built on trust, continuity, and an organic connection. Our family-led foundation brings warmth, reliability, and an authentic long-term commitment back into modern medicine.
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