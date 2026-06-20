<template>
  <section class="border-t border-white/[0.04] py-16 sm:py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-8">
      <div ref="headerEl" class="scroll-reveal text-center">
        <h2 class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Topup Credit
        </h2>
        <p class="mx-auto mt-3 max-w-lg text-sm text-gray-500 sm:text-[15px]">
          Pilih paket credit sesuai kebutuhan. Setiap topup menambah credit dan memperpanjang masa aktif akun.
        </p>
      </div>

      <div ref="tableEl" class="scroll-reveal mt-10 overflow-x-auto" data-delay="200">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="border-b border-white/[0.06]">
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Topup</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Credit</th>
              <th class="hidden px-4 py-3 text-left text-xs font-medium text-gray-500 sm:table-cell">Bonus</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Total Credit</th>
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
              </td>
              <td class="px-4 py-4 text-gray-400">{{ plan.credit }}</td>
              <td class="hidden px-4 py-4 text-gray-400 sm:table-cell">{{ plan.bonus }}</td>
              <td class="px-4 py-4 font-medium text-white">{{ plan.total }}</td>
              <td class="px-4 py-4 text-gray-400">{{ plan.duration }}</td>
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
  { label: 'Rp50.000', credit: '180', bonus: '0', total: '180', duration: '30 Hari', popular: false },
  { label: 'Rp99.000', credit: '340', bonus: '60', total: '400', duration: '90 Hari', popular: true },
  { label: 'Rp199.000', credit: '750', bonus: '200', total: '950', duration: '180 Hari', popular: false },
  { label: 'Rp499.000', credit: '2.100', bonus: '450', total: '2.550', duration: '365 Hari', popular: false },
  { label: 'Enterprise', credit: 'Custom', bonus: 'Custom', total: 'Custom', duration: 'Custom', popular: false },
]

const pricingNotes = [
  '1 Credit = 1 Pesan WhatsApp.',
  'Credit tidak hangus saat masa aktif berakhir.',
  'Masa aktif adalah masa aktif akun, bukan masa berlaku credit.',
  'Akun yang expired tidak dapat mengirim pesan sampai melakukan topup kembali.',
  'Setiap topup menambah credit dan memperpanjang masa aktif akun.',
]
</script>
