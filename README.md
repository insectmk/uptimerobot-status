# uptimerobot-status

基于[uptime-status](https://github.com/yb/uptime-status)项目的修改版本，该项目是基于[react](https://zh-hans.react.dev/learn)的，本项目翻新为[Vue3](https://cn.vuejs.org/guide/introduction.html)，一模一样原汁原味。

平时一直在用这个项目监控自己的网站状态，非常好用，本项目主要目的是学习Vue3新语法！

## 配置

```typescript
export default {
  // 显示标题
  SiteName: 'InsectMk的在线状态',
  // API接口地址：default：https://api.uptimerobot.com/v2/getMonitors
  ApiUrl: 'https://cors.status.org.cn/uptimerobot/v2/getMonitors',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'm796898704-62232b37a9720e349d2fa99a', // Hexo个人博客-Butterfly API key
    'm796898728-84b880951ab38555d1bdffa1', // Hexo个人博客-安知鱼 API key
    'm797371122-43869aa8490a03a2841f3992', // ShowDoc 一个非常适合IT团队的API文档、技术文档工具 API key
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

```

