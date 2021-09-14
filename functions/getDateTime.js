// 获取当月第一天
export function getCurrentMonthFirst(now) {
  let date = now || new Date()
  date.setDate(1)
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  let strDate = Y + M + D
  return strDate
}

// 获取当前月的最后一天
export function getCurrentMonthLast(now) {
  let date = now || new Date()
  let currentMonth = date.getMonth()
  let nextMonth = ++currentMonth
  let nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1) // 下个月第一天
  let oneDay = 1000 * 60 * 60 * 24
  let lastdate = new Date(nextMonthFirstDay - oneDay)
  let Y = lastdate.getFullYear() + '-'
  let M = (lastdate.getMonth() + 1 < 10 ? '0' + (lastdate.getMonth() + 1) : lastdate.getMonth() + 1) + '-'
  let D = lastdate.getDate() < 10 ? '0' + lastdate.getDate() : lastdate.getDate()
  let strDate = Y + M + D
  return strDate
}

// 返回指定格式的当前年月日
export function getCurrentYMD() {
  let year = new Date().getFullYear()
  let month = new Date().getMonth() + 1
  month = month > 9 ? String(month) : '0' + month
  let date = new Date().getDate()
  date = date > 9 ? String(date) : '0' + date
  let yearMonthDate = year + '-' + month + '-' + date
  return yearMonthDate
}

// 返回指定格式的当前时分秒
export function getCurrentHMS() {
  let hours = new Date().getHours()
  let minutes = new Date().getMinutes()
  hours = minutes > 30 ? hours + 1 : hours
  minutes = minutes > 30 ? '00' : '30'
  let hoursMinutes = hours + ':' + minutes
  return hoursMinutes
}

// 时间戳转年月日时分秒
export function formatTime(timestamp) {
  var date = new Date(timestamp) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-'
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  // var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  let strDate = Y + M + D + h + m
  return strDate
}
