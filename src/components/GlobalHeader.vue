<script setup></script>

<template>
  <header>
    <img class="header-icon" src="@/assets/images/exclude.png" />

    <div class="header-links">
      <RouterLink to="/">[Index] </RouterLink>

      <RouterLink to="/about"> [About] </RouterLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 120px;

  img {
    max-width: 22px;
    max-height: 22px;
  }

  .header-links {
    display: flex;
    flex-direction: column;

    a {
      color: var(--color-text);

      &.router-link-active {
        color: white;
      }
    }
  }
}
</style>
