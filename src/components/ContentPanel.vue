<script setup>
    import QuizPane from './QuizPane.vue'
</script>


<template>
    <div class="item">
        <h3>Which type of rock is created by intense heat AND pressure?</h3>
        <button>Sedimentary</button>
        <button>Metamorphic</button>
        <button>Diamond</button>
        <button>Igneous long answer</button>
    </div>


   
</template>


<style scoped>
.item {
  /* display: flex; */
  padding: 2rem;
  width: 90%;
  margin: auto;
  text-align: center;
}

button {
    padding: 0.5rem;
    margin: 1rem 0 0 0;
    width: 100%;
    font-size: inherit;
    font-family: inherit;
    border: 0;
    background-color: var(--colour-accent);
    transition: 0.4s;
}

@media (hover: hover) {
  button:hover {
    background-color: var(--colour-accent-fade);
    color: inherit;
  }
}

@media (min-width: 1024px) {
    .item {
    margin-top: 0;
    border-left: 2px solid var(--color-border);
    width: 100%;
    }
}

@media (max-width: 500px) {
    .item {
    width: 90%;
    padding: 2rem 0.2rem;
    }
}
</style>

