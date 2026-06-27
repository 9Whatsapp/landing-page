<template>
  <section class="border-t border-white/[0.04] py-16 sm:py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-8">
      <div ref="headerEl" class="scroll-reveal text-center">
        <div class="mb-4 inline-flex items-center gap-1.5 rounded-full border border-whatsapp/15 bg-whatsapp/[0.06] px-3 py-1">
          <svg class="h-3 w-3 text-whatsapp" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>
          <span class="text-[11px] font-medium text-whatsapp/80">Promo paket Timur - diskon 30% bulan pertama</span>
        </div>
        <h2 class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Harga Sesuai Kebutuhan
        </h2>
        <p class="mt-3 text-sm text-gray-400 sm:text-[15px]">
          Tanpa langganan. Tanpa komitmen. Topup kapan saja.
        </p>
      </div>

      <!-- Pricing Cards Grid -->
      <div ref="tableEl" class="scroll-reveal mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" data-delay="200">
        <div
          v-for="plan in plans"
          :key="plan.label"
          class="group relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300"
          :class="plan.popular 
            ? 'border-whatsapp/35 bg-[#0c1411]/90 shadow-[0_0_40px_rgba(37,211,102,0.03)]' 
            : 'border-white/[0.08] bg-[#090e0c]/95 hover:border-whatsapp/20 hover:bg-[#0c1411]/95'"
        >
          <!-- Popular Badge -->
          <div v-if="plan.popular" class="absolute -top-3 left-1/2 -translate-x-1/2">
            <span class="rounded-full bg-whatsapp px-3 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gray-950">
              Terpopuler
            </span>
          </div>

          <div>
            <!-- Header: Name & Diskon -->
            <div class="flex items-center justify-between">
              <span class="text-sm font-semibold tracking-wide text-gray-300 group-hover:text-white transition-colors duration-300">
                {{ plan.label }}
              </span>
              <span
                v-if="plan.hasPromo"
                class="rounded bg-whatsapp/[0.08] px-1.5 py-0.5 text-[10px] font-bold text-whatsapp"
              >
                -30%
              </span>
            </div>

            <!-- Price Display -->
            <div class="mt-5 flex flex-col">
              <span v-if="plan.hasPromo" class="text-xs text-gray-600 line-through">
                {{ plan.original }}
              </span>
              <div class="flex items-baseline">
                <span class="text-3xl font-extrabold tracking-tight text-white">
                  {{ plan.hasPromo ? plan.promo : plan.original }}
                </span>
              </div>
              <span class="mt-1 text-[11px] font-medium text-whatsapp/85">
                ~{{ plan.perMessage }} / pesan
              </span>
              <span v-if="plan.note" class="mt-1 text-[9px] text-gray-500">
                *{{ plan.note }}
              </span>
            </div>

            <!-- Specs Checklist -->
            <div class="mt-6 space-y-3.5">
              <!-- Total Credits -->
              <div class="flex items-start gap-2.5">
                <div class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-whatsapp/5 text-whatsapp border border-whatsapp/15">
                  <svg class="h-2.5 w-2.5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <div class="flex flex-col">
                  <span class="text-xs font-semibold text-gray-200">{{ plan.total }} Total Kredit</span>
                  <span class="text-[10px] text-gray-400 mt-0.5">{{ plan.creditsDetail }}</span>
                </div>
              </div>

              <!-- Active Duration -->
              <div class="flex items-start gap-2.5">
                <div class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-whatsapp/5 text-whatsapp border border-whatsapp/15">
                  <svg class="h-2.5 w-2.5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <div class="flex flex-col">
                  <span class="text-xs font-semibold text-gray-200">Masa Aktif Akun</span>
                  <span class="text-[10px] text-gray-400 mt-0.5">{{ plan.duration }}</span>
                </div>
              </div>

              <!-- Benefits -->
              <div class="flex items-start gap-2.5">
                <div class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-whatsapp/5 text-whatsapp border border-whatsapp/15">
                  <svg class="h-2.5 w-2.5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <span class="text-[11px] text-gray-300">Kredit Tidak Hangus</span>
              </div>

              <div class="flex items-start gap-2.5">
                <div class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-whatsapp/5 text-whatsapp border border-whatsapp/15">
                  <svg class="h-2.5 w-2.5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <span class="text-[11px] text-gray-300">Nomor Siap Pakai</span>
              </div>
            </div>
          </div>

          <!-- Card Button CTA -->
          <div class="mt-8">
            <a
              href="/login"
              class="block w-full rounded-xl py-2.5 text-center text-xs font-bold transition-all duration-300"
              :class="plan.popular
                ? 'bg-whatsapp hover:bg-whatsapp-dark text-gray-950 hover:shadow-[0_2px_15px_rgba(37,211,102,0.25)]'
                : 'border border-white/[0.08] hover:border-whatsapp/30 hover:bg-whatsapp/5 text-gray-300 hover:text-white'"
            >
              Pilih Paket
            </a>
          </div>
        </div>
      </div>

      <!-- Enterprise Banner -->
      <div class="mt-6 rounded-2xl border border-white/[0.08] bg-[#090e0c]/95 p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-whatsapp/20 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.15)]">
        <div class="text-center md:text-left">
          <h3 class="text-sm font-semibold text-white">Butuh kapasitas pengiriman lebih besar?</h3>
          <p class="mt-1.5 text-xs text-gray-400 leading-relaxed max-w-xl">Hubungi kami untuk paket Enterprise dengan kustomisasi kuota volume tinggi, kustomisasi nomor pengirim (sender ID), dan jaminan keandalan SLA.</p>
        </div>
        <a href="https://wa.me/..." target="_blank" class="shrink-0 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] hover:border-whatsapp/30 hover:bg-whatsapp/5 px-5 py-2 text-xs font-semibold text-white transition-all duration-300">
          Hubungi Sales
        </a>
      </div>

      <!-- Transparency Grid -->
      <div ref="notesEl" class="scroll-reveal mt-12" data-delay="300">
        <h3 class="text-center text-sm font-semibold text-white tracking-wide uppercase mb-6 text-whatsapp/90">
          Skema Berlangganan Transparan
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-2xl border border-white/[0.06] bg-[#090e0c]/90 p-6">
          <div class="flex flex-col items-center text-center p-4">
            <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-whatsapp/15 bg-whatsapp/5 text-whatsapp">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h4 class="text-xs font-bold text-white uppercase tracking-wide">1 Kredit = 1 Pesan</h4>
            <p class="mt-2 text-[11px] leading-relaxed text-gray-400">Saldo kredit hanya terpotong jika pesan WhatsApp sukses terkirim lewat endpoint API.</p>
          </div>
          <div class="flex flex-col items-center text-center p-4 border-y border-white/[0.06] md:border-y-0 md:border-x border-white/[0.06]">
            <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-whatsapp/15 bg-whatsapp/5 text-whatsapp">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
            </div>
            <h4 class="text-xs font-bold text-white uppercase tracking-wide">Kredit Tidak Hangus</h4>
            <p class="mt-2 text-[11px] leading-relaxed text-gray-400">Sisa saldo kredit Anda tetap aman dan tidak akan pernah kedaluwarsa meskipun masa aktif akun habis.</p>
          </div>
          <div class="flex flex-col items-center text-center p-4">
            <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-whatsapp/15 bg-whatsapp/5 text-whatsapp">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7C4.68 9.547 4.634 10.768 4.634 12c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.209.138-2.312.138-3.662z" /><path stroke-linecap="round" stroke-linejoin="round" d="M9 10.5l3 3 3-3" /></svg>
            </div>
            <h4 class="text-xs font-bold text-white uppercase tracking-wide">Masa Aktif Fleksibel</h4>
            <p class="mt-2 text-[11px] leading-relaxed text-gray-400">Masa aktif akun membatasi akses pengiriman. Cukup topup paket apa saja untuk memperpanjang masa aktif akun.</p>
          </div>
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
  { 
    label: 'Timur', 
    original: 'Rp50.000', 
    promo: 'Rp35.000', 
    price: 'Rp35.000',
    total: '210', 
    bonus: '0', 
    duration: '30 Hari', 
    popular: false, 
    hasPromo: true,
    perMessage: 'Rp167',
    creditsDetail: '210 Kredit',
    note: 'Bulan berikutnya Rp50.000 (Rp238/pesan)'
  },
  { 
    label: 'Selatan', 
    original: 'Rp99.000', 
    promo: '', 
    price: 'Rp99.000',
    total: '500', 
    bonus: '100', 
    duration: '90 Hari', 
    popular: true, 
    hasPromo: false,
    perMessage: 'Rp198',
    creditsDetail: '400 + 100 Kredit Bonus'
  },
  { 
    label: 'Utara', 
    original: 'Rp199.000', 
    promo: '', 
    price: 'Rp199.000',
    total: '1.150', 
    bonus: '200', 
    duration: '180 Hari', 
    popular: false, 
    hasPromo: false,
    perMessage: 'Rp173',
    creditsDetail: '950 + 200 Kredit Bonus'
  },
  { 
    label: 'Barat', 
    original: 'Rp499.000', 
    promo: '', 
    price: 'Rp499.000',
    total: '3.000', 
    bonus: '450', 
    duration: '365 Hari', 
    popular: false, 
    hasPromo: false,
    perMessage: 'Rp166',
    creditsDetail: '2.550 + 450 Kredit Bonus'
  },
]
</script>
