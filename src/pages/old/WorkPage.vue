<script setup>
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import gsap from 'gsap'

import Arrow from '@/assets/icons/Arrow.vue'
import projects from '@/store/projects.json'

let scroll

onMounted(() => {
  scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'horizontal',
    gestureDirection: 'both',
    multiplier: 1,
    smartphone: {
      direction: 'horizontal',
      gestureDirection: 'both',
    },
    tablet: {
      direction: 'horizontal',
      gestureDirection: 'both',
    },
  })

  const items = document.querySelectorAll('.fade-up')
  gsap.set(items, { opacity: 0, y: 100 })

  gsap.to(items, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power3.out',
    stagger: 0.25,
  })
})

onBeforeUnmount(() => {
  if (scroll) {
    scroll.destroy()
  }
})
</script>

<template>
  <div class="workpage" data-scroll-container>
    <section
      v-for="(project, index) in projects"
      :key="project.title"
      class="work-section"
      data-scroll
      data-scroll-section
    >
      <img :src="`/assets/images/projects/${project.image}/cover.jpg`" class="fade-up" />

      <RouterLink
        class="fade-up"
        :to="{
          name: 'oldProject',
          query: { project: project.id },
        }"
      >
        <h3 class="project-title">
          {{ project.title }}

          <Arrow :delay="index / 2 + 1" />
        </h3>
      </RouterLink>
    </section>

    <div class="scroll-padding" aria-hidden="true" />
  </div>
</template>

<style lang="scss" scoped>
body {
  overflow-x: hidden;
  width: 100vw;
}

html.has-scroll-smooth {
  overflow: hidden;
}

.workpage {
  display: flex;
  flex-direction: row;
  height: 85vh;
  min-height: 85vh;
  width: 240vw;
  align-items: center;
  border-top: 1px solid var(--color-text);

  .work-section {
    height: 100%;
    width: 400px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border: 1px solid var(--color-text);
    border-width: 0 1px 0 0;
    text-wrap: auto;

    &:first-child {
      border-width: 0 1px 0 1px;
    }

    a {
      margin: 2vh;
      display: flex;
      flex-direction: row;

      h3.project-title {
        font-size: 8vh;
        line-height: 100%;
        display: inline-block;
        overflow: visible;
        white-space: break-spaces;

        svg {
          margin: 0;
        }
      }
    }

    img {
      height: 75%;
      max-height: 580px;
      max-width: -webkit-fill-available;
    }
  }

  .scroll-padding {
    width: 30vw;
    height: 100%;
    flex-shrink: 0;
    pointer-events: none;
    background: transparent;
  }
}
</style>
