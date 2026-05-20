<template>
  <section id="services" class="w-full bg-refined-cream pb-24 lg:pb-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
      
      <div class="max-w-2xl mb-16 lg:mb-24 space-y-4">
        <span 
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
          class="font-serif text-xs tracking-[0.2em] uppercase text-refined-sage block"
        >
          Our Offerings
        </span>
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 100 } }"
          class="font-sans text-3xl sm:text-4xl text-refined-forest tracking-wide"
        >
          Personalized Wellness & Medical Care
        </h2>
        <p 
          v-motion
          :initial="{ opacity: 0 }"
          :visible="{ opacity: 1, transition: { duration: 1200, delay: 300 } }"
          class="font-serif text-sm sm:text-base text-refined-forest/70 leading-relaxed"
        >
          We provide personalized medical weight loss, functional medicine, hormone health, aesthetics, and IV hydration therapies designed to support long-term wellness and optimization.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
        
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 100 } }"
          class="group space-y-5"
        >
          <div class="aspect-[3/4] w-full overflow-hidden bg-refined-stone/20 relative shadow-xs">
            <img 
              src="/mspa-image-5.png" 
              alt="Medical Weight Loss - refine self"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-1000 ease-out"
            />
          </div>
          <div class="space-y-2">
            <h3 class="font-sans text-xl text-refined-forest tracking-wide">Medical Weight Loss</h3>
            <p class="font-serif text-xs tracking-widest text-refined-sage uppercase font-medium">Refine Self Program</p>
            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed pt-1">
              Personalized, medically supervised, and sustainable metabolic care. Our nurse practitioner-led programs focus on long-term health phases: weight loss, stabilization, and maintenance.
            </p>
            <div class="pt-2">
              <NuxtLink to="#pricing" class="inline-block font-sans text-xs tracking-wider uppercase text-refined-forest font-semibold border-b border-refined-forest/20 pb-0.5 hover:border-refined-forest transition-colors">
                View Launch Rates
              </NuxtLink>
            </div>
          </div>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 200 } }"
          class="group space-y-5"
        >
          <div class="aspect-[3/4] w-full overflow-hidden bg-refined-stone/20 relative shadow-xs">
            <img 
              src="/mspa-image-3.png" 
              alt="Comprehensive Wellness Consultation"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-1000 ease-out"
            />
          </div>
          <div class="space-y-2">
            <h3 class="font-sans text-xl text-refined-forest tracking-wide">Functional Medicine</h3>
            <p class="font-serif text-xs tracking-widest text-refined-sage uppercase font-medium">Comprehensive Wellness Consultation</p>
            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed pt-1">
              A root-cause approach designed to restore balance. We look deeply at interconnected systems including hormones, gut health, nutrition, and inflammation to find why symptoms occur.
            </p>
            <div class="pt-2">
              <NuxtLink to="/contact" class="inline-block font-sans text-xs tracking-wider uppercase text-refined-forest font-semibold border-b border-refined-forest/20 pb-0.5 hover:border-refined-forest transition-colors">
                Begin Path Toward Vitality
              </NuxtLink>
            </div>
          </div>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 300 } }"
          class="group space-y-5"
        >
          <div class="aspect-[3/4] w-full overflow-hidden bg-refined-stone/20 relative shadow-xs">
            <img 
              src="/home-hero.png" 
              alt="IV Hydration Therapy Menu"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-1000 ease-out"
            />
          </div>
          <div class="space-y-2">
            <h3 class="font-sans text-xl text-refined-forest tracking-wide">IV Hydration Therapy</h3>
            <p class="font-serif text-xs tracking-widest text-refined-sage uppercase font-medium">Restore & Revitalize Infusions</p>
            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed pt-1">
              Delivering targeted vitamins, minerals, and nutrients directly into the bloodstream for rapid replenishment. Ideal for low energy, immune support, and wellness optimization.
            </p>
            <div class="pt-2">
              <NuxtLink to="/contact" class="inline-block font-sans text-xs tracking-wider uppercase text-refined-forest font-semibold border-b border-refined-forest/20 pb-0.5 hover:border-refined-forest transition-colors">
                Book IV Experience
              </NuxtLink>
            </div>
          </div>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 100 } }"
          class="group space-y-5"
        >
          <div class="aspect-[3/4] w-full overflow-hidden bg-refined-stone/20 relative shadow-xs">
            <img 
              src="/mspa-image-1.png" 
              alt="Medical Aesthetics Refresh Treatment"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-1000 ease-out"
            />
          </div>
          <div class="space-y-2">
            <h3 class="font-sans text-xl text-refined-forest tracking-wide">Aesthetics</h3>
            <p class="font-serif text-xs tracking-widest text-refined-sage uppercase font-medium">Refresh Treatment</p>
            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed pt-1">
              Designed to enhance your natural beauty while maintaining authenticity and balance. Guided by advanced medical training for subtle, refreshed, and rejuvenated outcomes.
            </p>
            <div class="pt-2">
              <NuxtLink to="/contact" class="inline-block font-sans text-xs tracking-wider uppercase text-refined-forest font-semibold border-b border-refined-forest/20 pb-0.5 hover:border-refined-forest transition-colors">
                Schedule Aesthetic Consultation
              </NuxtLink>
            </div>
          </div>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 200 } }"
          class="group space-y-5"
        >
          <div class="aspect-[3/4] w-full overflow-hidden bg-refined-stone/20 relative shadow-xs">
            <img 
              src="/mspa-image-2.png" 
              alt="Advanced Hormone & Wellness Assessment for Men"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-1000 ease-out"
            />
          </div>
          <div class="space-y-2">
            <h3 class="font-sans text-xl text-refined-forest tracking-wide">Men’s Health</h3>
            <p class="font-serif text-xs tracking-widest text-refined-sage uppercase font-medium">Advanced Hormone & Wellness Assessment</p>
            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed pt-1">
              Maintaining vitality, confidence, and long-term performance. Addressing fatigue, hormone balance, metabolic parameters, and preventive care tailored to men's physiology.
            </p>
            <div class="pt-2">
              <NuxtLink to="/contact" class="inline-block font-sans text-xs tracking-wider uppercase text-refined-forest font-semibold border-b border-refined-forest/20 pb-0.5 hover:border-refined-forest transition-colors">
                Optimize Performance
              </NuxtLink>
            </div>
          </div>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 300 } }"
          class="group space-y-5"
        >
          <div class="aspect-[3/4] w-full overflow-hidden bg-refined-stone/20 relative shadow-xs">
            <img 
              src="/mspa-image-6.png" 
              alt="Restore & Thrive Program for Women"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-1000 ease-out"
            />
          </div>
          <div class="space-y-2">
            <h3 class="font-sans text-xl text-refined-forest tracking-wide">Women’s Health</h3>
            <p class="font-serif text-xs tracking-widest text-refined-sage uppercase font-medium">Restore & Thrive Program</p>
            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed pt-1">
              Compassionate, specialized support for hormone balance, mood, energy, and metabolism. Providing functional guidance from early adulthood through perimenopause and beyond.
            </p>
            <div class="pt-2">
              <NuxtLink to="/contact" class="inline-block font-sans text-xs tracking-wider uppercase text-refined-forest font-semibold border-b border-refined-forest/20 pb-0.5 hover:border-refined-forest transition-colors">
                Begin Women's Journey
              </NuxtLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>