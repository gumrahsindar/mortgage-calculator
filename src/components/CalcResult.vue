<script setup lang="ts"></script>

<template>
  <section class="calc__result">
    <h2 class="calc__result__heading text-xl text-white">Your results</h2>
    <p class="calc__result__desc text-md text-slate-300">
      Your results are shown below based on the information you provided. To
      adjust the results, edit the form and click “calculate repayments” again.
    </p>
    <div class="calc__result__card">
      <p class="calc__result__monthly-label">Your monthly repayments</p>
      <p class="calc__result__monthly-repayments text-yellow text-2xl">
        £1,797.74
      </p>
      <hr />
      <p class="calc__result__total-label">Total you'll repay over the term</p>
      <p class="calc__result__total-repayments text-white text-xl">
        £539,322.94
      </p>
    </div>
  </section>
</template>

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

  h2 {
    margin-bottom: 16px;
  }

  &__desc {
    margin-bottom: 40px;
  }

  &__card {
    border-radius: 8px;
    padding: 32px;
    border-top: 4px solid $yellow;
    background-color: rgba(0, 0, 0, 25%);
  }

  &__monthly-label,
  &__total-label {
    margin-bottom: 8px;
    font-size: 1rem;
    line-height: $line-height-150;
    letter-spacing: $letter-spacing-normal;
    color: $slate-300;
  }

  hr {
    margin-block: 32px;
    border-color: rgba(154, 190, 213, 25%);
  }
}
</style>
