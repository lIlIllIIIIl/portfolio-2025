<script setup>
// import Project from '@/components/atoms/Project.vue'
// import projects from '@/store/projects.json'
</script>

<template>
  <section class="homepage-container">
    <!-- <div class="homepage-presentation">
      <span class="name">Alexis Kessab</span>
      <span>Fullstack Developer</span>
    </div> -->
    <div class="homepage-building">
      <span>Hey! This portfolio is not finished yet.</span>
      <a href="/old/">You can take a look at the old version of my portfolio by clicking here</a>
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

  .homepage-building {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4vh;

    a {
      &:hover {
        color: white;
        text-decoration: underline;
      }
    }
  }
}
</style>
