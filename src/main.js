import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

// Fade-in on scroll
app.directive('reveal', {
  mounted(el) {
    el.classList.add('reveal')
    if (!('IntersectionObserver' in window)) return el.classList.add('visible')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) }
      }),
      { threshold: 0.12 },
    )
    io.observe(el)
  },
})

app.mount('#app')
