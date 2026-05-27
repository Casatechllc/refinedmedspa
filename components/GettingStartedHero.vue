<template>
  <section id="getting-started-hero" class="w-full bg-refined-cream pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
      
      <div class="max-w-3xl mx-auto text-center space-y-8">
        
        <span 
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
          class="font-serif text-xs tracking-[0.3em] uppercase text-refined-sage block"
        >
          How It Works
        </span>

        <h1 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 150 } }"
          class="font-sans text-4xl sm:text-5xl lg:text-7xl text-refined-forest tracking-wide font-light leading-tight"
        >
          Care That Starts <br class="hidden sm:inline" /> With You
        </h1>

        <div 
          v-motion
          :initial="{ width: 0, opacity: 0 }"
          :enter="{ width: '80px', opacity: 1, transition: { duration: 1000, delay: 400 } }"
          class="h-[1px] bg-refined-stone/40 mx-auto"
        ></div>

        <p 
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 550 } }"
          class="font-serif text-base sm:text-lg lg:text-xl text-refined-forest/70 leading-relaxed italic"
        >
          We take time to actually listen before recommending anything. Every plan we build is shaped around your biology, your lifestyle, and what you're working toward.
        </p>

      </div>

      <div 
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 2000, delay: 200 } }"
        class="w-full h-[1px] bg-gradient-to-r from-transparent via-refined-stone/20 to-transparent mt-20"
      ></div>

    </div>
  </section>
</template>

<script setup>
// Transitions are powered natively via v-motion bindings
</script>