<script setup>
import BottomNav from '@/components/bottom-nav.vue';
</script>

<template>
  <footer class="entity-footer">
    <bottom-nav />
  </footer>
</template>

<style lang="scss" scoped>
.entity-footer {
  align-items: center;
  background-color: var(--gray-600);
  display: flex;
  justify-content: center;
  height: 64px;
  max-height: 64px;
}
</style>
