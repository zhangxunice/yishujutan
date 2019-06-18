// pages/community/essay.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focusInput: false,
    height: '',
    isInput: false
  },

  send: function (e) {
    var that = this;
    console.log(e, '发送评论:' + e.detail.value.content);
    this.setData({
      isInput: false
    })
    wx.request({
      url: app.globalData.url + 'sendComment',
      data: {
        user_id: app.globalData.user_id,
        essay_id: that.data.essayinfo.essay_id,
        content: e.detail.value.content,
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(that.data.comments);
        that.setData({
          comments: that.data.comments.concat(res.data)
        })
        console.log(that.data.comments);
      },
      fail: function(res){
        console.log(res.errMsg);
      }
    })
    
  },

  inputFocus(e) {
    console.log(e, '键盘弹起')
    this.setData({
      height: e.detail.height,
      isInput: true
    })
  },
  inputBlur() {
    console.log('键盘收起')
    this.setData({
      isInput: false
    })
  },

  focusButn: function () {
    this.setData({
      focusInput: true,
      isInput: true
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var essay_id = options.essay_id;
    wx.request({
      url: app.globalData.url + 'getComments',
      data:{
        essay_id: essay_id,
        user_id: app.globalData.user_id
      },
      method: 'GET',
      success: function(res){
        that.setData({
          comments: res.data.comments,
          essayinfo: res.data.essayinfo
        })
        console.log(that.data)
      },
      fail: function(res){
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