<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'

const props = defineProps(['toggleDarkMode', 'isDarkMode'])
const showNavBar = ref(false)

const toggleMenu = () => {
  showNavBar.value = !showNavBar.value
}

const menus = [
  { title: 'Accueil', link: '#home' },
  { title: 'À propos', link: '#about' },
  { title: 'Compétences', link: '#skill' },
  { title: 'Parcours', link: '#education' },
  { title: 'Projets', link: '#projects' },
  { title: 'Contact', link: '#contact' }
]
</script>

<template>
  <header
    class="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-800/70 dark:bg-surface-dark-muted/80"
  >
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-5 desktop:px-8">
      <a href="#home" class="group flex items-center gap-1">
        <span class="text-xl font-bold tracking-tight text-ink dark:text-white">
          <span class="text-blue">A</span>ochol
        </span>
      </a>

      <ul class="hidden items-center gap-1 desktop:flex">
        <li v-for="menu in menus" :key="menu.link">
          <a
            :href="menu.link"
            class="rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-slate-100 hover:text-ink dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            {{ menu.title }}
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-3">
        <button
          @click="props.toggleDarkMode"
          :aria-label="props.isDarkMode ? 'Mode clair' : 'Mode sombre'"
          class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-ink-muted transition-colors hover:bg-slate-100 hover:text-ink dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          <i :class="props.isDarkMode ? 'pi pi-sun' : 'pi pi-moon'"></i>
        </button>

        <a href="#contact" class="btn-primary hidden text-sm desktop:inline-flex">
          Me contacter
        </a>

        <button
          @click="toggleMenu"
          class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-ink dark:border-slate-700 desktop:hidden"
          :aria-label="showNavBar ? 'Fermer le menu' : 'Ouvrir le menu'"
        >
          <i :class="showNavBar ? 'pi pi-times' : 'pi pi-bars'"></i>
        </button>
      </div>
    </nav>

    <div
      v-if="showNavBar"
      class="border-t border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-surface-dark-muted desktop:hidden"
    >
      <ul class="flex flex-col gap-1">
        <li v-for="menu in menus" :key="menu.link">
          <a
            :href="menu.link"
            @click="toggleMenu"
            class="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-muted hover:bg-slate-100 hover:text-ink dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            {{ menu.title }}
          </a>
        </li>
        <li class="pt-2">
          <a href="#contact" @click="toggleMenu" class="btn-primary w-full">Me contacter</a>
        </li>
      </ul>
    </div>
  </header>
</template>
