<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup></script>

<template>
  <footer class="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-surface-dark-muted">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 desktop:flex-row desktop:px-8">
      <p class="text-sm text-ink-muted dark:text-slate-400">
        &copy; {{ new Date().getFullYear() }} Aochol Ayoul — Développeur Full-Stack Freelance
      </p>
      <div class="flex gap-4">
        <a
          href="https://github.com/aocholayoul9"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-ink-muted transition-colors hover:text-blue dark:text-slate-400"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aochol-ayoul"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-ink-muted transition-colors hover:text-blue dark:text-slate-400"
        >
          LinkedIn
        </a>
        <a
          href="https://shawiltech.fr/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-ink-muted transition-colors hover:text-blue dark:text-slate-400"
        >
          ShawilTech
        </a>
      </div>
    </div>
  </footer>
</template>
