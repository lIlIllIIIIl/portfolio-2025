<script setup>
// import Project from '@/components/atoms/Project.vue'
// import projects from '@/store/projects.json'
</script>

<template>
  <section class="homepage-container">
    <div class="homepage-presentation">
      <span class="name">Alexis Kessab</span>
      <span>Fullstack Developer</span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.homepage-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .homepage-presentation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4vh;

    .name {
      color: white;
    }
  }
}
</style>
