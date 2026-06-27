<template>
  <div class="px-4 pt-32 pb-24 sm:px-8">
    <div class="mx-auto max-w-4xl">
      <!-- Header -->
      <div class="text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-whatsapp">Tentang Kami</span>
        <h1 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Platform API WhatsApp untuk Developer & Bisnis
        </h1>
        <p class="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
          9WhatsApp hadir sebagai jembatan yang menghubungkan aplikasi Anda dengan pelanggan secara instan tanpa kompleksitas pengelolaan perangkat fisik.
        </p>
      </div>

      <!-- Core Value Cards -->
      <div class="mt-16 grid gap-6 sm:grid-cols-2">
        <div class="rounded-2xl border border-white/[0.08] bg-[#090e0c]/90 p-6 shadow-[0_0_50px_-12px_rgba(37,211,102,0.02)]">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-whatsapp/15 bg-whatsapp/5 text-whatsapp">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h2 class="mt-4 text-base font-semibold text-white">Misi Kami</h2>
          <p class="mt-2 text-xs leading-relaxed text-gray-400">
            Kami berkomitmen menyederhanakan cara bisnis mengirim notifikasi, OTP, dan struk belanja otomatis melalui WhatsApp. Kami percaya bahwa integrasi WhatsApp API harus semudah dan sepraktis mengirimkan email transaksional.
          </p>
        </div>

        <div class="rounded-2xl border border-white/[0.08] bg-[#090e0c]/90 p-6 shadow-[0_0_50px_-12px_rgba(37,211,102,0.02)]">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-whatsapp/15 bg-whatsapp/5 text-whatsapp">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h2 class="mt-4 text-base font-semibold text-white">Solusi Tanpa Nomor Sendiri</h2>
          <p class="mt-2 text-xs leading-relaxed text-gray-400">
            Dengan menyediakan infrastruktur nomor virtual siap pakai, Anda tidak perlu lagi membeli kartu SIM fisik, mendaftarkan identitas, menyewa modem server, atau mengkhawatirkan pemblokiran nomor pribadi Anda.
          </p>
        </div>
      </div>

      <!-- Why Us Section -->
      <div class="mt-16 rounded-2xl border border-white/[0.08] bg-[#090e0c]/90 p-8 shadow-[0_0_50px_-12px_rgba(37,211,102,0.02)]">
        <h3 class="text-lg font-semibold text-white">Mengapa Memilih 9WhatsApp?</h3>
        <div class="mt-6 grid gap-6 sm:grid-cols-3">
          <div>
            <h4 class="text-sm font-semibold text-white">Tanpa QR Scan</h4>
            <p class="mt-1.5 text-xs leading-relaxed text-gray-400">
              Tidak perlu menautkan perangkat atau melakukan scan QR code secara berkala. API kami selalu terhubung dan siap pakai.
            </p>
          </div>
          <div class="border-t border-white/[0.06] pt-6 sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0">
            <h4 class="text-sm font-semibold text-white">Bayar Sesuai Kebutuhan</h4>
            <p class="mt-1.5 text-xs leading-relaxed text-gray-400">
              Sistem kredit fleksibel tanpa biaya langganan bulanan wajib. Kredit Anda juga tidak akan hangus saat masa aktif habis.
            </p>
          </div>
          <div class="border-t border-white/[0.06] pt-6 sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0">
            <h4 class="text-sm font-semibold text-white">Kecepatan & Skalabilitas</h4>
            <p class="mt-1.5 text-xs leading-relaxed text-gray-400">
              Infrastruktur cloud kami menjamin pengiriman pesan super cepat (~120ms) dengan sistem load-balancing tangguh.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Page meta tags
useHead({
  title: 'Tentang Kami - 9WhatsApp',
  meta: [
    { name: 'description', content: 'Pelajari lebih lanjut tentang misi 9WhatsApp dalam menyediakan platform WhatsApp API developer-first tanpa menggunakan nomor pribadi.' }
  ]
})
</script>
