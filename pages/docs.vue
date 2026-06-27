<template>
  <div class="px-4 pt-32 pb-24 sm:px-8">
    <div class="mx-auto max-w-4xl">
      <!-- Header -->
      <div class="text-left border-b border-white/[0.04] pb-8">
        <span class="text-xs font-bold uppercase tracking-wider text-whatsapp">Dokumentasi API</span>
        <h1 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Quick Start Integrasi
        </h1>
        <p class="mt-2 text-sm text-gray-400">
          Panduan cepat integrasi REST API 9WhatsApp dalam hitungan menit. Cukup panggil satu endpoint menggunakan HTTP POST request.
        </p>
      </div>

      <!-- Quick Start Steps -->
      <div class="mt-10 grid gap-10 lg:grid-cols-12">
        <!-- Documentation Content (Left: 7 columns) -->
        <div class="lg:col-span-7 space-y-8">
          <div>
            <h2 class="text-base font-semibold text-white">1. Autentikasi API</h2>
            <p class="mt-2 text-xs leading-relaxed text-gray-400">
              Setiap request API ke platform kami harus menyertakan header otentikasi menggunakan API Key yang bisa Anda peroleh secara gratis dari halaman dashboard setelah mendaftar.
            </p>
            <div class="mt-3 rounded-xl border border-white/[0.08] bg-[#090e0c]/90 p-4 font-mono text-[11px] text-gray-300">
              <span class="text-whatsapp">Authorization:</span> Bearer &lt;API_KEY_ANDA&gt;
            </div>
          </div>

          <div class="border-t border-white/[0.04] pt-8">
            <h2 class="text-base font-semibold text-white">2. Endpoint Pengiriman</h2>
            <p class="mt-2 text-xs leading-relaxed text-gray-400">
              Pesan dikirimkan dengan melakukan HTTP POST request ke endpoint berikut menggunakan format JSON body.
            </p>
            <div class="mt-3 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#090e0c]/90 p-4 font-mono text-[11px]">
              <span class="rounded bg-whatsapp/10 px-2 py-0.5 text-[10px] font-bold text-whatsapp uppercase">POST</span>
              <span class="text-gray-300 select-all">https://api.9whatsapp.web.id/v1/message/send</span>
            </div>
          </div>

          <div class="border-t border-white/[0.04] pt-8">
            <h2 class="text-base font-semibold text-white">3. Struktur Payload JSON</h2>
            <p class="mt-2 text-xs leading-relaxed text-gray-400">
              Kirimkan JSON body dengan parameter penerima (`recipient`) dalam format kode negara tanpa simbol plus (contoh: 628123456789) dan isi pesan (`message`) sebagai teks.
            </p>
            <div class="mt-3 rounded-xl border border-white/[0.08] bg-[#090e0c]/90 p-4 font-mono text-[11px] text-gray-300">
<pre class="overflow-x-auto"><code>{
  "recipient": "6281234567890",
  "message": "Kode OTP verifikasi Anda adalah: 8492"
}</code></pre>
            </div>
          </div>

          <div class="border-t border-white/[0.04] pt-8">
            <h2 class="text-base font-semibold text-white">4. Format Respons API</h2>
            <p class="mt-2 text-xs leading-relaxed text-gray-400">
              API kami akan memberikan respons berupa kode status HTTP standar beserta body JSON yang menjelaskan hasil pengiriman.
            </p>
            <div class="mt-3 space-y-4">
              <div>
                <span class="text-[10px] font-bold text-whatsapp uppercase tracking-wider">Success Response (200 OK)</span>
                <div class="mt-1.5 rounded-xl border border-white/[0.08] bg-[#090e0c]/90 p-4 font-mono text-[11px] text-gray-300">
<pre class="overflow-x-auto"><code>{
  "status": "success",
  "message": "Pesan berhasil diantrekan",
  "message_id": "msg_9wa_84f93jd93jf"
}</code></pre>
                </div>
              </div>
              <div>
                <span class="text-[10px] font-bold text-red-500 uppercase tracking-wider">Error Response (401 Unauthorized)</span>
                <div class="mt-1.5 rounded-xl border border-white/[0.08] bg-[#090e0c]/90 p-4 font-mono text-[11px] text-gray-300">
<pre class="overflow-x-auto"><code>{
  "status": "error",
  "message": "API Key tidak valid atau telah kedaluwarsa"
}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Code Snippet Box (Right: 5 columns) -->
        <div class="lg:col-span-5">
          <div class="sticky top-24 rounded-2xl border border-white/[0.08] bg-[#090e0c]/95 overflow-hidden shadow-[0_0_50px_-12px_rgba(37,211,102,0.02)]">
            <!-- Tabs Header -->
            <div class="flex border-b border-white/[0.08] bg-white/[0.02] px-3 pt-2">
              <button
                v-for="tab in codeTabs"
                :key="tab.id"
                @click="activeTab = tab.id"
                class="rounded-t-lg px-3 py-2 text-xs font-semibold transition-all focus:outline-none"
                :class="activeTab === tab.id
                  ? 'border-b-2 border-whatsapp bg-[#090e0c]/95 text-white'
                  : 'text-gray-500 hover:text-gray-300'"
              >
                {{ tab.name }}
              </button>
            </div>

            <!-- Code Content -->
            <div class="p-5 font-mono text-[10.5px] leading-relaxed text-gray-300 overflow-x-auto">
              <pre v-if="activeTab === 'curl'"><code>curl -X POST https://api.9whatsapp.web.id/v1/send \
  -H "Authorization: Bearer &lt;API_KEY&gt;" \
  -H "Content-Type: application/json" \
  -d '{
    "recipient": "6281234567890",
    "message": "Kode OTP Anda: 8492"
  }'</code></pre>

              <pre v-else-if="activeTab === 'js'"><code>const payload = {
  recipient: "6281234567890",
  message: "Kode OTP Anda: 8492"
};

fetch("https://api.9whatsapp.web.id/v1/send", {
  method: "POST",
  headers: {
    "Authorization": "Bearer &lt;API_KEY&gt;",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));</code></pre>

              <pre v-else-if="activeTab === 'php'"><code>&lt;?php
$payload = [
    'recipient' => '6281234567890',
    'message' => 'Kode OTP Anda: 8492'
];

$ch = curl_init('https://api.9whatsapp.web.id/v1/send');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer &lt;API_KEY&gt;',
    'Content-Type: application/json'
]);

$response = curl_exec($ch);
curl_close($ch);
echo $response;
?&gt;</code></pre>

              <pre v-else-if="activeTab === 'python'"><code>import requests

url = "https://api.9whatsapp.web.id/v1/send"
headers = {
    "Authorization": "Bearer &lt;API_KEY&gt;",
    "Content-Type": "application/json"
}
payload = {
    "recipient": "6281234567890",
    "message": "Kode OTP Anda: 8492"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('curl')

const codeTabs = [
  { id: 'curl', name: 'cURL' },
  { id: 'js', name: 'JavaScript' },
  { id: 'php', name: 'PHP' },
  { id: 'python', name: 'Python' }
]

useHead({
  title: 'Dokumentasi API Quick Start - 9WhatsApp',
  meta: [
    { name: 'description', content: 'Contoh kode integrasi pengiriman pesan WhatsApp API 9WhatsApp menggunakan cURL, JavaScript, PHP, dan Python.' }
  ]
})
</script>
