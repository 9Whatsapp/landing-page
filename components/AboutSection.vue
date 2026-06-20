<template>
  <section class="border-t border-white/[0.04] py-16 sm:py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-8">
      <div class="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div ref="leftEl" class="scroll-reveal">
          <h2 class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Fokus kirim pesan, bukan mengurus nomor WhatsApp.
          </h2>
          <p class="mt-4 text-sm leading-relaxed text-gray-500 sm:text-[15px]">
            9WhatsApp menyediakan jaringan nomor WhatsApp siap pakai untuk kebutuhan notifikasi, OTP, reminder, broadcast, dan pesan bisnis. Anda tidak perlu membeli, mendaftarkan, atau mengelola nomor sendiri.
          </p>
        </div>
        <div ref="rightEl" class="scroll-reveal" data-delay="200">
          <div class="space-y-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.03]">
            <div
              v-for="point in problems"
              :key="point.text"
              class="flex items-start gap-3 bg-gray-950/90 p-4 sm:p-5"
            >
              <div class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.04] text-whatsapp/60">
                <svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
                </svg>
              </div>
              <p class="text-sm leading-relaxed text-gray-400">{{ point.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const leftEl = ref<HTMLElement | null>(null)
const rightEl = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    leftEl.value?.classList.add('revealed')
    rightEl.value?.classList.add('revealed')
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
  if (leftEl.value) observer.observe(leftEl.value)
  if (rightEl.value) observer.observe(rightEl.value)
})

onUnmounted(() => observer?.disconnect())

const problems = [
  { text: 'Mengelola nomor WhatsApp sendiri memakan waktu dan sumber daya.' },
  { text: 'QR scan dan perangkat sering merepotkan untuk operasional.' },
  { text: 'Integrasi WhatsApp sering tidak praktis untuk developer.' },
  { text: 'Bisnis butuh cara kirim pesan yang cepat dan simpel.' },
]
</script>
