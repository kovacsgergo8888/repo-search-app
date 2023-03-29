<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col>
          <v-radio-group inline :model-value="is" @update:model-value="$emit('update:is', $event)">
            <template #label>
              <v-icon :icon="icon"/>
              {{ label }}
            </template>
            <v-radio label="equal" value="" />
            <v-radio label="greater than" value=">="/>
            <v-radio label="less than" value="<=" />
            <v-radio label="between" value="range" />
          </v-radio-group>
        </v-col>
      </v-row>
      <template v-if="is === 'range'">
        <v-row dense>
          <v-col>
            <v-range-slider density="comfortable" :model-value="range" :min="0" :max="10000" :step="10" @update:model-value="updateRange" />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <v-text-field variant="outlined" density="compact" :model-value="min?.toString()" @update:model-value="$emit('update:min', +$event)" type="number"/>
          </v-col>
          <v-col>
            <v-text-field variant="outlined" density="compact" :model-value="max?.toString()" @update:model-value="$emit('update:max', +$event)" type="number"/>
          </v-col>
        </v-row>
      </template>
      <v-row v-else>
        <v-col>
          <v-text-field variant="outlined" label="number" type="number" @update:model-value="updateValue"/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script setup lang="ts">
import {computed} from "vue";
export interface RangeInputProps {
  icon: string;
  label: string;
  is: string;
  value: number | null;
  min: number | null;
  max: number | null;
}
const props = defineProps<RangeInputProps>();
const emit = defineEmits(["update:is", "update:value", "update:min", "update:max"]);
const range = computed(() => [props.min as number, props.max as number])

const updateValue = (value: string) => {
  emit('update:value', value !== "" ? +value : null)
}

const updateRange = ([min, max]: [number, number]) => {
  emit('update:min', min)
  emit('update:max', max)
}
</script>
