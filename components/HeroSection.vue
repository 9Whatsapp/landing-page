<template>
  <section class="relative flex min-h-screen items-center px-4 pt-20 pb-12 sm:px-8 sm:pb-16 overflow-hidden">
    <!-- Ambient glow layers -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <!-- Main green glow center -->
      <div class="absolute left-1/2 top-[45%] h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-whatsapp/[0.06] blur-[100px] animate-glow-pulse" />
      <!-- Secondary accent glow -->
      <div class="absolute left-[55%] top-[40%] h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.06] blur-[80px]" />
      <!-- Warm accent bottom-left -->
      <div class="absolute left-[20%] top-[70%] h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-whatsapp/[0.03] blur-[90px]" />
    </div>

    <div class="relative mx-auto max-w-6xl w-full">
      <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <!-- Left: Copy -->
        <div class="opacity-0 animate-fade-in-up">
          <!-- Headline -->
          <h1 class="text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Kirim WhatsApp<br />
            <span class="text-gray-500">Tanpa Nomor Sendiri</span>
          </h1>

          <!-- Subheadline -->
          <p class="mt-5 max-w-md text-[15px] leading-relaxed text-gray-400 sm:text-base">
            Cukup satu API call, pesan langsung sampai ke WhatsApp. Tanpa QR scan. Credit gratis untuk uji coba.
          </p>

          <!-- CTA -->
          <div class="mt-8 flex flex-col gap-2.5 sm:max-w-xs sm:flex-row">
            <a href="/login"
              class="group relative inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-2.5 text-sm font-medium text-gray-950 transition-all hover:bg-whatsapp-dark hover:shadow-[0_4px_24px_rgba(37,211,102,0.2)] focus-visible:ring-2 focus-visible:ring-whatsapp/50 focus-visible:outline-none">
              <svg class="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              Coba Gratis
            </a>
            <a href="https://docs.9whatsapp.web.id" target="_blank" rel="noopener"
              class="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.015] px-5 py-2.5 text-sm font-medium text-gray-400 transition-all hover:border-white/[0.1] hover:bg-white/[0.03] hover:text-gray-300 focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none">
              <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Dokumentasi
            </a>
          </div>

          <!-- Trust strip -->
          <div class="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2.5">
            <span class="flex items-center gap-2 text-xs text-gray-500">
              <span class="h-1 w-1 rounded-full bg-whatsapp/50"></span>
              Tanpa QR Scan
            </span>
            <span class="flex items-center gap-2 text-xs text-gray-500">
              <span class="h-1 w-1 rounded-full bg-whatsapp/50"></span>
              REST API
            </span>
            <span class="flex items-center gap-2 text-xs text-gray-500">
              <span class="h-1 w-1 rounded-full bg-whatsapp/50"></span>
              Harga Terjangkau
            </span>
            <span class="flex items-center gap-2 text-xs text-gray-500">
              <span class="h-1 w-1 rounded-full bg-whatsapp/50"></span>
              Nomor Disediakan
            </span>
          </div>
        </div>

        <!-- Right: Code panel -->
        <div class="opacity-0 animate-fade-in-up-delayed">
          <div class="relative">
            <!-- Ambient glow rings -->
            <div class="hero-glow-ring"></div>
            <div class="hero-glow-ring hero-glow-ring-delayed"></div>

            <!-- Subtle glow behind panel -->
            <div class="absolute -inset-4 rounded-2xl bg-whatsapp/[0.02] blur-2xl" />

            <div class="relative overflow-hidden rounded-xl border border-white/[0.05] bg-[#0b110e]/90 shadow-xl shadow-black/30 backdrop-blur-sm animate-float-panel">
              <!-- Header -->
              <div class="flex items-center justify-between border-b border-white/[0.04] px-4 py-2.5">
                <div class="flex items-center gap-1.5">
                  <span class="h-2 w-2 rounded-full bg-white/[0.06]" />
                  <span class="h-2 w-2 rounded-full bg-white/[0.06]" />
                  <span class="h-2 w-2 rounded-full bg-white/[0.06]" />
                </div>
                <span class="font-mono text-[10px] text-gray-600 sm:text-[11px]">api.9whatsapp.web.id</span>
                <span class="rounded bg-whatsapp/8 px-1.5 py-0.5 font-mono text-[10px] font-medium text-whatsapp/60">200</span>
              </div>

              <!-- Tab -->
              <div class="flex items-center gap-0 border-b border-white/[0.04] px-4">
                <button class="relative px-3 py-2 font-mono text-[11px] text-gray-300">
                  REST
                  <span class="absolute bottom-0 left-0 right-0 h-px bg-whatsapp/30" />
                </button>
              </div>

              <!-- Code -->
              <div class="px-4 py-3.5">
                <div class="mb-3 flex items-center gap-2">
                  <span class="rounded bg-whatsapp/8 px-1.5 py-0.5 font-mono text-[10px] font-medium text-whatsapp/60">POST</span>
                  <span class="font-mono text-[11px] text-gray-500 sm:text-[12px]">/api/send</span>
                </div>
                <pre class="overflow-x-auto text-[12px] leading-[1.8] sm:text-[13px]"><code class="font-mono"><span class="hero-code-line" data-line="0"><span class="text-gray-600">{</span></span>
<span class="hero-code-line" data-line="1">  <span class="text-whatsapp/55">"to"</span><span class="text-gray-600">:</span> <span class="text-gray-400">"6281234567890"</span><span class="text-gray-600">,</span></span>
<span class="hero-code-line" data-line="2">  <span class="text-whatsapp/55">"message"</span><span class="text-gray-600">:</span> <span class="text-gray-400">"*9980* adalah kode verifikasi Anda."</span><span class="text-gray-600">,</span></span>
<span class="hero-code-line" data-line="3">  <span class="text-whatsapp/55">"type"</span><span class="text-gray-600">:</span> <span class="text-gray-400">"text"</span></span>
<span class="hero-code-line" data-line="4"><span class="text-gray-600">}</span></span>
<span class="hero-code-line hero-typing-cursor" data-line="5"></span></code></pre>
              </div>

              <!-- Status footer -->
              <div class="flex items-center justify-between border-t border-white/[0.04] px-4 py-2">
                <div class="flex items-center gap-2">
                  <span class="hero-delivery-dot relative flex h-1.5 w-1.5">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp/30 opacity-75"></span>
                    <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-whatsapp/50"></span>
                  </span>
                  <span class="hero-delivery-text font-mono text-[10px] text-gray-600 sm:text-[11px]">delivered</span>
                </div>
                <span class="hero-delivery-time font-mono text-[10px] text-gray-700 sm:text-[11px]">120ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

