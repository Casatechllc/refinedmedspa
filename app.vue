<template>
  <div class="relative w-full min-h-screen bg-refined-cream selection:bg-refined-forest/10 selection:text-refined-forest">

    <AppSplashScreen />
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  meta: [
    { name: 'referrer', content: 'no-referrer' }
  ]
})
</script>
