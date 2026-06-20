<template>
  <section class="relative flex min-h-screen items-center px-4 pt-20 pb-12 sm:px-8 sm:pb-16">
    <!-- Ambient sunrise glow behind hero content -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute left-1/2 top-[45%] h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-whatsapp/[0.08] blur-[80px]" />
      <div class="absolute left-[55%] top-[40%] h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.08] blur-[80px]" />
    </div>

    <div class="relative mx-auto max-w-6xl">
      <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <!-- Left: Copy -->
        <div class="animate-fade-in opacity-0" style="animation-delay: 0ms">
          <!-- Headline -->
          <h1 class="text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Kirim WhatsApp<br />
            <span class="text-gray-500">Tanpa Nomor</span>
          </h1>

          <!-- Subheadline -->
          <p class="mt-4 max-w-md text-[15px] leading-relaxed text-gray-500 sm:text-base">
            Buat api key, integrasikan API, dan mulai kirim pesan WhatsApp dalam hitungan detik.
          </p>

          <!-- CTA -->
          <div class="mt-7 flex flex-col gap-2.5 sm:max-w-xs sm:flex-row">
            <a href="/login"
              class="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-whatsapp px-4 py-2.5 text-sm font-medium text-gray-950 transition-all hover:bg-whatsapp-dark hover:shadow-lg hover:shadow-whatsapp/10 focus-visible:ring-2 focus-visible:ring-whatsapp/50 focus-visible:outline-none">
              <Icon name="lucide:log-in" class="h-3.5 w-3.5" />
              Coba Gratis
            </a>
            <a href="mailto:hi@9whatsapp.web.id"
              class="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.015] px-4 py-2.5 text-sm font-medium text-gray-400 transition-all hover:border-white/[0.1] hover:text-gray-300 focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none">
              <Icon name="lucide:book-open" class="h-3.5 w-3.5" />
              Dokumentasi
            </a>
          </div>

          <!-- Trust points -->
          <div class="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            <span v-for="point in trustPoints" :key="point" class="flex items-center gap-1.5 text-xs text-gray-500">
              <span class="h-1 w-1 rounded-full bg-whatsapp/50"></span>
              {{ point }}
            </span>
          </div>
        </div>

        <!-- Right: Code panel -->
        <div class="animate-fade-in opacity-0" style="animation-delay: 150ms">
          <div class="relative">
            <!-- Subtle glow -->
            <div class="absolute -inset-3 rounded-2xl bg-whatsapp/[0.015] blur-2xl" />

            <div class="relative overflow-hidden rounded-xl border border-white/[0.05] bg-[#0b110e]/90 shadow-xl shadow-black/30 backdrop-blur-sm">
              <!-- Header -->
              <div class="flex items-center justify-between border-b border-white/[0.04] px-4 py-2.5">
                <div class="flex items-center gap-1.5">
                  <span class="h-2 w-2 rounded-full bg-white/[0.06]" />
                  <span class="h-2 w-2 rounded-full bg-white/[0.06]" />
                  <span class="h-2 w-2 rounded-full bg-white/[0.06]" />
                </div>
                <span class="font-mono text-[10px] text-gray-600 sm:text-[11px]">9whatsapp.web.id</span>
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
                <div class="mb-2.5 flex items-center gap-2">
                  <span class="rounded bg-whatsapp/8 px-1.5 py-0.5 font-mono text-[10px] font-medium text-whatsapp/60">POST</span>
                  <span class="font-mono text-[11px] text-gray-500 sm:text-[12px]">/api/send</span>
                </div>
                <pre class="overflow-x-auto text-[12px] leading-[1.7] sm:text-[13px]"><code class="font-mono"><span class="text-gray-600">{</span>
  <span class="text-whatsapp/55">"to"</span><span class="text-gray-600">:</span> <span class="text-gray-400">"6281234567890"</span><span class="text-gray-600">,</span>
  <span class="text-whatsapp/55">"message"</span><span class="text-gray-600">:</span> <span class="text-gray-400">"9980 adalah kode verifikasi Anda."</span><span class="text-gray-600">,</span>
  <span class="text-whatsapp/55">"type"</span><span class="text-gray-600">:</span> <span class="text-gray-400">"text"</span>
<span class="text-gray-600">}</span></code></pre>
              </div>

              <!-- Status footer -->
              <div class="flex items-center justify-between border-t border-white/[0.04] px-4 py-2">
                <div class="flex items-center gap-2">
                  <span class="relative flex h-1.5 w-1.5">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp/30 opacity-75"></span>
                    <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-whatsapp/50"></span>
                  </span>
                  <span class="font-mono text-[10px] text-gray-600 sm:text-[11px]">delivered</span>
                </div>
                <span class="font-mono text-[10px] text-gray-700 sm:text-[11px]">120ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const trustPoints = ['Tanpa QR Scan', 'REST API', 'Harga Terjangkau', 'Nomor Disediakan'] as const
</script>
