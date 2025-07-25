<script setup>
import Arrow from '@/assets/icons/Arrow.vue'

import { titleAnimation, paragraphAnimation } from '@/composable/textAnimation'

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
        Currently somewhere <span class="important">around the world</span>, I'm still available for
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

  @media (max-width: 1024px) {
    margin-left: 6vw;
  }

  .homepage-title {
    margin-top: 18vh;

    @media (max-width: 1024px) {
      margin-top: 6vh;
    }

    h1 {
      display: inline;
    }
  }

  .homepage-description {
    max-width: 34vw;
    color: white;
    text-transform: uppercase;

    @media (max-width: 1024px) {
      max-width: 60vw;
    }

    .important {
      color: var(--color-text);
    }
  }
}
</style>
