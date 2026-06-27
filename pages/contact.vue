<template>
  <div class="px-4 pt-32 pb-24 sm:px-8">
    <div class="mx-auto max-w-4xl">
      <!-- Header -->
      <div class="text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-whatsapp">Hubungi Kami</span>
        <h1 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ada Pertanyaan atau Butuh Bantuan?
        </h1>
        <p class="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-400">
          Tim support kami siap membantu kendala integrasi API, pertanyaan mengenai tagihan, kustomisasi nomor, atau kebutuhan khusus Enterprise.
        </p>
      </div>

      <div class="mt-16 grid gap-10 md:grid-cols-2">
        <!-- Support Channels (Left) -->
        <div class="space-y-6">
          <h2 class="text-base font-semibold text-white">Saluran Dukungan Resmi</h2>
          <p class="text-xs leading-relaxed text-gray-400">
            Silakan pilih metode komunikasi yang paling nyaman bagi Anda. Kami aktif memantau seluruh saluran berikut:
          </p>

          <div class="space-y-4">
            <!-- Email Support -->
            <div class="flex items-start gap-3.5 rounded-2xl border border-white/[0.08] bg-[#090e0c]/90 p-4 shadow-[0_0_50px_-12px_rgba(37,211,102,0.02)]">
              <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-whatsapp/15 bg-whatsapp/5 text-whatsapp">
                <svg class="h-4.5 w-4.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              </div>
              <div>
                <h3 class="text-xs font-semibold text-white">Email Bantuan</h3>
                <p class="mt-1 text-[11px] text-gray-400">Hubungi kami melalui alamat email resmi:</p>
                <a href="mailto:hi@9whatsapp.web.id" class="mt-1.5 inline-block text-xs font-medium text-whatsapp hover:underline">hi@9whatsapp.web.id</a>
              </div>
            </div>

            <!-- WhatsApp Support -->
            <div class="flex items-start gap-3.5 rounded-2xl border border-white/[0.08] bg-[#090e0c]/90 p-4 shadow-[0_0_50px_-12px_rgba(37,211,102,0.02)]">
              <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-whatsapp/15 bg-whatsapp/5 text-whatsapp">
                <svg class="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div>
                <h3 class="text-xs font-semibold text-white">WhatsApp Support</h3>
                <p class="mt-1 text-[11px] text-gray-400">Respon cepat chat melalui tim customer service:</p>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" class="mt-1.5 inline-block text-xs font-medium text-whatsapp hover:underline">+62 812-3456-7890</a>
              </div>
            </div>

            <!-- Jam Operasional -->
            <div class="rounded-2xl border border-white/[0.08] bg-[#090e0c]/90 p-4 shadow-[0_0_50px_-12px_rgba(37,211,102,0.02)] text-xs">
              <span class="font-semibold text-white">Jam Operasional Support:</span>
              <p class="mt-1.5 text-gray-400">Senin - Minggu: 08:00 - 22:00 WIB</p>
              <p class="mt-1 text-[10px] text-gray-500">*Dukungan untuk tiket gangguan sistem kritis tetap dipantau selama 24 jam penuh.</p>
            </div>
          </div>
        </div>

        <!-- Premium Contact Form (Right) -->
        <div class="rounded-2xl border border-white/[0.08] bg-[#090e0c]/95 p-6 shadow-[0_0_50px_-12px_rgba(37,211,102,0.02)] sm:p-8">
          <h2 class="text-base font-semibold text-white">Kirim Pesan</h2>
          <p class="mt-1 text-xs text-gray-500">Tinggalkan detail pertanyaan Anda di bawah ini:</p>

          <form @submit.prevent="handleSubmit" class="mt-6 space-y-4">
            <div>
              <label for="name" class="block text-[11px] font-bold text-gray-400 uppercase tracking-wide">Nama Lengkap</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                placeholder="Masukkan nama lengkap"
                class="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-xs text-white placeholder-gray-600 transition-colors focus:border-whatsapp/50 focus:outline-none"
              />
            </div>

            <div>
              <label for="email" class="block text-[11px] font-bold text-gray-400 uppercase tracking-wide">Alamat Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="nama@perusahaan.com"
                class="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-xs text-white placeholder-gray-600 transition-colors focus:border-whatsapp/50 focus:outline-none"
              />
            </div>

            <div>
              <label for="subject" class="block text-[11px] font-bold text-gray-400 uppercase tracking-wide">Subjek Pertanyaan</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                placeholder="Kebutuhan Enterprise / Masalah Teknis / dll."
                class="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-xs text-white placeholder-gray-600 transition-colors focus:border-whatsapp/50 focus:outline-none"
              />
            </div>

            <div>
              <label for="message" class="block text-[11px] font-bold text-gray-400 uppercase tracking-wide">Isi Pesan / Detail Masalah</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="4"
                placeholder="Jelaskan pertanyaan Anda secara mendetail..."
                class="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-xs text-white placeholder-gray-600 transition-colors focus:border-whatsapp/50 focus:outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full rounded-xl bg-whatsapp py-2.5 text-center text-xs font-bold text-gray-950 transition-all duration-300 hover:bg-whatsapp-dark hover:shadow-[0_2px_15px_rgba(37,211,102,0.25)]"
            >
              Kirim Tiket Bantuan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  alert('Terima kasih atas pesan Anda! Tiket bantuan Anda telah dikirim, tim support kami akan membalas via email secepatnya.')
  form.value = { name: '', email: '', subject: '', message: '' }
}

useHead({
  title: 'Hubungi Kami & Support - 9WhatsApp',
  meta: [
    { name: 'description', content: 'Butuh bantuan? Hubungi tim support 9WhatsApp melalui form tiket bantuan, email bantuan teknis, chat Telegram, atau WhatsApp.' }
  ]
})
</script>
