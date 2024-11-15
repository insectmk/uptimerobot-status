<template>
  <header-component />
  <div class="container">
    <div id="uptime">
        <uptime-robot-component v-for="apiKey in config.ApiKeys" :key="apiKey" :api-key="apiKey" />
    </div>
    <div id="footer">
      <p>
        参照 <link-component to="https://github.com/yb/uptime-status" text="Uptime-Status" /> 更改，
        基于 <link-component to="https://uptimerobot.com/" text="UptimeRobot" /> 接口制作
      </p>
      <p>
        &copy; 2024 <link-component to="https://github.com/insectmk/uptimerobot-status" text="UptimeRobot-Status" />, Version
        {{ Package.version }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import UptimeRobotComponent from '@/components/UptimeRobotComponent.vue'
import LinkComponent from '@/components/LinkComponent.vue'
import config from '@/common/config'
import Package from '../../package.json'
</script>
