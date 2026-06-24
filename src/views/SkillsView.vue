<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const frontEndSkills = ref([
      { name: 'HTML', percentage: 95 },
      { name: 'CSS (Sass, Tailwind)', percentage: 90 },
      { name: 'JavaScript / TypeScript', percentage: 85 },
      { name: 'React / React Native', percentage: 80 },
      { name: 'Angular', percentage: 60 },
      { name: 'WordPress', percentage: 70 }
    ])

    const backEndSkills = ref([
      { name: 'Node.js', percentage: 80 },
      { name: 'Express.js', percentage: 80 },
      { name: 'NestJS', percentage: 70 },
      { name: 'Java (Spring Boot)', percentage: 60 },
      { name: 'MongoDB', percentage: 80 },
      { name: 'MySQL / SQL', percentage: 75 }
    ])

    onMounted(() => {
      const bars = document.querySelectorAll('[data-skill-bar]')
      bars.forEach((bar, index) => {
        const width = bar.getAttribute('data-width')
        bar.style.width = '0%'
        setTimeout(() => {
          bar.style.width = `${width}%`
        }, 100 + index * 50)
      })
    })

    return { frontEndSkills, backEndSkills }
  }
}
</script>

<template>
  <main class="section-wrap">
    <div class="mb-12 text-center desktop:text-left" data-aos="fade-up" data-aos-duration="800">
      <p class="section-label">Expertise</p>
      <h2 class="section-title">Compétences</h2>
      <p class="section-desc mx-auto desktop:mx-0">
        Technologies que j'utilise au quotidien pour livrer des projets performants.
      </p>
    </div>

    <div class="grid gap-8 desktop:grid-cols-2 desktop:gap-12">
      <div class="card" data-aos="fade-up" data-aos-duration="800">
        <h3 class="mb-6 text-lg font-semibold text-ink dark:text-white">Front-end</h3>
        <div v-for="(skill, index) in frontEndSkills" :key="skill.name" class="mb-5 last:mb-0">
          <div class="mb-2 flex justify-between text-sm">
            <span class="font-medium text-ink dark:text-slate-200">{{ skill.name }}</span>
            <span class="text-ink-muted dark:text-slate-400">{{ skill.percentage }}%</span>
          </div>
          <div class="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
            <div
              class="skill-bar h-full rounded-full bg-blue transition-all duration-1000 ease-out"
              :data-skill-bar="true"
              :data-width="skill.percentage"
              :style="{ width: skill.percentage + '%' }"
            ></div>
          </div>
        </div>
      </div>

      <div class="card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
        <h3 class="mb-6 text-lg font-semibold text-ink dark:text-white">Back-end</h3>
        <div v-for="skill in backEndSkills" :key="skill.name" class="mb-5 last:mb-0">
          <div class="mb-2 flex justify-between text-sm">
            <span class="font-medium text-ink dark:text-slate-200">{{ skill.name }}</span>
            <span class="text-ink-muted dark:text-slate-400">{{ skill.percentage }}%</span>
          </div>
          <div class="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
            <div
              class="skill-bar h-full rounded-full bg-blue transition-all duration-1000 ease-out"
              :data-skill-bar="true"
              :data-width="skill.percentage"
              :style="{ width: skill.percentage + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
