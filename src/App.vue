<template>
  <body class="wrapper">
    <!-- <top-bar></top-bar> -->
    <router-view></router-view>
  </body>
</template>


<script>
import { defineComponent } from '@vue/composition-api';
// import TopBar from './components/TopBar.vue';
export default defineComponent({
  // components: {
  //   TopBar,
  // }
})
</script>


<style lang="scss">
@import "./styles/main.scss";

.wrapper {
  font-family: 'Poppins', sans-serif;
  background-color: var(--white);

  &__header {
    margin-top: 30px;
    padding: 0 20px;
  }

  &__main {
    margin: 40px 0;
    padding: 0 20px;
  }
}
</style>
