<template>
  <main class="w-full bg-refined-cream pt-4 lg:pt-8 overflow-hidden">
    
    <header class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mb-20 lg:mb-28">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
        <div class="lg:col-span-7 space-y-4">
          <span 
            v-motion
            :initial="{ opacity: 0, y: 15 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
            class="font-serif text-xs tracking-[0.25em] uppercase text-refined-sage block"
          >
            Clinical Offerings
          </span>
          <h1 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 100 } }"
            class="font-sans text-4xl sm:text-5xl lg:text-6xl text-refined-forest tracking-wide leading-tight"
          >
            The Practices of Refinement
          </h1>
        </div>
        <div class="lg:col-span-5">
          <p 
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { duration: 1200, delay: 300 } }"
            class="font-serif text-sm sm:text-base text-refined-forest/70 leading-relaxed lg:border-l lg:border-refined-stone/40 lg:pl-8"
          >
            A tailored ecosystem blending precise diagnostics, preventative functional balance, and sophisticated medical therapeutics designed to honor your individual physiology.
          </p>
        </div>
      </div>
      
      <div class="w-full h-[1px] bg-refined-stone/30 mt-12"></div>
    </header>

    <nav class="sticky top-[72px] z-20 w-full bg-refined-cream/90 backdrop-blur-md border-b border-refined-stone/20 hidden md:block select-none">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex items-center space-x-8 h-14 font-sans text-[11px] tracking-widest uppercase font-medium text-refined-forest/60">
        <button @click="scrollToSection('weight-loss')" class="hover:text-refined-sage transition-colors cursor-pointer outline-hidden">Weight Loss</button>
        <button @click="scrollToSection('iv-hydration')" class="hover:text-refined-sage transition-colors cursor-pointer outline-hidden">IV Therapy</button>
        <button @click="scrollToSection('functional')" class="hover:text-refined-sage transition-colors cursor-pointer outline-hidden">Functional Wellness</button>
        <button @click="scrollToSection('aesthetics')" class="hover:text-refined-sage transition-colors cursor-pointer outline-hidden">Aesthetics</button>
        <button @click="scrollToSection('genders')" class="hover:text-refined-sage transition-colors cursor-pointer outline-hidden">Targeted Health</button>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-12 space-y-32 lg:space-y-48 pb-24 lg:pb-36">
      
      <section id="weight-loss" class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center scroll-mt-32">
        <div 
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 1200 } }"
          class="lg:col-span-6 space-y-6"
        >
          <div class="space-y-2">
            <span class="font-serif text-[11px] tracking-widest text-refined-sage uppercase font-medium block">Refine Self Flagship Suite</span>
            <h2 class="font-sans text-2xl sm:text-3xl text-refined-forest tracking-wide">Personalized Medical Weight Loss</h2>
          </div>
          <p class="font-serif text-sm sm:text-base text-refined-forest/80 leading-relaxed italic font-light">
            Your relationship with your body is unique. With compassion and careful medical guidance, weight loss becomes more than just a number. It is a way to regain your energy, confidence, and sense of possibility. We support you at every step, working together for lasting change.
          </p>
          <p class="font-sans text-sm text-refined-forest/70 leading-relaxed">
            Led by our advanced nurse practitioners, our program skips transient trends for clinical metabolic optimization. By integrating cutting-edge biomarkers with stabilization parameters, we support you at every step, working together for lasting change.
          </p>
          
          <div class="pt-1">
            <NuxtLink to="/services/medical-weight-loss" class="inline-flex items-center font-sans text-xs tracking-wider uppercase text-refined-sage font-medium group">
              <span>View Program Details</span>
              <span class="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ml-1.5">→</span>
            </NuxtLink>
          </div>
          
          <div class="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-serif text-refined-forest/70">
            <div class="flex items-center space-x-2"><span class="text-refined-sage">○</span> <span>Metabolic & Biomarker Analysis</span></div>
            <div class="flex items-center space-x-2"><span class="text-refined-sage">○</span> <span>Custom GLP-1 Formulation Paths</span></div>
            <div class="flex items-center space-x-2"><span class="text-refined-sage">○</span> <span>Supervised Stabilization Phases</span></div>
            <div class="flex items-center space-x-2"><span class="text-refined-sage">○</span> <span>Long-term Maintenance Blueprinting</span></div>
          </div>

          <div class="pt-4">
            <NuxtLink to="/contact?type=weight-loss" class="inline-block bg-refined-forest text-white font-sans text-xs tracking-widest uppercase py-3 px-8 hover:bg-refined-sage transition-colors duration-300">
              Explore Weight Loss Protocol
            </NuxtLink>
          </div>
        </div>
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.98 }"
          :visible="{ opacity: 1, scale: 1, transition: { duration: 1400, delay: 100 } }"
          class="lg:col-span-6 aspect-[4/5] bg-refined-stone/20 overflow-hidden relative"
        >
          <img src="/mspa-image-5.png" alt="Personalized Medical Weight Loss Consultation" class="w-full h-full object-cover object-center" />
        </div>
      </section>

      <section id="iv-hydration" class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center scroll-mt-32">
        <div class="lg:col-span-6 lg:order-2 space-y-6">
          <div class="space-y-2">
            <span class="font-serif text-[11px] tracking-widest text-refined-sage uppercase font-medium block">Cellular Replenishment Suite</span>
            <h2 class="font-sans text-2xl sm:text-3xl text-refined-forest tracking-wide">IV Hydration Therapy</h2>
          </div>
          <p class="font-serif text-sm sm:text-base text-refined-forest/80 leading-relaxed italic font-light">
            Restore, replenish, and revitalize with essential vitamins, antioxidants, and trace elements delivered directly into your bloodstream for rapid, cellular replenishment.
          </p>
          <p class="font-sans text-sm text-refined-forest/70 leading-relaxed">
            By bypassing the digestive tract completely, our precise therapeutic IV infusions give your body fast, effective support for energy, intense recovery, neurological clarity, and enhanced systemic immunity.
          </p>

          <div class="pt-1">
            <NuxtLink to="/services/iv-hydration" class="inline-flex items-center font-sans text-xs tracking-wider uppercase text-refined-sage font-medium group">
              <span>View Infusion Menu</span>
              <span class="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ml-1.5">→</span>
            </NuxtLink>
          </div>

          <div class="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-serif text-refined-forest/70">
            <div class="flex items-center space-x-2"><span class="text-refined-sage">○</span> <span>Myers' Cocktails & Antioxidants</span></div>
            <div class="flex items-center space-x-2"><span class="text-refined-sage">○</span> <span>NAD+ Anti-Aging Intravenous Paths</span></div>
            <div class="flex items-center space-x-2"><span class="text-refined-sage">○</span> <span>Targeted Immune Formulation Blends</span></div>
            <div class="flex items-center space-x-2"><span class="text-refined-sage">○</span> <span>Post-Exertion Cellular Recovery</span></div>
          </div>

          <div class="pt-4">
            <NuxtLink to="/contact?type=iv-therapy" class="inline-block bg-refined-forest text-white font-sans text-xs tracking-widest uppercase py-3 px-8 hover:bg-refined-sage transition-colors duration-300">
              Schedule An Infusion Session
            </NuxtLink>
          </div>
        </div>
        <div class="lg:col-span-6 lg:order-1 aspect-[4/5] bg-refined-stone/20 overflow-hidden relative">
          <img src="/home-hero.png" alt="IV Hydration Infusion Suite Lounge" class="w-full h-full object-cover object-center" />
        </div>
      </section>

      <section id="functional" class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center scroll-mt-32">
        <div class="lg:col-span-6 space-y-6">
          <div class="space-y-2">
            <span class="font-serif text-[11px] tracking-widest text-refined-sage uppercase font-medium block">Root-Cause Restoration Medicine</span>
            <h2 class="font-sans text-2xl sm:text-3xl text-refined-forest tracking-wide">Functional Medicine &amp; Whole-Person Wellness</h2>
          </div>
          <p class="font-serif text-sm sm:text-base text-refined-forest/80 leading-relaxed italic font-light">
            A personalized, deep root-cause approach designed to optimize hormones, performance, and baseline systemic vitality from the inside out.
          </p>
          <p class="font-sans text-sm text-refined-forest/70 leading-relaxed">
            We reject temporary symptom masking. Our functional assessments examine advanced gut microflora pathways, custom endocrine panels, nutrition metrics, and inflammation profiles to design precise lifestyle plans tailored to your timeline.
          </p>

          <div class="pt-1">
            <NuxtLink to="/services/functional-medicine" class="inline-flex items-center font-sans text-xs tracking-wider uppercase text-refined-sage font-medium group">
              <span>View Evaluation Methodology</span>
              <span class="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ml-1.5">→</span>
            </NuxtLink>
          </div>

          <div class="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-serif text-refined-forest/70">
            <div class="flex items-center space-x-2"><span class="text-refined-sage">○</span> <span>Advanced Hormone Testing Panels</span></div>
            <div class="flex items-center space-x-2"><span class="text-refined-sage">○</span> <span>Microbiome & Gut Axis Analytics</span></div>
            <div class="flex items-center space-x-2"><span class="text-refined-sage">○</span> <span>Systemic Inflammation Diagnostics</span></div>
            <div class="flex items-center space-x-2"><span class="text-refined-sage">○</span> <span>Tailored Micronutrient Strategies</span></div>
          </div>

          <div class="pt-4">
            <NuxtLink to="/contact?type=functional" class="inline-block bg-refined-forest text-white font-sans text-xs tracking-widest uppercase py-3 px-8 hover:bg-refined-sage transition-colors duration-300">
              Begin Vitality Roadmap
            </NuxtLink>
          </div>
        </div>
        <div class="lg:col-span-6 aspect-[4/5] bg-refined-stone/20 overflow-hidden relative">
          <img src="/mspa-image-3.png" alt="Functional Medicine Diagnostic Consultation" class="w-full h-full object-cover object-center" />
        </div>
      </section>

      <section id="aesthetics" class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center scroll-mt-32">
        <div class="lg:col-span-6 lg:order-2 space-y-6">
          <div class="space-y-2">
            <span class="font-serif text-[11px] tracking-widest text-refined-sage uppercase font-medium block">Natural Structural Restorations</span>
            <h2 class="font-sans text-2xl sm:text-3xl text-refined-forest tracking-wide">Medical Aesthetics</h2>
          </div>
          <p class="font-serif text-sm sm:text-base text-refined-forest/80 leading-relaxed italic font-light">
            Designed to gently support and complement your inner healing, delivering elegant results that bolster natural, elevated confidence.
          </p>
          <p class="font-sans text-sm text-refined-forest/70 leading-relaxed">
            Our aesthetic injectables and skin therapies honor your underlying anatomy. Guided by extensive clinical nurse practitioner oversight, we curate conservative touchpoints that never over-adjust, leaving you looking completely authentic and refreshed.
          </p>

          <div class="pt-1">
            <NuxtLink to="/services/Aesthetics" class="inline-flex items-center font-sans text-xs tracking-wider uppercase text-refined-sage font-medium group">
              <span>View Treatment Modalities</span>
              <span class="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ml-1.5">→</span>
            </NuxtLink>
          </div>

          <div class="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-serif text-refined-forest/70">
            <div class="flex items-center space-x-2"><span class="text-refined-sage">○</span> <span>Wrinkle Minimizer Formulations</span></div>
            <div class="flex items-center space-x-2"><span class="text-refined-sage">○</span> <span>Natural Hydrating Dermal Fillers</span></div>
            <div class="flex items-center space-x-2"><span class="text-refined-sage">○</span> <span>Targeted Facial Canvas Refreshing</span></div>
            <div class="flex items-center space-x-2"><span class="text-refined-sage">○</span> <span>Collagen Stimulation Matrix Work</span></div>
          </div>

          <div class="pt-4">
            <NuxtLink to="/contact?type=aesthetics" class="inline-block bg-refined-forest text-white font-sans text-xs tracking-widest uppercase py-3 px-8 hover:bg-refined-sage transition-colors duration-300">
              Schedule Aesthetic Session
            </NuxtLink>
          </div>
        </div>
        <div class="lg:col-span-6 lg:order-1 aspect-[4/5] bg-refined-stone/20 overflow-hidden relative">
          <img src="/mspa-image-1.png" alt="Medical Aesthetic Facial Rejuvenation" class="w-full h-full object-cover object-center" />
        </div>
      </section>

      <section id="genders" class="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-8 scroll-mt-32">
        
        <div class="space-y-6 p-8 bg-white/50 border border-refined-stone/30 flex flex-col justify-between">
          <div class="space-y-6">
            <div class="aspect-[16/10] w-full bg-refined-stone/20 overflow-hidden mb-6">
              <img src="/mspa-image-2.png" alt="Men's Health and Vitality Frameworks" class="w-full h-full object-cover object-center" />
            </div>
            <div class="space-y-2">
              <span class="font-serif text-xs text-refined-sage tracking-wider uppercase font-medium">Physiological Optimization</span>
              <h3 class="font-sans text-xl text-refined-forest tracking-wide">Men’s Health Optimization</h3>
            </div>
            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed">
              A personalized approach to optimize strength, daily energy, and long-term stamina. We look closely at targeted hormone balance, metabolic health parameters, cardiovascular screeners, and preventive clinical care tailored exclusively to men's aging physiology.
            </p>
            <div class="pt-1">
              <NuxtLink to="/services/mens-health" class="inline-flex items-center font-sans text-xs tracking-wider uppercase text-refined-sage font-medium group">
                <span>Explore Optimization Paths</span>
                <span class="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ml-1.5">→</span>
              </NuxtLink>
            </div>
          </div>
          <div class="pt-6">
            <NuxtLink to="/contact?type=mens-health" class="inline-block font-sans text-xs tracking-wider uppercase text-refined-forest font-semibold border-b border-refined-forest/20 pb-0.5 hover:border-refined-forest transition-colors">
              Access Performance Metrics
            </NuxtLink>
          </div>
        </div>

        <div class="space-y-6 p-8 bg-white/50 border border-refined-stone/30 flex flex-col justify-between">
          <div class="space-y-6">
            <div class="aspect-[16/10] w-full bg-refined-stone/20 overflow-hidden mb-6">
              <img src="/mspa-image-6.png" alt="Women's Longevity and Endocrine Systems Support" class="w-full h-full object-cover object-center" />
            </div>
            <div class="space-y-2">
              <span class="font-serif text-xs text-refined-sage tracking-wider uppercase font-medium">Endocrine Restorations</span>
              <h3 class="font-sans text-xl text-refined-forest tracking-wide">Women’s Health Lifecycle Care</h3>
            </div>
            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed">
              Compassionate, individualized clinical care focusing on balanced hormones, metabolic health parameters, emotional mood metrics, and clean cellular energy across all developmental stages of life, including perimenopause and beyond.
            </p>
            <div class="pt-1">
              <NuxtLink to="/services/womens-health" class="inline-flex items-center font-sans text-xs tracking-wider uppercase text-refined-sage font-medium group">
                <span>Explore Lifecycle Care</span>
                <span class="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ml-1.5">→</span>
              </NuxtLink>
            </div>
          </div>
          <div class="pt-6">
            <NuxtLink to="/contact?type=womens-health" class="inline-block font-sans text-xs tracking-wider uppercase text-refined-forest font-semibold border-b border-refined-forest/20 pb-0.5 hover:border-refined-forest transition-colors">
              Begin Lifecycle Journey
            </NuxtLink>
          </div>
        </div>

      </section>

    </div>

    <HomeCTA />
  </main>
</template>

<script setup>
definePageMeta({
  title: 'Services & Treatments — Medical Care and Optimization Protocols'
})

useHead({
  meta: [
    { name: 'description', content: 'Explore our tailored clinical protocols, including personalized medical weight loss, customized IV fluid hydration, root-cause functional medicine consultations, and natural aesthetics.' }
  ]
})

// Clean JavaScript logic for seamless anchor scrolling animation
const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style scoped>
/* Tailored margins for spacing corrections after jumping offsets */
.scroll-mt-32 {
  scroll-margin-top: 136px; /* 72px master header height + 64px anchor bar layout height */
}
</style>