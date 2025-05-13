<script setup>
import AboutFocus from '@/components/old/AboutFocus.vue'
import oldInterests from '@/store/oldInterests'

import { gsap } from 'gsap'

import Splitting from 'splitting'

const currentFocus = ref(null)

function focusInterest(interest) {
  const aboutContainer = document.querySelector('.about-container')
  const aboutFocus = document.querySelector('.about-focus')

  const tl = gsap.timeline()

  if (interest) {
    currentFocus.value = interest

    Splitting()

    tl.to(aboutContainer, {
      display: 'none',
      duration: 0,
    })

    tl.to(aboutFocus, {
      display: 'flex',
      duration: 0,
    })
  } else {
    currentFocus.value = null

    tl.to(aboutContainer, {
      display: 'flex',
      duration: 0,
    })

    tl.to(aboutFocus, {
      display: 'none',
      duration: 0,
    })
  }
}
</script>

<template>
  <div class="about-container">
    <h1>About me?</h1>

    <div class="interests-container">
      <img
        v-for="interest in oldInterests"
        :key="interest.title"
        :src="`/src/assets/images/interests/${interest.image}.jpg`"
        @click="focusInterest(interest)"
      />
    </div>
  </div>

  <AboutFocus :focus="currentFocus" @changeFocus="focusInterest" />
  <!-- <AboutFocus :focus="currentFocus ?? oldInterests.ski" @changeFocus="focusInterest" /> -->
</template>

<style lang="scss" scoped>
.about-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16vh;
  gap: 24px;

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
</style>
