<template>
  <v-menu>
    <template #activator="{props}">
      <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
    </template>
    <v-list>
      <v-list-item>
        Page 1
      </v-list-item>
      <v-list-item>
        Page 2
      </v-list-item>
      <v-list-item>
        Mobile
      </v-list-item>
    </v-list>
  </v-menu>
</template>