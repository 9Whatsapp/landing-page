<template>
  <section class="border-t border-white/[0.04] py-16 sm:py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-8">
      <div ref="headerEl" class="scroll-reveal text-center">
        <h2 class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Cara Kerja 9WhatsApp
        </h2>
        <p class="mt-3 text-sm text-gray-500 sm:text-[15px]">
          Empat langkah untuk mulai mengirim pesan WhatsApp.
        </p>
      </div>

      <div class="relative mt-12">
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            :ref="(el) => registerStep(el as HTMLElement, index)"
            class="scroll-reveal relative flex flex-col items-center text-center lg:items-start lg:text-left"
            :data-delay="index * 100"
          >
            <div class="relative flex items-center gap-3 lg:mb-4">
              <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-whatsapp/15 bg-whatsapp/[0.06] font-mono text-sm font-medium text-whatsapp">
                {{ index + 1 }}
              </div>
              <div
                v-if="index < steps.length - 1"
                class="hidden h-px flex-1 bg-gradient-to-r from-white/[0.06] to-transparent lg:block lg:w-16"
                aria-hidden="true"
              />
            </div>

            <h3 class="text-sm font-medium text-white">{{ step.title }}</h3>
            <p class="mt-1.5 text-[13px] leading-relaxed text-gray-500">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const headerEl = ref<HTMLElement | null>(null)
const stepEls = ref<HTMLElement[]>([])
let observer: IntersectionObserver | null = null

function registerStep(el: HTMLElement | null, index: number) {
  if (el) stepEls.value[index] = el
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    headerEl.value?.classList.add('revealed')
    stepEls.value.forEach(el => el?.classList.add('revealed'))
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
  stepEls.value.forEach(el => { if (el) observer?.observe(el) })
})

onUnmounted(() => observer?.disconnect())

const steps = [
  { title: 'Topup Credit', description: 'Pilih nominal topup dan dapatkan credit untuk mengirim pesan.' },
  { title: 'Integrasikan API', description: 'Gunakan REST API dari aplikasi, CRM, ERP, atau sistem internal Anda.' },
  { title: 'Kirim Pesan', description: 'Sistem 9WhatsApp mengirim pesan menggunakan nomor yang sudah disediakan.' },
  { title: 'Pantau Status', description: 'Lihat status pengiriman langsung dari dashboard.' },
]
</script>
