<template>
  <section id="meet-the-crew" class="w-full bg-white py-20 lg:py-28 border-t border-b border-refined-stone/20">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
      
      <div class="max-w-xl mb-16 lg:mb-24 space-y-3">
        <span class="font-serif text-xs tracking-[0.2em] uppercase text-refined-sage block">Clinical Excellence</span>
        <h2 class="font-sans text-3xl sm:text-4xl text-refined-forest tracking-wide font-light">Our Care Team</h2>
        <p class="font-serif text-sm text-refined-forest/70 leading-relaxed">
          Our team unites advanced diagnostic medicine with precise physical restoration. Every protocol is directly guided by board-certified expertise.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div 
          v-for="(member, index) in teamData" 
          :key="index" 
          class="group space-y-6"
        >
          <div class="w-full aspect-[4/5] bg-refined-stone/10 overflow-hidden relative border border-refined-stone/20 shadow-xs">
            <img 
              :src="member.image" 
              :alt="member.name" 
              class="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-102"
            />
          </div>

          <div class="space-y-4">
            <div class="space-y-1">
              <h3 class="font-sans text-xl sm:text-2xl text-refined-forest font-light tracking-wide">
                {{ member.name }}
              </h3>
              <p class="font-serif text-xs tracking-wider uppercase text-refined-sage font-medium">
                {{ member.role }}
              </p>
            </div>

            <p class="font-serif text-sm text-refined-forest/70 leading-relaxed">
              {{ member.biography }}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-refined-stone/20">
              <div v-if="member.credentials && member.credentials.length" class="space-y-1.5">
                <span class="font-sans text-[9px] tracking-widest uppercase font-bold text-refined-forest/40 block">Credentials</span>
                <ul class="font-serif text-xs text-refined-forest/60 space-y-0.5">
                  <li v-for="(cred, cIdx) in member.credentials" :key="cIdx">• {{ cred }}</li>
                </ul>
              </div>

              <div v-if="member.specialties && member.specialties.length" class="space-y-1.5">
                <span class="font-sans text-[9px] tracking-widest uppercase font-bold text-refined-forest/40 block">Focus Areas</span>
                <ul class="font-serif text-xs text-refined-forest/60 space-y-0.5">
                  <li v-for="(spec, sIdx) in member.specialties" :key="sIdx">• {{ spec }}</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { teamData } from '~/utils/team'
</script>