<script setup>
    import QuizPane from './QuizPane.vue'
</script>


<template>
    <div class="item">
        <h2>Which type of rock is created by intense heat AND pressure?</h2>
        <button>Sedimentary</button>
        <button>Metamorphic</button>
        <button>Diamond</button>
        <button>Igneous long answer</button>
    </div>

</template>


<style scoped>
.item {
  padding: 3rem 3.5rem 5rem 3.5rem;
  width: 90%;
  margin: auto;
  text-align: center;
}

button {
    padding: 0.7rem 0.5rem;
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

