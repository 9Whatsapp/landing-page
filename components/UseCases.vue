<template>
  <section class="border-t border-gray-800/50 px-4 py-16">
    <div class="mx-auto max-w-3xl">
      <p class="text-center text-xs font-medium uppercase tracking-widest text-gray-600">Use Cases</p>
      <h2 class="mt-3 text-center text-2xl font-bold text-white sm:text-3xl">
        Kirim Pesan Otomatis untuk Berbagai Kebutuhan
      </h2>
      <p class="mx-auto mt-3 max-w-xl text-center text-sm text-gray-500">
        Dari OTP hingga invoice, satu API untuk semua pesan WhatsApp bisnis Anda.
      </p>

      <div class="mt-10 grid grid-cols-1 gap-px bg-gray-800/50 sm:grid-cols-2">
        <div v-for="item in useCases" :key="item.title" class="bg-gray-950 p-6">
          <div class="mb-3 flex h-8 w-8 items-center justify-center text-whatsapp">
            <component :is="item.icon" class="h-5 w-5" />
          </div>
          <h3 class="text-sm font-medium text-white">{{ item.title }}</h3>
          <p class="mt-1 text-xs text-gray-500">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const useCases = [
  {
    title: 'OTP Verification',
    description: 'Kirim kode OTP otomatis ke pengguna. Cepat, aman, dan terintegrasi.',
    icon: () =>
      h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
        h('path', { d: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' }),
      ]),
  },
  {
    title: 'Payment Reminder',
    description: 'Ingatkan pelanggan tentang tagihan yang belum dibayar secara otomatis.',
    icon: () =>
      h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
        h('path', { d: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' }),
      ]),
  },
  {
    title: 'Invoice Notification',
    description: 'Kirim invoice langsung ke WhatsApp pelanggan setelah transaksi.',
    icon: () =>
      h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
        h('path', { d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' }),
      ]),
  },
  {
    title: 'Welcome Message',
    description: 'Sapa pengguna baru secara otomatis saat mereka mendaftar.',
    icon: () =>
      h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
        h('path', { d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.945L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' }),
      ]),
  },
]
</script>
