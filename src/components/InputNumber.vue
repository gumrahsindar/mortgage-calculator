<script setup lang="ts">
const emit = defineEmits(['blur'])
const model = defineModel()
defineProps<{
  errors: string | undefined
  prefix?: string
  suffix?: string
  ariaLabel: string
  inputId: string
  label: string
  inputFor: string
  class?: string
  step?: string
}>()
</script>

<template>
  <div>
    <label class="text-md text-slate-700" :for="inputFor">{{ label }}</label>
    <div class="input-wrapper" :class="{ 'error-state': errors }">
      <div v-if="prefix" class="input-prefix text-lg text-slate-700">
        {{ prefix }}
      </div>
      <input
        :class="class"
        v-model="model"
        type="number"
        @blur="$emit('blur')"
        class="text-lg text-slate-900"
        :id="inputId"
        :aria-label="ariaLabel"
        :step="step"
      />
      <div v-if="suffix" class="input-suffix text-lg text-slate-700">
        {{ suffix }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;

#calc-form {
  .form {
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
  }
}
</style>
