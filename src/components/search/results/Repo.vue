<template>
  <v-card class="mt-6">
    <v-container class="repo-container">
      <v-row class="text-body-2" align="center">
        <v-col cols="2">
          <div><a :href="props.repo.repoUrl" target="_blank" class="text-body-1">{{ props.repo.repoName }}</a></div>
          <div>{{ props.repo.repoFullName }}</div>
        </v-col>
        <v-col cols="2">
          <div>Stars: {{props.repo.stars}}</div>
          <div>Watchers: {{props.repo.watchers}}</div>
        </v-col>
        <v-col cols="1">
          <div>Forks: {{props.repo.forks}}</div>
          <div>Issues: {{props.repo.issues}}</div>
        </v-col>
        <v-col cols="2">
          <div>{{props.repo.description}}</div>
        </v-col>
        <v-col cols="1">
          <v-chip size="small" v-if="!!props.repo.language">{{props.repo.language}}</v-chip>
        </v-col>
        <v-col cols="2" class="text-end">
          <div>Created at: {{props.repo.createdAt.toLocaleDateString()}}</div>
          <div>Updated at: {{props.repo.updatedAt.toLocaleDateString()}}</div>
        </v-col>
        <v-col cols="2">
          <div class="d-flex justify-space-between align-center">
            <span>By: <a :href="props.repo.ownerUrl" target="_blank">{{props.repo.ownerName}}</a></span>
            <span>
              <v-avatar>
                <a :href="props.repo.ownerUrl" target="_blank">
                  <img loading="lazy" :src="props.repo.ownerPicture" width="40"/>
                </a>
              </v-avatar>
            </span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { Repo } from "@/types/Repo";
import { defineProps } from "vue";
export interface RepoProps {
  repo: Repo;
}
const props = defineProps<RepoProps>();
</script>

<style lang="scss">
  .repo-container {
    a {
      color: black;
      text-decoration: none;
      font-weight: 500;
    }
  }
</style>