<template>
  <v-card v-if="repoStore.repos.length" class="mt-6" color="grey-lighten-4" :loading="repoStore.loading">
    <v-container>
      <Header/>
      <repo
        v-for="repo in repoStore.repos"
        :key="`repo_${repo.id}`"
        :repo="repo"
      />
      <pagination/>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { useRepoStore } from "@/store/repoStore";
import Repo from "./Repo.vue";
import Pagination from "./Pagination.vue";
import Header from "./Header.vue";
const repoStore = useRepoStore();
</script>
