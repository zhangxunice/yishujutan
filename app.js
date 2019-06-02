//app.js
App({

  test:function(){
    return new function(){

    }
  },

  //点赞功能
  praise: function(essay_id){
    var that = this;
    var user_id = that.globalData.user_id;
    wx.request({
      url: that.globalData.url + 'doPraise',
      data: {
        user_id: user_id,
        essay_id: essay_id
      },
      method: "GET",
      success: function (res) {
        console.log(res.data);
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

  doPraise: function(){
    var p = new Promise(function (resolve, reject){

    })
  },

  login: function(code){
    var that = this;
    return new Promise(function(resolve, reject){
      wx.request({
        url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + that.globalData.appid + '&secret=' + that.globalData.secret + '&js_code=' + code + '&grant_type=authorization_code',
        data: {},
        success: function (res) {
          //console.log(res.data);
          //将获取到的openid设置为全局数据user_id
          var openid = res.data.openid;
          resolve(openid);
          //that.globalData.user_id = res.data.openid;
          //console.log(that.globalData);
        },
        fail: function (res) {
          reject('返回openid出错');
        }
      })
    })
    
  },

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
          that.login(code)
          .then(function(openid){
            console.log('user_id:' + openid);
            that.globalData.user_id = openid;
          })
          .catch(function(error){
            console.log(error);
          })
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
    user_id: '',
    //url: 'http://yishujutan.free.idcfengye.com/',
    url: 'http://127.0.0.1:8080/',
    appid: 'wx094047c54a0a03e1',
    secret: 'feb08eb0414344647cb5f4bcc8c32377'
  },
})
