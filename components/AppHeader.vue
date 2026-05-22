<template>
  <header class="sticky top-0 z-50 w-full bg-refined-cream/80 backdrop-blur-md border-b border-refined-stone/20 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 h-20 flex items-center justify-between">
      
      <NuxtLink to="/" class="flex items-center max-w-[180px] sm:max-w-[220px] transition-opacity duration-300 hover:opacity-80">
        <img 
          src="/logo-long-alt-transparent.png" 
          alt="Refined Health & Aesthetics Logo" 
          class="w-full h-auto object-contain"
        />
      </NuxtLink>

      <nav class="hidden lg:flex items-center space-x-10">
        <NuxtLink to="/" class="font-sans text-xs tracking-[0.15em] uppercase text-refined-forest/80 hover:text-refined-forest transition-colors duration-300">
          Home
        </NuxtLink>

        <div 
          class="relative"
          @mouseenter="isDropdownOpen = true"
          @mouseleave="isDropdownOpen = false"
        >
          <button class="flex items-center space-x-1 font-sans text-xs tracking-[0.15em] uppercase text-refined-forest/80 hover:text-refined-forest transition-colors duration-300 cursor-pointer py-2">
            <span>Services</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 transition-transform duration-300" :class="{ 'rotate-180': isDropdownOpen }">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform scale-95 opacity-0 -translate-y-2"
            enter-to-class="transform scale-100 opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="transform scale-100 opacity-100 translate-y-0"
            leave-to-class="transform scale-95 opacity-0 -translate-y-2"
          >
            <div v-if="isDropdownOpen" class="absolute left-1/2 -translate-x-1/2 top-full w-64 bg-refined-cream border border-refined-stone/40 p-4 shadow-xl space-y-3 rounded-none">
              <NuxtLink to="/services" class="block font-serif text-sm text-refined-forest/80 hover:text-refined-forest transition-colors duration-200">
                Services Overview
              </NuxtLink>
              <NuxtLink to="/services/medical-weight-loss" class="block font-serif text-sm text-refined-forest/80 hover:text-refined-forest transition-colors duration-200">
                Medical Weight Loss
              </NuxtLink>
              <NuxtLink to="/services/functional-medicine" class="block font-serif text-sm text-refined-forest/80 hover:text-refined-forest transition-colors duration-200">
                Functional Medicine
              </NuxtLink>
              <NuxtLink to="/services/mens-health" class="block font-serif text-sm text-refined-forest/80 hover:text-refined-forest transition-colors duration-200">
                Men's Health
              </NuxtLink>
              <NuxtLink to="/services/womens-health" class="block font-serif text-sm text-refined-forest/80 hover:text-refined-forest transition-colors duration-200">
                Women's Health
              </NuxtLink>
              <NuxtLink to="/services/Aesthetics" class="block font-serif text-sm text-refined-forest/80 hover:text-refined-forest transition-colors duration-200">
                Aesthetics
              </NuxtLink>
              <NuxtLink to="/services/iv-hydration" class="block font-serif text-sm text-refined-forest/80 hover:text-refined-forest transition-colors duration-200">
                IV Hydration
              </NuxtLink>
            </div>
          </Transition>
        </div>

        <NuxtLink to="/science-of-grace" class="font-sans text-xs tracking-[0.15em] uppercase text-refined-forest/80 hover:text-refined-forest transition-colors duration-300">
          Science of Grace
        </NuxtLink>
        
        <NuxtLink to="/about" class="font-sans text-xs tracking-[0.15em] uppercase text-refined-forest/80 hover:text-refined-forest transition-colors duration-300">
          About Us
        </NuxtLink>

        <NuxtLink to="/contact" class="font-sans text-xs tracking-[0.15em] uppercase text-refined-forest/80 hover:text-refined-forest transition-colors duration-300">
          Contact
        </NuxtLink>
      </nav>

      <div class="hidden lg:block">
        <NuxtLink to="#appointments" class="border border-refined-forest bg-refined-forest text-refined-cream px-6 py-2.5 font-sans text-xs tracking-widest uppercase hover:bg-transparent hover:text-refined-forest transition-all duration-300 rounded-none">
          Request Consultation
        </NuxtLink>
      </div>

      <button 
        @click="isMobileMenuOpen = !isMobileMenuOpen" 
        class="block lg:hidden text-refined-forest focus:outline-none z-50 p-2 cursor-pointer"
        aria-label="Toggle Menu"
      >
        <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

    </div>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div v-if="isMobileMenuOpen" class="fixed inset-0 top-0 left-0 w-full h-screen bg-refined-cream z-40 flex flex-col justify-center items-center px-6 text-center space-y-8">
        <nav class="flex flex-col space-y-6">
          <NuxtLink @click="isMobileMenuOpen = false" to="/" class="font-sans text-lg tracking-widest uppercase text-refined-forest">Home</NuxtLink>
          
          <div class="space-y-3">
            <button @click="isMobileServicesOpen = !isMobileServicesOpen" class="w-full flex items-center justify-center space-x-2 font-sans text-lg tracking-widest uppercase text-refined-forest">
              <span>Services</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4" :class="{ 'rotate-180': isMobileServicesOpen }">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div v-if="isMobileServicesOpen" class="bg-refined-stone/20 py-3 px-6 flex flex-col space-y-3">
              <NuxtLink @click="isMobileMenuOpen = false" to="/services" class="font-serif text-sm text-refined-forest/80">Services Overview</NuxtLink>
              <NuxtLink @click="isMobileMenuOpen = false" to="/services/medical-weight-loss" class="font-serif text-sm text-refined-forest/80">Medical Weight Loss</NuxtLink>
              <NuxtLink @click="isMobileMenuOpen = false" to="/services/functional-medicine" class="font-serif text-sm text-refined-forest/80">Functional Medicine</NuxtLink>
              <NuxtLink @click="isMobileMenuOpen = false" to="/services/mens-health" class="font-serif text-sm text-refined-forest/80">Men's Health</NuxtLink>
              <NuxtLink @click="isMobileMenuOpen = false" to="/services/womens-health" class="font-serif text-sm text-refined-forest/80">Women's Health</NuxtLink>
              <NuxtLink @click="isMobileMenuOpen = false" to="/services/aesthetics" class="font-serif text-sm text-refined-forest/80">Aesthetics</NuxtLink>
              <NuxtLink @click="isMobileMenuOpen = false" to="/services/iv-hydration" class="font-serif text-sm text-refined-forest/80">IV Hydration</NuxtLink>
            </div>
          </div>

          <NuxtLink @click="isMobileMenuOpen = false" to="/science-of-grace" class="font-sans text-lg tracking-widest uppercase text-refined-forest">Science of Grace</NuxtLink>
          <NuxtLink @click="isMobileMenuOpen = false" to="/about" class="font-sans text-lg tracking-widest uppercase text-refined-forest">About Us</NuxtLink>
          <NuxtLink @click="isMobileMenuOpen = false" to="/contact" class="font-sans text-lg tracking-widest uppercase text-refined-forest">Contact</NuxtLink>
        </nav>

        <div class="pt-8 w-full max-w-xs">
          <NuxtLink @click="isMobileMenuOpen = false" to="#appointments" class="block w-full border border-refined-forest bg-refined-forest text-refined-cream py-3 font-sans text-xs tracking-widest uppercase rounded-none">
            Request Consultation
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isDropdownOpen = ref(false)
const isMobileMenuOpen = ref(false)
const isMobileServicesOpen = ref(false)
</script>