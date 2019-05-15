// pages/book/books.js
const app = getApp()
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onseach: function () {
    wx.navigateTo({
      url: '../search/search',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
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


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})