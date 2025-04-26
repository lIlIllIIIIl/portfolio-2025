<script setup>
import oldInterests from '@/store/oldInterests'

import Cross from '@/assets/icons/Cross.vue'

const props = defineProps(['focus'])
</script>

<template>
  <div class="about-focus">
    <div class="focus-title">
      <h1>{{ props.focus.title }}</h1>
      <Cross />
    </div>

    <div class="focus-informations">
      <img :src="`/src/assets/images/interests/${props.focus.image}.jpg`" />

      <div class="focus-more">
        <p>
          {{ props.focus.desc }}
        </p>

        <div>
          <img
            v-for="interest in oldInterests"
            :key="interest.title"
            :src="`/src/assets/images/interests/${interest.image}.jpg`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-focus {
  display: flex;
  flex-direction: column;

  height: 100%;

  .focus-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }

  .focus-informations {
    display: flex;
    flex-direction: row;
    gap: 16px;
    //
    height: 100%;

    img {
      max-height: 380px;
    }

    .focus-more {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      img {
        max-height: 120px;
      }
    }
  }
}
</style>
