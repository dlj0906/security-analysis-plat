<template>
  <div class="dashboard"> AI大屏 </div>
</template>

<script setup lang="ts">
import { useCommon } from '@/composables/useCommon'

defineOptions({ name: 'Dashboard' })

useCommon().scrollToTop()
</script>

<style lang="scss" scoped>
@use './style';
</style>
