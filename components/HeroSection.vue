<template>
  <section class="relative flex min-h-[55vh] items-center justify-center px-4 py-16 sm:px-8 sm:py-28 lg:py-32">
    <div class="mx-auto w-full max-w-3xl text-center">
      <h1
        class="animate-fade-in text-[2rem] font-semibold leading-[1.1] tracking-tight text-white opacity-0 sm:text-5xl lg:text-[3.5rem]"
        style="animation-delay: 0ms"
      >
        Kirim WhatsApp<br />
        <span class="text-gray-400">Tanpa Nomor</span>
      </h1>

      <p
        class="animate-fade-in mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-gray-500 opacity-0 sm:text-base"
        style="animation-delay: 100ms"
      >
        Topup credit, integrasikan API, dan mulai kirim WhatsApp dalam hitungan menit.
      </p>

      <div
        class="animate-fade-in mt-8 flex flex-col items-stretch gap-3 opacity-0 sm:items-center sm:flex-row sm:justify-center"
        style="animation-delay: 200ms"
      >
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-sm font-medium text-gray-950 transition-all hover:bg-whatsapp-dark hover:shadow-lg hover:shadow-whatsapp/10 focus-visible:ring-2 focus-visible:ring-whatsapp/50 focus-visible:outline-none sm:w-auto"
        >
          <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Hubungi Kami
        </a>
        <a
          href="mailto:hi@9whatsapp.web.id"
          class="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-5 py-3 text-sm font-medium text-gray-400 transition-all hover:border-white/[0.12] hover:text-gray-300 focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none sm:w-auto"
        >
          <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
          </svg>
          Email
        </a>
      </div>

      <div
        class="animate-fade-in mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs opacity-0"
        style="animation-delay: 300ms"
      >
        <span class="flex items-center gap-1.5 text-gray-400">
          <svg class="h-3 w-3 text-whatsapp/60" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Tanpa QR Scan
        </span>
        <span class="hidden h-3 w-px bg-gray-700 sm:inline-block" aria-hidden="true"></span>
        <span class="flex items-center gap-1.5 text-gray-400">
          <svg class="h-3 w-3 text-whatsapp/60" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          REST API
        </span>
        <span class="hidden h-3 w-px bg-gray-700 sm:inline-block" aria-hidden="true"></span>
        <span class="flex items-center gap-1.5 text-gray-400">
          <svg class="h-3 w-3 text-whatsapp/60" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Topup Credit
        </span>
        <span class="hidden h-3 w-px bg-gray-700 sm:inline-block" aria-hidden="true"></span>
        <span class="flex items-center gap-1.5 text-gray-400">
          <svg class="h-3 w-3 text-whatsapp/60" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Nomor Disediakan
        </span>
      </div>

      <!-- Code Snippet with response -->
      <div
        class="animate-fade-in mx-auto mt-10 w-full max-w-lg overflow-hidden rounded-lg border border-white/[0.04] bg-white/[0.015] text-left opacity-0"
        style="animation-delay: 500ms"
      >
        <div class="flex items-center justify-between border-b border-white/[0.04] px-3 py-2.5 sm:px-4">
          <span class="font-mono text-[10px] font-medium text-gray-500 sm:text-[11px]">POST /api/send</span>
          <span class="rounded bg-whatsapp/10 px-1.5 py-0.5 font-mono text-[10px] font-medium text-whatsapp/80">200</span>
        </div>
        <pre class="overflow-x-auto px-3 py-3 text-[12px] leading-[1.7] sm:px-4 sm:text-[13px]"><code class="font-mono"><span class="text-gray-500">{</span>
  <span class="text-whatsapp/70">"to"</span><span class="text-gray-500">:</span> <span class="text-gray-400">"6281234567890"</span><span class="text-gray-500">,</span>
  <span class="text-whatsapp/70">"message"</span><span class="text-gray-500">:</span> <span class="text-gray-400">"9980 adalah kode verifikasi Anda."</span><span class="text-gray-500">,</span>
  <span class="text-whatsapp/70">"type"</span><span class="text-gray-500">:</span> <span class="text-gray-400">"text"</span>
<span class="text-gray-500">}</span></code></pre>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

