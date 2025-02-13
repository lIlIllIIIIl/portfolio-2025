<script setup>
import { RouterLink } from 'vue-router'

import BurgerIcon from './icons/BurgerIcon.vue'
import Github from '@/assets/icons/Github.vue'
import Linkedin from '@/assets/icons/Linkedin.vue'

const menuIsOpen = ref(false)

function toggleMenu() {
  menuIsOpen.value = !menuIsOpen.value
}
</script>
<template>
  <div class="menu-container" :class="menuIsOpen ? 'open' : 'close'">
    <div class="menu-top">
      <div class="menu-blank" />

      <div class="menu-button" @click="toggleMenu">
        <span>Menu</span>
        <BurgerIcon :icon-state="menuIsOpen" />
      </div>

      <div v-if="menuIsOpen" class="menu-links-container">
        <h3 class="menu-link">
          <RouterLink to="/old/about">About</RouterLink>
        </h3>

        <h3 class="menu-link">
          <RouterLink to="/old/work">Work</RouterLink>
        </h3>

        <h3 class="menu-link">
          <RouterLink to="/old/contact">Contact</RouterLink>
        </h3>
      </div>
    </div>

    <div class="menu-footer">
      <div class="designer">
        <h6>DESIGNED BY:</h6>
        <h6>INÈS RICHARD</h6>
      </div>

      <div class="socials">
        <h6>FIND ME ON:</h6>
        <div class="socials-icons">
          <Github />
          <Linkedin />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.menu-container {
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0;
  border-left: 1px solid white;
  background: var(--color-background);
  z-index: 10;
  //
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //
  transition-duration: 0.6s;

  &.close {
    width: 20vw;
  }

  &.open {
    width: 26vw;
  }

  .menu-top {
    .menu-blank {
      width: 100%;
      height: 40px;
      border-bottom: 1px solid white;
    }

    .menu-button {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      gap: 16px;
      //
      margin: 32px 32px 0 0;
      //
      -webkit-user-select: none;
      user-select: none;

      &:hover {
        cursor: pointer;
      }
    }

    .menu-links-container {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      //
      margin-top: 80px;
      margin-right: 32px;

      .menu-link {
        position: relative;

        &:hover {
          cursor: pointer;
        }

        &:after {
          content: '';
          position: absolute;
          bottom: 16px;
          left: 0;
          width: 200%;
          height: 0.1vh;
          background-color: white;
          //
          transition:
            opacity 300ms,
            transform 400ms;
          transform: translate3d(200%, 0, 0);
          // opacity: 0;
        }

        &:hover:after {
          transform: translate3d(0, 0, 0);
        }
      }
    }
  }

  .menu-footer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
    //
    padding: 16px;

    .designer,
    .socials {
      display: flex;
      flex-direction: column;

      .socials-icons {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 8px;
      }
    }
  }
}
</style>
