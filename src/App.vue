<script setup>
import GlobalMenu from './components/GlobalMenu.vue'
</script>

<template>
  <div class="page-container">
    <header>
      <RouterLink to="/">
        <img class="header-icon" src="@/assets/images/exclude.png" />
      </RouterLink>
    </header>

    <RouterView />

    <GlobalMenu />
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  padding-left: 5vw;

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
