<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const menuItems = computed(() => {
  switch (route.name) {
    case 'about':
      return ['Intro', 'Interests', 'Experiences', 'Contact']
    case 'home':
      return ['', 'Work']
  }
})
</script>

<template>
  <div class="menu-container">
    <div v-for="item in menuItems" :key="item" class="menu-item">
      {{ item }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-container {
  height: 100vh;
  width: 12vw;
  //
  position: fixed;
  top: 0;
  left: 0;

  .menu-item {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
