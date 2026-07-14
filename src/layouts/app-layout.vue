<script setup>
import AppHeader from "@/components/app-header.vue";
import AppFooter from "@/components/app-footer.vue";
</script>

<template>
  <div class="app-layout">
    <app-header />
    <slot name="content"></slot>
    <app-footer />
  </div>
</template>

<style lang="scss" scoped>
.app-layout {
  display: grid;
  grid-template-rows: 48px 1fr 64px;
  height: 100%;
}
</style>
