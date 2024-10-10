<script setup lang="ts">
import calcIcon from '../assets/images/icon-calculator.svg'
</script>

<template>
  <button class="text-lg text-slate-900">
    <img :src="calcIcon" alt="Calculate" />
    Calculate Repayments
  </button>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;

button {
  border: none;
  border-radius: 999px;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: $yellow;
  color: $slate-900;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: lighten($color: $yellow, $amount: 15%);
  }

  img {
    width: 24px;
    height: 24px;
  }
}
</style>
