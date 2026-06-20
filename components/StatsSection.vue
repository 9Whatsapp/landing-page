<template>
  <section class="border-t border-white/[0.04] py-16 sm:py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-8">
      <h2 ref="headerEl" class="scroll-reveal text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        Dibuat untuk pengiriman yang simpel dan siap pakai.
      </h2>

      <div class="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.03] sm:grid-cols-4">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          :ref="(el) => registerStat(el as HTMLElement, index)"
          class="scroll-reveal bg-gray-950/90 px-4 py-6 text-center sm:py-8"
          :data-delay="index * 100"
        >
          <p class="text-xl font-semibold text-white sm:text-2xl">{{ stat.value }}</p>
          <p class="mt-1.5 text-xs text-gray-500 sm:text-[13px]">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const headerEl = ref<HTMLElement | null>(null)
const statEls = ref<HTMLElement[]>([])
let observer: IntersectionObserver | null = null

function registerStat(el: HTMLElement | null, index: number) {
  if (el) statEls.value[index] = el
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    headerEl.value?.classList.add('revealed')
    statEls.value.forEach(el => el?.classList.add('revealed'))
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
  statEls.value.forEach(el => { if (el) observer?.observe(el) })
})

onUnmounted(() => observer?.disconnect())

const stats = [
  { value: '100+', label: 'Nomor Aktif' },
  { value: '1 = 1', label: '1 Credit = 1 Pesan' },
  { value: 'Tanpa QR', label: 'Tanpa QR Scan' },
  { value: 'API Ready', label: 'API Siap Pakai' },
]
</script>
