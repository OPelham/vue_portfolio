<script setup>
import Greeter from './components/Greeter.vue';
import TheWelcome from './components/TheWelcome.vue'
import ContentPanel from './components/ContentPanel.vue';
</script>

<template>
  <header>
    <img alt="Logo" class="logo" src="./assets/check.png" width="125" height="125" />

    <div class="wrapper">
      <Greeter msg="Quiz time!" />
    </div>
  </header>

  <main>
    <ContentPanel />
  </main>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.accent-colour {
  text-decoration: none;
  color: var(--colour-accent);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: var(--colour-accent-fade);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 0 6rem 0;
  }

  header {
    display: flex;
    place-items: center;
    margin: auto;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 2rem;
  }
}
</style>
