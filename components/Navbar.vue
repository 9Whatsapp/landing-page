<template>
  <nav class="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04] bg-gray-950/80 backdrop-blur-md">
    <div class="mx-auto max-w-5xl px-5 sm:px-8">
      <div class="flex items-center justify-between py-3.5">
        <NuxtLink to="/" class="flex items-center gap-2 rounded-md focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none">
          <img src="/logo.png" alt="9WhatsApp Logo" class="h-6 w-6 object-contain rounded" />
          <span class="text-[15px] font-semibold tracking-tight text-white">9WhatsApp</span>
        </NuxtLink>

        <!-- Desktop nav links -->
        <div class="hidden items-center gap-1 md:flex">
          <NuxtLink v-for="link in navLinks" :key="link.href" :to="link.href"
            class="relative rounded-full px-3.5 py-1.5 text-[13px] font-medium text-gray-400 transition-all duration-200 hover:bg-white/[0.03] hover:text-white">
            {{ link.label }}
          </NuxtLink>
        </div>

        <div class="flex items-center gap-2.5">
          <NuxtLink
            to="/login"
            class="inline-flex items-center gap-1.5 rounded-full border border-whatsapp/20 bg-whatsapp/8 px-4.5 py-1.5 text-xs font-semibold text-whatsapp transition-all duration-300 hover:bg-whatsapp hover:text-gray-950 hover:shadow-[0_2px_20px_rgba(37,211,102,0.2)] focus-visible:ring-2 focus-visible:ring-whatsapp/50 focus-visible:outline-none"
          >
            Coba Gratis
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const navLinks = [
  { label: 'Fitur', href: '/#fitur' },
  { label: 'Cara Kerja', href: '/#cara-kerja' },
  { label: 'Harga', href: '/#harga' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Dokumentasi', href: '/docs' },
  { label: 'Hubungi Kami', href: '/contact' },
]
</script>
