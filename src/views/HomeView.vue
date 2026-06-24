<script setup></script>

<template>
  <main class="section-wrap flex min-h-0 items-center pt-20 sm:pt-16 desktop:min-h-screen" id="home">
    <div class="grid w-full min-w-0 items-center gap-8 sm:gap-12 desktop:grid-cols-2 desktop:gap-16">
      <div class="order-2 flex min-w-0 flex-col gap-6 sm:gap-8 desktop:order-1" data-aos="fade-up" data-aos-duration="800">
        <div class="inline-flex max-w-full items-center gap-2 rounded-full border border-blue/20 bg-blue/5 px-3 py-1.5 text-xs font-medium text-blue sm:px-4 sm:text-sm dark:border-blue/30 dark:bg-blue/10">
          <span class="h-2 w-2 shrink-0 rounded-full bg-green"></span>
          <span class="leading-snug">Disponible pour de nouveaux projets</span>
        </div>

        <div class="min-w-0">
          <p class="section-label mb-2">Développeur Full-Stack Freelance</p>
          <h1 class="text-2xl font-bold leading-tight tracking-tight text-ink dark:text-white sm:text-3xl desktop:text-5xl">
            Je suis Aochol Ayoul
          </h1>
          <p class="mt-3 text-base leading-relaxed text-ink-muted dark:text-slate-400 sm:mt-4 sm:text-lg desktop:text-xl">
            Sites vitrine, e-commerce et applications web à Lyon — vous travaillez
            directement avec moi, sans intermédiaire.
          </p>
        </div>

        <div class="flex w-full flex-col gap-3 xs:flex-row xs:flex-wrap sm:w-auto">
          <a href="#projects" class="btn-primary w-full xs:w-auto">Voir mes projets</a>
          <a href="https://shawiltech.fr/" target="_blank" rel="noopener noreferrer" class="btn-secondary w-full xs:w-auto">
            ShawilTech.fr
          </a>
        </div>

        <div class="flex gap-3">
          <a href="https://github.com/aocholayoul9" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
            <i class="pi pi-github text-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/aochol-ayoul" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
            <i class="pi pi-linkedin text-lg"></i>
          </a>
        </div>
      </div>

      <div class="order-1 flex min-w-0 justify-center desktop:order-2 desktop:justify-end" data-aos="fade-left" data-aos-duration="800">
        <div class="relative w-full max-w-[260px] sm:max-w-[320px] desktop:max-w-none">
          <div class="absolute -inset-3 rounded-full bg-gradient-to-br from-blue/20 to-slate-200/50 blur-2xl sm:-inset-4 dark:from-blue/10 dark:to-slate-700/30"></div>
          <div class="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-1.5 shadow-card sm:p-2 dark:border-slate-700 dark:bg-surface-dark">
            <img
              src="../assets/images/aocholProfile.png"
              alt="Aochol Ayoul — Développeur Full-Stack"
              class="aspect-square w-full rounded-xl object-cover desktop:h-96 desktop:w-96"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
