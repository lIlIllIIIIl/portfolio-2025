<script setup>
import AboutFocus from '@/components/old/AboutFocus.vue'
import oldInterests from '@/store/oldInterests'

import { titleAnimation } from '@/composable/textAnimation'

import { gsap } from 'gsap'

import Splitting from 'splitting'

const currentFocus = ref(null)

const isAllImagesLoaded = ref(false)
const loadedImagesCount = ref(0)

function launchAnimations() {
  const title = document.querySelector('.title')
  titleAnimation(title)

  const aboutInterests = document.querySelectorAll('.about-container .interests-container img')

  gsap.set(aboutInterests, {
    opacity: 0,
    y: '200px',
  })

  gsap.to(aboutInterests, {
    opacity: 1,
    y: '0px',
    stagger: 0.06,
    duration: 0.4,
  })
}

function onImageLoad() {
  loadedImagesCount.value++

  if (loadedImagesCount.value === Object.keys(oldInterests).length) {
    isAllImagesLoaded.value = true
    launchAnimations()
  }
}

function focusInterest(interest) {
  const aboutContainer = document.querySelector('.about-container')
  const aboutTitle = document.querySelector('.about-container h1')
  const aboutInterests = document.querySelectorAll('.about-container .interests-container img')
  const aboutFocus = document.querySelector('.about-focus')

  const tl = gsap.timeline()

  if (interest) {
    Splitting()

    tl.to(aboutTitle, {
      opacity: 0,
      y: '-200px',
      duration: 0.4,
    })

    tl.to(aboutInterests, {
      opacity: 0,
      y: '-200px',
      duration: 0.4,
      stagger: 0.06,
      onComplete: () => {
        currentFocus.value = interest
      },
    })
    tl.to(aboutContainer, {
      display: 'none',
      duration: 0,
    })

    tl.to(aboutFocus, {
      display: 'flex',
      duration: 0,
    })
  }
  // if cross is clicked
  else {
    currentFocus.value = null
    tl.to(aboutContainer, {
      display: 'flex',
      duration: 0,
    })

    tl.to(aboutTitle, {
      opacity: 1,
      y: '0px',
      duration: 0.4,
    })
    tl.to(aboutInterests, {
      opacity: 1,
      y: '0px',
      stagger: 0.06,
      duration: 0.4,
      onComplete: () => {
        tl.to(aboutFocus, {
          display: 'none',
          duration: 0,
        })
      },
    })
  }
}
</script>

<template>
  <div class="aboutpage" :class="{ hidden: !isAllImagesLoaded }">
    <div class="about-container">
      <h1 class="title">About me?</h1>

      <div class="interests-container">
        <img
          v-for="interest in oldInterests"
          :key="interest.title"
          :src="`/assets/images/interests/${interest.image}.jpg`"
          @load="onImageLoad"
          @click="focusInterest(interest)"
        />
      </div>
    </div>

    <AboutFocus :focus="currentFocus" @changeFocus="focusInterest" />
  </div>
</template>

<style lang="scss" scoped>
.about-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16vh;
  gap: 24px;

  @media (max-width: 1024px) {
    margin-top: 5vh;
    margin-left: 6vw;
    flex-direction: column;
    align-items: flex-start;
  }

  .interests-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-right: 8px;

    img {
      max-height: 120px;
    }
  }
}

.about-focus {
  display: none;

  margin-top: 8vh;
}

.hidden {
  opacity: 0;
}
</style>
