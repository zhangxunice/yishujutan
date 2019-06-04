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
    var title = e.detail.value.title;
    var content = e.detail.value.content;
    //如果没有输入内容，则title为''
    // console.log(title);
    // console.log(content);
    if (title=='' || content==''){
      wx.showToast({
        title: '标题和内容不能为空哦',
        icon: 'none',
        duration: 2000
      })
      //返回，不在执行后续代码
      return;
    }
    
    var that = this;
    var user_id = app.globalData.user_id;
    var url = app.globalData.url;
    wx.request({
      url: url + 'issue',
      data: {
        title: title,
        content: content,
        user_id: user_id,
        status: that.data.status,
        circle_id: that.data.circle_id
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
    var status = options.status;
    var circle_id = options.circle_id;
    var that = this;
    console.log(status);
    if (status==undefined) {
      that.setData({
        status: '',
        circle_id: null
      })
    }else {
      that.setData({
        status: status,
        circle_id: circle_id
      })
    }
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
