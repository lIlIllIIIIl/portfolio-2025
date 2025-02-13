<script setup>
import Arrow from '@/assets/icons/Arrow.vue'

import { titleAnimation, paragraphAnimation } from '@/computed/textAnimation'

onMounted(() => {
  const title = document.querySelector('.title')
  titleAnimation(title)

  const paragraph = document.querySelector('.paragraph')
  paragraphAnimation(paragraph)
})
</script>

<template>
  <div class="homepage-container">
    <div class="homepage-title">
      <RouterLink to="/old/work">
        <h1 class="title">Alexis Kessab, fullstack developer</h1>
        <Arrow :delay="1.6" />
      </RouterLink>
    </div>

    <div class="homepage-description">
      <p class="paragraph">
        Somewhere <span class="important">around the world</span>, available for
        <span class="important">remote freelance</span>
        missions.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.homepage-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 56px;

  .homepage-title {
    margin-top: 18vh;

    h1 {
      display: inline;
    }
  }

  .homepage-description {
    max-width: 34vw;
    color: white;
    text-transform: uppercase;

    .important {
      color: var(--color-text);
    }
  }
}
</style>
