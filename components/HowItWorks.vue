<template>
  <section class="border-t border-white/[0.04] py-16 sm:py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-8">
      <div ref="headerEl" class="scroll-reveal text-center">
        <h2 class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          4 Langkah, Langsung Jalan
        </h2>
        <p class="mt-3 text-sm text-gray-500 sm:text-[15px]">
          Topup, integrasi, kirim. Selesai dalam hitungan menit.
        </p>
      </div>

      <div class="relative mt-14">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            :ref="(el) => registerStep(el as HTMLElement, index)"
            class="scroll-reveal relative flex flex-col items-center text-center lg:items-start lg:text-left"
            :data-delay="index * 100"
          >
            <!-- Step indicator + connector -->
            <div class="relative mb-5 flex items-center lg:mb-6">
              <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-whatsapp/15 bg-whatsapp/[0.06] font-mono text-sm font-medium text-whatsapp">
                {{ index + 1 }}
              </div>
              <div
                v-if="index < steps.length - 1"
                class="ml-3 hidden h-px w-16 bg-gradient-to-r from-whatsapp/10 to-transparent lg:block"
                aria-hidden="true"
              />
            </div>

            <h3 class="text-sm font-medium text-white">{{ step.title }}</h3>
            <p class="mt-1.5 text-[13px] leading-relaxed text-gray-500">{{ step.description }}</p>
            <span v-if="step.metric" class="mt-2.5 inline-block rounded-md bg-whatsapp/[0.05] px-2 py-0.5 font-mono text-[11px] font-medium text-whatsapp/50">
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
