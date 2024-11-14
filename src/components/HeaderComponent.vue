<template>
  <div id='header'>
    <div class='container'>
      <h1 class='logo'>{{ config.SiteName }}</h1>
      <div class='navi'>
        <link-component v-for="(item, index) in config.Navi" :key="index" :to="item.url" :text="item.text" />
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import config from '@/common/config'
import LinkComponent from '@/components/LinkComponent.vue'
</script>
