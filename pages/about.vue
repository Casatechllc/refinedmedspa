<template>
  <main class="w-full bg-refined-cream">
     
    <AboutHero />

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
            Schedule Intake
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