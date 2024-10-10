<script setup lang="ts">
const emit = defineEmits(['blur'])
const model = defineModel()
defineProps<{
  value: string
  label: string
  radioId: string
  radioFor: string
}>()
</script>

<template>
  <div class="mortgage-type-item">
    <input
      v-model="model"
      :value="value"
      @blur="$emit('blur')"
      class="text-lg text-slate-900"
      type="radio"
      :id="radioId"
      name="mortgage-type"
    />
    <label class="text-lg text-slate-900" :for="radioFor">{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
#calc-form {
  .form {
    .mortgage-type {
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
  }
}
</style>
