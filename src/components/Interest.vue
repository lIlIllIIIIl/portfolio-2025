<script setup>
const props = defineProps(['interest', 'focus', 'index'])
</script>

<template>
  <div class="interest-container">
    <span>{{ index }}</span>
    <div class="img-container">
      <img v-if="props.focus" :src="`src/assets/images/interests/${props.interest.image}.jpg`" />
    </div>
    <span v-if="props.focus">{{ props.interest.title }}</span>
  </div>
</template>

<style lang="scss" scoped>
.interest-container {
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
