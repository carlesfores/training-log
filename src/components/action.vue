<scrip setup>

</scrip>

<template>
  <div class="action">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.action {
  background-color: var(--green-600);
  border: 1px solid var(--green-100);
  border-radius: 4px;
  cursor: pointer;
  height: 32px;
  width: 32px;
}

.action:hover {
  background-color: var(--green-400);
}
</style>
