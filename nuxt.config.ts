// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'id',
      },
      title: '9WhatsApp - Kirim WhatsApp Tanpa Nomor',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Kirim WhatsApp tanpa nomor sendiri dan tanpa QR Scan. Topup credit, gunakan API, dan mulai kirim dalam hitungan menit.' },
        { name: 'keywords', content: 'WhatsApp API, kirim WhatsApp, nomor virtual, WhatsApp OTP, WhatsApp reminder, WhatsApp invoice, API WhatsApp Indonesia, 9WhatsApp' },
        { name: 'author', content: '9WhatsApp' },
        { name: 'theme-color', content: '#25D366' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://9whatsapp.web.id/' },
        { property: 'og:title', content: '9WhatsApp - Kirim WhatsApp Tanpa Nomor' },
        { property: 'og:description', content: 'Kirim WhatsApp tanpa nomor sendiri dan tanpa QR Scan. Topup credit, gunakan API, dan mulai kirim dalam hitungan menit.' },
        { property: 'og:image', content: 'https://9whatsapp.web.id/og-image.png' },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:site_name', content: '9WhatsApp' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://9whatsapp.web.id/' },
        { name: 'twitter:title', content: '9WhatsApp - Kirim WhatsApp Tanpa Nomor' },
        { name: 'twitter:description', content: 'Kirim WhatsApp tanpa nomor sendiri dan tanpa QR Scan. Topup credit, gunakan API, dan mulai kirim dalam hitungan menit.' },
        { name: 'twitter:image', content: 'https://9whatsapp.web.id/og-image.png' },
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
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: '9WhatsApp',
            url: 'https://9whatsapp.web.id',
            logo: 'https://9whatsapp.web.id/logo.png',
            description: 'Platform API WhatsApp untuk mengirim pesan tanpa nomor sendiri.',
          }),
        },
      ],
    },
  },
})
