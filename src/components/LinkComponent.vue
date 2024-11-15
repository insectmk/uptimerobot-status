<template>
  <a :href="to" target='_blank'>
    {{ text }}
  </a>
</template>

<script lang='ts' setup>
defineProps([ // 定义组件参数
  'to',
  'text'
])
</script>
