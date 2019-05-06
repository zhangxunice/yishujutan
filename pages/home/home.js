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
      name: '资  源',
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
      url: '../search/search',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  ondetails: function(e) {
    var id = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../bookdetails/bookdetail?id=' + id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  todetail: function(e) {
    var address = ''
    switch (e.currentTarget.dataset.index) {
      case 1:
        address = '/pages/book/books';
        break;
      case 2:
        address = '/pages/notebook/notebooks';
        break;
      case 3:
        address = '/pages/resource/resource';
        break;
    }
    wx.navigateTo({
      url: address
    })
  },


  onLoad: function(option) {
    var key = util.getDataKey();
    wx: wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters?apikey=' + key,
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
            books: res.data.subjects
          })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }

})