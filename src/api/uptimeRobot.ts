import { postAction } from '@/api/http'
import type { UptimeRobotApiParams, UptimeRobotApiResponse } from '@/common/type'
import config from '@/common/config'
import type { AxiosResponse } from 'axios'

/**
 * 监控内容数据
 */
export const getMonitors = (params: UptimeRobotApiParams) : Promise<AxiosResponse<UptimeRobotApiResponse>> => {
  return postAction(config.ApiUrl, params)
}
