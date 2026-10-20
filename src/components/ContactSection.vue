<script setup>
import { profile, education } from '../data/profile'

const telHref = 'tel:' + profile.phone.replace(/\s/g, '')
</script>

<template>
  <section id="contact" class="section !pt-0">
    <div class="grid gap-5 md:grid-cols-2">
      <div v-reveal class="card">
        <p class="section-kicker">Education</p>
        <h3 class="text-lg font-bold text-slate-900 dark:text-white">{{ education.degree }}</h3>
        <p class="text-sm">{{ education.school }} · {{ education.period }}</p>
        <p class="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Certifications</p>
        <div class="mt-2 flex flex-wrap gap-2"><span v-for="c in education.certifications" :key="c" class="chip">{{ c }}</span></div>
        <p class="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Languages</p>
        <div class="mt-2 flex flex-wrap gap-2"><span v-for="l in education.languages" :key="l" class="chip">{{ l }}</span></div>
      </div>

      <div v-reveal class="card !border-transparent bg-gradient-to-br from-brand-600 to-indigo-700 text-white dark:!bg-gradient-to-br">
        <p class="font-mono text-sm uppercase tracking-widest text-indigo-200">Contact</p>
        <h3 class="mt-2 text-2xl font-extrabold">Let's work together</h3>
        <p class="mt-2 text-sm text-indigo-100">Have a role or project in mind? I'd be glad to talk.</p>
        <ul class="mt-5 space-y-2 text-sm">
          <li><a :href="'mailto:' + profile.email" class="underline-offset-2 hover:underline">{{ profile.email }}</a></li>
          <li><a :href="telHref" class="underline-offset-2 hover:underline">{{ profile.phone }}</a></li>
          <li>{{ profile.location }}</li>
        </ul>
        <div class="mt-6 flex flex-wrap gap-3">
          <a :href="'mailto:' + profile.email" class="btn bg-white !text-indigo-700 hover:bg-indigo-50">Email me</a>
          <a :href="profile.whatsapp" target="_blank" rel="noopener" class="btn border border-white/40 hover:bg-white/10">WhatsApp</a>
          <a :href="profile.linkedin" target="_blank" rel="noopener" class="btn border border-white/40 hover:bg-white/10">LinkedIn</a>
        </div>
      </div>
    </div>
  </section>
</template>
