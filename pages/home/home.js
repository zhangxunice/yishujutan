//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    indicatorcolor: "#FFFFFF",
    indicatoractivecolor: "#FF7F50",
    circular: true,
    index: 0,
    type: [{
      id: 1,
      name: '图  书',
      icon: '/images/icon/book.png',
    }, {
      id: 2,
      name: '笔  记',
      icon: '/images/icon/notebook.png',
    }, {
      id: 3,
      name: '资  料',
      icon: '/images/icon/means.png',

    }],
  },
  // 点击事件
  changeTabbar(e) {
    this.setData({
      index: e.currentTarget.dataset.id
    })
  },

  bindchange: function(e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },

  onseach: function() {
    wx.navigateTo({
      url: 'search/search',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  ondetails: function(e) {
    var id = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: 'bookdetails/bookdetail?id=' + id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  
  todetail: function(e) {
    var address = ''
    switch (e.currentTarget.dataset.index) {
      case 1:
        address = '/pages/home/book/books';
        break;
      case 2:
        address = '/pages/home/notebook/notebooks';
        break;
      case 3:
        address = '/pages/home/resource/resource';
        break;
    }
    wx.navigateTo({
      url: address
    })
  },

  //获取用户信息--用户授权按钮绑定的事件
  bindGetUserInfo(e) {
    //console.log(e.detail.userInfo);
    //点击按钮后设置变量haveInfo为1，并将获取到的用户信息设置在data里
    this.setData({
      haveInfo: 1,
      userInfo: e.detail.userInfo
    })
    console.log(this.data.userInfo);
    app.globalData.haveInfo = 1;
    this.isRegister();
  },

  //判断用户是否注册
  isRegister: function () {
    var that = this;
    console.log('执行isRegister方法前全局user_id为' + app.globalData.user_id);
    wx.request({
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      url: app.globalData.url + 'isRegister',
      data: {
        user_id: app.globalData.user_id
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data);
        if(res.data == 0){
          console.log('未注册');
          that.register();
        }else {
          console.log('已注册');
        }
      },
    })
  },

  //注册
  register: function () {
    wx.request({
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      url: app.globalData.url + 'register',
      data: {
        user_id: app.globalData.user_id,
        nickname: this.data.userInfo.nickName,
        icon: this.data.userInfo.avatarUrl
      },
      method: 'POST',
      success: function(){
        console.log('执行注册成功');
      }
    })
  },

  //home页面每次加载时，先判断用户是否已经授权，若已经授权，则调用接口获取用户信息，并设置data里的haveInfo为1，否则将haveInfo设置为0。当haveInfo为0时，显示获取用户授权的按钮
  onLoad: function(option) {
    var that = this;
    //获取信息
    wx.getSetting({
      success: function (res) {
        //判断用户是否已经授权
        if (res.authSetting['scope.userInfo']) {
          console.log("已授权");
          that.setData({
            haveInfo: 1,
          })
          app.globalData.haveInfo = 1;
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              //console.log(res.userInfo)
              that.setData({
                userInfo: res.userInfo
              })
              console.log(that.data.userInfo)
            }
          })
        }else{
          console.log("未授权");
          that.setData({
            haveInfo: 0,
          })
          app.globalData.haveInfo = 0;
        }
      }
    })
    
    var key = util.getDataKey();
    var url = app.globalData.url;
    wx.request({
      url: url + '/bookinformation' ,
      data: {
      },
      header: {
        "Content-Type": "json"
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data.subjects),
          this.setData({
            books: res.data
          })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }

})