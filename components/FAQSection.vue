<template>
  <section class="border-t border-white/[0.04] py-16 sm:py-20">
    <div class="mx-auto max-w-3xl px-4 sm:px-8">
      <div ref="headerEl" class="scroll-reveal text-center">
        <h2 class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Pertanyaan yang sering ditanyakan
        </h2>
      </div>

      <div ref="listEl" class="scroll-reveal mt-10 space-y-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.03]" data-delay="200">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="bg-gray-950/90"
        >
          <button
            :id="'faq-btn-' + index"
            type="button"
            class="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-white/[0.01] focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none sm:px-5"
            :aria-expanded="openIndex === index"
            :aria-controls="'faq-panel-' + index"
            @click="toggle(index)"
          >
            <span class="text-sm font-medium text-white sm:text-[15px]">{{ item.question }}</span>
            <svg
              class="h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200"
              :class="{ 'rotate-180': openIndex === index }"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            :id="'faq-panel-' + index"
            role="region"
            :aria-labelledby="'faq-btn-' + index"
            class="overflow-hidden transition-all duration-200"
            :class="openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'"
          >
            <p class="px-4 pb-4 text-sm leading-relaxed text-gray-500 sm:px-5 sm:pb-5 sm:text-[15px]">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const headerEl = ref<HTMLElement | null>(null)
const listEl = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    headerEl.value?.classList.add('revealed')
    listEl.value?.classList.add('revealed')
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
  if (listEl.value) observer.observe(listEl.value)
})

onUnmounted(() => observer?.disconnect())

const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  { question: 'Apakah saya harus punya nomor WhatsApp sendiri?', answer: 'Tidak. 9WhatsApp menyediakan jaringan nomor WhatsApp siap pakai untuk mengirim pesan.' },
  { question: 'Apakah perlu scan QR?', answer: 'Tidak. Anda cukup topup credit dan menggunakan API yang tersedia.' },
  { question: 'Apa itu credit?', answer: 'Credit adalah saldo pengiriman. 1 Credit = 1 Pesan WhatsApp.' },
  { question: 'Apakah credit hangus saat masa aktif berakhir?', answer: 'Tidak. Credit tetap tersimpan. Namun akun yang masa aktifnya berakhir tidak dapat mengirim pesan sampai melakukan topup kembali.' },
  { question: 'Apakah bisa memilih nomor pengirim?', answer: 'Bisa, tersedia pada paket tertentu untuk kebutuhan branding dan komunikasi yang konsisten.' },
  { question: 'Apakah tersedia API?', answer: 'Ya. 9WhatsApp menyediakan REST API untuk integrasi dengan aplikasi, CRM, ERP, atau sistem internal Anda.' },
  { question: 'Apakah cocok untuk OTP dan notifikasi?', answer: 'Ya. 9WhatsApp cocok untuk OTP, notifikasi, reminder, invoice, dan pesan bisnis lainnya.' },
]
</script>
