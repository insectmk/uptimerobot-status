/**
 * 将秒转为文本
 * @param seconds 秒数
 */
export const formatDuration = (seconds: number): string => {
  let s = seconds
  let m = 0
  let h = 0
  if (s >= 60) {
    m = Math.floor(s / 60)
    s =  Math.floor(s % 60)
    if (m >= 60) {
      h = Math.floor(m / 60)
      m =  Math.floor(m % 60)
    }
  }
  let text = `${s} 秒`
  if (m > 0) text = `${m} 分 ${text}`
  if (h > 0) text = `${h} 小时 ${text}`
  return text
}
