<template>
  <section class="relative flex min-h-[90vh] sm:min-h-screen items-center px-4 pt-24 pb-12 sm:px-8 sm:pt-28 sm:pb-24 overflow-hidden">
    <!-- Ambient glow layers -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <!-- Subtle top center glow -->
      <div class="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-whatsapp/[0.04] blur-[120px]" />
      <!-- Subtle right panel glow -->
      <div class="absolute right-[10%] top-[30%] h-[400px] w-[400px] rounded-full bg-emerald-500/[0.02] blur-[100px]" />
    </div>

    <div class="relative mx-auto max-w-6xl w-full">
      <div class="grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-8">
        <!-- Left: Copy (spans 7 cols on large screens) -->
        <div class="lg:col-span-7 pr-0 lg:pr-4">
          <!-- Headline -->
          <h1 class="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Kirim WhatsApp<br />
            <span class="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent">Tanpa Nomor Sendiri</span>
          </h1>

          <!-- Subheadline -->
          <p class="mt-5 sm:mt-6 max-w-xl text-[15px] leading-relaxed text-gray-300/90">
            Lewat API tanpa QR scan untuk OTP, notifikasi, invoice, dan pesan otomatis. Cukup integrasi REST API, topup credit, lalu kirim.
          </p>

          <!-- CTA -->
          <div class="mt-7 sm:mt-8 flex flex-col gap-3 sm:max-w-md sm:flex-row sm:gap-3.5">
            <a href="https://app.9whatsapp.web.id/register" target="_blank"
              class="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 sm:py-3 text-sm font-semibold text-gray-950 transition-colors duration-200 hover:bg-whatsapp-dark focus-visible:ring-2 focus-visible:ring-whatsapp/50 focus-visible:outline-none active:scale-[0.98]">
              Coba Gratis
              <svg class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </a>
            <a href="https://docs.9whatsapp.web.id" target="_blank" rel="noopener"
              class="group inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-6 py-3.5 sm:py-3 text-sm font-medium text-gray-300 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.05] hover:text-white focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none active:scale-[0.98]">
              <svg class="h-4 w-4 text-gray-400 group-hover:text-gray-300 transition-colors duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Dokumentasi
            </a>
          </div>

          <!-- Trust strip - 2x2 grid on mobile, flex row on sm+ -->
          <div class="mt-8 sm:mt-12 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-2">
            <span class="inline-flex items-center gap-1.5 rounded-full border border-white/[0.05] bg-white/[0.02] px-3 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-gray-400 transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.04] hover:text-gray-300">
              <svg class="h-3 sm:h-3.5 w-3 sm:w-3.5 text-whatsapp/70 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Tanpa QR Scan
            </span>
            <span class="inline-flex items-center gap-1.5 rounded-full border border-white/[0.05] bg-white/[0.02] px-3 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-gray-400 transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.04] hover:text-gray-300">
              <svg class="h-3 sm:h-3.5 w-3 sm:w-3.5 text-whatsapp/70 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              REST API
            </span>
            <span class="inline-flex items-center gap-1.5 rounded-full border border-white/[0.05] bg-white/[0.02] px-3 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-gray-400 transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.04] hover:text-gray-300">
              <svg class="h-3 sm:h-3.5 w-3 sm:w-3.5 text-whatsapp/70 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16V5" /></svg>
              Harga Terjangkau
            </span>
            <span class="inline-flex items-center gap-1.5 rounded-full border border-white/[0.05] bg-white/[0.02] px-3 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-gray-400 transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.04] hover:text-gray-300">
              <svg class="h-3 sm:h-3.5 w-3 sm:w-3.5 text-whatsapp/70 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Nomor Disediakan
            </span>
          </div>
        </div>

        <!-- Right: Code panel (spans 5 cols on large screens) -->
        <div class="opacity-0 animate-fade-in-up-delayed lg:col-span-5 w-full">
          <div class="relative">
            <!-- Subtle border glow layer -->
            <div class="absolute -inset-px rounded-xl bg-gradient-to-tr from-whatsapp/10 via-white/5 to-white/5 opacity-50" />

            <div class="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#090f0c]/95 shadow-2xl shadow-black/80 backdrop-blur-md animate-float-panel">
              <!-- Window Header -->
              <div class="flex items-center justify-between border-b border-white/[0.04] px-4 py-3 bg-white/[0.01]">
                <!-- macOS style minimal window buttons -->
                <div class="flex items-center gap-1.5">
                  <span class="h-2.5 w-2.5 rounded-full border border-white/[0.08] bg-white/[0.03]" />
                  <span class="h-2.5 w-2.5 rounded-full border border-white/[0.08] bg-white/[0.03]" />
                  <span class="h-2.5 w-2.5 rounded-full border border-white/[0.08] bg-white/[0.03]" />
                </div>
                <!-- Shaded Address Bar -->
                <div class="flex items-center justify-center rounded-md bg-white/[0.02] border border-white/[0.04] px-3 sm:px-4 py-0.5 font-mono text-[10px] text-gray-500 sm:text-[11px]">
                  api.9whatsapp.web.id
                </div>
                <!-- Status Badge -->
                <span class="rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-emerald-400">200 OK</span>
              </div>

              <!-- Editor Tabs & Copy action -->
              <div class="flex items-center justify-between border-b border-white/[0.04] bg-white/[0.01] px-4">
                <div class="flex gap-1 sm:gap-2 overflow-x-auto">
                  <button
                    @click="activeTab = 'rest'"
                    class="relative py-2.5 text-xs font-semibold cursor-pointer transition-colors duration-200 focus-visible:outline-none whitespace-nowrap px-1"
                    :class="activeTab === 'rest' ? 'text-whatsapp' : 'text-gray-500 hover:text-gray-300'"
                  >
                    REST API
                    <span v-if="activeTab === 'rest'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-whatsapp" />
                  </button>
                  <button
                    @click="activeTab = 'curl'"
                    class="relative py-2.5 text-xs font-semibold cursor-pointer transition-colors duration-200 focus-visible:outline-none whitespace-nowrap px-1"
                    :class="activeTab === 'curl' ? 'text-whatsapp' : 'text-gray-500 hover:text-gray-300'"
                  >
                    cURL
                    <span v-if="activeTab === 'curl'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-whatsapp" />
                  </button>
                  <button
                    @click="activeTab = 'node'"
                    class="relative py-2.5 text-xs font-semibold cursor-pointer transition-colors duration-200 focus-visible:outline-none whitespace-nowrap px-1"
                    :class="activeTab === 'node' ? 'text-whatsapp' : 'text-gray-500 hover:text-gray-300'"
                  >
                    Node.js
                    <span v-if="activeTab === 'node'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-whatsapp" />
                  </button>
                </div>
                <!-- Mini Copy Button -->
                <button
                  @click="copyCode"
                  class="rounded p-1.5 text-gray-500 hover:text-whatsapp hover:bg-white/[0.03] transition-all cursor-pointer relative"
                  :title="copied ? 'Copied!' : 'Copy code'"
                >
                  <!-- Copy Icon -->
                  <svg v-if="!copied" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                  <!-- Check Icon for Copied state -->
                  <svg v-else class="h-3.5 w-3.5 text-whatsapp" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                </button>
              </div>

              <!-- Code Editor Body -->
              <div class="px-4 sm:px-5 py-4 min-h-[160px] sm:min-h-[170px] flex flex-col justify-center select-text">
                <div class="mb-3.5 flex items-center gap-2">
                  <span class="rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-400">
                    {{ activeTab === 'curl' ? 'SHELL' : activeTab === 'node' ? 'JS' : 'POST' }}
                  </span>
                  <span class="font-mono text-[11px] text-gray-500 sm:text-[12px] truncate">
                    {{ activeTab === 'curl' ? 'curl -X POST' : '/api/message/send' }}
                  </span>
                </div>

                <!-- REST API Tab (with typing animation classes) -->
                <pre v-if="activeTab === 'rest'" class="overflow-x-auto text-[11px] leading-[1.8] sm:text-[13px]"><code class="font-mono"><span class="hero-code-line" :class="{ 'typing': animationCompleted }" data-line="0"><span class="text-gray-400">{</span></span>
<span class="hero-code-line" :class="{ 'typing': animationCompleted }" data-line="1">  <span class="text-[#34d399]">"to"</span><span class="text-gray-400">:</span> <span class="text-[#fbbf24]">"6281234567890"</span><span class="text-gray-400">,</span></span>
<span class="hero-code-line" :class="{ 'typing': animationCompleted }" data-line="2">  <span class="text-[#34d399]">"message"</span><span class="text-gray-400">:</span> <span class="text-[#fbbf24]">"*9980* adalah kode verifikasi Anda."</span><span class="text-gray-400">,</span></span>
<span class="hero-code-line" :class="{ 'typing': animationCompleted }" data-line="3">  <span class="text-[#34d399]">"type"</span><span class="text-gray-400">:</span> <span class="text-[#fbbf24]">"text"</span></span>
<span class="hero-code-line" :class="{ 'typing': animationCompleted }" data-line="4"><span class="text-gray-400">}</span></span>
<span class="hero-code-line hero-typing-cursor" :style="animationCompleted ? 'display: none !important; opacity: 0;' : ''" data-line="5"></span></code></pre>

                <!-- cURL Tab (instant render, fully highlighted) -->
                <pre v-else-if="activeTab === 'curl'" class="overflow-x-auto text-[11px] leading-[1.8] sm:text-[13px]"><code class="font-mono"><span class="text-gray-500">curl -X POST https://api.9whatsapp.web.id/api/message/send \</span>
