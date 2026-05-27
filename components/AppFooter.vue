<template>
  <footer class="w-full bg-refined-cream border-t border-refined-stone/40 pt-20 pb-12 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
      
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-refined-stone/30">
        
        <div class="col-span-1 md:col-span-5 space-y-6">
          <div class="max-w-[160px]">
            <NuxtLink to="/" class="block transition-opacity duration-300 hover:opacity-80">
              <img 
                src="/logo-long-alt-transparent.png" 
                alt="Refined Health &amp; Aesthetics" 
                class="w-full h-auto object-contain"
              />
            </NuxtLink>
          </div>
          <p class="font-serif text-sm text-refined-forest/70 max-w-sm leading-relaxed">
            A sanctuary dedicated to proactive preservation and natural enhancement. We combine evidence-based clinical medicine with subtle artistry to honor your individual physiology.
          </p>
        </div>

        <div class="col-span-1 sm:col-span-6 md:col-span-3 space-y-4">
          <h4 class="font-sans text-xs tracking-[0.2em] uppercase text-refined-forest font-semibold">Studio Directory</h4>
          <ul class="space-y-2.5 font-serif text-sm text-refined-forest/70">
            <li><NuxtLink to="/" class="hover:text-refined-sage transition-colors duration-200">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-refined-sage transition-colors duration-200">About Our Studio</NuxtLink></li>
            <li><NuxtLink to="/getting-started" class="hover:text-refined-sage transition-colors duration-200">Getting Started</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-refined-sage transition-colors duration-200">Connect With Us</NuxtLink></li>
          </ul>
        </div>

        <div class="col-span-1 sm:col-span-6 md:col-span-4 space-y-4">
          <h4 class="font-sans text-xs tracking-[0.2em] uppercase text-refined-forest font-semibold">Bespoke Offerings</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-y-2.5 font-serif text-sm text-refined-forest/70">
            <NuxtLink to="/services" class="hover:text-refined-sage transition-colors duration-200">Services Overview</NuxtLink>
            <NuxtLink to="/services/medical-weight-loss" class="hover:text-refined-sage transition-colors duration-200">Medical Weight Loss</NuxtLink>
            <NuxtLink to="/services/functional-medicine" class="hover:text-refined-sage transition-colors duration-200">Functional Medicine</NuxtLink>
            <NuxtLink to="/services/mens-health" class="hover:text-refined-sage transition-colors duration-200">Men's Health Optimization</NuxtLink>
            <NuxtLink to="/services/womens-health" class="hover:text-refined-sage transition-colors duration-200">Women's Lifecycle Care</NuxtLink>
            <NuxtLink to="/services/Aesthetics" class="hover:text-refined-sage transition-colors duration-200">Medical Aesthetics</NuxtLink>
            <NuxtLink to="/services/iv-hydration" class="hover:text-refined-sage transition-colors duration-200">IV Hydration Therapy</NuxtLink>
          </div>
        </div>

      </div>

      <div class="pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
        
        <div class="font-sans text-[11px] tracking-widest uppercase text-refined-forest/50">
          <p>&copy; {{ new Date().getFullYear() }} Refined Health &amp; Aesthetics. All Rights Reserved.</p>
        </div>

        <div class="font-sans text-[11px] tracking-widest uppercase text-refined-forest/50">
          <span>Designed &amp; Developed by </span>
          <a 
            href="https://casatechstudio.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-refined-forest/70 hover:text-refined-sage underline underline-offset-4 decoration-refined-stone/40 transition-colors duration-300 font-medium"
          >
            Casatech LLC
          </a>
        </div>

      </div>

    </div>
  </footer>
</template>

<script setup>
// Pure routing component layout alignment mapping
</script>