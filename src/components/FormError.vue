<script setup lang="ts">
defineProps<{
  error: string | undefined
}>()
</script>

<template>
  <p style="margin-top: 4px" class="text-error text-sm">
    {{ error }}
  </p>
</template>
