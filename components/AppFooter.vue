<template>
  <footer class="w-full bg-refined-cream border-t border-refined-stone/40 pt-20 pb-12 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-refined-stone/30">
        
        <div class="col-span-1 lg:col-span-5 space-y-6">
          <div class="max-w-[160px]">
            <img 
              src="/logo-long-transparent.png" 
              alt="Refined Health & Aesthetics" 
              class="w-full h-auto object-contain"
            />
          </div>
          <p class="font-serif text-sm text-refined-forest/70 max-w-sm leading-relaxed">
            A sanctuary dedicated to pro-active preservation and natural enhancement. We help you feel like the most vibrant version of yourself.
          </p>
        </div>

        <div class="col-span-1 sm:col-span-3 lg:col-span-3 space-y-4">
          <h4 class="font-sans text-xs tracking-[0.2em] uppercase text-refined-forest font-medium">Explore</h4>
          <ul class="space-y-2.5 font-serif text-sm text-refined-forest/70">
            <li><NuxtLink to="/" class="hover:text-refined-forest transition-colors duration-200">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-refined-forest transition-colors duration-200">About Our Studio</NuxtLink></li>
            <li><NuxtLink to="/science-of-grace" class="hover:text-refined-forest transition-colors duration-200">Science of Grace</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-refined-forest transition-colors duration-200">Connect With Us</NuxtLink></li>
          </ul>
        </div>

        <div class="col-span-1 sm:col-span-4 lg:col-span-4 space-y-4">
          <h4 class="font-sans text-xs tracking-[0.2em] uppercase text-refined-forest font-medium">Bespoke Offerings</h4>
          <ul class="space-y-2.5 font-serif text-sm text-refined-forest/70">
            <li><NuxtLink to="/services/expression-softening" class="hover:text-refined-forest transition-colors duration-200">Expression Softening</NuxtLink></li>
            <li><NuxtLink to="/services/collagen-preservation" class="hover:text-refined-forest transition-colors duration-200">Collagen Preservation</NuxtLink></li>
            <li><NuxtLink to="/services/aesthetic-therapy" class="hover:text-refined-forest transition-colors duration-200">Advanced Aesthetic Therapy</NuxtLink></li>
          </ul>
        </div>

      </div>

      <div class="pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
        
        <div class="font-sans text-[11px] tracking-widest uppercase text-refined-forest/50 space-y-1">
          <p>&copy; {{ new Date().getFullYear() }} Refined Health & Aesthetics. All Rights Reserved.</p>
        </div>

        <div class="font-sans text-[11px] tracking-widest uppercase text-refined-forest/50">
          <span>Designed & Developed by </span>
          <a 
            href="https://casatechllc.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-refined-forest/70 hover:text-refined-sage underline underline-offset-4 decoration-refined-stone transition-colors duration-300 font-medium"
          >
            Casatech LLC
          </a>
        </div>

      </div>

    </div>
  </footer>
</template>