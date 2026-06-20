<template>
  <section class="relative flex min-h-screen items-center px-4 pt-20 pb-12 sm:px-8 sm:pb-16">
    <!-- Subtle radial focus behind hero content -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute left-1/2 top-1/4 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-whatsapp/[0.015] blur-[100px]" />
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
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
              class="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-whatsapp px-4 py-2.5 text-sm font-medium text-gray-950 transition-all hover:bg-whatsapp-dark hover:shadow-lg hover:shadow-whatsapp/10 focus-visible:ring-2 focus-visible:ring-whatsapp/50 focus-visible:outline-none">
              <svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hubungi Kami
            </a>
            <a href="mailto:hi@9whatsapp.web.id"
              class="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.015] px-4 py-2.5 text-sm font-medium text-gray-400 transition-all hover:border-white/[0.1] hover:text-gray-300 focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none">
              <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email
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
