<template>
  <Transition name="splash-fade">
    <div v-if="isVisible" class="fixed inset-0 z-[100] flex items-center justify-center bg-refined-cream overflow-hidden select-none">
      
      <div class="flex items-center justify-center space-x-2 sm:space-x-3 max-w-3xl px-6">
        
        <div class="relative w-24 h-24 sm:w-32 sm:h-32 shrink-0 flex items-center justify-center">
          
          <img 
            src="/logo-ring.png" 
            alt="Gold Accent Ring Element" 
            class="absolute w-[92%] h-[92%] object-contain logo-ring-animation"
          />

          <img 
            src="/logo-grass.png" 
            alt="Grass Tuft Botanical Element" 
            class="absolute w-[92%] h-[92%] object-contain logo-grass-animation z-10"
          />
          
        </div>

        <div class="overflow-hidden logo-words-container">
          <img 
            src="/logo-words.png" 
            alt="Refined Health &amp; Aesthetics Typography" 
            class="h-26 w-auto object-contain logo-words-animation"
          />
        </div>

      </div>

    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(true)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = false
  }, 2600)
})
</script>

<style scoped>
/* --- TIMELINE ANIMATION GRIDS --- */

.logo-ring-animation {
  animation: rollInAndCircle 1.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.logo-grass-animation {
  opacity: 0;
  animation: organicFadeIn 0.8s cubic-bezier(0.33, 1, 0.68, 1) 0.6s forwards;
}

.logo-words-container {
  max-width: 0;
  animation: expandMask 1.4s cubic-bezier(0.76, 0, 0.24, 1) 1.2s forwards;
  padding-top: 12px;
  padding-bottom: 12px;
}

.logo-words-animation {
  transform: translateX(-20px);
  animation: typographySlide 1.4s cubic-bezier(0.76, 0, 0.24, 1) 1.2s forwards;
}

/* --- KEYFRAME MATRIX SEQUENCES --- */

@keyframes rollInAndCircle {
  0% {
    opacity: 0;
    transform: translateX(-160px) rotate(-270deg) scale(1);
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(360deg) scale(1);
  }
}

@keyframes organicFadeIn {
  0% {
    opacity: 0;
    transform: scale(0.85) translateY(4px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(10px);
  }
}

@keyframes expandMask {
  0% {
    max-width: 0;
  }
  100% {
    max-width: 480px; 
  }
}

@keyframes typographySlide {
  0% {
    transform: translateX(-100px) translateY(10px);
    opacity: 0;
  }
  40% {
    opacity: 0.3;
  }
  100% {
    transform: translateX(-5px) translateY(10px);
    opacity: 1;
  }
}

/* --- GLOBAL SCREEN EXIT TRANSITIONS --- */
.splash-fade-leave-active {
  /* 1. Bumped duration slightly to 1.2s for a cinematic look.
    2. Swapped to a soft ease-in-out curve so the fade starts slowly, 
       peaks in the middle, and feathers beautifully at the tail-end.
  */
  transition: 
    opacity 1.2s cubic-bezier(0.33, 0, 0.80, 1), 
    filter 1.2s cubic-bezier(0.33, 0, 0.80, 1);
    
  will-change: opacity, filter;
}

.splash-fade-leave-to {
  opacity: 0;
  /* Retained your perfect blur factor, now feathering out slowly */
  filter: blur(12px);
}
</style>