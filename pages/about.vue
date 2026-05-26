<template>
  <main class="w-full bg-refined-cream pt-4 lg:pt-8">
    
    <header class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mb-16 lg:mb-24">
      <div class="max-w-4xl space-y-4">
        <span class="font-serif text-xs tracking-[0.25em] uppercase text-refined-sage block">Our Sanctuary</span>
        <h1 class="font-sans text-4xl sm:text-5xl lg:text-7xl text-refined-forest tracking-wide font-light leading-tight">
          A Return to Intention
        </h1>
      </div>
      <div class="w-full h-[1px] bg-refined-stone/30 mt-12 sm:mt-16"></div>
    </header>

    <section class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-20 lg:pb-28">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <div class="lg:col-span-5 space-y-4 lg:sticky lg:top-32">
          <span class="font-serif text-xs tracking-[0.2em] uppercase text-refined-sage block">The Vision</span>
          <h2 class="font-sans text-2xl sm:text-3xl text-refined-forest tracking-wide">The Science of Subtle Restorations</h2>
          <p class="font-sans text-sm text-refined-forest/70 leading-relaxed">
            We believe traditional wellness paradigms focus too heavily on reactive interventions. Our clinic treats your human system proactively.
          </p>
        </div>

        <div class="lg:col-span-7 font-serif text-sm sm:text-base text-refined-forest/80 space-y-6 leading-relaxed pt-1">
          <p>
            Founded by advanced clinical practice nurse specialists, Refined was engineered specifically to address biological metrics at their absolute source. True clinical beauty and systemic stamina are not separate achievements—they are the secondary outcomes of deep cellular stabilization, stable metabolic tracking, and correct endocrine ratios.
          </p>
          <p>
            Our method replaces rigid high-volume appointments with customized, unhurried healthcare encounters. By matching state-of-the-art laboratory biomarker screens with personalized medical spa aesthetics, we protect both your internal longevity matrix and your structural facial traits.
          </p>
          
          <div class="italic text-refined-espresso text-light bg-white p-6 border-l-2 border-refined-sage/60 space-y-2 mt-8 shadow-2xs">
            <p class="text-sm sm:text-base">
              "We do not seek to alter your individual canvas. Our entire objective is to help you inhabit your body with continuous energy, authentic expressions, and absolute physiological confidence."
            </p>
            <span class="font-sans text-[10px] tracking-widest uppercase font-semibold text-refined-forest/50 block pt-1">
              — The Clinical Founding Charter
            </span>
          </div>
        </div>

      </div>
    </section>

    <AboutTeam />

    <section class="w-full bg-refined-cream py-24 text-center">
      <div class="max-w-2xl mx-auto px-6 space-y-6">
        <h2 class="font-sans text-3xl sm:text-4xl text-refined-forest tracking-wide font-light">
          Experience Your Diagnostic Mapping
        </h2>
        <p class="font-serif text-sm text-refined-forest/70 leading-relaxed max-w-lg mx-auto">
          Every long-term preservation protocol begins with an analytical, full-scope clinical check-in. Explore our custom schedules.
        </p>
        <div class="pt-4">
          <NuxtLink to="/contact" class="inline-block bg-refined-forest text-white font-sans text-xs tracking-widest uppercase font-semibold py-4 px-10 hover:bg-refined-sage transition-all duration-300 ease-out rounded-none shadow-xs">
            Schedule Studio Intake
          </NuxtLink>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'About Our Practice & Team — Scientific Proactive Longevity Systems',
  meta: [
    { name: 'description', content: 'Discover our holistic root-cause philosophy. Our nurse practitioner-led medspa clinic syncs internal metabolic biomarker tracking with advanced, natural medical aesthetics.' }
  ]
})
</script>