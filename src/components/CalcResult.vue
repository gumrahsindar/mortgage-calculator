<script setup lang="ts"></script>

<template>
  <section id="calc__result">
    <h2>Your results</h2>
    <p>
      Your results are shown below based on the information you provided. To
      adjust the results, edit the form and click “calculate repayments” again.
    </p>
    <div class="results__card">
      <div>
        <p>Your monthly repayments</p>
        <p>£1,797.74</p>
      </div>
      <div>
        <p>Total you'll repay over the term</p>
        <p>£539,322.94</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
#calc__result {
  padding: 40px;
  background-color: $slate-900;
  border-radius: 0 24px 24px 75px;
}
</style>
