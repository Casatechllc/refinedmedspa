<template>
  <section id="pricing" class="w-full bg-refined-cream py-24 lg:py-32 border-t border-refined-stone/30 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
      
      <div v-motion :initial="{ opacity: 0, y: 20 }" :visible="{ opacity: 1, y: 0, transition: { duration: 1200 } }" class="bg-refined-forest text-refined-cream p-8 md:p-12 mb-20 relative overflow-hidden shadow-xs">
        <div class="relative z-10 max-w-3xl space-y-4">
          <span class="font-sans text-[10px] tracking-[0.25em] uppercase text-refined-sky font-bold bg-refined-sky/10 px-3 py-1.5 rounded-none">Phase 1: Limited Enrollment</span>
          <h3 class="font-sans text-2xl sm:text-3xl tracking-wide pt-2">Founding Patient Program</h3>
          <p class="font-serif text-sm sm:text-base text-refined-cream/80 leading-relaxed max-w-2xl">
            We are accepting our first group of patients for clinically supervised metabolic care tailored specifically to your goals. Secure your space to lock down exclusive lifelong wellness privileges.
          </p>
          
          <div class="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 border-t border-refined-cream/20 mt-6">
            <div class="flex items-start space-x-2 font-serif text-xs text-refined-cream/90"><span class="text-refined-sky">✔</span> <span>Complimentary Metabolic Assessment ($99 value)</span></div>
            <div class="flex items-start space-x-2 font-serif text-xs text-refined-cream/90"><span class="text-refined-sky">✔</span> <span>Priority Scheduling Access</span></div>
            <div class="flex items-start space-x-2 font-serif text-xs text-refined-cream/90"><span class="text-refined-sky">✔</span> <span>Locked Pricing for 12 Months</span></div>
            <div class="flex items-start space-x-2 font-serif text-xs text-refined-cream/90"><span class="text-refined-sky">✔</span> <span>Free B12 Injection at First Visit</span></div>
          </div>
        </div>
        <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-refined-sage/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div class="max-w-xl mb-16 space-y-2">
        <span class="font-serif text-xs tracking-[0.2em] uppercase text-refined-sage block">Transparent Rates</span>
        <h2 class="font-sans text-3xl text-refined-forest tracking-wide">Medical Weight Loss Programs</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch mb-12">
        
        <div class="border border-refined-stone/50 bg-white/40 p-8 flex flex-col justify-between space-y-8 relative">
          <div class="space-y-4">
            <h4 class="font-sans text-xs tracking-[0.2em] uppercase text-refined-forest/60 font-semibold">Option 1 — Foundations Plan</h4>
            <div class="space-y-1">
              <span class="font-sans text-3xl text-refined-forest tracking-tight">$349 <span class="text-sm font-serif text-refined-forest/50">/ month</span></span>
              <p class="font-serif text-xs text-refined-sage italic font-medium">Medication Included</p>
            </div>
            <hr class="border-refined-stone/30 my-4" />
            <ul class="space-y-3 font-serif text-sm text-refined-forest/80">
              <li class="flex items-center space-x-2"><span>✔</span> <span>Medical evaluation</span></li>
              <li class="flex items-center space-x-2"><span>✔</span> <span>GLP-1 medication (starter dosing)</span></li>
              <li class="flex items-center space-x-2"><span>✔</span> <span>Monthly check-in</span></li>
              <li class="flex items-center space-x-2"><span>✔</span> <span>Basic nutrition guidance</span></li>
              <li class="flex items-center space-x-2"><span>✔</span> <span>Secure messaging</span></li>
            </ul>
          </div>
          <button @click="$emit('trigger-booking', 'weight-loss')" class="w-full bg-transparent border border-refined-forest text-refined-forest py-3 font-sans text-xs tracking-widest uppercase hover:bg-refined-forest hover:text-refined-cream transition-colors cursor-pointer rounded-none">
            Start My Journey
          </button>
        </div>

        <div class="border-2 border-refined-forest bg-white p-8 flex flex-col justify-between space-y-8 relative shadow-md">
          <span class="absolute -top-3 right-6 bg-refined-forest text-refined-cream font-sans text-[9px] tracking-widest uppercase px-3 py-1 font-semibold">Most Popular</span>
          <div class="space-y-4">
            <h4 class="font-sans text-xs tracking-[0.2em] uppercase text-refined-forest font-bold">Option 2 — Optimization Plan</h4>
            <div class="space-y-1">
              <span class="font-sans text-3xl text-refined-forest tracking-tight">$449 <span class="text-sm font-serif text-refined-forest/50">/ month</span></span>
              <p class="font-serif text-xs text-refined-sage italic font-medium">Medication Included</p>
            </div>
            <hr class="border-refined-stone/30 my-4" />
            <ul class="space-y-3 font-serif text-sm text-refined-forest/90">
              <li class="flex items-center space-x-2 text-refined-forest font-medium"><span>★</span> <span>Everything in Foundations Plan</span></li>
              <li class="flex items-center space-x-2"><span>✔</span> <span>Monthly Nurse Practitioner visit</span></li>
              <li class="flex items-center space-x-2"><span>✔</span> <span>Personalized dose adjustments</span></li>
              <li class="flex items-center space-x-2"><span>✔</span> <span>Body composition tracking</span></li>
              <li class="flex items-center space-x-2"><span>✔</span> <span>Metabolic coaching</span></li>
              <li class="flex items-center space-x-2"><span>✔</span> <span>Priority messaging channels</span></li>
            </ul>
          </div>
          <button @click="$emit('trigger-booking', 'weight-loss')" class="w-full bg-refined-forest border border-refined-forest text-refined-cream py-3 font-sans text-xs tracking-widest uppercase hover:bg-refined-sage hover:border-refined-sage transition-colors cursor-pointer rounded-none">
            Begin My Transformation
          </button>
        </div>

        <div class="border border-refined-stone/50 bg-white/40 p-8 flex flex-col justify-between space-y-8 relative">
          <div class="space-y-4">
            <h4 class="font-sans text-xs tracking-[0.2em] uppercase text-refined-forest/60 font-semibold">Option 3 — Elite Metabolic Plan</h4>
            <div class="space-y-1">
              <span class="font-sans text-3xl text-refined-forest tracking-tight">$599 <span class="text-sm font-serif text-refined-forest/50">/ month</span></span>
              <p class="font-serif text-xs text-refined-sage italic font-medium">Medication + Advanced Support</p>
            </div>
            <hr class="border-refined-stone/30 my-4" />
            <ul class="space-y-3 font-serif text-sm text-refined-forest/80">
              <li class="flex items-center space-x-2 text-refined-forest font-medium"><span>★</span> <span>Everything in Optimization Plan</span></li>
              <li class="flex items-center space-x-2"><span>✔</span> <span>Monthly metabolic injection (B12/MIC)</span></li>
              <li class="flex items-center space-x-2"><span>✔</span> <span>IV therapy credit or wellness add-on</span></li>
              <li class="flex items-center space-x-2"><span>✔</span> <span>Advanced lifestyle coaching models</span></li>
              <li class="flex items-center space-x-2"><span>✔</span> <span>Priority scheduling parameters</span></li>
            </ul>
          </div>
          <button @click="$emit('trigger-booking', 'weight-loss')" class="w-full bg-transparent border border-refined-forest text-refined-forest py-3 font-sans text-xs tracking-widest uppercase hover:bg-refined-forest hover:text-refined-cream transition-colors cursor-pointer rounded-none">
            Achieve Peak Wellness
          </button>
        </div>

      </div>

      <p class="font-serif text-[11px] text-refined-forest/50 leading-normal text-left max-w-3xl mb-12">
        * Website Disclaimer: Medication is prescribed when medically appropriate following provider evaluation. Treatment plans and dosing vary based on individual medical needs.
      </p>

      <div class="max-w-3xl bg-white/40 border border-refined-stone/40 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div class="space-y-2">
          <h4 class="font-sans text-sm tracking-wider uppercase text-refined-forest font-bold">Metabolic Maintenance Program</h4>
          <p class="font-serif text-xs sm:text-sm text-refined-forest/70 max-w-xl">
            After you have reached your goal weight, transition to our ongoing care structure designed entirely around weight regain prevention, provider monitoring, and reduced medication dosing.
          </p>
        </div>
        <div class="text-left sm:text-right flex flex-col items-start sm:items-end space-y-1 shrink-0">
          <span class="font-sans text-xl text-refined-forest tracking-tight">$199 <span class="text-xs font-serif text-refined-forest/50">/ month</span></span>
          <span class="font-serif text-[10px] text-refined-forest/40 uppercase tracking-widest">Maintenance Framework</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
defineEmits(['trigger-booking'])
</script>