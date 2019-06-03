// pages/community/community.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    category: [{
      id: 1,
      name: '发  贴',
      bgColor: '#f16033',
      icon: '/images/community/addpost_white.png',
    }, {
      id: 2,
      name: '贴  吧',
      bgColor: '#09bb07',
      icon: '/images/community/post_white.png',
    }, {
      id: 3,
      name: '圈  子',
      bgColor: '#95dfde',
      icon: '/images/community/circle_white.png',
    }],
  },

  jump: function (event) {
    var index = event.currentTarget.dataset.index;
    var jumpTo = '';
    switch (index) {
      case 1:
        jumpTo = 'posting/posting';
        break;
      case 2:
        jumpTo = 'post/post';
        break;
      case 3:
        jumpTo = 'circle/circle';
        break;
      default:
        console.log('跳转出错');
        break;
    }
    wx.navigateTo({
      url: jumpTo,
    })
  },
/*
  getTotalMsgNumber: function () {
    console.log('调用getTotalMsgNumber');
    var total = 0;
    var i;
    for (i = 0; i < this.data.message.length; i++) {
      total += this.data.message[i].msgNumber;
    }
    this.setData({
      totalMsg: total
    })
  },
*/

  seeDetail: function (event) {
    var friends_id = event.currentTarget.dataset.user_id;
    wx.navigateTo({
      url: 'friendsinfo?friends_id=' + friends_id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // var total = 0;
    // var i;
    // for (i = 0; i < this.data.message.length; i++) {
    //   total += this.data.message[i].msgNumber;
    // }
    // var that = this;
    // that.setData({
    //   totalMsg: total
    // })

    var user_id = app.globalData.user_id;
    var url = app.globalData.url;
    wx.request({
      url: url + 'getFollows',
      data: {
        'user_id': user_id
      },
      method: 'GET',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          follows: res.data,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

