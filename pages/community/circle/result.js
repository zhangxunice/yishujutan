// pages/community/circle/result.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  toDetail: function(event){
    var circle_id = event.currentTarget.id;
    console.log(circle_id);
    wx.navigateTo({
      url: 'detail?circleId=' + circle_id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var value = options.key;
    wx.request({
      url: app.globalData.url + 'searchCircle',
      data: {
        key: value
      },
      method: 'GET',
      success: function(res){
        that.setData({
          circles: res.data
        })
        console.log(that.data.circles);
      },
      fail: function (res){
        console.log(res.errMsg)
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