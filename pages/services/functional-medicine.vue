<template>
  <main class="w-full bg-refined-cream pt-4 lg:pt-8">
    
    <header class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mb-16 lg:mb-24">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <div class="lg:col-span-7 space-y-6">
          <NuxtLink to="/services" class="inline-flex items-center text-xs tracking-widest uppercase text-refined-sage font-medium group">
            <span class="transform translate-x-0 group-hover:-translate-x-1 transition-transform duration-300 mr-1.5">←</span>
            <span>Back to Offerings</span>
          </NuxtLink>
          <div class="space-y-4">
            <span class="font-serif text-xs tracking-[0.25em] uppercase text-refined-sage block">Root-Cause Restoration</span>
            <h1 class="font-sans text-4xl sm:text-5xl lg:text-6xl text-refined-forest tracking-wide leading-tight">
              Functional Medicine
            </h1>
          </div>
          <p class="font-serif text-base sm:text-lg text-refined-forest/80 leading-relaxed italic font-light">
            Your body is always trying to tell you something. Functional medicine is a personalized, root-cause approach that restores balance and optimizes your body’s function. Unlike traditional medicine, our approach listens to your whole story, tracing symptoms back to their source.
          </p>
        </div>
        <div class="lg:col-span-5 aspect-[4/5] bg-refined-stone/20 overflow-hidden relative shadow-xs">
          <img src="/mspa-image-3.png" alt="Functional Medicine Diagnostic Evaluation" class="w-full h-full object-cover object-center" />
        </div>
      </div>
      <div class="w-full h-[1px] bg-refined-stone/30 mt-16"></div>
    </header>

    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-24 lg:pb-36">
      
      <div class="lg:col-span-8 space-y-24 lg:space-y-32">
        
        <section class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div class="md:col-span-5 space-y-3">
            <span class="font-serif text-xs tracking-[0.2em] uppercase text-refined-sage block">The Methodology</span>
            <h2 class="font-sans text-2xl sm:text-3xl text-refined-forest tracking-wide">What Is Functional Medicine?</h2>
          </div>
          <div class="md:col-span-7 font-serif text-sm sm:text-base text-refined-forest/80 space-y-6 leading-relaxed">
            <p>
              We uncover the patterns beneath how you feel and rebuild balance from the inside out by examining hormones, metabolism, nutrition, gut health, inflammation, and lifestyle factors.
            </p>
            <p>
              Through comprehensive evaluation and individualized treatment plans—often utilizing advanced diagnostic testing—we focus deeply on prevention, cellular restoration, and long-term wellness. Care is entirely evidence-based and may include targeted nutrition architectures, lifestyle optimization parameters, professional-grade supplementation, clinical peptide therapy, and supportive intravenous nutrient infusions.
            </p>
          </div>
        </section>

        <section class="bg-white p-8 sm:p-12 border border-refined-stone/20 space-y-8">
          <div class="space-y-2">
            <span class="font-serif text-xs tracking-[0.2em] uppercase text-refined-sage block">Symptom Mapping</span>
            <h3 class="font-sans text-2xl text-refined-forest tracking-wide">The Ideal Client</h3>
            <p class="font-serif text-xs sm:text-sm text-refined-forest/60">
              This proactive paradigm is meticulously tailored for individuals who value prevention and direct long-term health investments.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 font-serif text-xs sm:text-sm text-refined-forest/80">
            <div class="space-y-1.5">
              <span class="text-refined-sage font-sans text-xs font-semibold uppercase tracking-wider block">01 / Proactive Alignment</span>
              <p class="text-refined-forest/70 leading-relaxed">Want a highly proactive, deeply personalized data approach to their health architecture.</p>
            </div>
            <div class="space-y-1.5">
              <span class="text-refined-sage font-sans text-xs font-semibold uppercase tracking-wider block">02 / Clinical Advocacy</span>
              <p class="text-refined-forest/70 leading-relaxed">Feel dismissed, rushed, or unheard in traditional, high-volume insurance healthcare settings.</p>
            </div>
            <div class="space-y-1.5">
              <span class="text-refined-sage font-sans text-xs font-semibold uppercase tracking-wider block">03 / Bioenergetic Depletion</span>
              <p class="text-refined-forest/70 leading-relaxed">Experience consistent unexplained fatigue, brain fog, acute hormone imbalances, weight concerns, or chronic high stress.</p>
            </div>
            <div class="space-y-1.5">
              <span class="text-refined-sage font-sans text-xs font-semibold uppercase tracking-wider block">04 / Inflammatory Tracking</span>
              <p class="text-refined-forest/70 leading-relaxed">Are actively seeking advanced support for gut microbiota health, metabolic parameters, or systemic inflammation triggers.</p>
            </div>
            <div class="space-y-1.5">
              <span class="text-refined-sage font-sans text-xs font-semibold uppercase tracking-wider block">05 / Longevity Strategy</span>
              <p class="text-refined-forest/70 leading-relaxed">Want to optimize their athletic performance, biological cellular longevity, and global well-being markers.</p>
            </div>
            <div class="space-y-1.5">
              <span class="text-refined-sage font-sans text-xs font-semibold uppercase tracking-wider block">06 / Preventative Investment</span>
              <p class="text-refined-forest/70 leading-relaxed">Place a premium value on early preventative therapeutics and structured long-term health investments.</p>
            </div>
          </div>
        </section>

        <section class="space-y-8">
          <div class="space-y-2">
            <span class="font-serif text-xs tracking-[0.2em] uppercase text-refined-sage block">Clinical Clarity</span>
            <h3 class="font-sans text-xl text-refined-forest tracking-wide">Common Questions Regarding Protocols</h3>
          </div>

          <div class="space-y-4 border-t border-refined-stone/30 pt-2 font-serif text-sm">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index"
              class="border-b border-refined-stone/20 pb-4 pt-1"
            >
              <button 
                @click="toggleFaq(index)"
                class="w-full flex items-center justify-between text-left py-2.5 text-refined-forest hover:text-refined-sage font-sans text-base transition-colors duration-200 cursor-pointer group outline-hidden"
              >
                <span class="font-medium tracking-wide pr-4">{{ faq.question }}</span>
                <span class="text-refined-sage text-lg font-light transform transition-transform duration-300 shrink-0 select-none">
                  {{ activeFaqIndex === index ? '−' : '＋' }}
                </span>
              </button>

              <div 
                class="overflow-hidden transition-all duration-300 ease-in-out"
                :class="activeFaqIndex === index ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'"
              >
                <p class="text-refined-forest/70 leading-relaxed pl-1 pb-1">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

      <aside class="lg:col-span-4 lg:sticky lg:top-32 w-full mt-12 lg:mt-0">
        <ServicesCTA />
      </aside>

    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'default'
})

