<script setup>
import Action from "@/components/action.vue";
</script>

<template>
  <header class="entity-header">
    <div class="entity-header__logo">logo</div>
    <div class="entity-header__actions">
      actions
    </div>
  </header>
</template>

<style lang="scss" scoped>
.entity-header {
  align-items: center;
  background-color: var(--gray-600);
  display: flex;
  justify-content: space-between;
  padding: 0px 16px;
  height: 48px;
  max-height: 48px;

  &__actions {
    display: flex;
    gap: 12px;
  }

  &__logo {
    font-size: 18px;
  }
}
</style>
