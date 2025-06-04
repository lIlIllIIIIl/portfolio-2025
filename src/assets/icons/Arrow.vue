<script setup>
const props = defineProps(['delay'])
</script>

<template>
  <svg viewBox="0 0 40 40" width="40" height="40">
    <line
      x1="0"
      y1="40"
      x2="40"
      y2="0"
      class="arrow-body"
      :style="{ animationDelay: `${props.delay}s` }"
    />

    <line
      x1="40"
      y1="0"
      x2="0"
      y2="0"
      class="arrow-arm left"
      :style="{ animationDelay: `${`${0.5 + props.delay}s`}` }"
    />

    <line
      x1="40"
      y1="0"
      x2="40"
      y2="40"
      class="arrow-arm right"
      :style="{ animationDelay: `${`${0.5 + props.delay}s`}` }"
    />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  margin: 20px 20px;
  line {
    stroke: #9f9f9f;
  }

  .arrow-body {
    stroke-dasharray: 70.71; /* √(50² + 50²) */
    stroke-dashoffset: 70.71;
    animation: drawBody 0.6s ease-in forwards;
    stroke-width: 2;
  }

  .arrow-arm {
    stroke-width: 4;
    stroke-dasharray: 50;
    stroke-dashoffset: 50;
    animation: drawArm 0.4s ease-out forwards;
  }
}

@keyframes drawBody {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes drawArm {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
