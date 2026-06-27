<template>
  <div class="px-4 pt-32 pb-24 sm:px-8">
    <div class="mx-auto max-w-3xl">
      <!-- Header -->
      <div class="text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-whatsapp">Dokumen Aturan</span>
        <h1 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Syarat & Ketentuan Layanan
        </h1>
        <p class="mt-2 text-xs text-gray-500">Terakhir diperbarui: 27 Juni 2026</p>
      </div>

      <!-- Content -->
      <div class="mt-12 space-y-6 rounded-2xl border border-white/[0.08] bg-[#090e0c]/90 p-6 text-sm text-gray-300 leading-relaxed shadow-[0_0_50px_-12px_rgba(37,211,102,0.02)] sm:p-8">
        <div>
          <h2 class="text-base font-semibold text-white">1. Deskripsi Layanan & Kepemilikan Nomor</h2>
          <p class="mt-2 text-xs text-gray-400">
            9WhatsApp menyediakan layanan pengiriman pesan WhatsApp otomatis melalui REST API. Seluruh nomor pengirim disediakan oleh sistem 9WhatsApp sebagai **nomor virtual bersama (shared pool)** atau nomor kustom terdedikasi sesuai paket. Pengguna memahami dan menyetujui bahwa tidak ada hak kepemilikan nomor telepon virtual yang dialihkan kepada pengguna.
          </p>
        </div>

        <div class="border-t border-white/[0.06] pt-6">
          <h2 class="text-base font-semibold text-red-500">2. Kebijakan Anti-Spam & Kebijakan Konten (Sangat Ketat)</h2>
          <p class="mt-2 text-xs text-gray-400">
            Demi menjaga stabilitas dan reputasi jaringan nomor virtual, pengguna dilarang keras menggunakan API kami untuk:
          </p>
          <ul class="mt-2 list-disc pl-5 space-y-2 text-xs text-gray-400">
            <li><strong>Larangan Judi & Slot Online:</strong> Dilarang keras mengirimkan promosi perjudian, link slot, tebakan skor, atau konten taruhan dalam bentuk apapun.</li>
            <li><strong>Larangan Penipuan & Phishing:</strong> Dilarang keras mengirimkan pesan penipuan berkedok hadiah, pemalsuan identitas (spoofing bank/kurir), tautan pencurian data (phishing), skema cepat kaya, atau layanan pinjaman online (pinjol) ilegal.</li>
            <li><strong>Larangan Pornografi & Prostitusi:</strong> Dilarang keras mengirimkan pesan berisi konten dewasa, pornografi, jasa prostitusi, atau promosi berbau asusila.</li>
            <li><strong>Larangan Ujaran Kebencian & SARA:</strong> Dilarang keras mengirimkan pesan bernada ancaman, fitnah, perundungan, kampanye politik ilegal, atau ujaran kebencian berbasis SARA.</li>
            <li><strong>Larangan Spamming & Blast Massal:</strong> Dilarang melakukan pemboman pesan (*spam blast*) kepada nomor-nomor penerima tanpa persetujuan dari pemilik nomor penerima (*unsolicited message*).</li>
          </ul>
        </div>

        <div class="border-t border-white/[0.06] pt-6">
          <h2 class="text-base font-semibold text-red-500">3. Deteksi Pelanggaran & Sanksi Keras (Zero Tolerance)</h2>
          <p class="mt-2 text-xs text-gray-400">
            Kami menjalankan sistem penyaringan otomatis (*automated content filter*) dan audit log berkala. Jika sistem kami mendeteksi atau menerima laporan penyalahgunaan atas pengiriman konten ilegal yang dilarang di atas:
          </p>
          <ul class="mt-2 list-disc pl-5 space-y-1.5 text-xs text-gray-400">
            <li>Akun pelanggar akan **diblokir permanen seketika** tanpa adanya pemberitahuan atau peringatan terlebih dahulu.</li>
            <li>Seluruh sisa saldo kredit yang telah dibeli akan **disita sepenuhnya dan hangus secara permanen**. Tidak ada pengembalian dana (*NON-REFUNDABLE*) untuk akun yang melanggar.</li>
            <li>Domain, API Key, alamat email pendaftar, dan alamat IP Anda akan masuk dalam daftar blokir permanen (*blacklist*).</li>
          </ul>
        </div>

        <div class="border-t border-white/[0.06] pt-6">
          <h2 class="text-base font-semibold text-white">4. Limitasi Tanggung Jawab atas Pemblokiran Nomor oleh WhatsApp</h2>
          <p class="mt-2 text-xs text-gray-400">
            Karena nomor yang digunakan disediakan secara bersama-sama dalam sistem pool, nomor tersebut berisiko diblokir oleh sistem keamanan WhatsApp Inc. akibat laporan spam dari penerima. Pengguna membebaskan 9WhatsApp dari segala tuntutan ganti rugi atas kehilangan/pemblokiran nomor pengirim, ketidaksampaian pesan akibat nomor terblokir, atau kerugian operasional bisnis pengguna yang disebabkan oleh tindakan kepatuhan WhatsApp Inc.
          </p>
        </div>

        <div class="border-t border-white/[0.06] pt-6">
          <h2 class="text-base font-semibold text-white">5. Kerjasama Penegakan Hukum Pidana (UU ITE)</h2>
          <p class="mt-2 text-xs text-gray-400">
            9WhatsApp tunduk sepenuhnya pada hukum Undang-Undang Informasi dan Transaksi Elektronik (UU ITE) Republik Indonesia. Jika kami menerima permintaan dari Kepolisian RI atau Kemenkominfo terkait penyidikan aktivitas penipuan, judi slot, atau tindakan pidana lain yang dikirim via API kami, kami akan **bekerjasama penuh dengan menyerahkan log pengiriman lengkap, detail identitas pendaftar, serta logs IP address** pelaku kepada pihak berwajib.
          </p>
        </div>

        <div class="border-t border-white/[0.06] pt-6">
          <h2 class="text-base font-semibold text-white">6. Kebijakan Pembelian & Refund</h2>
          <p class="mt-2 text-xs text-gray-400">
            Semua pembelian kredit bersifat final. Kredit yang dibeli tidak dapat ditukarkan kembali menjadi uang tunai, ditransfer ke akun lain, atau di-refund dengan alasan apapun, kecuali terdapat kendala sistem internal total yang dibuktikan melalui investigasi teknis tim kami.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Page meta tags
useHead({
  title: 'Syarat & Ketentuan Layanan - 9WhatsApp',
  meta: [
    { name: 'description', content: 'Syarat & Ketentuan ketat penggunaan WhatsApp API tanpa nomor sendiri. Larangan judi online, penipuan, pornografi, sanksi blokir akun permanen, dan non-refund.' }
  ]
})
</script>
