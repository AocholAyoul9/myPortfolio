<script setup></script>

<template>
  <main class="section-wrap min-h-screen flex items-center pt-16" id="home">
    <div class="grid w-full items-center gap-12 desktop:grid-cols-2 desktop:gap-16">
      <div class="flex flex-col gap-8" data-aos="fade-up" data-aos-duration="800">
        <div class="inline-flex w-fit items-center gap-2 rounded-full border border-blue/20 bg-blue/5 px-4 py-1.5 text-sm font-medium text-blue dark:border-blue/30 dark:bg-blue/10">
          <span class="h-2 w-2 rounded-full bg-green"></span>
          Disponible pour de nouveaux projets
        </div>

        <div>
          <p class="section-label mb-2">Développeur Full-Stack Freelance</p>
          <h1 class="text-3xl font-bold leading-tight tracking-tight text-ink dark:text-white desktop:text-5xl">
            Je suis Aochol Ayoul
          </h1>
          <p class="mt-4 text-lg leading-relaxed text-ink-muted dark:text-slate-400 desktop:text-xl">
            Sites vitrine, e-commerce et applications web à Lyon — vous travaillez
            directement avec moi, sans intermédiaire.
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <a href="#projects" class="btn-primary">Voir mes projets</a>
          <a href="https://shawiltech.fr/" target="_blank" rel="noopener noreferrer" class="btn-secondary">
            ShawilTech.fr
          </a>
        </div>

        <div class="flex gap-3">
          <a href="https://github.com/shawilayoul" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
            <i class="pi pi-github text-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/aochol-ayoul-mojowok-654a7121a" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
            <i class="pi pi-linkedin text-lg"></i>
          </a>
        </div>
      </div>

      <div class="flex justify-center desktop:justify-end" data-aos="fade-left" data-aos-duration="800">
        <div class="relative">
          <div class="absolute -inset-4 rounded-full bg-gradient-to-br from-blue/20 to-slate-200/50 blur-2xl dark:from-blue/10 dark:to-slate-700/30"></div>
          <div class="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2 shadow-card dark:border-slate-700 dark:bg-surface-dark">
            <img
              src="../assets/images/aocholProfile.png"
              alt="Aochol Ayoul — Développeur Full-Stack"
              class="h-72 w-72 rounded-xl object-cover desktop:h-96 desktop:w-96"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
