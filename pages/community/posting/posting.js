// pages/community/posting/posting.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  back: function () {
    wx.navigateBack({
      delta: -1
    });
  },

  issue: function (e) {
    var user_id = app.globalData.user_id;
    wx.request({
      url: 'http://yishujutan.free.idcfengye.com/issue',
      data: {
        'title': e.detail.value.title,
        'content': e.detail.value.content,
        'user_id': user_id
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
