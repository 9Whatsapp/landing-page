<template>
  <section class="border-t border-white/[0.04] py-16 sm:py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-8">
      <div class="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div ref="leftEl" class="scroll-reveal">
          <h2 class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Kirim pesan WhatsApp.<br />
            <span class="text-gray-500">Bukan urus nomor.</span>
          </h2>
          <p class="mt-4 text-sm leading-relaxed text-gray-500 sm:text-[15px]">
            9WhatsApp sediakan nomor virtual siap pakai. Tanpa beli, tanpa registrasi, tanpa QR scan. Fokus ke bisnis Anda.
          </p>
        </div>
        <div ref="rightEl" class="scroll-reveal" data-delay="200">
          <div class="space-y-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.03]">
            <div
              v-for="item in items"
              :key="item.problem"
              class="bg-gray-950/90 p-4 sm:p-5"
            >
              <div class="flex items-start gap-3">
                <div class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.04]">
                  <svg class="h-3 w-3 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
                  </svg>
                </div>
                <p class="text-sm leading-relaxed text-gray-500">{{ item.problem }}</p>
              </div>
              <div class="flex items-start gap-3 mt-2.5 ml-0 pl-8">
                <div class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-whatsapp/[0.08]">
                  <svg class="h-3 w-3 text-whatsapp" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p class="text-sm font-medium leading-relaxed text-gray-300">{{ item.solution }}</p>
              </div>
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

const items = [
  {
    problem: 'Mengelola nomor WhatsApp sendiri memakan waktu.',
    solution: 'Nomor virtual dari kami, langsung pakai.',
  },
  {
    problem: 'QR scan dan perangkat merepotkan.',
    solution: 'Tanpa QR, tanpa link device.',
  },
  {
    problem: 'Integrasi WhatsApp sering tidak praktis.',
    solution: 'Satu API call, selesai.',
  },
  {
    problem: 'Bisnis butuh cara kirim yang cepat.',
    solution: 'Delivery real-time, status tracking via webhook.',
  },
]
</script>
