<template>
  <div v-for="site in monitors" :key="site.id" class='site'>
    <div class='meta'>
      <span class='name'>{{ site.friendly_name }}</span>
      <link-component class="link" :to="site.url" :text="site.friendly_name" />
      <span :class="`status ${getStatus(site.status).status}`">{{ getStatus(site.status).statusText }}</span>
    </div>
    <div class='timeline'>
      <el-tooltip v-for="info in getStatusRangeInfos(site.custom_uptime_ranges, site.logs)"
                  :key="info.startDate"
                  :content="info.status.statusText"
                  effect="dark"
                  :hide-after="0"
                  placement="top">
        <i :class="info.status.status"/>
      </el-tooltip>
    </div>
    <div class='summary'>
      <span>
        {{ getDateOrToday(getStatusRangeInfos(site.custom_uptime_ranges, site.logs)[0].startDate) }}
      </span>
      <span>最近 {{ config.CountDays }} 天可用率 {{ (getStatusRangeInfos(site.custom_uptime_ranges, site.logs).reduce((acc, info) => acc + info.uptime, 0) / getStatusRangeInfos(site.custom_uptime_ranges, site.logs).length).toFixed(2) }}% </span>
      <span>
        {{ getDateOrToday(getStatusRangeInfos(site.custom_uptime_ranges, site.logs).slice(-1)[0].startDate) }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { getMonitors } from '@/api/uptimeRobot'
import LinkComponent from '@/components/LinkComponent.vue'
import type { Monitor, UptimeRobotApiParams } from '@/common/type'
import { getStatusRangeInfos, getStatus, formatTimestamp } from '@/common/util'
import config from '../common/config'

const props = defineProps([ // 定义组件参数
  'apiKey',
])

// 双向绑定
const monitors = ref<Monitor[]>([])

/**
 * 获取日期，今天转为今天，其他转为yyyy-MM-dd字符串
 * @param datetime 时间戳
 */
const getDateOrToday = (datetime: number): string => {
  const date = new Date(datetime)
  date.setHours(0, 0, 0, 0)
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  if (date.getTime() === now.getTime()) {
    return '今天'
  }
  return formatTimestamp(date.getTime())
}

onMounted(() => {
  // 根据API获取网站状态
  getMonitors({
    api_key: props.apiKey
  } as UptimeRobotApiParams).then((res) => {
    monitors.value = res.data.monitors
  })
})
</script>
