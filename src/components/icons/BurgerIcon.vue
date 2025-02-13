<script setup>
const props = defineProps(['iconState'])
</script>

<template>
  <div class="burger-icon">
    <span :class="['icon-1', { a: props.iconState }]" />
    <span :class="['icon-2', { b: props.iconState }]" />
  </div>
</template>

<style lang="scss" scoped>
.burger-icon {
  height: 12px;
  width: 20px;
  top: 10%;
  left: 3%;
  z-index: 1000;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;

  .icon-1,
  .icon-2 {
    position: absolute;
    width: 20px;
    height: 1px;
    background-color: white;
    transition: all 400ms cubic-bezier(0.84, 0.06, 0.52, 1.8);
  }

  .icon-1 {
    transform: translateY(0px);
    animation-delay: 100ms;
  }

  .icon-2 {
    transform: translateY(10px);
    animation-delay: 250ms;
  }

  .icon-1.a {
    transform: translateY(4px) rotate(40deg);
    // background-color: var(--color-primary);
  }

  .icon-2.b {
    transform: translateY(4px) rotate(-40deg);
    // background-color: var(--color-primary);
  }

  .clear {
    clear: both;
  }
}
</style>
