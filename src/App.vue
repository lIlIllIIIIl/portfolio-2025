<script setup>
import GlobalMenu from './components/GlobalMenu.vue'

const showOld = ref(window.location.href.includes('old'))
</script>

<template>
  <div v-if="showOld" class="page-container--old">
    <header>
      <RouterLink to="/old/">
        <img class="header-icon" src="@/assets/images/exclude.png" />
      </RouterLink>
    </header>

    <RouterView />

    <GlobalMenu />
  </div>
  <div v-else class="page-container">
    <header>
      <RouterLink to="/">
        <img class="header-icon" src="@/assets/images/exclude.png" />
      </RouterLink>
    </header>

    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  header {
    width: 100%;
    height: 10vh;

    .header-icon {
      max-width: 30px;

      &:hover {
        cursor: pointer;
      }
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
