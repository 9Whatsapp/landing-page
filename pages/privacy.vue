<template>
  <div class="px-4 pt-32 pb-24 sm:px-8">
    <div class="mx-auto max-w-3xl">
      <!-- Header -->
      <div class="text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-whatsapp">Dokumen Kebijakan</span>
        <h1 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Kebijakan Privasi
        </h1>
        <p class="mt-2 text-xs text-gray-500">Terakhir diperbarui: 27 Juni 2026</p>
      </div>

      <!-- Content -->
      <div class="mt-12 space-y-6 rounded-2xl border border-white/[0.08] bg-[#090e0c]/90 p-6 text-sm text-gray-300 leading-relaxed shadow-[0_0_50px_-12px_rgba(37,211,102,0.02)] sm:p-8">
        <div>
          <h2 class="text-base font-semibold text-white">1. Informasi yang Kami Kumpulkan</h2>
          <p class="mt-2 text-xs text-gray-400">
            Kami mengumpulkan informasi yang diperlukan untuk menyediakan layanan WhatsApp API:
          </p>
          <ul class="mt-2 list-disc pl-5 space-y-1 text-xs text-gray-400">
            <li><strong>Informasi Pendaftaran Akun:</strong> Nama, alamat email, dan informasi kontak Anda ketika mendaftar.</li>
            <li><strong>Data Transaksi:</strong> Catatan pembelian kredit, metode pembayaran, dan riwayat top-up.</li>
            <li><strong>Log Pengiriman API:</strong> Data metadata pesan termasuk nomor telepon tujuan, status pengiriman, stempel waktu (timestamps), serta isi pesan (payload JSON) guna proses troubleshooting dan analisis teknis.</li>
          </ul>
        </div>

        <div class="border-t border-white/[0.06] pt-6">
          <h2 class="text-base font-semibold text-white">2. Penggunaan Informasi</h2>
          <p class="mt-2 text-xs text-gray-400">
            Informasi yang dikumpulkan digunakan semata-mata untuk tujuan berikut:
          </p>
          <ul class="mt-2 list-disc pl-5 space-y-1 text-xs text-gray-400">
            <li>Menyediakan, memelihara, dan mengoptimalkan kinerja API pengiriman pesan WhatsApp.</li>
            <li>Memproses transaksi pembayaran kredit secara aman.</li>
            <li>Mendeteksi, mencegah, dan menindaklanjuti segala aktivitas penyalahgunaan nomor virtual atau pelanggaran atas Ketentuan Layanan kami.</li>
            <li>Kepatuhan terhadap regulasi hukum di bawah yurisdiksi Republik Indonesia.</li>
          </ul>
        </div>

        <div class="border-t border-white/[0.06] pt-6">
          <h2 class="text-base font-semibold text-white">3. Kerahasiaan Isi Pesan</h2>
          <p class="mt-2 text-xs text-gray-400">
            Konten pesan (OTP, notifikasi, invoice) yang dikirimkan melalui API kami sepenuhnya bersifat rahasia. Kami tidak membagikan, memproses, atau memperjualbelikan isi pesan Anda kepada pihak ketiga manapun untuk tujuan komersial. Data isi pesan disimpan dalam server database kami dalam bentuk log terenkripsi demi kepentingan troubleshooting sistem, dengan siklus penghapusan berkala otomatis.
          </p>
        </div>

        <div class="border-t border-white/[0.06] pt-6">
          <h2 class="text-base font-semibold text-white">4. Pengungkapan Hukum</h2>
          <p class="mt-2 text-xs text-gray-400">
            Kami berhak dan berkewajiban menyerahkan log data pengiriman serta detail pendaftaran pengguna kepada penegak hukum yang sah (Kepolisian RI, Kejaksaan, Kementerian Komunikasi dan Informatika) jika terdapat surat perintah resmi terkait dugaan aktivitas pidana, penipuan, atau pelanggaran hukum di wilayah Indonesia.
          </p>
        </div>

        <div class="border-t border-white/[0.06] pt-6">
          <h2 class="text-base font-semibold text-white">5. Keamanan Data</h2>
          <p class="mt-2 text-xs text-gray-400">
            Kami menerapkan enkripsi SSL/TLS pada komunikasi API Anda untuk melindungi transfer data. Namun, pengguna bertanggung jawab penuh atas keamanan API key yang kami berikan. Jangan membagikan API key Anda kepada pihak eksternal.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Page meta tags
useHead({
  title: 'Kebijakan Privasi - 9WhatsApp',
  meta: [
    { name: 'description', content: 'Kebijakan Privasi mengenai pengumpulan data akun, logs pesan WhatsApp API, dan kepatuhan terhadap perlindungan data pengguna di 9WhatsApp.' }
  ]
})
</script>
