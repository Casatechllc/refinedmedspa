<template>
  <div>
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
