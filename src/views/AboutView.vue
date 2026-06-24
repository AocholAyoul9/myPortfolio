<script setup>
import { image } from '@/assets/images'
import cvPdf from '@/assets/aochol-mojowok-cv.pdf'
import { useDataStore } from '@/stores/data'
import { ref, computed } from 'vue'

const store = useDataStore()
const showFullAboutMe = ref(false)

const truncatedAboutMe = computed(() => {
  if (showFullAboutMe.value) return store.AboutDescriptionData
  return store.AboutDescriptionData.substring(0, 700) + '...'
})

const techStack = [
  { src: image.html, alt: 'HTML' },
  { src: image.javascript, alt: 'JavaScript' },
  { src: image.react, alt: 'React' },
  { src: image.node, alt: 'Node.js' },
  { src: image.sass, alt: 'Sass' },
  { src: image.redux, alt: 'Redux' },
  { src: image.git, alt: 'Git' },
  { src: image.figma, alt: 'Figma' }
]
</script>

<template>
  <main class="section-wrap" data-aos="fade-up" data-aos-duration="800">
    <div class="grid min-w-0 items-center gap-8 sm:gap-12 desktop:grid-cols-2 desktop:gap-16">
      <div class="flex min-w-0 flex-col gap-6">
        <div>
          <p class="section-label">À propos</p>
          <h2 class="section-title">À propos de moi</h2>
        </div>

        <p class="leading-relaxed text-ink-muted dark:text-slate-400">
          {{ truncatedAboutMe }}
        </p>

        <button
          @click="showFullAboutMe = !showFullAboutMe"
          class="w-fit text-sm font-semibold text-blue transition-colors hover:text-blue/80"
        >
          {{ showFullAboutMe ? 'Voir moins' : 'Voir plus' }}
        </button>

        <div class="flex flex-wrap gap-3">
          <a href="https://github.com/aocholayoul9" target="_blank" rel="noopener noreferrer" class="social-link">
            <i class="pi pi-github text-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/aochol-ayoul" target="_blank" rel="noopener noreferrer" class="social-link">
            <i class="pi pi-linkedin text-lg"></i>
          </a>
        </div>

        <a
          :href="cvPdf"
          download="Aochol-Mojowok-CV.pdf"
          class="btn-primary w-full sm:w-fit"
        >
          Télécharger mon CV
        </a>
      </div>

      <div class="card min-w-0" data-aos="fade-left" data-aos-duration="800">
        <p class="mb-4 text-sm font-semibold uppercase tracking-wider text-ink-muted dark:text-slate-400">
          Stack technique
        </p>
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <div
            v-for="tech in techStack"
            :key="tech.alt"
            class="flex flex-col items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 p-3 transition-colors hover:border-blue/20 hover:bg-blue/5 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-blue/30"
          >
            <img :src="tech.src" :alt="tech.alt" class="h-10 w-10 object-contain" />
            <span class="text-xs font-medium text-ink-muted dark:text-slate-400">{{ tech.alt }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
