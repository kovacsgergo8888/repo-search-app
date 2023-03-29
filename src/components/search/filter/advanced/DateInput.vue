<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col>
          <v-radio-group
            inline
            :model-value="is"
            @update:model-value="$emit('update:is', $event)"
          >
            <template #label>
              <v-icon :icon="icon" />
              {{ label }}
            </template>
            <v-radio label="before" value="<" />
            <v-radio label="on or before" value="<=" />
            <v-radio label="after" value=">" />
            <v-radio label="on or after" value=">=" />
            <v-radio label="between" value="range" />
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="9">
          <v-text-field
            readonly
            variant="outlined"
            :model-value="formattedDate"
          />
        </v-col>
        <v-col cols="3">
          <v-menu v-model="isDatePickerOpen">
            <template #activator="{ props }">
              <v-btn v-bind="props" icon="mdi-calendar" variant="flat" />
            </template>
            <date-picker
              inline
              :range="isRange"
              :model-value="datePickerValue"
              @update:model-value="selectDate"
              :enable-time-picker="false"
            />
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
export interface DateInputProps {
  icon: string;
  label: string;
  is: string;
  value: Date | null;
  min: Date | null;
  max: Date | null;
}
const props = defineProps<DateInputProps>();
const emit = defineEmits([
  "update:is",
  "update:value",
  "update:min",
  "update:max",
]);
const isDatePickerOpen = ref(false);
const isRange = computed(() => props.is === "range");
const rangeValue = computed(() => !props.min && !props.max ? null : [props.min, props.max])
const rangeFormattedValue = computed(() => props.min && props.max ? `${props.min.toLocaleDateString()} - ${props.max.toLocaleDateString()}` : "");
const formattedValue = computed(() => props.value ? props.value.toLocaleDateString() : "");
const datePickerValue = computed(() => isRange.value ? rangeValue.value : props.value);
const formattedDate = computed(() => isRange.value ? rangeFormattedValue.value : formattedValue.value);
const selectDate = (value: Date | [Date, Date]) => {
  if (Array.isArray(value)) {
    const [min, max] = value;
    emit("update:min", min);
    emit("update:max", max);
  } else {
    emit("update:value", value);
  }
  isDatePickerOpen.value = false;
};
</script>
