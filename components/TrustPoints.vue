<template>
  <section class="px-4 pb-16 sm:px-8 sm:pb-24">
    <div class="mx-auto max-w-5xl">
      <div class="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.03] shadow-[0_0_40px_-12px_rgba(37,211,102,0.04)] sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="point in trustPoints"
          :key="point.title"
          class="bg-gray-950/90 p-5 transition-colors hover:bg-gray-950/70 sm:p-6"
        >
          <div class="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-whatsapp/[0.06] text-whatsapp">
            <component :is="point.icon" class="h-[18px] w-[18px]" />
          </div>
          <h3 class="text-sm font-medium text-white">{{ point.title }}</h3>
          <p class="mt-1.5 text-[13px] leading-relaxed text-gray-500">{{ point.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from "vue"

const trustPoints = [
  {
    title: "Nomor Disediakan",
    description: "Nomor virtual dari kami. Tidak perlu beli, registrasi, atau kelola WhatsApp sendiri.",
    icon: () =>
      h(
        "svg",
        { fill: "none", stroke: "currentColor", "stroke-width": "1.5", viewBox: "0 0 24 24" },
        [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
          }),
        ],
      ),
  },
  {
    title: "Tanpa QR Scan",
    description: "Tidak perlu scan QR atau link device. Langsung integrasi dan kirim.",
    icon: () =>
      h(
        "svg",
        { fill: "none", stroke: "currentColor", "stroke-width": "1.5", viewBox: "0 0 24 24" },
        [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M3.75 6.75h3v3h-3v-3zM3.75 14.25h3v3h-3v-3zM10.5 6.75h3v3h-3v-3zM10.5 14.25h3v3h-3v-3zM17.25 6.75h3v3h-3v-3zM17.25 14.25h3v3h-3v-3z",
          }),
        ],
      ),
  },
  {
    title: "REST API",
    description: "Endpoint sederhana dengan dokumentasi lengkap. Integrasi dalam hitungan menit.",
    icon: () =>
      h(
        "svg",
        { fill: "none", stroke: "currentColor", "stroke-width": "1.5", viewBox: "0 0 24 24" },
        [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M17.25 6.75L22.5 12l-5.25 5.25M6.75 17.25L1.5 12l5.25-5.25M14.25 3.75l-4.5 16.5",
          }),
        ],
      ),
  },
  {
    title: "Pay-as-you-go",
    description: "Topup credit sesuai kebutuhan. Tanpa langganan bulanan, tanpa komitmen.",
    icon: () =>
      h(
        "svg",
        { fill: "none", stroke: "currentColor", "stroke-width": "1.5", viewBox: "0 0 24 24" },
        [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
          }),
        ],
      ),
  },
]
</script>
