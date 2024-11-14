import { postAction } from '@/api/http'
import type { UptimeRobotApiParams } from '@/common/type'
import config from '@/common/config'

/**
 * 监控内容数据
 */
export const getMonitors = (params: UptimeRobotApiParams) => postAction(config.ApiUrl, params)
