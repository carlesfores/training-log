<scrip setup>

</scrip>

<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: var(--gray-600);
  border: 1px solid var(--gray-500);
  border-radius: 4px;
  min-height: 120px;
}
</style>