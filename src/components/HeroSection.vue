<script setup>
import { profile } from '../data/profile'
</script>

<template>
  <section id="top" class="relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div class="absolute -top-32 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"></div>
    </div>
    <div class="mx-auto max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
      <p v-reveal class="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
        <span class="h-2 w-2 rounded-full bg-emerald-500"></span> Open to new opportunities
      </p>
      <h1 v-reveal class="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
        Hi, I'm {{ profile.name }}.<br />
        <span class="bg-gradient-to-r from-brand-500 to-cyan-400 bg-clip-text text-transparent">{{ profile.title }}</span>
      </h1>
      <p v-reveal class="mt-3 font-mono text-sm text-slate-500 dark:text-slate-400">{{ profile.stack }}</p>
      <p v-reveal class="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">{{ profile.tagline }}</p>

      <div v-reveal class="mt-9 flex flex-wrap gap-3">
        <a :href="profile.resume" download class="btn btn-primary">Download Resume</a>
        <a :href="profile.coverLetter" download class="btn btn-ghost">Download Cover Letter</a>
        <a href="#contact" class="btn btn-ghost">Contact me</a>
      </div>

      <div v-reveal class="mt-10 flex items-center gap-5 text-sm text-slate-500 dark:text-slate-400">
        <a :href="profile.github" target="_blank" rel="noopener" class="hover:text-brand-600 dark:hover:text-white">GitHub</a>
        <a :href="profile.linkedin" target="_blank" rel="noopener" class="hover:text-brand-600 dark:hover:text-white">LinkedIn</a>
        <span>{{ profile.location }}</span>
      </div>
    </div>
  </section>
</template>
