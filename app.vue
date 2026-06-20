<template>
  <div class="relative min-h-screen bg-gray-950">
    <div class="network-bg pointer-events-none fixed inset-0"></div>

    <div class="relative z-10">
      <Navbar />
      <main>
        <HeroSection />
        <div class="border-t border-white/[0.04]"></div>
        <TrustPoints />
        <AboutSection />
        <HowItWorks />
        <PricingSection />
        <StatsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
