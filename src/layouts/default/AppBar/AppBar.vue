<template>
  <v-app-bar flat color="primary">
    <v-app-bar-title>
      <div class="d-flex">
        <div>
          <v-icon icon="mdi-github" />
          Repo Search App
        </div>
        <menus />
      </div>
    </v-app-bar-title>
    <template #append>
      <drop-down-menu/>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import Menus from "./Menu.vue";
import DropDownMenu from "./DropDownMenu.vue";
</script>
