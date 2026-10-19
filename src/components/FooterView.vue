
<template>
  <footer
    class="bg-white text-slate-600 border-t-4 border-[#A8E80F]
           shadow-[0_-8px_30px_rgba(10,42,92,.08)]
           pt-16 pb-8 px-5"
  >
    <div class="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
      <!-- Company information -->
      <div class="md:col-span-2">
        <RouterLink to="/">
          <img
            :src="images.logo"
            alt="Paratus Dwellings"
            class="h-14 w-auto"
            @error="hideBroken"
          />
        </RouterLink>

        <p class="mt-4 text-sm max-w-sm">
          A place to call home. Skills to build your future.
          Opportunities to grow and thrive.
        </p>

        <p class="mt-3 text-xs max-w-sm text-slate-500">
          Supported accommodation for adults aged 18+.
          We do not provide personal care, nursing or clinical treatment.
        </p>
      </div>

    </div>

    <!-- Copyright -->
    <div
      class="max-w-7xl mx-auto mt-12 pt-6 border-t
             border-slate-200 text-center text-xs text-slate-500"
    >
      &copy; {{ currentYear }} Paratus Dwellings Ltd.
      All rights reserved.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const asset = (name: string) =>
  new URL(`../assets/${name}`, import.meta.url).href

const images = {
  logo: asset('paratus-dwellings-logo.png')
}

const currentYear = new Date().getFullYear()

const hideBroken = (event: Event) => {
  (event.target as HTMLImageElement).style.display = 'none'
}

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Support', to: '/support' },
  { label: 'Safeguarding', to: '/safeguarding' },
  { label: 'Referrals', to: '/contact' },
  { label: 'Cleaning', to: '/cleaning' },
  { label: 'Skills', to: '/skills' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'FAQs', to: '/faq' }
]
</script>

<style scoped>
.footer-link {
  @apply hover:text-[#0A2A5C] hover:underline
         decoration-[#A8E80F] decoration-2
         underline-offset-4 transition;
}
</style>
