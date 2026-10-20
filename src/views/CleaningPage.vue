<template>
  <div class="font-sans text-slate-700 bg-white">
    <!-- SCROLL PROGRESS -->
    <div class="fixed top-0 left-0 h-1 z-[60] bg-[#A8E80F] transition-all" :style="{ width: progress + '%' }"></div>

    <!-- NAV -->
    <header
      class="fixed top-0 inset-x-0 z-50 transition-all bg-white/95 backdrop-blur shadow-md py-2"
    >
      <div class="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <a href="#home" class="flex items-center gap-3">
          <img :src="images.logo" alt="Paratus Dwellings logo" class="h-11 w-auto" @error="hideBroken" />
          
        </a>

        <nav class="hidden lg:flex items-center gap-7">
          <a
            v-for="l in links"
            :key="l.href"
            :href="l.href"
            class="text-sm font-semibold transition-colors hover:text-[#A8E80F] text-[#0A2A5C]"
          >{{ l.label }}</a>
          <a href="#contact" class="px-6 py-2.5 rounded-full bg-[#A8E80F] text-[#0A2A5C] font-bold text-sm hover:bg-[#0A2A5C] hover:text-white transition-all hover:-translate-y-0.5 shadow-lg">Request a Quote</a>
        </nav>

        <button
          class="lg:hidden w-11 h-11 rounded-full flex items-center justify-center text-lg"
          :class="scrolled ? 'text-[#0A2A5C]' : 'text-white'"
          aria-label="Toggle menu"
          @click="menuOpen = !menuOpen"
        >
          <i :class="menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </button>
      </div>

      <div v-if="menuOpen" class="lg:hidden bg-white shadow-xl mt-2 mx-4 rounded-2xl p-5 space-y-1">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="block px-4 py-3 rounded-xl font-semibold text-[#0A2A5C] hover:bg-slate-50"
          @click="menuOpen = false"
        >{{ l.label }}</a>
        <a href="#contact" class="block text-center mt-3 px-6 py-3 rounded-full bg-[#A8E80F] text-[#0A2A5C] font-bold" @click="menuOpen = false">Request a Quote</a>
      </div>
    </header>

    <!-- 1. HERO BANNER -->
    <section id="home" class="relative min-h-screen flex items-center bg-[#0A2A5C] overflow-hidden pt-28 pb-20 px-5">
      <div class="absolute inset-0 bg-gradient-to-br from-[#0A2A5C] via-[#0A2A5C]/90 to-[#0A2A5C]/70"></div>
      <div class="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#A8E80F]/10 blur-3xl"></div>
      <div class="absolute -left-24 bottom-0 w-80 h-80 rounded-full bg-[#A8E80F]/10 blur-3xl"></div>

      <div class="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center w-full">
        <div data-aos="fade-right">
          <div class="flex items-center gap-4">
            
          </div>
          <h1 class="mt-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Professional Cleaning Services <span class="text-[#A8E80F]">You Can Trust.</span>
          </h1>
          <p class="mt-6 text-lg text-slate-200 leading-relaxed max-w-xl">
            From regular home cleans to end-of-tenancy, office and post-construction cleaning, our trained team
            delivers spotless, hygienic results on time, every time, with clear pricing and flexible scheduling.
          </p>
          <div class="mt-9 flex flex-wrap gap-4">
            <a href="#contact" @click="pick('Basic & Regular Domestic Cleaning')" class="px-8 py-4 rounded-full bg-[#A8E80F] text-[#0A2A5C] font-bold hover:bg-white transition-all hover:-translate-y-1 shadow-lg">
              <i class="fa-solid fa-calendar-check mr-2"></i>Book a Cleaning
            </a>
            <a href="#contact" class="px-8 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-[#0A2A5C] transition-all hover:-translate-y-1">
              <i class="fa-solid fa-file-invoice mr-2"></i>Request a Quote
            </a>
          </div>
          <div class="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-200">
            <span v-for="b in badges" :key="b" class="flex items-center gap-2">
              <i class="fa-solid fa-circle-check text-[#A8E80F]"></i>{{ b }}
            </span>
          </div>
        </div>

        <div data-aos="fade-left" class="relative hidden lg:block">
          <div class="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#A8E80F] to-[#7bc20a] shadow-2xl flex items-center justify-center">
            <i class="fa-solid fa-spray-can-sparkles absolute text-[9rem] text-[#0A2A5C]/20"></i>
            <img :src="images.cleaning" alt="Professional cleaning" class="relative w-full h-full object-cover" @error="hideBroken" />
          </div>
          <div class="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-4">
            <span class="w-12 h-12 rounded-full bg-[#0A2A5C] text-[#A8E80F] flex items-center justify-center text-xl"><i class="fa-solid fa-broom"></i></span>
            <div>
              <p class="font-extrabold text-[#0A2A5C] leading-tight">Spotless or we return</p>
              <p class="text-xs text-slate-500">Satisfaction-focused service</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS -->
   
<section ref="statsEl" class="bg-[#A8E80F] py-12 sm:py-16 px-5">
  <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">

    <div
      v-for="(s, i) in stats"
      :key="s.label"
      class="group relative overflow-hidden bg-white rounded-2xl p-7 sm:p-8 text-center border border-white/70 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
    >
      <!-- Decorative accent -->
      <div class="absolute top-0 left-0 w-full h-1.5 bg-[#0A2A5C] group-hover:bg-[#A8E80F] transition-colors duration-300"></div>

      <!-- Number -->
      <p class="text-4xl sm:text-5xl font-extrabold text-[#0A2A5C] tracking-tight">
        {{ counts[i] }}<span class="text-[#8fcf0a]">{{ s.suffix }}</span>
      </p>

      <!-- Label -->
      <p class="mt-3 text-sm sm:text-base font-semibold text-slate-600 leading-relaxed">
        {{ s.label }}
      </p>

      <!-- Bottom accent -->
      <div class="mt-5 mx-auto w-10 h-1 rounded-full bg-[#A8E80F] group-hover:w-16 transition-all duration-300"></div>
    </div>

  </div>
</section>

    <!-- CLEANING STANDARD (existing section, kept) -->
    <section id="standard" class="py-24 px-5">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div data-aos="fade-right">
          <p :class="eyebrow">Clean Homes, Healthy Living</p>
          <h2 :class="h2">A professional cleaning standard in every home</h2>
          <p class="mt-5 text-slate-600 leading-relaxed">
            Clean, hygienic properties are part of safe living. Our cleaning approach keeps communal areas
            fresh, prepares rooms between residents, and teaches the practical housekeeping skills that
            support independent living.
          </p>
          <div class="mt-8 grid sm:grid-cols-2 gap-4">
            <div v-for="c in cleaning" :key="c.t" class="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 hover:shadow-md hover:-translate-y-1 transition-all">
              <span class="w-9 h-9 rounded-full bg-[#0A2A5C] text-[#A8E80F] flex items-center justify-center text-sm"><i :class="c.icon"></i></span>
              <span class="font-semibold text-[#0A2A5C] text-sm">{{ c.t }}</span>
            </div>
          </div>
          <a href="#contact" class="mt-9 inline-block px-8 py-4 rounded-full bg-[#0A2A5C] text-white font-bold hover:bg-[#A8E80F] hover:text-[#0A2A5C] transition-all hover:-translate-y-1 shadow-lg">Ask About Cleaning</a>
        </div>
        <div data-aos="fade-left" class="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#A8E80F] to-[#7bc20a] shadow-2xl flex items-center justify-center">
          <i class="fa-solid fa-spray-can-sparkles absolute text-[8rem] text-[#0A2A5C]/20"></i>
          <img :src="images.hero" alt="Cleaning" class="relative w-full h-full object-cover" @error="hideBroken" />
        </div>
      </div>
    </section>

    <!-- 2. OUR CLEANING SERVICES -->
    <section id="services" class="py-24 px-5 bg-slate-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <p :class="eyebrow">Our Cleaning Services</p>
          <h2 :class="h2">A clean for every space and every schedule</h2>
          <p class="mt-4 text-slate-600">Choose a service below to see exactly what is included.</p>
        </div>

        <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <button
            v-for="(s, i) in services"
            :key="s.id"
            type="button"
            data-aos="fade-up"
            :data-aos-delay="i * 60"
            class="text-left bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all border-2"
            :class="selected === s.id ? 'border-[#A8E80F]' : 'border-transparent'"
            @click="chooseService(s.id)"
          >
            <span class="w-14 h-14 rounded-2xl bg-[#0A2A5C] text-[#A8E80F] flex items-center justify-center text-2xl"><i :class="s.icon"></i></span>
            <h3 class="mt-5 text-lg font-extrabold text-[#0A2A5C]">{{ s.title }}</h3>
            <p class="mt-2 text-sm text-slate-600 leading-relaxed">{{ s.text }}</p>
            <span class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0A2A5C]">
              See what's included <i class="fa-solid fa-arrow-right text-[#8fcf0a]"></i>
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- 3. SERVICE DETAILS -->
    <section id="details" ref="detailsEl" class="py-24 px-5">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl" data-aos="fade-up">
          <p :class="eyebrow">Service Details</p>
          <h2 :class="h2">Exactly what's included in each clean</h2>
        </div>

        <div class="mt-10 flex flex-wrap gap-3" data-aos="fade-up">
          <button
            v-for="s in services"
            :key="s.id"
            type="button"
            class="px-5 py-2.5 rounded-full text-sm font-bold transition-all"
            :class="selected === s.id ? 'bg-[#0A2A5C] text-white shadow-lg' : 'bg-[#A8E80F] text-[#0A2A5C] hover:bg-[#A8E80F]'"
            @click="selected = s.id"
          >
            <i :class="s.icon" class="mr-2"></i>{{ s.short }}
          </button>
        </div>

        <div class="mt-10 grid lg:grid-cols-5 gap-10 items-start">
          <div class="lg:col-span-3 bg-slate-50 rounded-3xl p-8 lg:p-10" data-aos="fade-right">
            <div class="flex items-center gap-4">
              <span class="w-14 h-14 rounded-2xl bg-[#0A2A5C] text-[#A8E80F] flex items-center justify-center text-2xl"><i :class="current.icon"></i></span>
              <h3 class="text-2xl font-extrabold text-[#0A2A5C]">{{ current.title }}</h3>
            </div>
            <p class="mt-5 text-slate-600 leading-relaxed">{{ current.intro }}</p>
            <ul class="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              <li v-for="it in current.items" :key="it" class="flex items-start gap-3 text-sm">
                <i class="fa-solid fa-circle-check text-[#8fcf0a] mt-0.5"></i>
                <span>{{ it }}</span>
              </li>
            </ul>
          </div>

          <aside class="lg:col-span-2 space-y-5" data-aos="fade-left">
            <div class="bg-[#0A2A5C] rounded-3xl p-8 text-white">
              <p class="text-xs font-bold tracking-widest uppercase text-[#A8E80F]">Best for</p>
              <p class="mt-3 leading-relaxed text-slate-200">{{ current.bestFor }}</p>
              <p class="mt-6 text-xs font-bold tracking-widest uppercase text-[#A8E80F]">Typical frequency</p>
              <p class="mt-2 text-slate-200">{{ current.frequency }}</p>
              <a href="#contact" @click="pick(current.title)" class="mt-8 block text-center px-6 py-3.5 rounded-full bg-[#A8E80F] text-[#0A2A5C] font-bold hover:bg-white transition-all">
                Request a Quote for this
              </a>
              <a href="#contact" @click="pick(current.title)" class="mt-3 block text-center px-6 py-3.5 rounded-full border-2 border-white font-bold hover:bg-white hover:text-[#0A2A5C] transition-all">
                Book this Cleaning
              </a>
            </div>
            <p class="text-xs text-slate-500 px-2">
              Exact tasks can be tailored to your property. Tell us what matters most and we'll build the right package.
            </p>
          </aside>
        </div>
      </div>
    </section>

    <!-- 4. WHY CHOOSE US -->
    <section id="why" class="py-24 px-5 bg-[#0A2A5C]">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <p class="text-sm font-bold tracking-widest uppercase text-[#A8E80F]">Why Choose Us?</p>
          <h2 class="mt-3 text-3xl lg:text-4xl font-extrabold text-white leading-tight">Cleaning done properly, by people you can rely on</h2>
        </div>
        <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(r, i) in reasons"
            :key="r.title"
            data-aos="fade-up"
            :data-aos-delay="i * 60"
            class="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:-translate-y-2 transition-all"
          >
            <span class="w-14 h-14 rounded-2xl bg-[#A8E80F] text-[#0A2A5C] flex items-center justify-center text-2xl"><i :class="r.icon"></i></span>
            <h3 class="mt-5 text-lg font-extrabold text-white">{{ r.title }}</h3>
            <p class="mt-2 text-sm text-slate-300 leading-relaxed">{{ r.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section id="process" class="py-24 px-5">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <p :class="eyebrow">How It Works</p>
          <h2 :class="h2">Booking a clean in four simple steps</h2>
        </div>
        <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(s, i) in steps" :key="s.n" data-aos="fade-up" :data-aos-delay="i * 80" class="relative bg-slate-50 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-2 transition-all">
            <span class="text-5xl font-extrabold text-[#A8E80F]">{{ s.n }}</span>
            <h3 class="mt-3 font-extrabold text-[#0A2A5C]">{{ s.title }}</h3>
            <p class="mt-2 text-sm text-slate-600 leading-relaxed">{{ s.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. PRICING AND PACKAGES -->
    <section id="pricing" class="py-24 px-5 bg-slate-50">
      <div class="max-w-4xl mx-auto text-center" data-aos="zoom-in">
        <p :class="eyebrow">Pricing & Packages</p>
        <h2 :class="h2">Let's talk about your options</h2>
        <p class="mt-5 text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Every property and every schedule is different, so we price each clean clearly and fairly around your needs.
          Send us an email with a few details and we'll come back with a tailored quote.
        </p>
        <div class="mt-10 bg-white rounded-3xl shadow-xl p-10 border-t-4 border-[#A8E80F]">
          <span class="w-16 h-16 mx-auto rounded-full bg-[#0A2A5C] text-[#A8E80F] flex items-center justify-center text-2xl"><i class="fa-solid fa-envelope-open-text"></i></span>
          <h3 class="mt-5 text-2xl font-extrabold text-[#0A2A5C]">Send an email, let's talk about your options</h3>
          <p class="mt-3 text-slate-600">Tell us the type of clean, the property size and your preferred dates.</p>
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a :href="mailto" class="px-8 py-4 rounded-full bg-[#0A2A5C] text-white font-bold hover:bg-[#A8E80F] hover:text-[#0A2A5C] transition-all hover:-translate-y-1 shadow-lg">
              <i class="fa-solid fa-envelope mr-2"></i>{{ EMAIL }}
            </a>
            <a :href="TEL" class="px-8 py-4 rounded-full border-2 border-[#0A2A5C] text-[#0A2A5C] font-bold hover:bg-[#0A2A5C] hover:text-white transition-all hover:-translate-y-1">
              <i class="fa-solid fa-phone mr-2"></i>{{ PHONE }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="py-24 px-5">
      <div class="max-w-3xl mx-auto">
        <div class="text-center" data-aos="fade-up">
          <p :class="eyebrow">FAQs</p>
          <h2 :class="h2">Questions we're often asked</h2>
        </div>
        <div class="mt-12 space-y-4">
          <div v-for="(f, i) in faqs" :key="f.q" class="bg-slate-50 rounded-2xl overflow-hidden" data-aos="fade-up">
            <button type="button" class="w-full flex items-center justify-between gap-4 text-left px-6 py-5 font-bold text-[#0A2A5C]" @click="openFaq = openFaq === i ? -1 : i">
              {{ f.q }}
              <i class="fa-solid fa-chevron-down text-[#8fcf0a] transition-transform" :class="openFaq === i ? 'rotate-180' : ''"></i>
            </button>
            <div v-show="openFaq === i" class="px-6 pb-6 text-slate-600 leading-relaxed">{{ f.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="py-24 px-5 bg-[#0A2A5C]">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
        <div data-aos="fade-right">
          <p class="text-sm font-bold tracking-widest uppercase text-[#A8E80F]">Book or Get a Quote</p>
          <h2 class="mt-3 text-3xl lg:text-4xl font-extrabold text-white leading-tight">Ready for a cleaner, healthier space?</h2>
          <p class="mt-5 text-slate-300 leading-relaxed">Complete the form and we'll get back to you promptly with availability and a clear quote.</p>
          <div class="mt-8 space-y-4 text-white">
            <a :href="TEL" class="flex items-center gap-4 hover:text-[#A8E80F] transition-colors">
              <span class="w-12 h-12 rounded-full bg-[#A8E80F] text-[#0A2A5C] flex items-center justify-center"><i class="fa-solid fa-phone"></i></span>{{ PHONE }}
            </a>
            <a :href="mailto" class="flex items-center gap-4 hover:text-[#A8E80F] transition-colors">
              <span class="w-12 h-12 rounded-full bg-[#A8E80F] text-[#0A2A5C] flex items-center justify-center"><i class="fa-solid fa-envelope"></i></span>{{ EMAIL }}
            </a>
          </div>
        </div>

        <form class="bg-white rounded-3xl p-8 shadow-2xl space-y-4" data-aos="fade-left" @submit.prevent="submit">
          <div class="grid sm:grid-cols-2 gap-4">
            <input v-model="form.name" :class="input" type="text" placeholder="Full name" required />
            <input v-model="form.email" :class="input" type="email" placeholder="Email address" required />
            <input v-model="form.phone" :class="input" type="tel" placeholder="Phone number" />
            <input v-model="form.date" :class="input" type="date" aria-label="Preferred date" />
          </div>
          <select v-model="form.category" :class="input" required>
            <option value="" disabled>Select a service</option>
            <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
          </select>
          <div class="flex flex-wrap items-center gap-4 text-sm">
            <span class="font-semibold text-[#0A2A5C]">I'd like:</span>
            <label v-for="t in ['Booking', 'Quote']" :key="t" class="flex items-center gap-2 cursor-pointer">
              <input v-model="form.type" type="radio" :value="t" class="accent-[#A8E80F]" /> {{ t }}
            </label>
          </div>
          <textarea v-model="form.message" :class="input" rows="4" placeholder="Tell us about the property, size and any special requests"></textarea>
          <input v-model="form.website" type="text" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />
          <label class="flex items-start gap-3 text-xs text-slate-500">
            <input v-model="form.consent" type="checkbox" required class="mt-0.5 accent-[#A8E80F]" />
            I agree to be contacted about my enquiry and for my details to be used for this purpose.
          </label>
          <button type="submit" class="w-full px-8 py-4 rounded-full bg-[#0A2A5C] text-white font-bold hover:bg-[#A8E80F] hover:text-[#0A2A5C] transition-all hover:-translate-y-1 shadow-lg">
            Send Enquiry
          </button>
          <p v-if="sent" class="text-center text-sm font-semibold text-[#0A2A5C] bg-[#A8E80F]/30 rounded-xl py-3">
            <i class="fa-solid fa-circle-check mr-1"></i>Thank you! We'll be in touch shortly.
          </p>
        </form>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-[#071d40] text-slate-300 py-10 px-5">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div class="flex items-center gap-3">
          <img :src="images.logo" alt="Paratus Dwellings logo" class="h-9 w-auto" @error="hideBroken" />
          <span>&copy; {{ new Date().getFullYear() }} Paratus Dwellings Cleaning Services. All rights reserved.</span>
        </div>
        <div class="flex gap-6">
          <a href="#services" class="hover:text-[#A8E80F]">Services</a>
          <a href="#pricing" class="hover:text-[#A8E80F]">Pricing</a>
          <a href="#contact" class="hover:text-[#A8E80F]">Contact</a>
        </div>
      </div>
    </footer>

    <!-- BACK TO TOP -->
    <a
      v-show="scrolled"
      href="#home"
      class="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#A8E80F] text-[#0A2A5C] flex items-center justify-center shadow-lg hover:-translate-y-1 transition-all"
      aria-label="Back to top"
    ><i class="fa-solid fa-chevron-up"></i></a>

    <!-- COOKIES -->
    <div v-if="cookies" class="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-50 bg-white rounded-2xl shadow-2xl p-5 border border-slate-200">
      <p class="text-sm text-slate-600">We use essential cookies to make this site work and improve your experience.</p>
      <div class="mt-4 flex gap-3">
        <button class="px-5 py-2 rounded-full bg-[#0A2A5C] text-white text-sm font-bold hover:bg-[#A8E80F] hover:text-[#0A2A5C] transition-all" @click="cookies = false">Accept</button>
        <button class="px-5 py-2 rounded-full border border-slate-300 text-sm font-bold text-[#0A2A5C]" @click="cookies = false">Dismiss</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onBeforeUnmount } from 'vue'

/* ---------- ASSETS (missing images hide themselves) ---------- */
const asset = (name) => new URL(`../assets/${name}`, import.meta.url).href
const images = {
  logo: asset('paratus-dwellings-logo.png'),
  hero: asset('clean.jpg'),
  cleaning: asset('cleaning.jpg')
}
const hideBroken = (e) => (e.target.style.display = 'none')
const PHONE = '07350 154705'
const TEL = 'tel:07350154705'
const EMAIL = 'info@paratusdwellings.co.uk'
const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent('Cleaning enquiry: let\'s talk about options')}`

/* shared class strings */
const eyebrow = 'text-sm font-bold tracking-widest uppercase text-[#8fcf0a]'
const h2 = 'mt-3 text-3xl lg:text-4xl font-extrabold text-[#0A2A5C] leading-tight'
const input =
  'w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A8E80F]'

/* ---------- NAV / UI STATE ---------- */
const scrolled = ref(false)
const progress = ref(0)
const menuOpen = ref(false)
const cookies = ref(true)
const onScroll = () => {
  scrolled.value = window.scrollY > 40
  const h = document.documentElement.scrollHeight - window.innerHeight
  progress.value = h > 0 ? (window.scrollY / h) * 100 : 0
}
const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'What\'s Included', href: '#details' },
  { label: 'Why Us', href: '#why' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQs', href: '#faq' }
]

const badges = ['Trained & vetted staff', 'Reliable appointments', 'Clear, upfront pricing']

/* ---------- STATS ---------- */
const stats = [
  { value: 6, suffix: '', label: 'Specialist Cleaning Services' },
  { value: 100, suffix: '%', label: 'Customer-Focused Approach' },
  { value: 7, suffix: '', label: 'Days a Week Flexibility' },
  { value: 24, suffix: 'hr', label: 'Quote Response Aim' }
]
const counts = ref(stats.map(() => 0))
const statsEl = ref(null)
let statsObserver = null
let counted = false
const runCounters = () => {
  if (counted) return
  counted = true
  const start = performance.now()
  const tick = (now) => {
    const p = Math.min((now - start) / 1600, 1)
    const e = 1 - Math.pow(1 - p, 3)
    counts.value = stats.map((s) => Math.round(s.value * e))
    if (p < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

/* ---------- CLEANING STANDARD CHIPS ---------- */
const cleaning = [
  { icon: 'fa-solid fa-house-circle-check', t: 'Home & Communal Cleaning' },
  { icon: 'fa-solid fa-key', t: 'End-of-Tenancy Cleaning' },
  { icon: 'fa-solid fa-spray-can-sparkles', t: 'Deep Cleans & Refresh' },
  { icon: 'fa-solid fa-hand-sparkles', t: 'Resident Housekeeping Skills' }
]

/* ---------- SERVICES ---------- */
const services = [
  {
    id: 'domestic',
    icon: 'fa-solid fa-house-chimney',
    title: 'Basic & Regular Domestic Cleaning',
    short: 'Regular Cleaning',
    text: 'Weekly, fortnightly or monthly cleans that keep your home fresh, tidy and hygienic.',
    intro: 'A dependable routine clean to keep your home comfortable without the weekly chore. Ideal for busy households that want consistent, reliable results.',
    items: [
      'Dusting of surfaces, shelves and furniture',
      'Vacuuming of carpets, rugs and floors',
      'Mopping of hard floors',
      'Kitchen cleaning: worktops, hob, sink and exterior of appliances',
      'Bathroom and toilet sanitisation',
      'Mirror and glass surface wiping',
      'Bed making and tidy-up on request',
      'Emptying bins and replacing liners'
    ],
    bestFor: 'Families, professionals and anyone wanting a consistently clean home.',
    frequency: 'Weekly, fortnightly or monthly'
  },
  {
    id: 'deep',
    icon: 'fa-solid fa-soap',
    title: 'Deep Cleaning',
    short: 'Deep Cleaning',
    text: 'A top-to-bottom, detailed clean that reaches the areas routine cleaning misses.',
    intro: 'An intensive, detail-focused clean that lifts built-up grime and restores your property to a fresh, hygienic standard.',
    items: [
      'Everything in a regular clean, in greater detail',
      'Descaling of taps, showers and bathroom fittings',
      'Degreasing of hob, extractor and kitchen surfaces',
      'Inside of oven, microwave and fridge on request',
      'Skirting boards, door frames and light switches',
      'Behind and under movable furniture',
      'Window sills, tracks and interior glass',
      'Grout and tile scrubbing'
    ],
    bestFor: 'Seasonal refreshes, first-time cleans or homes that need extra attention.',
    frequency: 'One-off, seasonal or annual'
  },
  {
    id: 'tenancy',
    icon: 'fa-solid fa-key',
    title: 'End-of-Tenancy Cleaning',
    short: 'End of Tenancy',
    text: 'Thorough move-out cleaning to help tenants meet agency and landlord expectations.',
    intro: 'A detailed clean designed around check-out standards so tenants and landlords can hand back a property with confidence.',
    items: [
      'Full kitchen clean including oven, hob and extractor',
      'Fridge, freezer and cupboards cleaned inside and out',
      'Bathroom descaling and sanitisation',
      'Carpets and floors vacuumed and mopped',
      'Walls, doors and skirting boards spot-cleaned',
      'Window interiors and frames',
      'Wardrobes, drawers and storage wiped',
      'Final check against a tenancy checklist'
    ],
    bestFor: 'Tenants, landlords and letting agents preparing for check-out.',
    frequency: 'One-off at end of tenancy'
  },
  {
    id: 'move',
    icon: 'fa-solid fa-truck-ramp-box',
    title: 'Move-In & Move-Out Cleaning',
    short: 'Move In / Out',
    text: 'Start fresh in a new home or leave the old one spotless for the next occupant.',
    intro: 'Moving is stressful enough. We make sure empty properties are clean, fresh and ready to be lived in.',
    items: [
      'Cleaning of empty rooms before or after your move',
      'Inside of cupboards, drawers and wardrobes',
      'Kitchen appliances and worktops sanitised',
      'Bathrooms scrubbed and disinfected',
      'Floors vacuumed and mopped throughout',
      'Doors, handles, switches and sockets wiped',
      'Window sills and interior glass',
      'Removal of dust and debris left after packing'
    ],
    bestFor: 'Home movers, buyers, sellers and landlords between occupants.',
    frequency: 'One-off around moving day'
  },
  {
    id: 'office',
    icon: 'fa-solid fa-building',
    title: 'Office & Commercial Cleaning',
    short: 'Office & Commercial',
    text: 'Professional cleaning for offices, shops and workspaces, outside or during business hours.',
    intro: 'A clean, welcoming workplace supports productivity and makes a strong impression. We work around your hours to avoid disruption.',
    items: [
      'Desk, workstation and surface cleaning',
      'Vacuuming and mopping of floors',
      'Kitchenette and breakout area cleaning',
      'Washroom cleaning and restocking of consumables',
      'Reception and communal area upkeep',
      'Waste and recycling collection',
      'Glass doors, partitions and touch-point sanitising',
      'Flexible daily, weekly or custom schedules'
    ],
    bestFor: 'Offices, retail units, clinics, studios and small businesses.',
    frequency: 'Daily, weekly or bespoke'
  },
  {
    id: 'construction',
    icon: 'fa-solid fa-helmet-safety',
    title: 'Post-Construction Cleaning',
    short: 'Post-Construction',
    text: 'Dust, debris and residue removed after building, renovation or refurbishment work.',
    intro: 'Building work leaves fine dust and residue everywhere. We take a property from site-ready to move-in ready.',
    items: [
      'Removal of construction dust from all surfaces',
      'Cleaning of windows, frames and sills',
      'Removal of paint, plaster and adhesive splashes where safe',
      'Floors vacuumed, mopped and polished',
      'Cleaning of fixtures, fittings and light units',
      'Kitchen and bathroom detail clean',
      'Inside of cupboards, built-ins and storage',
      'Final walk-through for a handover-ready finish'
    ],
    bestFor: 'Homeowners, developers, landlords and contractors after works.',
    frequency: 'One-off after project completion'
  }
]
const selected = ref('domestic')
const current = computed(() => services.find((s) => s.id === selected.value))
const detailsEl = ref(null)
const chooseService = async (id) => {
  selected.value = id
  await nextTick()
  detailsEl.value && detailsEl.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/* ---------- WHY CHOOSE US ---------- */
const reasons = [
  { icon: 'fa-solid fa-user-check', title: 'Trained Staff', text: 'Our cleaners are trained, vetted and equipped to deliver a consistently high standard.' },
  { icon: 'fa-solid fa-clock', title: 'Reliable Appointments', text: 'We arrive when we say we will, and we keep you informed if anything changes.' },
  { icon: 'fa-solid fa-magnifying-glass', title: 'Attention to Detail', text: 'From skirting boards to switches, we clean the small things that make the big difference.' },
  { icon: 'fa-solid fa-calendar-days', title: 'Flexible Scheduling', text: 'Weekdays, evenings or weekends. We fit around your routine, not the other way round.' },
  { icon: 'fa-solid fa-heart', title: 'Customer-Focused Service', text: 'Friendly, responsive and tailored to your property and your priorities.' },
  { icon: 'fa-solid fa-tags', title: 'Clear Pricing', text: 'Straightforward quotes with no hidden extras, so you know the cost before we start.' }
]

const steps = [
  { n: '01', title: 'Tell Us What You Need', text: 'Send an enquiry or email with your property, service and preferred dates.' },
  { n: '02', title: 'Get a Clear Quote', text: 'We reply with a tailored, transparent price and available slots.' },
  { n: '03', title: 'We Clean', text: 'Our trained team arrives on time with the right equipment and products.' },
  { n: '04', title: 'Enjoy the Result', text: 'Walk into a spotless space. Not happy with something? Tell us and we\'ll put it right.' }
]

/* ---------- FAQ ---------- */
const faqs = [
  { q: 'How do I get a price?', a: 'Send us an email or complete the enquiry form with your property type, size and the service you need, and we\'ll come back with a clear quote.' },
  { q: 'Do I need to supply cleaning products and equipment?', a: 'No. Our team brings the products and equipment needed. If you prefer specific products, just let us know.' },
  { q: 'Can I book a regular clean?', a: 'Yes. We offer weekly, fortnightly and monthly domestic cleans, plus daily or weekly commercial schedules.' },
  { q: 'What does end-of-tenancy cleaning cover?', a: 'A deep clean of the whole property, including kitchen appliances, bathrooms, floors, windows and storage, designed around typical check-out expectations.' },
  { q: 'Do you clean after building work?', a: 'Yes. Our post-construction service removes dust, debris and residue so the property is ready to use.' },
  { q: 'Do you clean offices outside working hours?', a: 'Yes. We can schedule commercial cleans early, late or at weekends to avoid disrupting your business.' }
]
const openFaq = ref(0)

/* ---------- ENQUIRY FORM ---------- */
const categories = [
  'Basic & Regular Domestic Cleaning',
  'Deep Cleaning',
  'End-of-Tenancy Cleaning',
  'Move-In & Move-Out Cleaning',
  'Office & Commercial Cleaning',
  'Post-Construction Cleaning',
  'Other / Not sure yet'
]
const blank = () => ({ name: '', email: '', phone: '', date: '', category: '', type: 'Quote', message: '', consent: false, website: '' })
const form = ref(blank())
const sent = ref(false)
const pick = (cat) => {
  form.value.category = categories.includes(cat) ? cat : ''
  menuOpen.value = false
}
const submit = () => {
  if (form.value.website) return // honeypot spam trap
  // TODO: connect to your backend / secure email service
  sent.value = true
  setTimeout(() => (sent.value = false), 5000)
  form.value = blank()
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  statsObserver = new IntersectionObserver((e) => e[0].isIntersecting && runCounters(), { threshold: 0.4 })
  if (statsEl.value) statsObserver.observe(statsEl.value)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  statsObserver && statsObserver.disconnect()
})
</script>