let observer: IntersectionObserver | null = null

onMounted(() => {
  const section = document.querySelector('section')
  if (!section) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startTypingAnimation()
          observer?.disconnect()
        }
      })
    },
    { threshold: 0.2 },
  )

  observer.observe(section)
})

onUnmounted(() => {
  observer?.disconnect()
})

function startTypingAnimation() {
  const lines = document.querySelectorAll<HTMLElement>('.hero-code-line')
  const deliveryDot = document.querySelector<HTMLElement>('.hero-delivery-dot')
  const deliveryText = document.querySelector<HTMLElement>('.hero-delivery-text')
  const deliveryTime = document.querySelector<HTMLElement>('.hero-delivery-time')

  lines.forEach((line) => {
    const lineIndex = parseInt(line.getAttribute('data-line') || '0', 10)
    const delay = 800 + lineIndex * 220

    setTimeout(() => {
      line.classList.add('typing')
    }, delay)
  })

  // Hide cursor after typing completes, then show delivery
  const typingEnd = 800 + (lines.length - 1) * 220 + 400

  setTimeout(() => {
    const cursor = document.querySelector<HTMLElement>('.hero-typing-cursor')
    if (cursor) {
      cursor.style.transition = 'opacity 0.3s'
      cursor.style.opacity = '0'
    }
  }, typingEnd)

  setTimeout(() => {
    deliveryDot?.classList.add('visible')
    deliveryText?.classList.add('visible')
    deliveryTime?.classList.add('visible')
  }, typingEnd + 500)
}
</script>
