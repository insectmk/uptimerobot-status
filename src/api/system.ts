import { getAction } from '@/api/http'

/**
 * 获取配置文件
 */
export const getConfig = () => getAction('/config.yml')
