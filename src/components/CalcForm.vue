<script setup lang="ts">
import InputNumber from './InputNumber.vue'
import FormButton from './FormButton.vue'
import { useForm } from 'vee-validate'
import { FormSchema, schema } from '../lib/schemas/form-schema'
import {
  calculateInterestOnlyMortgage,
  calculateRepaymentMortgage,
} from '../lib/calculations'
import MortgageTypeItem from './MortgageTypeItem.vue'
import FormError from './FormError.vue'

// emits & props
const emit = defineEmits(['calculation', 'toggle-result'])

// form setup
const { errors, defineField, handleSubmit, resetForm } = useForm<FormSchema>({
  validationSchema: schema,
})

const [mortgageAmount, mortgageAmountAttrs] = defineField('mortgageAmount')
const [mortgageTerm, mortgageTermAttrs] = defineField('mortgageTerm')
const [interestRate, interestRateAttrs] = defineField('interestRate')
const [mortgageType, mortgageTypeAttrs] = defineField('mortgageType')

// form submission
const onSubmit = handleSubmit((values: FormSchema) => {
  const amount = values.mortgageAmount
  const term = values.mortgageTerm
  const rate = values.interestRate.toFixed(2)
  let monthlyResult = 0
  let totalResult = 0

  if (values.mortgageType === 'fixed') {
    monthlyResult = calculateRepaymentMortgage(amount, +rate, term)
    totalResult = monthlyResult * term * 12
  } else if (values.mortgageType === 'interest-only') {
    monthlyResult = calculateInterestOnlyMortgage(amount, +rate)
    totalResult = monthlyResult * term * 12
  }

  emit('calculation', monthlyResult, totalResult)
  emit('toggle-result', true)
})

// clear form
const reset = () => {
  resetForm()
  emit('toggle-result', false)
}
</script>

<template>
  <section id="calc-form">
    <div class="form-header">
      <h1 class="text-xl text-slate-900">Mortgage Calculator</h1>
      <button @click.stop="reset" class="text-md text-slate-700 text-underline">
        Clear All
      </button>
    </div>

    <form @submit="onSubmit" class="form">
      <div class="form-line">
        <InputNumber
          class="mortgage-amount"
          v-model.trim="mortgageAmount"
          v-bind="mortgageAmountAttrs"
          :errors="errors.mortgageAmount"
          prefix="£"
          ariaLabelledby="mortgage-amount"
          inputId="mortgage-amount"
          inputFor="mortgage-amount"
          label="Mortgage Amount"
        />
        <FormError :error="errors.mortgageAmount" />
      </div>

      <div class="form-line">
        <div>
          <InputNumber
            v-model.trim="mortgageTerm"
            v-bind="mortgageTermAttrs"
            :errors="errors.mortgageTerm"
            suffix="years"
            ariaLabelledby="mortgage-term"
            inputId="mortgage-term"
            inputFor="mortgage-term"
            label="Mortgage Term"
          />
          <FormError :error="errors.mortgageTerm" />
        </div>
        <div>
          <InputNumber
            v-model.trim="interestRate"
            v-bind="interestRateAttrs"
            :errors="errors.interestRate"
            suffix="%"
            ariaLabelledby="interest-rate"
            inputId="interest-rate"
            inputFor="interest-rate"
            label="Interest Rate"
            step="0.01"
          />
          <FormError :error="errors.interestRate" />
        </div>
      </div>

      <div class="form-line">
        <fieldset>
          <legend class="text-md text-slate-700">Mortgage Type</legend>
          <div class="mortgage-type">
            <MortgageTypeItem
              v-model="mortgageType"
              v-bind="mortgageTypeAttrs"
              value="fixed"
              label="Repayment"
              radioId="fixed"
              radioFor="fixed"
            />
            <MortgageTypeItem
              v-model="mortgageType"
              v-bind="mortgageTypeAttrs"
              value="interest-only"
              label="Interest Only"
              radioId="interest-only"
              radioFor="interest-only"
            />
          </div>
        </fieldset>
        <FormError :error="errors.mortgageType" />
      </div>

      <FormButton />
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

    :global(label),
    :global(legend) {
      margin-bottom: 12px;
    }

    .mortgage-type {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
}
</style>
