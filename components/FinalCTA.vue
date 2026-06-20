<template>
  <section class="border-t border-white/[0.04] py-16 sm:py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-8">
      <div ref="ctaEl" class="scroll-reveal relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.015] px-6 py-12 text-center sm:px-12 sm:py-16">
        <div class="pointer-events-none absolute inset-0 overflow-hidden">
          <div class="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-whatsapp/[0.02] blur-[80px]" />
        </div>

        <div class="relative">
          <h2 class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Siap Mengirim WhatsApp Tanpa Nomor?
          </h2>
          <p class="mx-auto mt-3 max-w-md text-sm text-gray-500 sm:text-[15px]">
            Topup credit, gunakan API, dan mulai kirim pesan WhatsApp tanpa perlu mengelola nomor sendiri.
          </p>

          <div class="mt-8 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
            <a
              href="/login"
              class="inline-flex items-center justify-center gap-1.5 rounded-lg bg-whatsapp px-5 py-2.5 text-sm font-medium text-gray-950 transition-all hover:bg-whatsapp-dark hover:shadow-lg hover:shadow-whatsapp/10 focus-visible:ring-2 focus-visible:ring-whatsapp/50 focus-visible:outline-none"
            >
              <Icon name="lucide:log-in" class="h-3.5 w-3.5" />              Mulai Sekarang
            </a>
            <a
              href="mailto:hi@9whatsapp.web.id"
              class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.015] px-5 py-2.5 text-sm font-medium text-gray-400 transition-all hover:border-white/[0.1] hover:text-gray-300 focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none"
            >
              <Icon name="lucide:book-open" class="h-3.5 w-3.5" />              Dokumentasi
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
