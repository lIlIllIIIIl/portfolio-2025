<script setup>
const props = defineProps(['project', 'focus', 'index'])
</script>

<template>
  <div class="project-container">
    <img class="img-container" />
    <span>{{ props.project.title }}</span>
  </div>
</template>

<style lang="scss" scoped>
.project-container {
  display: flex;
  flex-direction: column;

  .img-container {
    outline: white 1px solid;
    width: 6rem;
    height: 6rem;

    img {
      // width: -webkit-fill-available;
      // height: -webkit-fill-available;
      width: inherit;
      height: inherit;
      //
      object-fit: cover;
    }
  }
}
</style>
