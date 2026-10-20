<script setup>
import { experience } from '../data/profile'
</script>

<template>
  <section id="experience" class="section !pt-0">
    <p class="section-kicker">Experience</p>
    <h2 class="section-title">Where I've worked</h2>
    <ol class="mt-10 space-y-6 border-l-2 border-slate-200 pl-6 dark:border-slate-800">
      <li v-for="job in experience" :key="job.company + job.period" v-reveal class="relative">
        <span class="absolute -left-[33px] top-6 h-3 w-3 rounded-full border-2 border-brand-500 bg-slate-50 dark:bg-slate-950"></span>
        <div class="card">
          <div class="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white">{{ job.role }}</h3>
            <span class="font-mono text-xs text-slate-500 dark:text-slate-400">{{ job.period }}</span>
          </div>
          <p class="mt-1 text-sm font-semibold text-brand-600 dark:text-brand-400">{{ job.company }}</p>
          <p class="text-sm text-slate-500 dark:text-slate-400">{{ job.project }}</p>
          <ul class="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
            <li v-for="p in job.points" :key="p">{{ p }}</li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>
