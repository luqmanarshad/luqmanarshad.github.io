<script setup>
import { profile } from '../data/profile'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 py-8 dark:border-slate-800">
    <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-sm text-slate-500 sm:px-8">
      <p>© {{ year }} {{ profile.name }}. Built with Vue 3 + Tailwind CSS.</p>
      <div class="flex gap-4">
        <a :href="profile.github" target="_blank" rel="noopener" class="hover:text-brand-600 dark:hover:text-white">GitHub</a>
        <a :href="profile.linkedin" target="_blank" rel="noopener" class="hover:text-brand-600 dark:hover:text-white">LinkedIn</a>
        <a :href="profile.resume" download class="hover:text-brand-600 dark:hover:text-white">Resume</a>
      </div>
    </div>
  </footer>
</template>
