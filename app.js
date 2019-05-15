//app.js
App({
  onLaunch: function () {
    var that = this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          var code = res.code;
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + that.globalData.appid + '&secret=' + that.globalData.secret + '&js_code=' + code + '&grant_type=authorization_code',
            data: {},
            success: function (res) {
            console.log(res.data);
            }
          })
          console.log(res.code)
        } else {
          console.log("登录失败！" + res.errMsg)
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    user_id: 'rzz',
    appid: 'wx094047c54a0a03e1',
    secret: 'feb08eb0414344647cb5f4bcc8c32377'
  },
})
