<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import GlobalHeader from './components/GlobalHeader.vue'
import GlobalMenu from './components/GlobalMenu.vue'
import GlobalIndex from './components/GlobalIndex.vue'

import { manageMenu } from './composable/manageMenu'

// OLD
import GlobalMenuOld from './components/old/GlobalMenu.vue'

const showOld = ref(window.location.href.includes('old'))

manageMenu()
</script>

<template>
  <div v-if="showOld" class="page-container--old">
    <header>
      <RouterLink to="/old/">
        <img class="header-icon" src="@/assets/images/exclude.png" />
      </RouterLink>
    </header>

    <RouterView />

    <GlobalMenuOld />
  </div>

  <div v-else class="page-container">
    <GlobalHeader />

    <div class="content-container">
      <GlobalMenu />

      <RouterView />

      <GlobalIndex />
    </div>
  </div>
</template>

<style lang="scss">
.page-container {
  height: 100vh;
  padding: 4vw;
  overflow: hidden;

  header {
    width: 100%;
    height: 10vh;
  }

  .content-container {
    overflow: scroll;
    height: 100vh;
    scroll-snap-type: y mandatory;
    scrollbar-width: none;

    section {
      height: 100vh;
      scroll-snap-align: start;
    }
  }
}

.page-container--old {
  padding-left: 5vw;
  margin-right: 15vw;

  header {
    width: 100%;
    height: 10vh;
    border-bottom: 1px solid white;

    .header-icon {
      max-width: 30px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
