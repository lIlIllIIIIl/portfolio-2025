<script setup>
import oldInterests from '@/store/oldInterests'

import Cross from '@/assets/icons/Cross.vue'

import { gsap } from 'gsap'

const emit = defineEmits(['changeFocus'])
const props = defineProps(['focus'])

const showMobile = computed(() => window.innerWidth <= 1160)

const isAnimating = ref(false)

const currentTitle = ref(props.focus?.title)
const currentDesc = ref(props.focus?.desc)

function changeFocus(interest) {
  if (isAnimating.value) {
    return
  }

  const focusTitle = document.querySelector('.focus-title')
  const focusDesc = document.querySelector('.focus-more p')

  const focusImage = document.querySelector('.focus-image-container img.--current')

  const moreInterests = document.querySelectorAll('.more-interests img')

  // if cross is clicked
  if (!interest) {
    gsap.to(focusTitle, {
      opacity: 0,
      duration: 0.5,
      x: '-220px',
    })
    gsap.to(focusDesc, {
      opacity: 0,
      duration: 0.5,
      x: '-220px',
      onComplete: () => {
        emit('changeFocus')
      },
    })
    gsap.set(focusImage, {
      webkitMaskPosition: '-100% 0%',
    })
    gsap.to(focusImage, {
      webkitMaskPosition: '0% 0%',
    })

    gsap.to(moreInterests, {
      y: '100px',
      opacity: 0,
      stagger: 0.06,
      duration: 0.4,
    })

    return
  }

  const newFocus = document.querySelector(
    `.focus-image-container img[src$="${interest.image}.jpg"]`,
  )

  if (interest.title === props.focus.title) {
    isAnimating.value = true

    currentTitle.value = interest.title
    currentDesc.value = interest.desc

    gsap.to(focusTitle, { opacity: 1, duration: 0.5, x: '0px' })
    gsap.to(focusDesc, { opacity: 1, duration: 0.5, x: '0px' })
    gsap.to(newFocus, {
      webkitMaskPosition: '100% 0',
      onComplete: () => {
        isAnimating.value = false
      },
    })
    gsap.to(moreInterests, {
      y: '0px',
      opacity: 0.4,
      stagger: 0.06,
      duration: 0.4,
      onComplete: () => {
        gsap.set(moreInterests, { clearProps: 'opacity' })
      },
    })

    return
  }

  isAnimating.value = true

  newFocus.style.zIndex = '100'

  const tl = gsap.timeline()

  tl.set(newFocus, {
    zIndex: 100,
  })

  tl.to(newFocus, {
    webkitMaskPosition: '100%',
    onComplete: () => {
      gsap.set(newFocus, {
        zIndex: 1,
      })
      gsap.set(focusImage, {
        webkitMaskPosition: '0% 0%',
      })
    },
  })

  gsap.to(focusDesc, {
    opacity: 0,
    duration: 0.5,
    x: '-220px',
    onComplete: () => {
      currentDesc.value = interest.desc
      gsap.to(focusDesc, { opacity: 1, duration: 0.5, x: '0px' })
    },
  })
  gsap.to(focusTitle, {
    opacity: 0,
    duration: 0.5,
    x: '-220px',
    onComplete: () => {
      emit('changeFocus', interest)
      currentTitle.value = interest.title
      gsap.to(focusTitle, { opacity: 1, duration: 0.5, x: '0px' })
    },
  })
}

watch(
  () => props.focus,
  (newFocus, oldFocus) => {
    if (newFocus && (props.focus !== newFocus || !oldFocus)) {
      changeFocus(newFocus)
    } else {
      isAnimating.value = false
    }
  },
)
</script>

<template>
  <div class="about-focus">
    <div class="focus-title">
      <h1>{{ currentTitle }}</h1>
      <Cross @click="changeFocus()" />
    </div>

    <div class="focus-informations">
      <div class="focus-image-container">
        <img
          v-for="interest in oldInterests"
          class="focus-image"
          :key="interest.title"
          :src="`/assets/images/interests/${interest.image}.jpg`"
          :class="focus?.title === interest.title ? '--current' : '--hidden'"
        />
      </div>

      <div class="focus-more">
        <p>
          {{ currentDesc }}
        </p>

        <div v-if="!showMobile" class="more-interests">
          <img
            v-for="interest in oldInterests"
            :class="currentTitle === interest.title ? '--current' : ''"
            :key="interest.title"
            :src="`/assets/images/interests/${interest.image}.jpg`"
            @click="changeFocus(interest)"
          />
        </div>
      </div>
    </div>

    <div v-if="showMobile" class="more-interests">
      <img
        v-for="interest in oldInterests"
        :class="currentTitle === interest.title ? '--current' : ''"
        :key="interest.title"
        :src="`/assets/images/interests/${interest.image}.jpg`"
        @click="changeFocus(interest)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-focus {
  display: flex;
  flex-direction: column;
  gap: 16px;

  // height: 100%;

  .focus-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    margin-bottom: 2vh;
    opacity: 0;
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
        -webkit-mask-position: 0% 0%;
        mask-composite: exclude;

        &.--hidden {
          -webkit-mask-position: 0%;
          z-index: 1;
        }
      }
    }

    .focus-more {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p {
        max-width: 26vw;
        opacity: 0;
      }
    }
  }

  .more-interests {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;

    img {
      transition-duration: 0.4s;
      max-height: 120px;
      opacity: 0.4;

      &.--current {
        opacity: 1;
      }

      &:hover {
        transition-duration: 0s;
        opacity: 1;
      }
    }
  }
}
</style>
