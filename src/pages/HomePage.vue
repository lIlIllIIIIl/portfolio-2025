<script setup>
import Project from '@/components/atoms/Project.vue'
import projects from '@/store/projects.json'

import infiniteScroll from '@/composable/infiniteScroll'

infiniteScroll()
console.log(projects)
</script>

<template>
  <section class="homepage-container">
    <ul class="cards">
      <li class="project"><Project :project="projects.artchive" /></li>
      <li class="project"><Project :project="projects.uso" /></li>
      <li class="project"><Project :project="projects.pimpim" /></li>
      <li><span class="blank" /></li>
      <li class="name">
        <span>Alexis Kessab</span>
        <span>Fullstack Developer</span>
      </li>
      <li><span class="blank" /></li>
      <li class="project"><Project :project="projects.ines" /></li>
      <li class="project"><Project :project="projects.aurora" /></li>
      <li class="project"><Project :project="projects.cfdoc" /></li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.homepage-container {
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  //
  // overflow: scroll;
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .cards {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0%;
    right: 0%;
    padding: 0;

    li {
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: center;
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      border-radius: 0.8rem;

      &.name {
        // height: 8rem;
        height: 40px;
        // padding: 100px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      &.blank {
        height: 40px;
      }

      &.project {
        display: flex;
        justify-content: center;
        //
        height: 105px;

        div {
          background-color: #9d7cce;
          height: 105px;
          width: 105px;
        }
      }
    }
  }

  .homepage-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    //
    margin: 32px 0;

    .name {
      color: white;
    }
  }
}
</style>
