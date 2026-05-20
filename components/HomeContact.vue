<template>
  <section id="connect" class="w-full bg-refined-cream py-24 lg:py-32 border-t border-refined-stone/30 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
      
      <div class="col-span-1 lg:col-span-5 space-y-8">
        <div class="space-y-4">
          <span 
            v-motion
            :initial="{ opacity: 0, y: 15 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
            class="font-serif text-xs tracking-[0.2em] uppercase text-refined-sage block"
          >
            Connect With Us
          </span>
          <h2 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 100 } }"
            class="font-sans text-3xl sm:text-4xl text-refined-forest tracking-wide leading-tight"
          >
            Your Health Transformation Starts Here
          </h2>
          <div class="w-12 h-[1px] bg-refined-stone my-4"></div>
          <p class="font-serif text-sm sm:text-base text-refined-forest/70 leading-relaxed">
            Schedule your personalized visit or request a consultation to receive a thoughtful treatment plan intentionally designed around your unique biology and lifestyle goals.
          </p>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0 }"
          :visible="{ opacity: 1, transition: { duration: 1200, delay: 300 } }"
          class="space-y-6 pt-4 border-t border-refined-stone/30 font-serif text-sm text-refined-forest/80"
        >
          <div class="flex items-start space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-refined-sage shrink-0 mt-0.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <div class="space-y-1">
              <p class="font-sans text-xs tracking-wider uppercase font-semibold text-refined-forest">Our Practice</p>
              <div class="pt-1">
                <p>2337 Whitney Ave</p>
                <p>Hamden, CT 06518</p>
              </div>
              
              <div class="pt-2">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=2337+Whitney+Ave+Hamden+CT+06518" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center space-x-1.5 font-sans text-xs font-semibold tracking-wider uppercase text-refined-forest border-b border-refined-forest/20 pb-0.5 hover:border-refined-sage hover:text-refined-sage transition-all duration-300"
                >
                  <span>Get Directions</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>

              <span class="block text-xs text-refined-forest/50 font-sans tracking-wide pt-2">
                Serving New Haven, North Haven, Wallingford, & Cheshire
              </span>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-refined-sage shrink-0 mt-0.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.145-.44.02-.927.396-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <div>
              <p class="font-sans text-xs tracking-wider uppercase font-semibold text-refined-forest">Direct Contact</p>
              <p class="mt-1">Phone: <a href="tel:2039026377" class="hover:text-refined-sage transition-colors font-sans font-medium">203.902.6377</a></p>
              <p>Fax: <span class="font-sans">203.724.2281</span></p>
            </div>
          </div>
        </div>
      </div>

      <div 
        v-motion
        :initial="{ opacity: 0, x: 30 }"
        :visible="{ opacity: 1, x: 0, transition: { duration: 1400, ease: 'easeOut' } }"
        class="col-span-1 lg:col-span-7 w-full bg-white/40 border border-refined-stone/40 p-8 sm:p-10 shadow-xs"
      >
        <ContactForm />
      </div>

    </div>
  </section>
</template>