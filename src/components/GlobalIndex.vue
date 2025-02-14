<script setup></script>

<template>
  <div class="index-container">
    <div class="index-items">
      <span>[&nbsp;&nbsp;0</span>

      <div class="index-count">
        <span class="index">1</span>

        <span class="index">2</span>

        <span class="index">3</span>

        <span class="index">4</span>

        <span class="index">5</span>
      </div>

      <span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index-container {
  height: 100vh;
  width: 12vw;
  //
  position: fixed;
  top: 0;
  right: 0;

  .index-items {
    height: 100vh;
    width: 12vw;
    display: flex;
    align-items: center;

    .index-count {
      margin-top: 400vh;

      .index {
        height: 100vh;
        //
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
