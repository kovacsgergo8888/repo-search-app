<template>
  <v-combobox
    variant="outlined"
    :items="[]"
    multiple
    clearable
    @update:model-value="$emit('update:modelValue', $event)"
    :label="label"
    chips
    closable-chips
  />
</template>
<script setup lang="ts">
export interface ChipComboboxInterface {
  modelValue: string[];
  label: string;
}
defineProps<ChipComboboxInterface>();
defineEmits(["update:modelValue"]);
</script>
