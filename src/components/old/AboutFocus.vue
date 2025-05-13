<script setup>
import oldInterests from '@/store/oldInterests'

import Cross from '@/assets/icons/Cross.vue'

import { gsap } from 'gsap'

const emit = defineEmits(['changeFocus'])
const props = defineProps(['focus'])

function changeFocus(interest) {
  if (interest.title === props.focus.title) {
    return
  }

  const focusImage = document.querySelector('.focus-image-container img.--current')
  const newFocus = document.querySelector(
    `.focus-image-container img[src$="${interest.image}.jpg"]`,
  )

  gsap.set(newFocus, { zIndex: '10', scale: 1.2 })
  gsap.to(newFocus, {
    webkitMaskPosition: '100%',
    scale: 1,
    duration: 0.5,
    onComplete: () => {
      newFocus.style.zIndex = '1'
      newFocus.style.position = 'relative'
    },
  })
  gsap.set(focusImage, {
    delay: 0.5,
    webkitMaskPosition: '0%',
    position: 'absolute',
  })

  emit('changeFocus', interest)
}

watch(
  () => props.focus,
  (newFocus) => {
    if (newFocus) {
      changeFocus(newFocus)
    }
  },
)
</script>

<template>
  <div class="about-focus">
    <div class="focus-title">
      <h1>{{ props.focus?.title }}</h1>
      <Cross @click="emit('changeFocus')" />
    </div>

    <div class="focus-informations">
      <div class="focus-image-container">
        <img
          v-for="interest in oldInterests"
          class="focus-image"
          :key="interest.title"
          :src="`/src/assets/images/interests/${interest.image}.jpg`"
          :class="focus?.title === interest.title ? '--current' : '--hidden'"
        />
      </div>

      <div class="focus-more">
        <p>
          {{ props.focus?.desc }}
        </p>

        <div class="more-interests">
          <img
            v-for="interest in oldInterests"
            :class="focus?.title === interest.title ? '--current' : ''"
            :key="interest.title"
            :src="`/src/assets/images/interests/${interest.image}.jpg`"
            @click="changeFocus(interest)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-focus {
  display: flex;
  flex-direction: column;

  height: 100%;

  .focus-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }

  .focus-informations {
    display: flex;
    flex-direction: row;
    gap: 16px;

    .focus-image-container {
      position: relative;
      overflow: hidden;
      display: inline-table;
      height: 380px;
      width: 279px;

      img.focus-image {
        height: 380px;
        width: 279px;
        position: absolute;
        left: 0%;
        z-index: 10;

        -webkit-mask:
          linear-gradient(#000 0 0),
          linear-gradient(90deg, #000 50%, #0000 0) content-box 0% 0%/200% 200% no-repeat;
        mask-composite: exclude;
      }

      &--hidden {
        -webkit-mask-position: 0%;
      }
    }

    .focus-more {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .more-interests {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 8px;

        img {
          max-height: 120px;
          opacity: 0.4;

          &.--current {
            opacity: 1;
          }

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
