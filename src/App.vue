<script setup lang="ts">
import CalcForm from './components/CalcForm.vue'
import CalcResult from './components/CalcResult.vue'
</script>

<template>
  <CalcForm />
  <CalcResult />
</template>

<style lang="scss">
@use './styles/variables' as *;

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: $slate-100;
  padding-inline: 13.5rem;

  @media (max-width: 50rem) {
    padding: 2.5rem;
  }

  @media (max-width: 30rem) {
    padding: 1.5rem;
  }
}

#app {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: $white;
  border-radius: 24px;

  @media (max-width: 50rem) {
    grid-template-columns: 1fr;
  }
}
</style>
