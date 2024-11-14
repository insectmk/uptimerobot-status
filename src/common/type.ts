/**
 * UptimeRobot API 接口参数
 * https://uptimerobot.com/api/
 */
export interface UptimeRobotApiParams {
  api_key: string // API密钥
}

/**
 * UptimeRobot API 接口返回值
 * https://uptimerobot.com/api/
 */
export interface UptimeRobotApiResponse {
  monitors: Monitor[]
}
export interface Monitor {
  id: number
  friendly_name: string
  url: string
  status: number
}

/**
 * 返回状态
 */
export interface Status {
  code: number
  status: string
  statusText: string
}
