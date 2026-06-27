<template>
  <section class="border-t border-white/[0.04] py-16 sm:py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-8">
      <div ref="ctaEl" class="scroll-reveal relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#090e0c]/90 px-6 py-12 text-center sm:px-12 sm:py-16 shadow-[0_0_50px_-12px_rgba(37,211,102,0.02)]">
        <div class="pointer-events-none absolute inset-0 overflow-hidden">
          <div class="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-whatsapp/[0.03] blur-[100px]" />
        </div>

        <div class="relative">
          <h2 class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Siap Mengirim WhatsApp Tanpa Nomor?
          </h2>
          <p class="mx-auto mt-3 max-w-md text-sm text-gray-400 sm:text-[15px] leading-relaxed">
            Credit gratis untuk uji coba. Cukup satu API call, pesan sampai.
          </p>

          <div class="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href="https://app.9whatsapp.web.id/register" target="_blank"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-gray-950 transition-all duration-300 hover:bg-whatsapp-dark hover:shadow-[0_2px_20px_rgba(37,211,102,0.25)] focus-visible:ring-2 focus-visible:ring-whatsapp/50 focus-visible:outline-none"
            >
              <Icon name="lucide:log-in" class="h-4 w-4" />
              Coba Gratis
            </a>
            <a
              href="https://docs.9whatsapp.web.id" target="_blank" rel="noopener"
              class="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-6 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none"
            >
              <Icon name="lucide:book-open" class="h-4 w-4" />
              Dokumentasi
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const ctaEl = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    ctaEl.value?.classList.add('revealed')
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )
  if (ctaEl.value) observer.observe(ctaEl.value)
})

onUnmounted(() => observer?.disconnect())
</script>
