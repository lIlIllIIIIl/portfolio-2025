<script setup>
import InterestsPage from '@/components/about/InterestsPage.vue'
import ExperiencesPage from '@/components/about/ExperiencesPage.vue'
import ContactPage from '@/components/about/ContactPage.vue'
</script>

<template>
  <section class="about-intro" data="intro">
    <p>
      I'm Alexis Kessab, a fullstack developer, currently traveling the world while working
      freelance.
    </p>

    <span> Available starting May 2025</span>
  </section>

  <InterestsPage />

  <ExperiencesPage />

  <ContactPage />
</template>

<style lang="scss" scoped>
.about-intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p,
  span {
    width: 220px;
  }

  p {
    font-size: 16px;
    color: white;
  }
}
</style>
