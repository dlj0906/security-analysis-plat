<template>
  <div class="search"> 检索中心 </div>
</template>

<script setup lang="ts">
import { useCommon } from '@/composables/useCommon';

defineOptions({ name: 'Search' })

useCommon().scrollToTop()
</script>

<style lang="scss" scoped>
@use './style';
</style>
