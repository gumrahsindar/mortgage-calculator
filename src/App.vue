<script setup lang="ts"></script>

<template>
  <h1>Hello World</h1>
</template>

<style lang="scss">
#app {
  display: grid;
  place-items: center;
  height: 100vh;
  outline: 1px solid red;
  padding-inline: 13.5rem;

  @media (max-width: 50rem) {
    padding: 2.5rem;
  }

  @media (max-width: 30rem) {
    padding: 1.5rem;
  }
}
</style>
