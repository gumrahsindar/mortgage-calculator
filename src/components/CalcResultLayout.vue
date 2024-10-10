<template>
  <section class="calc__result">
    <slot />
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/utilities' as *;

.calc__result {
  padding: 40px;
  background-color: $slate-900;
  border-radius: 0 24px 24px 75px;

  @media (max-width: 64rem) {
    border-radius: 0 0 24px 24px;
  }

  @media (max-width: 40rem) {
    border-radius: 0;
  }
}
</style>
