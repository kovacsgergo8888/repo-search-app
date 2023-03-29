<template>
  <v-btn
    size="small"
    color="primary"
    fab
    @click="$emit('search')"
    :loading="loading"
  >
    <v-icon icon="mdi-magnify" />
  </v-btn>
  <v-btn size="small" color="primary" @click="$emit('reset')"> Reset </v-btn>
</template>

<script setup lang="ts">
export interface ActionsProps {
  loading: boolean
}
defineProps<ActionsProps>()
defineEmits(['search', 'reset'])
</script>