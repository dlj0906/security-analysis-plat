<template>
  <div class="alarm"> 告警中心 </div>
</template>

<script setup lang="ts">
import { useCommon } from '@/composables/useCommon';

defineOptions({ name: 'Alarm' })

useCommon().scrollToTop()
</script>

<style lang="scss" scoped>
@use './style';
</style>
