<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { useDataStore } from '@/stores/data'

const store = useDataStore()
</script>

<template>
  <main class="section-wrap">
    <div class="mb-12 text-center desktop:text-left" data-aos="fade-up" data-aos-duration="800">
      <p class="section-label">Parcours</p>
      <h2 class="section-title">Expérience & Formation</h2>
      <p class="section-desc mx-auto desktop:mx-0">
        Missions professionnelles, freelance et parcours de formation.
      </p>
    </div>

    <!-- Professional experience -->
    <section class="mb-16">
      <h3 class="mb-8 text-lg font-semibold text-ink dark:text-white">Expérience professionnelle</h3>
      <div class="relative mx-auto max-w-4xl">
        <div class="absolute left-4 top-0 h-full w-px bg-slate-200 dark:bg-slate-700 desktop:left-1/2 desktop:-ml-px"></div>

        <div
          v-for="(item, index) in store.experience"
          :key="item.id"
          class="relative mb-8 flex last:mb-0"
          :class="index % 2 === 0 ? 'desktop:justify-end desktop:pr-[calc(50%+2rem)]' : 'desktop:justify-start desktop:pl-[calc(50%+2rem)]'"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div
            class="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-blue bg-white dark:bg-surface-dark desktop:left-1/2"
          ></div>

          <div class="card ml-8 min-w-0 w-[calc(100%-2rem)] sm:ml-10 sm:w-full desktop:ml-0 desktop:max-w-md">
            <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-blue">
              {{ item.duration }}
            </p>
            <h4 class="mb-1 break-words font-semibold text-ink dark:text-white">{{ item.title }}</h4>
            <p class="mb-3 text-sm font-medium text-ink-muted dark:text-slate-300">{{ item.company }}</p>
            <div v-if="item.stack" class="mb-3 flex flex-wrap gap-2">
              <span v-for="tech in item.stack" :key="tech" class="tag">{{ tech }}</span>
            </div>
            <p class="text-sm leading-relaxed text-ink-muted dark:text-slate-400">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Education & training -->
    <section>
      <h3 class="mb-8 text-lg font-semibold text-ink dark:text-white">Formation</h3>
      <div class="relative mx-auto max-w-4xl">
        <div class="absolute left-4 top-0 h-full w-px bg-slate-200 dark:bg-slate-700 desktop:left-1/2 desktop:-ml-px"></div>

        <div
          v-for="(item, index) in store.education"
          :key="item.id"
          class="relative mb-8 flex last:mb-0"
          :class="index % 2 === 0 ? 'desktop:justify-end desktop:pr-[calc(50%+2rem)]' : 'desktop:justify-start desktop:pl-[calc(50%+2rem)]'"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div
            class="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-slate-400 bg-white dark:border-slate-500 dark:bg-surface-dark desktop:left-1/2"
          ></div>

          <div class="card ml-8 min-w-0 w-[calc(100%-2rem)] sm:ml-10 sm:w-full desktop:ml-0 desktop:max-w-md">
            <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-blue">
              {{ item.duration }}
            </p>
            <h4 class="mb-1 break-words font-semibold text-ink dark:text-white">{{ item.title }}</h4>
            <p class="mb-3 text-sm font-medium text-ink-muted dark:text-slate-300">{{ item.company }}</p>
            <div v-if="item.stack" class="mb-3 flex flex-wrap gap-2">
              <span v-for="tech in item.stack" :key="tech" class="tag">{{ tech }}</span>
            </div>
            <p class="text-sm leading-relaxed text-ink-muted dark:text-slate-400">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
