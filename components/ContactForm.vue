<template>
    <ClientOnly>
  <form @submit.prevent="handleSubmission" class="space-y-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div class="space-y-1">
        <label class="block font-sans text-[10px] tracking-widest uppercase text-refined-forest font-semibold">Full Name</label>
        <input 
          v-model="formData.name" 
          type="text" 
          required 
          placeholder="First Last"
          class="w-full bg-white/60 border border-refined-stone/60 focus:border-refined-sage focus:bg-white focus:outline-none px-4 py-3.5 font-serif text-sm text-refined-forest transition-all duration-300 rounded-none" 
        />
      </div>

      <div class="space-y-1">
        <label class="block font-sans text-[10px] tracking-widest uppercase text-refined-forest font-semibold">Phone Number</label>
        <input 
          v-model="formData.phone" 
          type="tel" 
          required 
          placeholder="(###) ###-####"
          class="w-full bg-white/60 border border-refined-stone/60 focus:border-refined-sage focus:bg-white focus:outline-none px-4 py-3.5 font-serif text-sm text-refined-forest transition-all duration-300 rounded-none" 
        />
      </div>
    </div>

    <div class="space-y-1">
      <label class="block font-sans text-[10px] tracking-widest uppercase text-refined-forest font-semibold">Email Address</label>
      <input 
        v-model="formData.email" 
        type="email" 
        required 
        placeholder="your@email.com"
        class="w-full bg-white/60 border border-refined-stone/60 focus:border-refined-sage focus:bg-white focus:outline-none px-4 py-3.5 font-serif text-sm text-refined-forest transition-all duration-300 rounded-none" 
      />
    </div>

    <div class="space-y-1">
      <label class="block font-sans text-[10px] tracking-widest uppercase text-refined-forest font-semibold">Clinical Pathway of Interest</label>
      <div class="relative">
        <select 
          v-model="formData.pathway" 
          class="w-full bg-white/60 border border-refined-stone/60 focus:border-refined-sage focus:bg-white focus:outline-none px-4 py-3.5 font-serif text-sm text-refined-forest transition-all duration-300 rounded-none appearance-none cursor-pointer"
        >
          <option value="weight-loss">Personalized Medical Weight Loss</option>
          <option value="functional-medicine">Functional Medicine Root-Cause Consultation</option>
          <option value="iv-hydration">IV Hydration Therapy (Restore & Revitalize)</option>
          <option value="aesthetics">Medical Aesthetics Refresh Treatment</option>
          <option value="mens-health">Men's Health & Longevity Performance</option>
          <option value="womens-health">Women's Health Restore & Thrive Program</option>
          <option value="womens-health">Other</option>
        </select>
        <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-refined-forest/40">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </div>

    <div class="space-y-1">
      <label class="block font-sans text-[10px] tracking-widest uppercase text-refined-forest font-semibold">Message or Structural Goals (Optional)</label>
      <textarea 
        v-model="formData.message" 
        rows="4"
        placeholder="Tell us a bit about your long-term health or aesthetic goals..."
        class="w-full bg-white/60 border border-refined-stone/60 focus:border-refined-sage focus:bg-white focus:outline-none px-4 py-3.5 font-serif text-sm text-refined-forest transition-all duration-300 rounded-none resize-none"
      ></textarea>
    </div>

    <div class="pt-2">
      <button 
        type="submit" 
        class="w-full bg-refined-forest text-refined-cream py-4 font-sans text-xs tracking-widest uppercase hover:bg-refined-sage transition-colors duration-500 rounded-none cursor-pointer font-semibold"
      >
        Optimize Your Health Today
      </button>
      <span class="block text-center font-serif text-[10px] text-refined-forest/40 uppercase tracking-wider mt-3">
        Personalized care. Thoughtful medicine. Real results.
      </span>
    </div>
  </form>
  </ClientOnly>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  phone: '',
  email: '',
  pathway: 'weight-loss',
  message: ''
})

const handleSubmission = () => {
  // Ready to plug straight into a Netlify form submission or an API endpoint later
  alert(`Thank you, ${formData.value.name}. Your connection request has been securely delivered to our clinical team.`)
  formData.value = { name: '', phone: '', email: '', pathway: 'weight-loss', message: '' }
}
</script>