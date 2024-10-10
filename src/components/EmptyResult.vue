<script setup lang="ts">
import illustrationEmpty from '../assets/images/illustration-empty.svg'
</script>

<template>
  <div class="calc__result__wrapper">
    <img :src="illustrationEmpty" alt="calculator" width="192" height="192" />
    <h2 class="text-xl text-white">Results shown here</h2>
    <p class="text-md text-slate-300">
      Complete the form and click “calculate repayments” to see what your
      monthly repayments would be.
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/utilities' as *;

.calc__result {
  &__wrapper {
    height: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
}
</style>
