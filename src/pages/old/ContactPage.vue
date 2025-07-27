<script setup>
const mouseX = ref(0)
const mouseY = ref(0)
const showCopy = ref(false)

function copyMail() {
  const copyText = document.querySelector('.contact-copy')

  navigator.clipboard
    .writeText('alexis.kessab@gmail.com')
    .then(() => {
      console.log('Mail copied to clipboard.')

      copyText.textContent = 'copied!'

      setTimeout(() => {
        copyText.textContent = 'Click to copy!'
      }, 4000)
    })
    .catch((err) => {
      console.log('Something went wrong.', err)
    })
}

function handleMouseMove(event) {
  mouseX.value = event.clientX
  mouseY.value = event.clientY - 40
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <div class="contact-container">
    <div class="contact-main">
      <h1 class="contact-title">Wanna work with me?</h1>
      <p class="contact-paragraph">
        Feel free to reach out if you want to talk project, freelance, or anything!
      </p>
    </div>

    <div class="contact-mail">
      <span
        @mouseenter="showCopy = true"
        @mouseleave="showCopy = false"
        class="contact-copy"
        :class="showCopy ? 'show' : 'hide'"
        :style="{ top: mouseY + 'px', left: mouseX + 'px' }"
      >
        Click to copy!
      </span>

      <h1 @click="copyMail" @mouseenter="showCopy = true" @mouseleave="showCopy = false">
        <span> alexis.kessab </span>
        <span> @gmail.com </span>
      </h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 16vh;

  @media (max-width: 1024px) {
    margin-left: 6vw;
  }

  .contact-main {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .contact-paragraph {
      max-width: 500px;
      text-transform: uppercase;

      @media (max-width: 1024px) {
        max-width: 280px;
      }
    }
  }

  .contact-mail {
    display: flex;
    justify-content: center;
    //
    -webkit-user-select: none;
    user-select: none;

    &:hover {
      cursor: pointer;
    }

    .contact-copy {
      position: absolute;
      background-color: var(--color-background);

      &.hide {
        opacity: 0;
      }

      &.show {
        opacity: 1;
      }
    }
  }
}
</style>
