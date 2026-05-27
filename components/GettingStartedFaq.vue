<template>
  <section id="faq-section" class="w-full bg-white py-20 lg:py-28 border-t border-refined-stone/20">
    <div class="max-w-4xl mx-auto px-6 sm:px-12">
      
      <div class="space-y-3 mb-12">
        <span class="font-sans text-[11px] tracking-[0.25em] uppercase font-bold text-refined-forest/50 block">
          Common Questions
        </span>
        <h2 class="font-sans text-3xl sm:text-4xl text-refined-forest font-light tracking-wide">
          Things patients ask us
        </h2>
      </div>

      <div class="space-y-4">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index"
          class="border border-refined-stone/30 rounded-none bg-refined-cream/10 hover:bg-refined-cream/30 transition-colors duration-300"
        >
          <button 
            @click="toggleItem(index)"
            class="w-full flex items-center justify-between text-left p-5 sm:p-6 group cursor-pointer focus:outline-hidden"
            :aria-expanded="activeIndex === index"
          >
            <span class="font-sans text-sm sm:text-base text-refined-forest font-medium tracking-wide">
              {{ item.question }}
            </span>
            
            <div class="relative w-5 h-5 flex items-center justify-center shrink-0 ml-4">
              <div class="absolute w-3.5 h-[1px] bg-refined-forest transition-transform duration-300"></div>
              <div 
                class="absolute w-[1px] h-3.5 bg-refined-forest transition-transform duration-300"
                :class="{ 'rotate-90 opacity-0': activeIndex === index }"
              ></div>
            </div>
          </button>

          <div 
            class="grid transition-all duration-300 ease-in-out"
            :class="activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'"
          >
            <div class="overflow-hidden">
              <div class="px-5 pb-6 sm:px-6 sm:pb-7 font-serif text-sm sm:text-base text-refined-forest/70 leading-relaxed border-t border-refined-stone/10 pt-4 mt-1">
                {{ item.answer }}
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

const faqItems = [
  {
    question: "How do I book, and what happens after?",
    answer: "Choose a service from our booking page and select a time that works. After booking, you'll receive a confirmation with intake forms to complete beforehand — so your provider is prepared and your time isn't spent on paperwork."
  },
  {
    question: "Are any services covered by insurance?",
    answer: "Our services are self-pay. We don't bill insurance directly, but many patients use HSA or FSA accounts. We can provide itemized receipts if you'd like to submit for potential reimbursement."
  },
  {
    question: "Who provides my care?",
    answer: "Our care is led by board-certified nurse practitioners with specialized training in functional medicine, metabolic health, and aesthetic treatments. You'll meet your provider at your consultation and work with the same person throughout."
  },
  {
    question: "What results can I realistically expect?",
    answer: "Most patients in our weight loss programs see early progress within 2–4 weeks. Meaningful metabolic change typically takes 3–6 months with consistency. We set honest expectations at your consultation — no overpromising."
  },
  {
    question: "What safety protocols are in place?",
    answer: "All treatments and medications are prescribed and monitored by our licensed providers. We conduct thorough intake evaluations before starting any program and monitor relevant health markers throughout your care."
  },
  {
    question: "Are there fees beyond the monthly program cost?",
    answer: "Your monthly fee covers provider visits, monitoring, and care coordination. Some add-ons — like specific injections or lab work — may have separate costs. We're transparent about these before you commit to anything."
  },
  {
    question: "Who is eligible for these programs?",
    answer: "Most adults in generally good health are eligible. Some conditions may require additional screening before we begin. Eligibility is reviewed at your initial consultation — there's no obligation before that point."
  }
]

function toggleItem(index) {
  if (activeIndex.value === index) {
    activeIndex.value = null
  } else {
    activeIndex.value = index
  }
}
</script>