<template>
  <section id="getting-started-journey" class="w-full bg-white py-20 lg:py-28 border-t border-refined-stone/20">
    <div class="max-w-4xl mx-auto px-6 sm:px-12">
      
      <div class="mb-16">
        <span class="font-sans text-[11px] tracking-[0.25em] uppercase font-bold text-refined-forest/50">
          Your Step-By-Step Journey
        </span>
      </div>

      <div class="space-y-0">
        
        <div class="flex group">
          <div class="flex flex-col items-center mr-6 sm:mr-10">
            <div class="w-10 h-10 border border-refined-stone rounded-full flex items-center justify-center font-sans text-xs text-refined-forest font-medium bg-white shrink-0 group-hover:border-refined-sage group-hover:text-refined-sage transition-colors duration-500 select-none">
              1
            </div>
            <div class="w-[1px] h-full bg-refined-stone/30 mt-4 min-h-[120px]"></div>
          </div>
          <div 
            v-motion
            :initial="{ opacity: 0, x: 20 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 1000, delay: 100 } }"
            class="pb-16 space-y-2 pt-1.5"
          >
            <h3 class="font-sans text-xl text-refined-forest font-light tracking-wide">
              Your consultation
            </h3>
            <p class="font-sans text-[11px] tracking-widest uppercase font-semibold text-refined-forest/40">
              We listen before we recommend anything.
            </p>
            <p class="font-serif text-sm sm:text-base text-refined-forest/70 leading-relaxed max-w-2xl pt-1">
              Your first visit is a real conversation — your health history, your goals, and what hasn't worked before. No rushing, no assumptions, no judgment.
            </p>
          </div>
        </div>

        <div class="flex group">
          <div class="flex flex-col items-center mr-6 sm:mr-10">
            <div class="w-10 h-10 border border-refined-stone rounded-full flex items-center justify-center font-sans text-xs text-refined-forest font-medium bg-white shrink-0 group-hover:border-refined-sage group-hover:text-refined-sage transition-colors duration-500 select-none">
              2
            </div>
            <div class="w-[1px] h-full bg-refined-stone/30 mt-4 min-h-[120px]"></div>
          </div>
          <div 
            v-motion
            :initial="{ opacity: 0, x: 20 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 1000, delay: 200 } }"
            class="pb-16 space-y-2 pt-1.5"
          >
            <h3 class="font-sans text-xl text-refined-forest font-light tracking-wide">
              Your plan
            </h3>
            <p class="font-sans text-[11px] tracking-widest uppercase font-semibold text-refined-forest/40">
              Built around your biology, not a template.
            </p>
            <p class="font-serif text-sm sm:text-base text-refined-forest/70 leading-relaxed max-w-2xl pt-1">
              We combine your lab results with your lived experience to create a pathway that fits your actual life — weight management, hormones, aesthetics, or a blend of all three.
            </p>
          </div>
        </div>

        <div class="flex group">
          <div class="flex flex-col items-center mr-6 sm:mr-10">
            <div class="w-10 h-10 border border-refined-stone rounded-full flex items-center justify-center font-sans text-xs text-refined-forest font-medium bg-white shrink-0 group-hover:border-refined-sage group-hover:text-refined-sage transition-colors duration-500 select-none">
              3
            </div>
          </div>
          <div 
            v-motion
            :initial="{ opacity: 0, x: 20 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 1000, delay: 300 } }"
            class="space-y-2 pt-1.5"
          >
            <h3 class="font-sans text-xl text-refined-forest font-light tracking-wide">
              Ongoing support
            </h3>
            <p class="font-sans text-[11px] tracking-widest uppercase font-semibold text-refined-forest/40">
              We stay with you as you move forward.
            </p>
            <p class="font-serif text-sm sm:text-base text-refined-forest/70 leading-relaxed max-w-2xl pt-1">
              Regular check-ins, medication reviews, and open communication mean your plan evolves with you. You're never managing this alone.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
// Interactivity handled smoothly by v-motion reveal viewport bindings
</script>