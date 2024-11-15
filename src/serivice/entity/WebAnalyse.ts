import { formatDuration } from '@/common/util.ts'

/**
 * 网站分析类
 */
export class WebAnalyse {
  public days: number // 统计天数
  public downTimes: number // 故障次数
  public downDuration: number // 故障持续时间
  public avgUptime: number // 平均可用率

  constructor(days: number, downTimes: number, downDuration: number, avgUptime: number) {
    this.days = days
    this.downTimes = downTimes
    this.downDuration = downDuration
    this.avgUptime = avgUptime
  }

  /**
   * 将测试内容转为字符串
   */
  toString(): string {
    if (this.downTimes > 0) {
      return `最近 ${this.days} 天故障 ${this.downTimes} 次，累计 ${formatDuration(this.downDuration)}，平均可用率 ${this.avgUptime}%`
    } else {
      return `最近 ${this.days} 天可用率 ${this.avgUptime}%`
    }
  }
}
