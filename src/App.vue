<script setup>
import Card from "@/components/card.vue";
</script>

<template>
  <div class="training-log">
    <header class="training-log__header">Header</header>
    <main class="training-log__content">
      <card></card>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.training-log {
  display: grid;
  grid-template-rows: 48px 1fr;
  gap: 14px;
  height: 100%;

  &__header {
    align-items: center;
    background-color: var(--gray-600);
    border-bottom: 1px solid var(--gray-500);
    display: flex;
    padding: 0px 16px;
  }

  &__content {
    background-color: var(--gray-600);
    padding: 32px 16px;
  }
}
</style>
