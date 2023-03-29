<template>
  <div class="menus d-flex">
    <router-link
      :to="{ name: item.name }"
      v-for="item in menu"
      :key="`menu_${item.name}`"
      class="ml-4 text-white"
      :style="{'text-decoration': item.isActive ? 'underline' : 'none'}"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

interface Item {
  name: string;
  isActive: boolean;
}

const items = [
  {
    name: "Search",
  },
  {
    name: "History",
  },
];

const menu = computed<Item[]>(() =>
  items.map((item) => ({
    ...item,
    isActive: router.currentRoute.value.name === item.name,
  }))
);
</script>