useHead({
  title: 'Functional Medicine & Whole-Person Wellness — Root-Cause Systemic Restorations',
  meta: [
    { name: 'description', content: 'Address the underlying root causes of fatigue, brain fog, gastrointestinal stress, and chronic inflammation. Explore advanced functional lab diagnostic assessments, customized nutritional protocols, and peptide therapies.' }
  ]
})

// Accordion Interactive State Engine
const activeFaqIndex = ref(null)

const toggleFaq = (index) => {
  if (activeFaqIndex.value === index) {
    activeFaqIndex.value = null
  } else {
    activeFaqIndex.value = index
  }
}

// Easily Updatable Functional Medicine FAQs Array Map
const faqs = ref([
  {
    question: 'What types of advanced testing do you utilize?',
    answer: 'Depending on your history, we coordinate comprehensive gastrointestinal microbiome panels, advanced salivary hormone profiles, localized cellular micronutrient essays, systemic environmental toxin tests, and deep inflammatory cardiovascular panels.'
  },
  {
    question: 'How long does a functional consultation path take?',
    answer: 'Root causes take time to unravel. Our initial evaluations span a full 60 to 90 minutes to ensure your complete medical history is reviewed. Personalized restoration roadmaps generally track across 3 to 6-month clinical phases.'
  },
  {
    question: 'Can I integrate functional wellness alongside traditional medicine treatment plans?',
    answer: 'Absolutely. Our advanced nurse practitioners practice integrative medicine. We safely align your custom nutritional supplements and peptide roadmaps right alongside therapies prescribed by your primary or specialist physicians.'
  }
])
</script>