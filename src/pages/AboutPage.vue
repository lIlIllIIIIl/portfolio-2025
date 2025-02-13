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
  <div class="about-container">
    <span class="page-title">Interests</span>

    <div class="grid-container">
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

    <div class="interest-num">
      [&nbsp;&nbsp;{{
        currentCol
      }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100vh;

  .page-title,
  .interest-num {
    height: 105px;
    display: flex;
    align-items: center;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(8, 105px);
    grid-template-rows: 105px 1fr;
    gap: 0px 0px;
    overflow: scroll;
    padding: 16px;
    margin: 0 40px;

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
