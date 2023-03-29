<template>
<div v-show="filterStore.advanced">
  <v-row v-show="filterStore.advanced">
    <v-col>
      <v-text-field label="User name" variant="outlined" v-model="filterStore.username" :rules="[advancedTextRule]" />
      <v-text-field label="Organization" variant="outlined" v-model="filterStore.organization" :rules="[advancedTextRule]"/>
    </v-col>
    <v-col>
      <chip-combobox v-model="filterStore.language" label="Language"/>
    </v-col>
    <v-col>
      <chip-combobox v-model="filterStore.topic" label="Topic"/>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="6">
      <range-input
        icon="mdi-star"
        label="Stars"
        v-model:is="filterStore.starsIs"
        v-model:value="filterStore.starsValue"
        v-model:min="filterStore.starsMin"
        v-model:max="filterStore.starsMax"
      />
      </v-col>
      <v-col cols="6">
        <date-input
          icon="mdi-calendar"
          label="Created"
          v-model:is="filterStore.createdIs"
          v-model:value="filterStore.createdValue"
          v-model:min="filterStore.createdMin"
          v-model:max="filterStore.createdMax"
        />
      </v-col>
      <v-col cols="6">
        <range-input
          class="mt-6"
          icon="mdi-swap-vertical"
          label="Size"
          v-model:is="filterStore.sizeIs"
          v-model:value="filterStore.sizeValue"
          v-model:min="filterStore.sizeMin"
          v-model:max="filterStore.sizeMax"
          />
      </v-col>
    <v-col cols="2" offset="4" align-self="end" class="d-flex justify-space-between">
        <actions
          :loading="repoStore.loading"
          @search="advancedSearch"
          @reset="$emit('reset')"
        />
    </v-col>
  </v-row>
</div>
</template>

<script setup lang="ts">
import { useFilterStore } from "@/store/filterStore";
import { useRepoStore } from "@/store/repoStore";
import { useNotificationStore } from "@/store/notificationStore";
import { advancedTextRule } from "./Rules";
import ChipCombobox from "./advanced/ChipCombobox.vue";
import RangeInput from "./advanced/RangeInput.vue";
import DateInput from "./advanced/DateInput.vue";
import Actions from "./Actions.vue";
const filterStore = useFilterStore();
const repoStore = useRepoStore();
const notificationStore = useNotificationStore();
const emit = defineEmits(['search', 'reset'])
const advancedSearch = () => {
  if (!filterStore.isAnyInputUsed) {
    notificationStore.setNotification({
      message: "Use at least one filter option please!",
      color: "error"
    })
    return;
  }
  emit('search')
}
</script>
