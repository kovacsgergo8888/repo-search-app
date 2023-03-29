<template>
  <v-pagination
    v-model="filterStore.page"
    :length="repoStore.numberOfPages"
    @update:model-value="paging"
    total-visible="7"
  />
</template>

<script setup lang="ts">
import { useFilterStore } from "@/store/filterStore";
import { useRepoStore } from "@/store/repoStore";
const repoStore = useRepoStore();
const filterStore = useFilterStore();
let debounceTimer: number;

const paging = () => {
  window.clearTimeout(debounceTimer)
  debounceTimer = window.setTimeout(async () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
    await repoStore.fetchRepos()
  }, 300)
}
</script>
