<script setup>
import { skills } from '../data/profile'
</script>

<template>
  <section id="skills" class="section !pt-0">
    <p class="section-kicker">Skills</p>
    <h2 class="section-title">Tech stack</h2>
    <div class="mt-10 grid gap-5 md:grid-cols-2">
      <div v-for="g in skills" :key="g.group" v-reveal class="card">
        <h3 class="mb-4 font-semibold text-slate-900 dark:text-white">{{ g.group }}</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="i in g.items" :key="i" class="chip">{{ i }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
