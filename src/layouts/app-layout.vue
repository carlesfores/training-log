<script setup>
import EntityHeader from "@/components/entity-header.vue";
import EntityFooter from "@/components/entity-footer.vue";
</script>

<template>
  <div class="app-layout">
    <entity-header />
    <slot name="content"></slot>
    <entity-footer />
  </div>
</template>

<style lang="scss" scoped>
.app-layout {
  display: grid;
  grid-template-rows: 48px 1fr 64px;
  height: 100%;
}
</style>
