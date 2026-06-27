<template>
  <nav class="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04] bg-gray-950/80 backdrop-blur-md">
    <div class="mx-auto max-w-5xl px-5 sm:px-8">
      <div class="flex items-center justify-between py-3.5">
        <NuxtLink to="/" class="flex items-center gap-2 rounded-md focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none">
          <img src="/logo-sm.png" alt="9WhatsApp Logo" class="h-6 w-6 object-contain rounded" width="24" height="24" fetchpriority="high" />
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

          <!-- Mobile hamburger button -->
          <button
            @click="toggleMenu"
            class="flex md:hidden h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-gray-400 transition-all duration-200 hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-white focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none"
            :aria-expanded="isMenuOpen"
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <!-- Hamburger icon -->
            <svg v-if="!isMenuOpen" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!-- Close icon -->
            <svg v-else class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu overlay -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMenuOpen"
        id="mobile-menu"
        class="md:hidden border-t border-white/[0.04] bg-gray-950/98 backdrop-blur-xl"
      >
        <div class="mx-auto max-w-5xl px-5 py-4 space-y-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            @click="closeMenu"
            class="flex items-center gap-3 rounded-xl px-4 py-3 text-[14px] font-medium text-gray-300 transition-all duration-200 hover:bg-white/[0.04] hover:text-white active:bg-white/[0.06]"
          >
            <component :is="link.icon" class="h-4 w-4 text-gray-500" />
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { h, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const route = useRoute()

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

// Close menu on route change
watch(() => route.fullPath, () => {
  closeMenu()
})

const navLinks = [
  {
    label: 'Fitur',
    href: '/#fitur',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' })
    ])
  },
  {
    label: 'Cara Kerja',
    href: '/#cara-kerja',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z' }),
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' })
    ])
  },
  {
    label: 'Harga',
    href: '/#harga',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z' })
    ])
  },
  {
    label: 'FAQ',
    href: '/#faq',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z' })
    ])
  },
  {
    label: 'Dokumentasi',
    href: '/docs',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25' })
    ])
  },
  {
    label: 'Hubungi Kami',
    href: '/contact',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' })
    ])
  },
]
</script>
