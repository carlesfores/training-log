<script setup>
import { useRouter } from "vue-router";
import Action from "@/components/action.vue";

const router = useRouter();

const actions = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Profile",
    path: "/profile",
  },
];

const goTo = (path) => {
  router.push({ path });
};
</script>

<template>
  <nav class="bottom-nav">
    <action
      v-for="(action, index) in actions"
      :key="index"
      @click="goTo(action.path)"
    >
      {{ action.label }}
    </action>
  </nav>
</template>

<style lang="scss" scoped>
.bottom-nav {
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 12px;
}
</style>
