<script setup lang="ts">
import calcIcon from '../assets/images/icon-calculator.svg'
</script>

<template>
  <section id="calc__form">
    <div class="form__header">
      <h1>Mortgage Calculator</h1>
      <button>Clear All</button>
    </div>

    <form>
      <div class="form__line">
        <label for="mortgage-amount">Mortgage Amount</label>
        <div class="input__wrapper">
          <div class="input__prefix">$</div>
          <input type="number" id="mortgage-amount" />
        </div>
      </div>
      <div class="form__line">
        <div>
          <label for="mortgage-term">Mortgage Term</label>
          <input type="number" id="mortgage-term" />
        </div>
        <div>
          <label for="interest-rate">Interest Rate</label>
          <input type="number" id="interest-rate" />
        </div>
      </div>
      <div class="form__line">
        <fieldset>
          <legend>Mortgage Type</legend>
          <div>
            <input type="radio" id="fixed" name="mortgage-type" />
            <label for="fixed">Repayment</label>
          </div>
          <div>
            <input type="radio" id="interest-only" name="mortgage-type" />
            <label for="interest-only">Interest Only</label>
          </div>
        </fieldset>
      </div>
      <button>
        <img :src="calcIcon" alt="Calculate" />
        Calculate Repayments
      </button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
#calc__form {
  padding: 40px;
}
</style>
