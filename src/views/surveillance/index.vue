<template>
  <div class="surveillance"> 视频监控 </div>
</template>

<script setup lang="ts">
import { useCommon } from '@/composables/useCommon';

defineOptions({ name: 'Surveillance' })

useCommon().scrollToTop()
</script>

<style lang="scss" scoped>
@use './style';
</style>
