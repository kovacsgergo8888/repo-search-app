<template>
  <v-card :loading="repoStore.loading" color="grey-lighten-4">
    <v-container>
      <v-form
        ref="searchForm"
        :disabled="repoStore.loading"
        @submit.prevent="search"
      >
        <v-row class="justify-space-between">
          <v-col cols="3">
            <v-text-field
              label="Search by"
              variant="outlined"
              width="200"
              v-model="filterStore.keyword"
              :rules="[keywordRule]"
            />
          </v-col>
          <v-col cols="5" class="d-flex">
              <span class="mt-4">In:</span>
              <v-checkbox
                label="name"
                inline
                v-model="filterStore.searchIn.name"
                :rules="[searchInRequiredRule]"
              />
              <v-checkbox
                label="description"
                inline
                v-model="filterStore.searchIn.description"
                :rules="[searchInRequiredRule]"
              />
              <v-checkbox
                label="readme"
                inline
                v-model="filterStore.searchIn.readme"
                :rules="[searchInRequiredRule]"
              />
          </v-col>
          <v-col cols="2" align-self="center">
            <div
              class="d-flex justify-space-between align-center mb-6"
              :style="{
                visibility: filterStore.advanced ? 'hidden' : 'visible',
              }"
            >
              <actions
                :loading="repoStore.loading"
                @search="search"
                @reset="reset"
              />
            </div>
          </v-col>
          <v-col align="end" align-self="center" class="mb-6">
            <v-btn size="small" @click="toggleAdvanced">
              Advanced
              <v-icon :icon="advancedIcon" />
            </v-btn>
          </v-col>
        </v-row>
        <advanced @search="search" @reset="reset" />
      </v-form>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from "vue";
import { useFilterStore } from "@/store/filterStore";
import { useRepoStore } from "@/store/repoStore";
import { keywordRule, searchInRequiredRule } from "./Rules"
import Advanced from "./Advanced.vue";
import Actions from "./Actions.vue";
const filterStore = useFilterStore();
const repoStore = useRepoStore();
const searchForm = ref("searchForm") as any;
const reset = () => {
  searchForm.value.reset();
  filterStore.$reset();
  repoStore.$reset();
  nextTick(() => {
    searchForm.value.resetValidation();
  });
};
const search = async () => {  
  const { valid } = await searchForm.value.validate();

  if (valid) {
    repoStore.fetchRepos();
  }
};
const advancedIcon = computed(() => {
  return filterStore.advanced ? "mdi-chevron-up" : "mdi-chevron-down";
});
const toggleAdvanced = async () => {
  filterStore.toggleAdvanced()
  await searchForm.value.resetValidation()
}
</script>
