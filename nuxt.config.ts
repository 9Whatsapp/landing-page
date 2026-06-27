// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/scroll-reveal.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  modules: ['@vercel/analytics', '@vercel/speed-insights'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'id',
      },
      title: '9WhatsApp - Kirim WhatsApp Tanpa Nomor',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'API WhatsApp tanpa nomor sendiri dan tanpa QR scan. Kirim OTP, notifikasi, invoice, dan pesan massal otomatis. Daftar gratis dapat credit uji coba. Cocok untuk developer, SaaS, dan bisnis Indonesia.' },
        { name: 'keywords', content: 'WhatsApp API, kirim WhatsApp tanpa nomor, WhatsApp API tanpa QR, WhatsApp OTP API, kirim pesan WhatsApp otomatis, virtual number WhatsApp, WhatsApp notification API, API WhatsApp Indonesia, 9WhatsApp' },
        { name: 'author', content: '9WhatsApp' },
        { name: 'theme-color', content: '#25D366' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://9whatsapp.web.id/' },
        { property: 'og:title', content: '9WhatsApp - Kirim WhatsApp Tanpa QR Scan' },
        { property: 'og:description', content: 'API WhatsApp tanpa nomor sendiri. Kirim OTP, notifikasi, dan pesan massal otomatis. Daftar gratis dapat credit uji coba.' },
        { property: 'og:image', content: 'https://9whatsapp.web.id/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:site_name', content: '9WhatsApp' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://9whatsapp.web.id/' },
        { name: 'twitter:title', content: '9WhatsApp - Kirim WhatsApp Tanpa QR Scan' },
        { name: 'twitter:description', content: 'API WhatsApp tanpa nomor sendiri. Kirim OTP, notifikasi, dan pesan massal otomatis. Daftar gratis dapat credit uji coba.' },
        { name: 'twitter:image', content: 'https://9whatsapp.web.id/twitter-image.png' },
      ],
      link: [
        { rel: 'canonical', href: 'https://9whatsapp.web.id/' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap' },
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '9WhatsApp',
              url: 'https://9whatsapp.web.id',
              logo: 'https://9whatsapp.web.id/logo.png',
              description: 'Platform API WhatsApp untuk mengirim pesan tanpa nomor sendiri.',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: '9WhatsApp',
              url: 'https://9whatsapp.web.id',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://9whatsapp.web.id/?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Apakah saya harus punya nomor WhatsApp sendiri?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Tidak. 9WhatsApp menyediakan nomor WhatsApp siap pakai untuk mengirim pesan.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Apakah perlu scan QR?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Tidak. Anda cukup topup credit dan menggunakan API yang tersedia.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Apa itu credit?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Credit adalah saldo pengiriman. 1 Credit = 1 Pesan WhatsApp.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Apakah credit hangus saat masa aktif berakhir?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Tidak. Credit tetap tersimpan. Namun akun yang masa aktifnya berakhir tidak dapat mengirim pesan sampai melakukan topup kembali.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Apakah bisa memilih nomor pengirim?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Bisa, tersedia pada paket tertentu untuk kebutuhan branding dan komunikasi yang konsisten.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Apakah tersedia API?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ya. 9WhatsApp menyediakan REST API untuk integrasi dengan aplikasi, CRM, ERP, atau sistem internal Anda.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Apakah cocok untuk OTP dan notifikasi?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ya. 9WhatsApp cocok untuk OTP, notifikasi, reminder, invoice, dan pesan bisnis lainnya.'
                  }
                }
              ]
            }
          ])
        },
      ],
    },
  },
})
