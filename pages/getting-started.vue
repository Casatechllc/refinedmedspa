<template>
  <main class="w-full bg-refined-cream py-16 lg:py-24 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
      
      <div class="max-w-2xl mb-16 lg:mb-24 space-y-4">
        <span 
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
          class="font-serif text-xs tracking-[0.25em] uppercase text-refined-sage block"
        >
          Content & Education Series
        </span>
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 100 } }"
          class="font-sans text-4xl sm:text-5xl text-refined-forest tracking-wide leading-tight"
        >
          The Science of Grace
        </h1>
        <div class="w-16 h-[1px] bg-refined-stone my-6"></div>
        <p 
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { duration: 1200, delay: 300 } }"
          class="font-serif text-base text-refined-forest/70 leading-relaxed"
        >
          Demystifying cellular longevity and structural architecture. We strip away standard clinical industry jargon to explain the native mechanics of your skin, mapping out realistic, beautiful expectations for every decade.
        </p>
      </div>

      <div 
  v-motion
  :initial="{ opacity: 0, y: 10 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 400 } }"
  class="flex items-center border-b border-refined-stone/30 mb-16 overflow-x-auto whitespace-nowrap scrollbar-none gap-2 sm:gap-6"
>
  <button 
    @click="activeTimeline = 'all'" 
    class="inline-block font-sans text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer px-3 pb-4 pt-2 relative -mb-[1px]"
    :class="activeTimeline === 'all' ? 'text-refined-forest font-semibold' : 'text-refined-forest/40 hover:text-refined-forest'"
  >
    The Complete Series
    <span v-if="activeTimeline === 'all'" class="absolute bottom-0 left-0 w-full h-[1px] bg-refined-forest"></span>
  </button>
  
  <button 
    @click="activeTimeline = '25'" 
    class="inline-block font-sans text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer px-3 pb-4 pt-2 relative -mb-[1px]"
    :class="activeTimeline === '25' ? 'text-refined-forest font-semibold' : 'text-refined-forest/40 hover:text-refined-forest'"
  >
    Timeline 25+ (Prevention)
    <span v-if="activeTimeline === '25'" class="absolute bottom-0 left-0 w-full h-[1px] bg-refined-forest"></span>
  </button>
  
  <button 
    @click="activeTimeline = '35'" 
    class="inline-block font-sans text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer px-3 pb-4 pt-2 relative -mb-[1px]"
    :class="activeTimeline === '35' ? 'text-refined-forest font-semibold' : 'text-refined-forest/40 hover:text-refined-forest'"
  >
    Timeline 35+ (Slowing)
    <span v-if="activeTimeline === '35'" class="absolute bottom-0 left-0 w-full h-[1px] bg-refined-forest"></span>
  </button>
  
  <button 
    @click="activeTimeline = '45'" 
    class="inline-block font-sans text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer px-3 pb-4 pt-2 relative -mb-[1px]"
    :class="activeTimeline === '45' ? 'text-refined-forest font-semibold' : 'text-refined-forest/40 hover:text-refined-forest'"
  >
    Timeline 45+ (Restoration)
    <span v-if="activeTimeline === '45'" class="absolute bottom-0 left-0 w-full h-[1px] bg-refined-forest"></span>
  </button>
</div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        <article 
          v-for="article in filteredArticles" 
          :key="article.slug"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
          class="group space-y-6"
        >
          <div class="aspect-[16/10] w-full bg-refined-stone/20 overflow-hidden relative shadow-xs">
            <img 
              :src="article.image" 
              :alt="article.title"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-1000 ease-out"
            />
            <span class="absolute top-4 left-4 bg-refined-cream/90 backdrop-blur-xs px-3 py-1 font-sans text-[10px] tracking-widest uppercase text-refined-forest">
              Timeline {{ article.category }}+
            </span>
          </div>

          <div class="space-y-3">
            <div class="flex items-center space-x-2 text-[11px] font-sans tracking-widest uppercase text-refined-sage">
              <span>{{ article.readTime }} Read</span>
              <span>•</span>
              <span>Myth-Busting 101</span>
            </div>
            
            <h3 class="font-sans text-2xl text-refined-forest tracking-wide group-hover:text-refined-sage transition-colors duration-300">
              {{ article.title }}
            </h3>
            
            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed pt-1">
              {{ descriptionSlicer(article.excerpt) }}
            </p>

            <div class="pt-2">
              <NuxtLink :to="`/science-of-grace/${article.slug}`" class="inline-flex items-center space-x-2 font-sans text-xs tracking-widest uppercase text-refined-forest border-b border-refined-forest/30 pb-1 hover:border-refined-forest transition-colors duration-300">
                <span>Read The Analysis</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </article>

      </div>

    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTimeline = ref('all')

// Seed editorial framework articles utilizing your six available public images asset matrix structures
const articles = ref([
  {
    title: 'The Blueprint of Pro-Active Collagen Preservation',
    excerpt: 'Debunking the preventative anti-aging myth. Discover how cellular banking working cycles function in your mid-twenties, and why building structural bounce matrix early secures long-term skin density metrics without clinical alteration styling.',
    category: '25',
    readTime: '5 Min',
    image: '/mspa-image-1.png',
    slug: 'proactive-collagen-preservation'
  },
  {
    title: 'Expression Softening vs. Traditional Over-Freezing',
    excerpt: 'An explicit educational analysis exploring the neuromodulator threshold. We strip away marketing hype to look at subsurface patterns, highlighting how micro-dosing can gently soften persistent lines while keeping real emotions alive.',
    category: '35',
    readTime: '7 Min',
    image: '/mspa-image-2.png',
    slug: 'expression-softening-threshold'
  },
  {
    title: 'Restoring Subsurface Vitality: The Architecture of Luminescence',
    excerpt: 'As cell turn-over patterns naturally slow down, your skin texture demands deep intentional hydration frameworks rather than aggressive clinical scrubs. Explore the precise science behind cellular plumpness and age-defying structural grace.',
    category: '45',
    readTime: '6 Min',
    image: '/mspa-image-6.png',
    slug: 'restoring-subsurface-vitality'
  },
  {
    title: 'Aesthetic Literacy: Stripping Away Clinical Jargon and False Standards',
    excerpt: 'The aesthetic wellness landscape can feel crowded and confusing. We break down standard product formulas, debunk industry myths, and define what true skin-health sustainability looks like on a cellular level.',
    category: '25',
    readTime: '4 Min',
    image: '/mspa-image-4.jpg',
    slug: 'aesthetic-literacy-foundations'
  }
])

// Compute dynamically filtered journal timeline logs based on click controls state
const filteredArticles = computed(() => {
  if (activeTimeline.value === 'all') return articles.value
  return articles.value.filter(article => article.category === activeTimeline.value)
})

// Quick cosmetic text excerpt wrapper helper
const descriptionSlicer = (text) => {
  return text.length > 165 ? text.substring(0, 162) + '...' : text
}
</script>