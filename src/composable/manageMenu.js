// composables/useMenuAnimation.js
import { onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'

export function manageMenu() {
  async function initMenuAnimation() {
    await nextTick()

    const container = document.querySelector('.menu-container')
    const menuItems = document.querySelectorAll('.menu-item')
    const indexContainer = document.querySelector('.index-count')

    if (!container || !menuItems.length || !indexContainer) {
      // Si les éléments ne sont pas encore prêts, on réessaie dans un moment
      setTimeout(initMenuAnimation, 100)
      return
    }

    menuItems.forEach((menuItem, id) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: menuItem,
          scroller: '.content-container',
          start: 'center top',
          end: 'center top',
          toggleActions: 'play none none reverse',
        },
      })

      tl.to(indexContainer, { duration: 0.8, marginTop: `${200 - 200 * id}vh` }, 0)
      tl.to(container, { duration: 0.8, top: `-${(id + 1) * 100}vh` }, 0)
    })
  }
  onMounted(initMenuAnimation)
}
