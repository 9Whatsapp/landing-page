<template>
  <section class="border-t border-gray-800/50 py-16">
    <div class="mx-auto max-w-6xl">
      <p class="text-center text-xs font-medium uppercase tracking-widest text-gray-600">Features</p>
      <h2 class="mt-3 text-center text-2xl font-bold text-white sm:text-3xl">
        Kenapa Pilih 9WhatsApp?
      </h2>
      <p class="mx-auto mt-3 max-w-xl text-center text-sm text-gray-500">
        Kirim WhatsApp tanpa ribet. Tanpa nomor sendiri, tanpa QR scan.
      </p>

      <div class="mt-10 grid grid-cols-1 gap-px bg-gray-800/50 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="feature in features" :key="feature.title" class="bg-gray-950 p-6">
          <div class="mb-3 flex h-8 w-8 items-center justify-center text-whatsapp">
            <component :is="feature.icon" class="h-5 w-5" />
          </div>
          <h3 class="text-sm font-medium text-white">{{ feature.title }}</h3>
          <p class="mt-1 text-xs text-gray-500">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const features = [
  {
    title: 'Tanpa Nomor Sendiri',
    description: 'Kami sediakan nomor virtual siap pakai. Tidak perlu beli nomor atau registrasi WhatsApp.',
    icon: () =>
      h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
        h('path', { d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' }),
      ]),
  },
  {
    title: 'Tanpa QR Scan',
    description: 'Tidak perlu scan QR atau link device. Langsung integrasi API dan mulai kirim pesan.',
    icon: () =>
      h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
        h('path', { d: 'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z' }),
      ]),
  },
  {
    title: 'Topup Credit',
    description: 'Bayar sesuai pemakaian. Topup credit kapan saja, tidak ada biaya bulanan atau subscription.',
    icon: () =>
      h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
        h('path', { d: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }),
      ]),
  },
  {
    title: 'REST API Sederhana',
    description: 'Integrasi mudah dengan endpoint REST. Dokumentasi lengkap dan contoh code untuk berbagai bahasa.',
    icon: () =>
      h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
        h('path', { d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' }),
      ]),
  },
  {
    title: 'Multi Use Case',
    description: 'Kirim OTP, payment reminder, invoice, welcome message, dan lainnya. Satu API untuk semua kebutuhan.',
    icon: () =>
      h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
        h('path', { d: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' }),
      ]),
  },
  {
    title: 'Delivery Cepat',
    description: 'Pesan dikirim real-time dengan reliability tinggi. Status delivery tracking via webhook.',
    icon: () =>
      h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
        h('path', { d: 'M13 10V3L4 14h7v7l9-11h-7z' }),
      ]),
  },
]
</script>
