<template>
  <div class="relative min-h-screen bg-gray-950">
    <div class="network-bg pointer-events-none fixed inset-0"></div>

    <div class="relative z-10 flex flex-col min-h-screen">
      <Navbar />
      <main class="flex-grow">
        <NuxtPage />
      </main>
      <Footer />
    </div>

    <!-- Simple Scroll to Top Button -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <button
        v-if="isVisible"
        @click="scrollToTop"
        class="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom,0px)+0.75rem)] right-4 sm:right-6 z-50 flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/[0.08] bg-[#090e0c]/90 text-gray-400 hover:text-white hover:border-whatsapp/30 hover:bg-[#0c1411]/95 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-whatsapp/50"
        aria-label="Scroll to top"
      >
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const isVisible = ref(false)

const checkScroll = () => {
  isVisible.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>
