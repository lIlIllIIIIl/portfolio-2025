<script setup></script>

<template>
  <header>
    <img class="header-icon" src="@/assets/images/exclude.png" />

    <div class="header-links">
      <RouterLink to="/">
        <span>[</span>
        <span class="header-text">Index</span>
        <span>]</span>
      </RouterLink>

      <!-- <RouterLink to="/about">
        <span>[</span>
        <span class="header-text">About</span>
        <span>]</span>
      </RouterLink> -->
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
  padding: 4vw;

  @media (max-width: 1024px) {
    width: 100vw;
    margin-left: 5vw;
  }

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

      .header-text {
        margin: 0 50px 0 8px;
      }
    }
  }
}
</style>
