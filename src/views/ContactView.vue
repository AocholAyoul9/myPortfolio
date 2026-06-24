<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import emailjs from '@emailjs/browser'

const emailForm = ref(null)
const toast = useToast()
const form = ref({
  subject: '',
  name: '',
  email: '',
  message: ''
})

const sendEmail = () => {
  emailjs
    .sendForm('service_hr64wgw', 'template_ezrie6k', emailForm.value, '-EzNfdVBkkap2_xNU')
    .then(
      () => {
        toast.success('Votre message a bien été envoyé, merci !', { position: 'top' })
      },
      (error) => {
        console.log('FAILED...', error.text)
      }
    )
  form.value.subject = ''
  form.value.name = ''
  form.value.email = ''
  form.value.message = ''
}
</script>

<template>
  <main class="section-wrap">
    <div class="mb-12 text-center" data-aos="fade-up" data-aos-duration="800">
      <p class="section-label">Contact</p>
      <h2 class="section-title">Travaillons ensemble</h2>
      <p class="section-desc mx-auto">
        Un projet en tête ? Écrivez-moi — je réponds sous 24h.
      </p>
    </div>

    <div class="grid gap-8 desktop:grid-cols-5 desktop:gap-12">
      <div class="flex flex-col gap-4 desktop:col-span-2" data-aos="fade-up" data-aos-duration="800">
        <div class="card flex items-start gap-4">
          <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue">
            <i class="pi pi-envelope"></i>
          </div>
          <div>
            <p class="text-sm font-semibold text-ink dark:text-white">Email</p>
            <a href="mailto:aocholayoul9@gmail.com" class="break-all text-sm text-ink-muted hover:text-blue dark:text-slate-400">
              aocholayoul9@gmail.com
            </a>
          </div>
        </div>

        <div class="card flex items-start gap-4">
          <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue">
            <i class="pi pi-phone"></i>
          </div>
          <div>
            <p class="text-sm font-semibold text-ink dark:text-white">Téléphone</p>
            <a href="tel:+33782371177" class="text-sm text-ink-muted hover:text-blue dark:text-slate-400">
              +33 7 82 37 11 77
            </a>
          </div>
        </div>

        <div class="card flex items-start gap-4">
          <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue">
            <i class="pi pi-map-marker"></i>
          </div>
          <div>
            <p class="text-sm font-semibold text-ink dark:text-white">Localisation</p>
            <p class="text-sm text-ink-muted dark:text-slate-400">Lyon, France — remote possible</p>
          </div>
        </div>

        <a
          href="https://shawiltech.fr/"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-secondary w-full justify-center"
        >
          Visiter ShawilTech.fr
        </a>
      </div>

      <div class="card desktop:col-span-3" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
        <h3 class="mb-6 text-lg font-semibold text-ink dark:text-white">Envoyer un message</h3>
        <form @submit.prevent="sendEmail" ref="emailForm" class="flex flex-col gap-4">
          <input
            type="text"
            name="user_name"
            v-model="form.name"
            placeholder="Votre nom"
            class="input-field"
            required
          />
          <input
            type="email"
            name="user_email"
            v-model="form.email"
            placeholder="Votre email"
            class="input-field"
            required
          />
          <input
            type="text"
            name="user_subject"
            v-model="form.subject"
            placeholder="Sujet"
            class="input-field"
            required
          />
          <textarea
            name="message"
            v-model="form.message"
            placeholder="Décrivez votre projet..."
            class="input-field min-h-[140px] resize-y"
            required
          ></textarea>
          <button class="btn-primary w-full desktop:w-auto" type="submit">
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  </main>
</template>
