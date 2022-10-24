/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa157a18a5a7bbfcf',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '7e377b4f2289dc2e676e84c1e410ee8c',

  PROVINCE: '浙江',
  CITY: '绍兴',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'Flipped',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oZkg26Kbcpv2SB7FAEwpz8b952_0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '	ixXYDd7lhi25svKxk4u1ZhhAa7xjsUTxUDIlIf2V8J0	',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-23',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '仔仔', year: '2004', date: '03-05',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '仔仔', year: '2004', date: '04-23',
        },
        {
          type: '节日', name: '相爱纪念日', year: '2022', date: '06-13',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-06-13' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2026-05-14' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	ixXYDd7lhi25svKxk4u1ZhhAa7xjsUTxUDIlIf2V8J0	',

  CALLBACK_USERS: [
    {
      name: '超正美男子',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oZkg26Da9NQEZ-Qx8rRFVL_RsDtY',
    }
  ],

}

module.exports = USER_CONFIG

