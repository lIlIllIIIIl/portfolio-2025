<script setup>
import Interest from '@/components/Interest.vue'
import interests from '@/store/interests.json'

const focused = ref(null)
const interestsTitle = Object.keys(interests)
const currentCol = ref('00')

function colEnter(col) {
  currentCol.value = `0${col}`
  focused.value = interests[interestsTitle[col - 1]]
}
</script>

<template>
  <section class="about-container">
    <div class="grid-container">
      <div
        v-for="column in 8"
        :key="column"
        class="col"
        @mouseenter="colEnter(column)"
        @mouseleave="[(focused = null), (currentCol = '00')]"
      />

      <Interest
        v-for="(interest, key) in interests"
        :key="interest.title"
        :index="key"
        :interest="interest"
        :focus="focused?.title === interest.title"
        @mouseenter="focused = interest"
        @mouseleave="focused = null"
      />

      <div
        v-for="column in 8"
        :key="column"
        class="col"
        @mouseenter="colEnter(column)"
        @mouseleave="[(focused = null), (currentCol = '00')]"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-container {
  display: flex;
  align-items: center;
  height: 100vh;

  .page-title,
  .interest-num {
    height: 105px;
    display: flex;
    align-items: center;
  }

  .grid-container {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 105px 105px 105px 105px 105px 105px 105px 105px;
    grid-template-rows: 1fr 105px 1fr;
    gap: 0px 0px;
    grid-template-areas:
      '. . . . . . . .'
      '. . . . . . . .'
      '. . . . . . . .';
    //
    height: -webkit-fill-available;
    padding: 16px;
    margin: 0 120px;
    overflow: scroll;

    .grid-column {
      display: flex;
      flex-direction: column;
    }

    .col {
      height: 100%;
    }
  }
}
</style>
