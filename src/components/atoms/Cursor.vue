<script setup lang="ts">
onMounted(() => {
  const cursor = document.querySelector('.cursor')

  if (cursor) {
    document.addEventListener('mousemove', (event) => {
      const xPos = event.pageX
      const yPos = event.pageY
      cursor.style.left = xPos - 5 + 'px'
      cursor.style.top = yPos - 5 + 'px'
    })
  }
})
</script>

<template>
  <div class="cursor" ref="cursor">
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_343_183)">
        <path
          d="M2.00217 3.19468C1.94662 2.26929 2.97137 1.67765 3.74501 2.18845L11.6466 7.40547C12.5488 8.00117 12.1733 9.4025 11.0941 9.46728L7.49135 9.68353C7.13788 9.70474 6.81503 9.89114 6.61992 10.1866L4.63128 13.1986C4.03558 14.1008 2.63425 13.7253 2.56947 12.6461L2.00217 3.19468Z"
          fill="white"
          fill-opacity="0.4"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_343_183"
          x="0.5"
          y="0.5"
          width="19.1533"
          height="20.7051"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="3" dy="3" />
          <feGaussianBlur stdDeviation="2.25" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_343_183" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_343_183"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<style lang="scss">
.cursor {
  z-index: 100000;
  position: absolute;
  // mix-blend-mode: difference;
  width: 25px;
  height: 25px;
  // border-radius: 50%;
  pointer-events: none;
  // background: white;
  // scale: 1;

  @media (max-width: 1024px) {
    display: none;
  }
}
</style>
