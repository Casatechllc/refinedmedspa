<template>
  <section id="experience" class="w-full bg-refined-cream py-20 lg:py-28 overflow-hidden border-t border-refined-stone/30">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-24 lg:space-y-36">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1400, ease: 'easeOut' } }"
          class="col-span-1 lg:col-span-7 aspect-[16/10] bg-refined-stone/20 overflow-hidden relative shadow-xs"
        >
          <img 
            src="/mspa-image-6.png" 
            alt="Intentionally Calm and Modern Clinical Environment" 
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover object-center select-none"
          />
        </div>

        <div class="col-span-1 lg:col-span-5 space-y-6 lg:max-w-md">
          <span class="font-serif text-xs tracking-[0.2em] uppercase text-refined-sage block">
            The Patient Experience
          </span>
          <h2 class="font-sans text-3xl text-refined-forest tracking-wide">
            Your Experience Matters
          </h2>
          <div class="w-12 h-[1px] bg-refined-stone"></div>
          <p class="font-serif text-sm sm:text-base text-refined-forest/80 leading-relaxed">
            From the moment you walk through our doors, your experience is intentionally different. We have created a calm, modern environment designed to reduce stress, encourage relaxation, and support healing. Appointments are never rushed. We take the time to listen, understand your goals, and develop personalized care plans that reflect your unique needs and lifestyle.
          </p>
        </div>

      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center md:pt-12">
        
        <div class="col-span-1 lg:col-span-5 order-2 lg:order-1 lg:max-w-md lg:ml-auto space-y-6">
          <span class="font-serif text-xs tracking-[0.2em] uppercase text-refined-sage block">
            Patient Feedback
          </span>
          <h2 class="font-sans text-3xl text-refined-forest tracking-wide">
            Soft Testimonials
          </h2>
          <div class="w-12 h-[1px] bg-refined-stone"></div>
          
          <blockquote class="space-y-4">
            <p class="font-serif text-base sm:text-lg italic text-refined-forest/90 leading-relaxed">
              "I finally feel supported in my weight loss journey. Professional, knowledgeable, and personalized care."
            </p>
            <cite class="font-sans text-xs tracking-widest uppercase text-refined-forest/60 block not-italic">
              — Verified Patient Journey
            </cite>
          </blockquote>
          
          <p class="font-serif text-sm text-refined-forest/70 leading-relaxed pt-2">
            Every detail—from consultation to treatment—is guided by compassion, clinical expertise, and genuine connection. Here, healthcare feels collaborative, comfortable, and empowering.
          </p>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1400, ease: 'easeOut', delay: 100 } }"
          class="col-span-1 lg:col-span-7 order-1 lg:order-2 aspect-[16/10] bg-refined-stone/20 overflow-hidden relative shadow-xs"
        >
          <img 
            src="/mspa-image-2.png" 
            alt="Personalized Medical Evaluation and Trust" 
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover object-center select-none"
          />
        </div>

      </div>

    </div>
  </section>
</template>