// pages/community/post/result.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  toUserPage: function (event) {
    var user_id = event.currentTarget.dataset.user_id;
    wx.navigateTo({
      url: '/pages/community/friendsinfo?friends_id=' + user_id,
    })
  },

  praise: function (event) {
    var that = this;
    var index = event.currentTarget.dataset.index;
    var isPraised = 'essays[' + index + '].isPraised';
    var praise_number = 'essays[' + index + '].praise_number';

    wx.request({
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      url: app.globalData.url + 'doPraise',
      data: {
        user_id: app.globalData.user_id,
        essay_id: that.data.essays[index].essay_id,
        isPraised: that.data.essays[index].isPraised,
      },
      method: "POST",
      success: function (res) {
        if (that.data.essays[index].isPraised == 0) {
          that.setData({
            [praise_number]: that.data.essays[index].praise_number + 1,
            [isPraised]: 1
          })
        } else {
          that.setData({
            [praise_number]: that.data.essays[index].praise_number - 1,
            [isPraised]: 0
          })
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var value = options.key;
    wx.request({
      url: app.globalData.url + 'searchEssay',
      data: {
        key: value,
        user_id: app.globalData.user_id
      },
      method: 'GET',
      success: function (res) {
        that.setData({
          essays: res.data
        })
      },
      fail: function (res) {
        console.log(res.errMsg);
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