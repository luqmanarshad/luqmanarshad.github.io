<script setup>
import { profile } from '../data/profile'
</script>

<template>
  <section id="about" class="section">
    <p class="section-kicker">About</p>
    <h2 class="section-title">Building reliable software for real organizations</h2>
    <div class="mt-10 grid gap-10 lg:grid-cols-5">
      <div class="space-y-4 text-base leading-relaxed lg:col-span-3">
        <p v-for="p in profile.about" :key="p" v-reveal>{{ p }}</p>
      </div>
      <div class="grid grid-cols-2 gap-4 lg:col-span-2">
        <div v-for="s in profile.stats" :key="s.label" v-reveal class="card text-center">
          <div class="text-3xl font-extrabold text-brand-600 dark:text-brand-400">{{ s.value }}</div>
          <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">{{ s.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
