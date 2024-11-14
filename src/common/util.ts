import type { Status } from '@/common/type'

/**
 * 根据状态码获取状态
 * @param code 状态码
 */
export const getStatus = (code: number): Status => {
  const status = {
    code,
    status: 'unknown',
    statusText: '未知'
  } as Status
  switch (code) {
    case 2:
      status.status = 'ok'
      status.statusText = '正常'
      break
    case 9:
      status.status = 'down'
      status.statusText = '无法访问'
      break
  }
  return status
}
