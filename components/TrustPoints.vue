<template>
  <section class="border-t border-gray-800/50 px-4 py-16">
    <div class="mx-auto max-w-5xl">
      <div class="grid grid-cols-1 gap-px bg-gray-800/50 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="point in trustPoints"
          :key="point.title"
          class="bg-gray-950 p-6"
        >
          <div class="mb-3 flex h-8 w-8 items-center justify-center text-whatsapp">
            <component :is="point.icon" class="h-5 w-5" />
          </div>
          <h3 class="text-sm font-medium text-white">{{ point.title }}</h3>
          <p class="mt-1 text-xs text-gray-500">{{ point.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const trustPoints = [
  {
    title: 'Tanpa QR Scan',
    description: 'No need to scan QR. Nomor dari kami.',
    icon: () =>
      h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
        h('path', { d: 'M3.75 6.75h3v3h-3v-3zM3.75 14.25h3v3h-3v-3zM10.5 6.75h3v3h-3v-3zM10.5 14.25h3v3h-3v-3zM17.25 6.75h3v3h-3v-3zM17.25 14.25h3v3h-3v-3z' }),
      ]),
  },
  {
    title: 'API Siap Pakai',
    description: 'REST API dengan dokumentasi lengkap.',
    icon: () =>
      h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
        h('path', { d: 'M17.25 6.75L22.5 12l-5.25 5.25M6.75 17.25L1.5 12l5.25-5.25M14.25 3.75l-4.5 16.5' }),
      ]),
  },
  {
    title: 'Topup Credit',
    description: 'Isi credit kapan aja, tanpa ribet.',
    icon: () =>
      h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
        h('path', { d: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }),
      ]),
  },
  {
    title: 'Nomor Disediakan',
    description: 'Nomor virtual siap kirim, tanpa ribet.',
    icon: () =>
      h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
        h('path', { d: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3' }),
      ]),
  },
]
</script>
