<template>
  <v-app>
    <default-bar />

    <default-view />
    <snackbar/>
  </v-app>
</template>

<script lang="ts" setup>
import DefaultBar from "./AppBar/AppBar.vue";
import DefaultView from "./View.vue";
import Snackbar from "./Snackbar.vue";
</script>
