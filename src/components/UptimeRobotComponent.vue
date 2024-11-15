<template>
  <div v-for="webInfo in webInfos" :key="webInfo.id" class='site'>
    <div class='meta'>
      <span class='name'>{{ webInfo.friendly_name }}</span>
      <link-component class="link" :to="webInfo.url" :text="webInfo.friendly_name" />
      <span :class="`status ${ webInfo.statusInfo.status }`">{{ webInfo.statusInfo.statusText }}</span>
    </div>
    <div class='timeline'>
      <el-tooltip v-for="info in webInfo.statusRangeInfos"
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
        {{ getDateOrToday(webInfo.startTime) }}
      </span>
      <span>最近 {{ config.CountDays }} 天可用率 {{ webInfo.avgUptime }}% </span>
      <span>
        {{ getDateOrToday(webInfo.endTime) }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import LinkComponent from '@/components/LinkComponent.vue'
import type { WebInfo } from '@/common/type'
import { formatTimestamp, getWebInfosByKey } from '@/common/service'
import config from '../common/config'

const props = defineProps([ // 定义组件参数
  'apiKey',
])

// 双向绑定
const webInfos = ref<WebInfo[]>([])

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
  getWebInfosByKey(props.apiKey).then(result => {
    webInfos.value = result
  })
})
</script>
