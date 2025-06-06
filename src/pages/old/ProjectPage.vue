<script setup>
import { gsap } from 'gsap'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

import { useRoute } from 'vue-router'

import Arrow from '@/assets/icons/Arrow.vue'

import projects from '@/store/projects.json'

const route = useRoute()
const projectId = ref(route.query.project)

const projectData = computed(() => projects.find((project) => project.id === projectId.value))

const nextProject = computed(() => {
  const idx = projects.findIndex((project) => project.id === projectId.value)
  if (idx === -1) {
    return projects[0]
  }
  return projects[(idx + 1) % projects.length]
})

let scroll

const isAllImagesLoaded = ref(false)
const loadedImagesCount = ref(0)

watch(
  () => route.query.project,
  async (newId, oldId) => {
    if (!scroll || newId === oldId) {
      return
    }

    scroll.stop()

    scroll.scrollTo(0, {
      duration: 500,
      disableLerp: true,
    })

    await new Promise((resolve) => setTimeout(resolve, 550))

    await gsap.to(document.querySelector('.project-informations'), {
      opacity: 0,
      y: 50,
      duration: 0.4,
      ease: 'power2.out',
      stagger: 0.1,
    })

    const firstImage = document.querySelector('.project-image')
    if (firstImage) {
      await gsap.to(firstImage, {
        opacity: 0,
        y: 50,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    projectId.value = newId

    await nextTick()

    const newFirstImage = document.querySelector('.project-image')
    if (newFirstImage) {
      await gsap.fromTo(
        newFirstImage,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        },
      )
    }

    gsap.fromTo(
      document.querySelector('.project-informations'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
      },
    )
    scroll.start()
  },
  { immediate: true },
)

onMounted(() => {
  window.addEventListener('resize', () => {
    if (scroll) {
      scroll.update()
    }
  })
})

onBeforeUnmount(() => {
  if (scroll) {
    scroll.destroy()
  }
})

function launchAnimations() {
  const container = document.querySelector('[data-scroll-container]')

  gsap.to(document.querySelector('.project-informations'), {
    opacity: 0,
    y: 50,
    duration: 0.4,
    ease: 'power2.out',
    stagger: 0.1,
  })

  const firstImage = document.querySelector('.project-image')

  if (firstImage) {
    gsap.to(firstImage, {
      opacity: 0,
      y: 50,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const newFirstImage = document.querySelector('.project-image')
  if (newFirstImage) {
    gsap.fromTo(
      newFirstImage,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
      },
    )
  }

  gsap.fromTo(
    document.querySelector('.project-informations'),
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.1,
    },
  )

  scroll = new LocomotiveScroll({
    el: container,
    smooth: true,
    direction: 'horizontal',
    gestureDirection: 'both',
    reloadOnContextChange: true,
    multiplier: 0.8,
    smartphone: {
      direction: 'vertical',
    },
  })
}

function onImageLoad() {
  loadedImagesCount.value++

  if (loadedImagesCount.value === 7) {
    isAllImagesLoaded.value = true
    launchAnimations()
  }
}
</script>

<template>
  <div class="project-container" :class="{ hidden: !isAllImagesLoaded }">
    <div class="project-informations">
      <h1>
        {{ projectData.title }}
      </h1>

      <a v-if="projectData.link" :href="projectData.link">VISIT WEBSITE</a>

      <div class="project-details">
        <span>COMPLETED: {{ projectData.date }}</span>
        <span>ROLE: {{ projectData.role }}</span>
        <span>WITH: {{ projectData.team }}</span>
      </div>

      <span class="description">{{ projectData.desc }}</span>

      {{ projectData.size }}
    </div>

    <div class="project-scroll-wrapper" data-scroll-container>
      <div class="project-images-container" data-scroll-section>
        <img
          v-for="i in 7"
          :key="i"
          class="project-image"
          :src="`/assets/images/projects/${projectData.image}/${i}.jpg`"
          @load="onImageLoad"
        />

        <div class="project-next">
          <RouterLink
            :to="{
              name: 'oldProject',
              query: { project: nextProject.id },
            }"
          >
            <h1>Next project: {{ nextProject.title }}</h1>

            <Arrow :delay="0" />
          </RouterLink>

          <div class="next-lines">
            <span v-for="i in 40" :key="i" class="line" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
html,
body {
  height: 100%;
  overflow-x: hidden;
}

.project-page {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.project-container {
  display: flex;
  flex-direction: row;
  height: 85vh;
  min-height: 85vh;
  width: fit-content;
  align-items: center;
  overflow: hidden;
  border-top: 1px solid var(--color-text);

  .project-informations {
    display: flex;
    flex-direction: column;
    width: 32vw;
    margin-right: 10vw;

    h1 {
      line-height: 60px;
    }

    .project-details {
      display: flex;
      flex-direction: column;
      margin: 2vh 0;
      text-transform: uppercase;
      line-height: 20px;
    }

    .description {
      white-space: normal;
      line-height: 20px;
    }
  }

  .project-scroll-wrapper {
    position: relative;
    height: 100%;
    min-height: 100%;
    width: 100%;
    z-index: 200;

    .project-images-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;
      width: max-content;
      z-index: 10;

      .project-image {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        border: 1px solid var(--color-text);
        border-width: 0 1px 0 0;
      }

      .scroll-padding {
        width: 114vw;
        height: 100%;
        flex-shrink: 0;
        pointer-events: none;
      }
    }
  }

  .project-next {
    border-left: 1px solid #9e949c;
    height: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    a {
      display: block;
      width: 25vw;
      margin-left: 2vw;

      h1 {
        display: inline;
        word-wrap: break-word;
        overflow-wrap: break-word;
        white-space: normal;
      }

      svg {
        margin: 0 10px;
      }
    }

    .next-lines {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      justify-content: space-around;
      height: 40vh;

      .line {
        width: 100vw;
        height: 1px;
        background-color: var(--color-text);
      }
    }
  }
}

.hidden {
  opacity: 0;
}
</style>
