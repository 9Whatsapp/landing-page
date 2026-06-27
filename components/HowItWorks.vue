<template>
  <section class="border-t border-white/[0.04] py-16 sm:py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-8">
      <div ref="headerEl" class="scroll-reveal text-center">
        <h2 class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          4 Langkah, Langsung Jalan
        </h2>
        <p class="mt-3 text-sm text-gray-400 sm:text-[15px]">
          Topup, integrasi, kirim. Selesai dalam hitungan menit.
        </p>
      </div>

      <div class="relative mt-14">
        <div class="grid gap-5 sm:gap-6 grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            :ref="(el) => registerStep(el as HTMLElement, index)"
            class="scroll-reveal group relative flex flex-col items-center text-center lg:items-start lg:text-left"
            :data-delay="index * 100"
          >
            <!-- Step indicator + connector -->
            <div class="relative w-full mb-5 flex items-center justify-center lg:justify-start lg:mb-6">
              <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-whatsapp/15 bg-whatsapp/5 font-mono text-[13px] font-semibold text-whatsapp transition-all duration-300 shadow-[0_0_15px_rgba(37,211,102,0.01)] group-hover:border-whatsapp/30 group-hover:bg-whatsapp/10">
                {{ index + 1 }}
              </div>
              <div
                v-if="index < steps.length - 1"
                class="absolute left-[44px] top-[18px] w-[calc(100%-60px)] hidden h-px bg-gradient-to-r from-whatsapp/20 to-transparent lg:block transition-all duration-300 group-hover:from-whatsapp/40"
                aria-hidden="true"
              />
            </div>

            <h3 class="text-[15px] font-semibold text-white transition-colors duration-300 group-hover:text-whatsapp">
              {{ step.title }}
            </h3>
            <p class="mt-2.5 text-[13px] leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
              {{ step.description }}
            </p>
            <span v-if="step.metric" class="mt-3.5 inline-flex items-center rounded-full border border-whatsapp/10 bg-whatsapp/5 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-whatsapp transition-colors duration-300 group-hover:border-whatsapp/20 group-hover:bg-whatsapp/8">
              {{ step.metric }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const headerEl = ref<HTMLElement | null>(null)
const stepEls = ref<HTMLElement[]>([])
let observer: IntersectionObserver | null = null

function registerStep(el: HTMLElement | null, index: number) {
  if (el) stepEls.value[index] = el
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    headerEl.value?.classList.add('revealed')
    stepEls.value.forEach(el => el?.classList.add('revealed'))
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
  if (headerEl.value) observer.observe(headerEl.value)
  stepEls.value.forEach(el => { if (el) observer?.observe(el) })
})

onUnmounted(() => observer?.disconnect())

const steps = [
  {
    title: 'Topup Credit',
    description: 'Bayar sesuai pakai. Pilih nominal, bayar, credit langsung masuk.',
    metric: null,
  },
  {
    title: 'Integrasikan API',
    description: 'Satu endpoint, satu JSON body. Copy-paste, jalan.',
    metric: '~5 menit',
  },
  {
    title: 'Kirim Pesan',
    description: 'Panggil API, pesan sampai ke WhatsApp user. Nomor sudah disediakan.',
    metric: '~120ms',
  },
  {
    title: 'Pantau Status',
    description: 'Delivery tracking real-time via webhook atau dashboard.',
    metric: null,
  },
]
</script>
