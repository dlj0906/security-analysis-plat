<template>
  <div class="resources"> 资源管理 </div>
</template>

<script setup lang="ts">
import { useCommon } from '@/composables/useCommon';

defineOptions({ name: 'Resources' })

useCommon().scrollToTop()
</script>

<style lang="scss" scoped>
@use './style';
</style>
