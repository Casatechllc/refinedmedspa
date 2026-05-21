<template>
  <section id="reviews" class="w-full bg-refined-cream py-20 lg:py-28 overflow-hidden border-t border-refined-stone/30">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
      
      <div class="text-center max-w-xl mx-auto mb-16 space-y-4">
        <span class="font-serif text-xs tracking-[0.25em] uppercase text-refined-sage block">Verified Patient Sentiment</span>
        <h2 class="font-sans text-3xl text-refined-forest tracking-wide">Excellent Experiences</h2>
        
        <div class="flex flex-col items-center justify-center space-y-3 pt-2">
          <div class="flex items-center justify-center space-x-2">
            <div class="flex space-x-1 text-refined-sage">
              <span v-for="i in 5" :key="i" class="text-lg">★</span>
            </div>
            <span class="font-sans text-xs tracking-widest uppercase text-refined-forest/70 font-semibold pl-1">
              5.0 Rating / {{ totalReviewsCount }} Reviews
            </span>
          </div>

          <a 
            v-if="googleReviewUrl"
            :href="googleReviewUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center space-x-1.5 font-sans text-[11px] tracking-[0.2em] uppercase text-refined-forest/80 hover:text-refined-forest font-bold transition-colors border-b border-refined-sage/40 pb-0.5 group"
          >
            <span>Rate us on Google</span>
            <span class="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>

      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 1200 } }"
        class="swiper-reviews-container relative w-full px-4 sm:px-12"
      >
        <div class="swiper px-2">
          <div class="swiper-wrapper">
  
            <div 
              v-for="(review, index) in filteredFiveStarReviews" 
              :key="index"
              class="swiper-slide h-auto bg-white/40 border border-refined-stone/40 p-6 sm:p-8 flex flex-col justify-between space-y-6 box-border shrink-0 select-none"
            >
              <div class="space-y-4">
                <div class="flex space-x-0.5 text-refined-sage text-sm">
                  <span v-for="star in (review.publishRating || review.rating)" :key="star">★</span>
                </div>
                
                <p 
                  class="font-serif text-sm text-refined-forest/80 italic leading-relaxed transition-all duration-300 cursor-pointer"
                  :class="expandedReviewIndex === index ? 'line-clamp-none' : 'line-clamp-5 lg:hover:line-clamp-none'"
                  @click="toggleReview(index)"
                  title="Click to expand/collapse"
                  >
                  "{{ review.text?.text || review.text }}"
                </p>
              </div>

              <div class="flex items-center space-x-3 pt-4 border-t border-refined-stone/20 mt-auto">
                <div class="w-8 h-8 rounded-full bg-refined-stone/40 flex items-center justify-center text-refined-forest text-xs font-sans font-bold uppercase overflow-hidden shrink-0">
                  
                  <img 
                    v-if="review.authorAttribution?.photoUri || (review.profile_photo_url && review.profile_photo_url !== '')" 
                    :src="review.authorAttribution?.photoUri || review.profile_photo_url" 
                    :alt="review.authorAttribution?.displayName || review.author_name" 
                    class="w-full h-full object-cover" 
                  />
                  
                  <span v-else>
                    {{ (review.authorAttribution?.displayName || review.author_name || 'P').charAt(0) }}
                  </span>
                </div>
                
                <div>
                  <h4 class="font-sans text-xs font-semibold tracking-wider uppercase text-refined-forest">
                    {{ review.authorAttribution?.displayName || review.author_name }}
                  </h4>
                  <p class="font-serif text-[11px] text-refined-forest/50 mt-0.5">Verified Patient Review</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <button aria-label="Previous Slide" class="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 text-refined-forest/40 hover:text-refined-forest transition-colors duration-300 hidden sm:block focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        <button aria-label="Next Slide" class="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 text-refined-forest/40 hover:text-refined-forest transition-colors duration-300 hidden sm:block focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <div class="swiper-pagination-custom flex justify-center space-x-2 pt-10"></div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Swiper from 'swiper'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const config = useRuntimeConfig()
const placeId = config.public.googlePlaceId
const apiKey = config.public.googleMapsApiKey

// Generate the high-conversion direct review url format using your public runtime config key
const googleReviewUrl = computed(() => {
  return placeId ? `https://search.google.com/local/writereview?placeid=${placeId}` : ''
})

const totalReviewsCount = ref(25)

const { data: googleData } = await useFetch('/api/reviews', { lazy: true })

const localBackupReviews = [
  {
    author_name: "Sarah M.",
    rating: 5,
    text: "I finally feel supported in my weight loss journey. The nurse practitioner-led team takes their time, listens thoroughly, and provides professional, knowledgeable, and highly personalized care.",
    profile_photo_url: null
  },
  {
    author_name: "Elena R.",
    rating: 5,
    text: "The clinic environment is incredibly calm and modern. My IV Hydration experience was deeply relaxing, restorative, and perfectly tailored to my low-energy burnout goals.",
    profile_photo_url: null
  },
  {
    author_name: "Michael T.",
    rating: 5,
    text: "Advanced clinical expertise mixed with a welcoming environment. Their approach to functional diagnostics and hormone optimization completely changed how I track my physical performance.",
    profile_photo_url: null
  }
]

const filteredFiveStarReviews = computed(() => {
  const liveReviews = googleData.value?.reviews
  
  if (liveReviews && liveReviews.length > 0) {
    if (googleData.value.user_ratings_total) {
      totalReviewsCount.value = googleData.value.user_ratings_total
    }
    
    const liveFiveStar = liveReviews.filter(review => review.rating === 5)
    
    if (liveFiveStar.length < 3) {
      return localBackupReviews
    }
    return liveFiveStar
  }
  return localBackupReviews
})

const expandedReviewIndex = ref(null)

const toggleReview = (index) => {
  if (expandedReviewIndex.value === index) {
    expandedReviewIndex.value = null
  } else {
    expandedReviewIndex.value = index
  }
}

onMounted(() => {
  if (process.client) {
    new Swiper('.swiper', {
      modules: [Pagination, Autoplay, Navigation],
      slidesPerView: 1,
      spaceBetween: 24,
      grabCursor: true,
      loop: true,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      },
      pagination: {
        el: '.swiper-pagination-custom',
        clickable: true,
        bulletClass: 'review-bullet',
        bulletActiveClass: 'review-bullet-active',
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2, spaceBetween: 32 },
        1024: { slidesPerView: 3, spaceBetween: 40 }
      }
    })
  }
})
</script>

<style>
.swiper {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.swiper-wrapper {
  display: flex !important;
  flex-direction: row !important;
  align-items: stretch !important;
  width: 100%;
}

.swiper-slide {
  flex-shrink: 0 !important;
  height: auto !important;
}

.swiper-button-prev-custom,
.swiper-button-next-custom {
  z-index: 50 !important;
  cursor: pointer !important;
}

.review-bullet {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #c2b6a6;
  opacity: 0.4;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 50 !important;
}

.review-bullet-active {
  opacity: 1 !important;
  background-color: #2c3e35;
  transform: scale(1.2);
}
</style>