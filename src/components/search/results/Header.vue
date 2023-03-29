<template>
  <v-row>
    <v-col cols="12" sm="6" lg="3">
      <v-radio-group inline v-model="filterStore.sortBy" label="Sort by" @update:model-value="repoStore.fetchRepos" hide-details>
        <v-radio label="default" value="default" />
        <v-radio label="stars" value="stars" />
        <v-radio label="forks" value="forks" />
      </v-radio-group>
    </v-col>
    <v-col cols="12" sm="4" lg="6">
      <v-radio-group inline v-model="filterStore.orderBy" label="Order by" @update:model-value="repoStore.fetchRepos" hide-details>
        <v-radio label="asc" value="asc" />
        <v-radio label="desc" value="desc" />
      </v-radio-group>
    </v-col>
    <v-col class="mb-2" align-self="end" cols="12" sm="2" lg="3">
      <div class="text-sm-end">
        Total: {{ repoStore.totalCount }}
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useRepoStore } from "@/store/repoStore";
import { useFilterStore } from "@/store/filterStore";
const repoStore = useRepoStore();
const filterStore = useFilterStore();
</script>
