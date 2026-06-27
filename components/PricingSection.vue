<template>
  <section class="border-t border-white/[0.04] py-16 sm:py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-8">
      <div ref="headerEl" class="scroll-reveal text-center">
        <div class="mb-4 inline-flex items-center gap-1.5 rounded-full border border-whatsapp/15 bg-whatsapp/[0.06] px-3 py-1">
          <svg class="h-3 w-3 text-whatsapp" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>
          <span class="text-[11px] font-medium text-whatsapp/80">Promo paket Rp50.000 — diskon 30% bulan pertama</span>
        </div>
        <h2 class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Harga Sesuai Kebutuhan
        </h2>
        <p class="mt-3 text-sm text-gray-500 sm:text-[15px]">
          Tanpa langganan. Tanpa komitmen. Topup kapan saja.
        </p>
      </div>

      <div ref="tableEl" class="scroll-reveal mt-10 overflow-x-auto" data-delay="200">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="border-b border-white/[0.06]">
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Paket</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Total Credit</th>
              <th class="hidden px-4 py-3 text-left text-xs font-medium text-gray-500 sm:table-cell">Bonus</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Masa Aktif</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="plan in plans"
              :key="plan.label"
              class="border-b border-white/[0.03] transition-colors"
              :class="plan.popular ? 'bg-whatsapp/[0.03]' : 'hover:bg-white/[0.01]'"
            >
              <td class="px-4 py-4">
                <div class="flex items-center gap-2">
                  <span class="font-medium text-white">{{ plan.label }}</span>
                  <span
                    v-if="plan.popular"
                    class="rounded-full border border-whatsapp/20 bg-whatsapp/[0.08] px-2 py-0.5 text-[10px] font-medium text-whatsapp"
                  >Populer</span>
                </div>
                <div v-if="plan.hasPromo" class="mt-0.5 flex items-center gap-2">
                  <span class="text-xs text-gray-600 line-through">{{ plan.original }}</span>
                  <span class="text-xs font-medium text-whatsapp">{{ plan.promo }}</span>
                  <span class="rounded bg-whatsapp/[0.08] px-1.5 py-0.5 text-[10px] font-medium text-whatsapp/60">-30%</span>
                </div>
                <div v-else class="mt-0.5">
                  <span class="text-xs font-medium text-gray-400">{{ plan.original }}</span>
                </div>
              </td>
              <td class="px-4 py-4 font-medium text-white">{{ plan.total }}</td>
              <td class="hidden px-4 py-4 text-gray-400 sm:table-cell">{{ plan.bonus }}</td>
              <td class="px-4 py-4 text-gray-400">{{ plan.duration }}</td>
            </tr>
            <tr class="hover:bg-white/[0.01] transition-colors">
              <td class="px-4 py-4">
                <span class="font-medium text-white">Enterprise</span>
              </td>
              <td class="px-4 py-4 text-gray-400">Custom</td>
              <td class="hidden px-4 py-4 text-gray-400 sm:table-cell">Custom</td>
              <td class="px-4 py-4 text-gray-400">Custom</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div ref="notesEl" class="scroll-reveal mt-8 space-y-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.03]" data-delay="300">
        <div
          v-for="note in pricingNotes"
          :key="note"
          class="flex items-start gap-2.5 bg-gray-950/90 px-4 py-3 sm:px-5"
        >
          <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-whatsapp/40" />
          <p class="text-[13px] leading-relaxed text-gray-500">{{ note }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const headerEl = ref<HTMLElement | null>(null)
const tableEl = ref<HTMLElement | null>(null)
const notesEl = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    headerEl.value?.classList.add('revealed')
    tableEl.value?.classList.add('revealed')
    notesEl.value?.classList.add('revealed')
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
  if (tableEl.value) observer.observe(tableEl.value)
  if (notesEl.value) observer.observe(notesEl.value)
})

onUnmounted(() => observer?.disconnect())

const plans = [
  { label: 'Timur', original: 'Rp50.000', promo: 'Rp35.000', total: '180', bonus: '0', duration: '30 Hari', popular: false, hasPromo: true },
  { label: 'Selatan', original: 'Rp99.000', promo: '', total: '400', bonus: '60', duration: '90 Hari', popular: true, hasPromo: false },
  { label: 'Utara', original: 'Rp199.000', promo: '', total: '950', bonus: '200', duration: '180 Hari', popular: false, hasPromo: false },
  { label: 'Barat', original: 'Rp499.000', promo: '', total: '2.550', bonus: '450', duration: '365 Hari', popular: false, hasPromo: false },
]

const pricingNotes = [
  '1 Credit = 1 Pesan WhatsApp.',
  'Credit tidak hangus saat masa aktif berakhir.',
  'Masa aktif adalah masa aktif akun, bukan masa berlaku credit.',
  'Akun yang expired tidak dapat mengirim pesan sampai melakukan topup kembali.',
  'Setiap topup menambah credit dan memperpanjang masa aktif akun.',
]
</script>
