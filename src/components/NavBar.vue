<script setup>
import { ref } from 'vue'
import { profile } from '../data/profile'

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
]
const open = ref(false)
const dark = ref(document.documentElement.classList.contains('dark'))

function toggleTheme() {
  dark.value = !dark.value
  document.documentElement.classList.toggle('dark', dark.value)
  try { localStorage.setItem('theme', dark.value ? 'dark' : 'light') } catch (e) {}
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
      <a href="#top" class="font-mono text-lg font-semibold text-slate-900 dark:text-white">
        luqman<span class="text-brand-500">.dev</span>
      </a>

      <ul class="hidden items-center gap-7 md:flex">
        <li v-for="[label, href] in links" :key="href">
          <a :href="href" class="text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-white">{{ label }}</a>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <button type="button" class="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800" :aria-label="dark ? 'Switch to light theme' : 'Switch to dark theme'" @click="toggleTheme">
          <svg v-if="dark" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
          <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
        </button>
        <a :href="profile.resume" download class="btn btn-primary hidden !py-2 sm:inline-flex">Resume</a>
        <button type="button" class="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden dark:text-slate-400 dark:hover:bg-slate-800" aria-label="Menu" :aria-expanded="open" @click="open = !open">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path :d="open ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16'"/></svg>
        </button>
      </div>
    </nav>

    <ul v-if="open" class="space-y-1 border-t border-slate-200 bg-white px-5 py-3 md:hidden dark:border-slate-800 dark:bg-slate-950">
      <li v-for="[label, href] in links" :key="href">
        <a :href="href" class="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800" @click="open = false">{{ label }}</a>
      </li>
      <li><a :href="profile.resume" download class="block rounded-lg px-3 py-2 text-sm font-semibold text-brand-600 dark:text-brand-400">Download Resume</a></li>
    </ul>
  </header>
</template>
