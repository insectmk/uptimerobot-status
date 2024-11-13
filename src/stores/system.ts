import { defineStore } from 'pinia'
import { getConfig } from '@/api/system'
import yaml from 'js-yaml'
import type { Config } from '@/common/type'

export const SystemStore = defineStore('system', {
  state: () => ({
    config: {} as Config // 配置文件
  }),
  actions: {
    async fetchConfig() { // 读取配置文件进行更新
      try {
        const res = await getConfig()
        // 更新状态
        this.config = yaml.load(res.data.toString()) as Config
      } catch (error) {
        console.error('配置文件加载失败：', error)
      }
    }
  }
})