<span class="text-gray-500">  -H <span class="text-[#fbbf24]">"Content-Type: application/json"</span> \</span>
<span class="text-gray-500">  -d <span class="text-[#fbbf24]">'{</span></span>
<span class="text-gray-500">    <span class="text-[#34d399]">"to"</span>: <span class="text-[#fbbf24]">"6281234567890"</span>,</span>
<span class="text-gray-500">    <span class="text-[#34d399]">"message"</span>: <span class="text-[#fbbf24]">"*9980* adalah kode verifikasi Anda."</span>,</span>
<span class="text-gray-500">    <span class="text-[#34d399]">"type"</span>: <span class="text-[#fbbf24]">"text"</span></span>
<span class="text-gray-500">  }'</span></code></pre>

                <!-- Node.js Tab (instant render, fully highlighted) -->
                <pre v-else-if="activeTab === 'node'" class="overflow-x-auto text-[11px] leading-[1.8] sm:text-[13px]"><code class="font-mono"><span class="text-[#34d399]">fetch</span><span class="text-gray-400">(</span><span class="text-[#fbbf24]">'https://api.9whatsapp.web.id/api/message/send'</span><span class="text-gray-400">, {</span>
<span class="text-gray-400">  method: <span class="text-[#fbbf24]">'POST'</span>,</span>
<span class="text-gray-400">  headers: { <span class="text-[#fbbf24]">'Content-Type'</span>: <span class="text-[#fbbf24]">'application/json'</span> },</span>
<span class="text-gray-400">  body: JSON.<span class="text-[#34d399]">stringify</span>({</span>
<span class="text-gray-400">    to: <span class="text-[#fbbf24]">'6281234567890'</span>,</span>
<span class="text-gray-400">    message: <span class="text-[#fbbf24]">'*9980* adalah kode verifikasi Anda.'</span>,</span>
<span class="text-gray-400">    type: <span class="text-[#fbbf24]">'text'</span></span>
<span class="text-gray-400">  })</span>
<span class="text-gray-400">})</span></code></pre>
              </div>

              <!-- Status footer -->
              <div class="flex items-center justify-between border-t border-white/[0.04] bg-white/[0.01] px-4 sm:px-5 py-2.5">
                <div class="flex items-center gap-2">
                  <span class="hero-delivery-dot relative flex h-1.5 w-1.5">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp/30 opacity-75"></span>
                    <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-whatsapp/50"></span>
                  </span>
                  <span class="hero-delivery-text font-mono text-[10px] text-gray-500 sm:text-[11px]">delivered</span>
                </div>
                <span class="hero-delivery-time font-mono text-[10px] text-gray-600 sm:text-[11px]">120ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const activeTab = ref<'rest' | 'curl' | 'node'>('rest')
const copied = ref(false)
const animationCompleted = ref(false)

watch(activeTab, () => {
  animationCompleted.value = true
})

const codeTemplates = {
  rest: `{
  "to": "6281234567890",
  "message": "*9980* adalah kode verifikasi Anda.",
  "type": "text"
}`,
  curl: `curl -X POST https://api.9whatsapp.web.id/api/message/send \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "6281234567890",
    "message": "*9980* adalah kode verifikasi Anda.",
    "type": "text"
  }'`,
  node: `fetch('https://api.9whatsapp.web.id/api/message/send', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: '6281234567890',
    message: '*9980* adalah kode verifikasi Anda.',
    type: 'text'
  })
})
.then(res => res.json())`
}

function copyCode() {
  const code = codeTemplates[activeTab.value]
  navigator.clipboard.writeText(code).then(() => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  })
}

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
    animationCompleted.value = true
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
