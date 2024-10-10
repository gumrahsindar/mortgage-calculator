<script setup lang="ts">
import { ref } from 'vue'
import CalcForm from './components/CalcForm.vue'
import CalcResult from './components/CalcResult.vue'
import EmptyResult from './components/EmptyResult.vue'
import CalcResultLayout from './components/CalcResultLayout.vue'

const monthlyRepayment = ref(0)
const totalRepayment = ref(0)
const isResultExist = ref(false)

const handleCalculation = (monthly: number, total: number) => {
  monthlyRepayment.value = monthly
  totalRepayment.value = total
}
</script>

<template>
  <CalcForm
    @toggle-result="(val: boolean) => (isResultExist = val)"
    @calculation="handleCalculation"
  />
  <CalcResultLayout>
    <CalcResult
      v-if="isResultExist"
      :monthlyRepayment="monthlyRepayment"
      :totalRepayment="totalRepayment"
    />
    <EmptyResult v-if="!isResultExist" />
  </CalcResultLayout>
</template>

<style lang="scss">
@use './styles/variables' as *;

body {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $slate-100;
  max-width: calc(100vw - (2.5rem * 2));
  margin-inline: auto;
  min-height: 100vh;
  min-height: 100dvh;

  @media (max-width: 64rem) {
    padding-block: 40px;
  }

  @media (max-width: 40rem) {
    padding-block: 0;
    max-width: 100%;
  }
}

#app {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: $white;
  border-radius: 24px;
  max-width: 63rem;

  @media (max-width: 64rem) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 40rem) {
    height: 100vh;
    height: 100dvh;
    border-radius: 0;
  }
}
</style>
