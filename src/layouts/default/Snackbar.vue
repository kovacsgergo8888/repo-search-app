<template>
  <v-snackbar v-model="notification.show" :color="notification.color">
    {{ notification.message }}
  </v-snackbar>
</template>

<script setup lang="ts">
import { useNotificationStore } from "@/store/notificationStore";

const notification = useNotificationStore();
</script>
