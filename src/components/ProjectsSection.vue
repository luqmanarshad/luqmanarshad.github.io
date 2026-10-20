<script setup>
import { projects } from '../data/profile'
</script>

<template>
  <section id="projects" class="section !pt-0">
    <p class="section-kicker">Projects</p>
    <h2 class="section-title">Selected work</h2>
    <div class="mt-10 grid gap-5 md:grid-cols-2">
      <article v-for="p in projects" :key="p.name" v-reveal class="card flex flex-col" :class="p.featured && 'md:col-span-2 ring-1 ring-brand-500/40'">
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="font-mono text-xs text-slate-500 dark:text-slate-400">{{ p.type }}</p>
            <h3 class="mt-1 text-xl font-bold text-slate-900 dark:text-white">{{ p.name }}</h3>
          </div>
          <span v-if="p.featured" class="rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold text-brand-600 dark:text-brand-400">Featured</span>
        </div>
        <p class="mt-3 flex-1 text-sm leading-relaxed">{{ p.description }}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span v-for="t in p.tags" :key="t" class="chip">{{ t }}</span>
        </div>
        <div class="mt-5 flex gap-4 text-sm font-semibold">
          <a v-if="p.live" :href="p.live" target="_blank" rel="noopener" class="text-brand-600 hover:underline dark:text-brand-400">Live demo ↗</a>
          <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener" class="text-brand-600 hover:underline dark:text-brand-400">Source on GitHub ↗</a>
        </div>
      </article>
    </div>
  </section>
</template>
