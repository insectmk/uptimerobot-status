export default {
  // 显示标题
  SiteName: 'InsectMk的在线状态',
  /*
  * API接口地址：
  * UptimeRobot官方默认（限制1分钟10次请求）：https://api.uptimerobot.com/v2/getMonitors
  * Uptime-Status项目官方（5分钟缓存）https://cors.status.org.cn/uptimerobot/v2/getMonitors
  * 本项目官方（5分钟缓存）https://status-api.insectmk.top/
  * */
  ApiUrl: 'https://status-api.insectmk.top/',
  // API缓存时间：单位：ms
  ApiCatchTime: 60000,

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'm796898704-62232b37a9720e349d2fa99a', // Hexo个人博客-Butterfly API key
    'm796898728-84b880951ab38555d1bdffa1', // Hexo个人博客-安知鱼 API key
    'm797287553-9e8e66f9568794e101f6b0dd', // memos一款隐私优先的轻量级笔记服务 API key
    'm796898733-6d12c54f9e46ab8c902a1f45', // Waline评论服务端 API key
    'm796905159-14864e22acaeb74c564f722b', // 静态资源网站 API key
    'm796898840-8fc99da36433dffa2151b5be', // InsectMk的在线状态 API key
  ],

  // 日志天数
  CountDays: 90,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 是否正序显示状态，旧数据->新数据
  OldToNew: true,

  // 导航栏菜单
  Navi: [
    {
      text: 'GitHub',
      url: 'https://github.com/insectmk'
    },
    {
      text: 'Blog',
      url: 'https://insectmk.cn/'
    },
  ],
};
