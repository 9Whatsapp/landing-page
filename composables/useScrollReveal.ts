import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollReveal() {
  const targets = ref<HTMLElement[]>([])
  let observer: IntersectionObserver | null = null

  function register(el: HTMLElement | null) {
    if (el && !targets.value.includes(el)) {
      targets.value.push(el)
    }
  }

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.value.forEach(el => el.classList.add('revealed'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    targets.value.forEach((el) => observer?.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { register }
}
