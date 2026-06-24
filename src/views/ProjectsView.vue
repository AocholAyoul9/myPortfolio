<script setup></script>

<template>
  <main class="section-wrap">
    <div class="mb-12 text-center" data-aos="fade-up" data-aos-duration="800">
      <p class="section-label">Portfolio</p>
      <h2 class="section-title">Mes projets</h2>
      <p class="section-desc mx-auto">
        Une sélection de réalisations web, mobile et e-commerce.
      </p>
    </div>

    <div class="grid gap-8 mobile:grid-cols-1 desktop:grid-cols-2 tablate:grid-cols-2">
      <!-- Project 1 -->
      <article class="card flex flex-col gap-4" data-aos="fade-up" data-aos-duration="800">
        <div class="project-links">
          <a href="https://github.com/shawilayoul/sleekStyles" target="_blank" rel="noopener noreferrer">Code</a>
          <a href="https://sleekstyle.onrender.com" target="_blank" rel="noopener noreferrer">Live demo</a>
        </div>
        <div class="laptop">
          <div class="laptop__screen">
            <video width="100%" height="100%" controls>
              <source src="../assets/videos/projects2.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="laptop__bottom"><div class="laptop__under"></div></div>
          <div class="laptop__shadow"></div>
        </div>
        <div class="project-tags">
          <span class="tag">React</span>
          <span class="tag">Express</span>
          <span class="tag">MongoDB</span>
          <span class="tag">Tailwind</span>
        </div>
      </article>

      <!-- Project 2 -->
      <article class="card flex flex-col gap-4" data-aos="fade-up" data-aos-duration="800">
        <div class="project-links">
          <a href="https://github.com/shawilayoul/silvercake" target="_blank" rel="noopener noreferrer">Code</a>
          <a href="https://sleekstyle.onrender.com/" target="_blank" rel="noopener noreferrer">Dashboard</a>
        </div>
        <div class="laptop">
          <div class="laptop__screen">
            <video width="100%" height="100%" controls>
              <source src="../assets/videos/projects1.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="laptop__bottom"><div class="laptop__under"></div></div>
          <div class="laptop__shadow"></div>
        </div>
        <div class="project-tags">
          <span class="tag">React</span>
          <span class="tag">Express</span>
          <span class="tag">MongoDB</span>
          <span class="tag">Tailwind</span>
        </div>
      </article>

      <!-- Project 3 -->
      <article class="card flex flex-col gap-4" data-aos="fade-up" data-aos-duration="800">
        <div class="project-links">
          <a href="https://github.com/shawilayoul/VibePlay-Music-App" target="_blank" rel="noopener noreferrer">Code</a>
          <a href="https://play.google.com/store/apps/details?id=com.fjuchristianvibes" target="_blank" rel="noopener noreferrer">Play Store</a>
        </div>
        <div class="laptop">
          <div class="laptop__screen">
            <video width="100%" height="100%" controls>
              <source src="../assets/videos/projects3.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="laptop__bottom"><div class="laptop__under"></div></div>
          <div class="laptop__shadow"></div>
        </div>
        <div class="project-tags">
          <span class="tag">React Native</span>
          <span class="tag">Firebase</span>
          <span class="tag">Tailwind</span>
        </div>
      </article>

      <!-- Project 4 -->
      <article class="card flex flex-col gap-4" data-aos="fade-up" data-aos-duration="800">
        <div class="project-links">
          <a href="#" class="opacity-50 pointer-events-none">Code</a>
          <a href="https://musicappdashboard.onrender.com" target="_blank" rel="noopener noreferrer">Dashboard</a>
        </div>
        <div class="laptop">
          <div class="laptop__screen">
            <video width="100%" height="100%" controls>
              <source src="../assets/videos/project4.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="laptop__bottom"><div class="laptop__under"></div></div>
          <div class="laptop__shadow"></div>
        </div>
        <div class="project-tags">
          <span class="tag">React</span>
          <span class="tag">NestJS</span>
          <span class="tag">Firebase</span>
          <span class="tag">Tailwind</span>
        </div>
      </article>

      <!-- Project 5 -->
      <article class="card flex flex-col gap-4 desktop:col-span-2 desktop:max-w-md desktop:mx-auto" data-aos="fade-up" data-aos-duration="800">
        <div class="project-links">
          <a href="https://github.com/shawilayoul/CakeArts" target="_blank" rel="noopener noreferrer">Code</a>
          <a href="https://cakeart.vercel.app/" target="_blank" rel="noopener noreferrer">Live demo</a>
        </div>
        <div class="laptop">
          <div class="laptop__screen">
            <video width="100%" height="100%" controls>
              <source src="../assets/videos/project5.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="laptop__bottom"><div class="laptop__under"></div></div>
          <div class="laptop__shadow"></div>
        </div>
        <div class="project-tags">
          <span class="tag">React</span>
          <span class="tag">Sass</span>
          <span class="tag">Express</span>
          <span class="tag">MongoDB</span>
        </div>
      </article>
    </div>
  </main>
</template>

<style scoped>
.project-links {
  @apply flex justify-between text-sm font-semibold;
}

.project-links a {
  @apply text-blue transition-colors hover:text-blue/80;
}

.project-tags {
  @apply flex flex-wrap gap-2;
}

.laptop {
  position: relative;
  margin: 0 auto;
  max-width: 20rem;
}

.laptop__screen {
  position: relative;
  z-index: 1;
  padding: 3%;
  border-radius: 0.5rem;
  background-image: linear-gradient(to bottom, #334155, #1e293b);
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.12);
  border: 1px solid #475569;
  height: 220px;
}

.laptop__screen video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.25rem;
  background: #000;
}

.laptop__bottom {
  position: relative;
  z-index: 1;
  margin: 0 -7%;
  height: 0.6rem;
  background: #e2e8f0;
  background-image: linear-gradient(
    to right,
    #cbd5e1 0%,
    #f8fafc 15%,
    #e2e8f0 40%,
    #e2e8f0 60%,
    #f8fafc 85%,
    #cbd5e1 100%
  );
}

.laptop__bottom::before {
  display: block;
  margin: 0 auto;
  width: 20%;
  height: 0.6rem;
  border-radius: 0 0 0.2rem 0.2rem;
  background: #f1f5f9;
  content: ' ';
}

.laptop__under {
  position: absolute;
  top: 100%;
  left: 25%;
  width: 50%;
  height: 1.2rem;
  background: linear-gradient(to bottom, #e2e8f0, #cbd5e1);
}

.laptop__under::after,
.laptop__under::before {
  position: absolute;
  top: 0;
  right: 100%;
  bottom: 0;
  width: 50%;
  border-bottom-left-radius: 100%;
  background: inherit;
  content: ' ';
}

.laptop__under::after {
  right: auto;
  left: 100%;
  border-bottom-right-radius: 100%;
  border-bottom-left-radius: 0;
}

.laptop__shadow {
  position: absolute;
  right: -10%;
  bottom: -2rem;
  left: -10%;
  z-index: 0;
  height: 1.5rem;
  background: radial-gradient(ellipse closest-side, rgba(15, 23, 42, 0.15), transparent);
}
</style>
