<script setup lang="ts">
import calcIcon from '../assets/images/icon-calculator.svg'
import { useForm } from 'vee-validate'
import { schema } from '../lib/schemas/form-schema'

const { values, errors, defineField, handleSubmit } = useForm({
  validationSchema: schema,
})

const [mortgageAmount, mortgageAmountAttrs] = defineField('mortgageAmount')
const [mortgageTerm, mortgageTermAttrs] = defineField('mortgageTerm')
const [interestRate, interestRateAttrs] = defineField('interestRate')
const [mortgageType, mortgageTypeAttrs] = defineField('mortgageType')

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
})
</script>

<template>
  <section id="calc-form">
    <pre>values: {{ values }}</pre>
    <pre>errors: {{ errors }}</pre>
    <div class="form-header">
      <h1 class="text-xl text-slate-900">Mortgage Calculator</h1>
      <button class="text-md text-slate-700 text-underline">Clear All</button>
    </div>

    <form @submit="onSubmit" class="form">
      <div class="form-line">
        <label class="text-md text-slate-700" for="mortgage-amount"
          >Mortgage Amount</label
        >
        <div class="input-wrapper" aria-labelledby="Mortgage amount">
          <div class="input-prefix text-lg text-slate-700">£</div>
          <input
            type="number"
            v-model.trim="mortgageAmount"
            v-bind="mortgageAmountAttrs"
            class="mortgage-amount text-lg text-slate-900"
            id="mortgage-amount"
            aria-label="Mortgage amount in pounds"
          />
        </div>
        <p style="margin-top: 12px" class="text-error text-sm">
          {{ errors.mortgageAmount }}
        </p>
      </div>

      <div class="form-line">
        <div>
          <label class="text-md text-slate-700" for="mortgage-term"
            >Mortgage Term</label
          >
          <div class="input-wrapper">
            <input
              v-model.trim="mortgageTerm"
              v-bind="mortgageTermAttrs"
              class="text-lg text-slate-900"
              type="number"
              id="mortgage-term"
            />
            <div class="input-suffix text-lg text-slate-700">years</div>
          </div>
          <p style="margin-top: 12px" class="text-error text-sm">
            {{ errors.mortgageAmount }}
          </p>
        </div>
        <div>
          <label class="text-md text-slate-700" for="interest-rate"
            >Interest Rate</label
          >
          <div class="input-wrapper">
            <input
              v-model.trim="interestRate"
              v-bind="interestRateAttrs"
              class="text-lg text-slate-900"
              type="number"
              id="interest-rate"
            />
            <div class="input-suffix text-lg text-slate-700">%</div>
          </div>
          <p style="margin-top: 12px" class="text-error text-sm">
            {{ errors.mortgageAmount }}
          </p>
        </div>
      </div>

      <div class="form-line">
        <fieldset>
          <legend class="text-md text-slate-700">Mortgage Type</legend>
          <div class="mortgage-type">
            <div class="mortgage-type-item">
              <input
                v-model.trim="mortgageType"
                v-bind="mortgageTypeAttrs"
                value="fixed"
                class="text-lg text-slate-900"
                type="radio"
                id="fixed"
                name="mortgage-type"
              />
              <label class="text-lg text-slate-900" for="fixed"
                >Repayment</label
              >
            </div>
            <div class="mortgage-type-item">
              <input
                v-model.trim="mortgageType"
                v-bind="mortgageTypeAttrs"
                value="interest-only"
                class="text-lg text-slate-900"
                type="radio"
                id="interest-only"
                name="mortgage-type"
              />
              <label class="text-lg text-slate-900" for="interest-only"
                >Interest Only</label
              >
            </div>
          </div>
        </fieldset>
        <p style="margin-top: 12px" class="text-error text-sm">
          {{ errors.mortgageAmount }}
        </p>
      </div>

      <button class="text-lg text-slate-900">
        <img :src="calcIcon" alt="Calculate" />
        Calculate Repayments
      </button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;

#calc-form {
  padding: 40px;

  .form-header {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    button {
      transition: color 0.3s;

      &:hover {
        color: $slate-900;
      }
    }

    @media (max-width: 40rem) {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }
  }

  .form {
    .form-line {
      margin-bottom: 24px;

      &:nth-child(2) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;

        @media (max-width: 40rem) {
          grid-template-columns: 1fr;
        }
      }

      &:nth-child(3) {
        margin-bottom: 40px;

        @media (max-width: 40rem) {
          margin-bottom: 32px;
        }
      }
    }

    label,
    legend {
      margin-bottom: 12px;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      outline: 1px solid $slate-500;
      border-radius: 4px;

      &:focus-within,
      &:focus,
      &:active {
        outline: 1px solid $yellow;
      }

      .mortgage-amount {
        border-radius: 4px;
        padding-left: 60px;
      }

      &:focus-within .input-prefix {
        background-color: $yellow;
      }
      &:focus-within .input-suffix {
        background-color: $yellow;
      }

      .input-prefix {
        position: absolute;
        height: 100%;
        border-radius: 4px 0 0 4px;
        padding: 12px 16px;
        background-color: $slate-100;
        top: 0;
        left: 0;
        transition: background-color 0.3s;
      }

      .input-suffix {
        position: absolute;
        border-radius: 0 4px 4px 0;
        height: 100%;
        right: 0;
        top: 0;
        padding: 12px 16px 12px 12px;
        background-color: $slate-100;
        transition: background-color 0.3s;
      }

      input {
        padding: 12.5px 16px;
        border: none;
        outline: none;
      }
    }

    .mortgage-type {
      display: flex;
      flex-direction: column;
      gap: 12px;

      &-item {
        padding: 12.5px 16px;
        display: flex;
        align-items: center;
        gap: 16px;
        border: 1px solid $slate-500;
        border-radius: 4px;
        &:focus-within,
        &:focus,
        &:active {
          border: 1px solid $yellow;
          background-color: lighten($color: $yellow, $amount: 40%);
        }

        input {
          width: 24px;
          height: 24px;
          accent-color: rgb(154, 151, 51);
          border-radius: 50%;
          border: none;
          cursor: pointer;

          &:focus-visible {
            accent-color: rgb(154, 151, 51);
            outline: 2px solid $yellow;
          }
        }

        label {
          margin-bottom: 0;
          cursor: pointer;
          width: 100%;
        }
      }
    }

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
  }
}
</style>
