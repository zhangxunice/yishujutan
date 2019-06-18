// pages/community/friendsinfo.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  comment: function(event){
    wx.navigateTo({
      url: '/pages/community/essay?essay_id=' + event.currentTarget.dataset.essay_id
    })
  },

  addfriend: function(){
    var that = this;
    var wechat = that.data.user.userinfo.wechat;
    if (wechat == ''){
      wx.showToast({
        title: '该用户没有留下Ta的联系方式哦',
        icon: 'none',
        duration: 2000
      })
    }else {
      wx.setClipboardData({
        data: wechat,
        success: function(){
          console.log(wechat);
          wx.showToast({
            title: 'Ta的微信已复制到剪切板 快去微信里添加好友吧',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
  },

  follow: function(){
    var that = this;
    var isFollowed = 'user.userinfo.isFollowed';
    var follower_number = 'user.userinfo.follower_number';
    wx.request({
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      url: app.globalData.url + 'doFollow',
      data: {
        isFollowed: that.data.user.userinfo.isFollowed,
        user_id: app.globalData.user_id,
        friends_id: that.data.friends_id
      },
      method: 'POST',
      success: function(){
        if (that.data.user.userinfo.isFollowed==1){
          that.setData({
            [isFollowed]: 0,
            [follower_number]: that.data.user.userinfo.follower_number - 1
          })
        }else{
          that.setData({
            [isFollowed]: 1,
            [follower_number]: that.data.user.userinfo.follower_number + 1
          })
        }
      },
      fail: function(res){
        console.log(res.errMsg);
      }
    })
  },

  praise: function (event) {
    var that = this;
    var index = event.currentTarget.dataset.index;
    var isPraised = 'user.essays[' + index + '].isPraised';
    var praise_number = 'user.essays[' + index + '].praise_number';

    wx.request({
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      url: app.globalData.url + 'doPraise',
      data: {
        user_id: app.globalData.user_id,
        essay_id: that.data.user.essays[index].essay_id,
        isPraised: that.data.user.essays[index].isPraised,
      },
      method: "POST",
      success: function (res) {
        if (that.data.user.essays[index].isPraised == 0) {
          that.setData({
            [praise_number]: that.data.user.essays[index].praise_number + 1,
            [isPraised]: 1
          })
        } else {
          that.setData({
            [praise_number]: that.data.user.essays[index].praise_number - 1,
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
    that.setData({
      friends_id: options.friends_id
    })
    var url = app.globalData.url;
    wx.request({
      url: url + 'getUserPageInfo',
      data: {
        user_id: app.globalData.user_id,
        friends_id: options.friends_id
      },
      method: 'GET',
      success(res){
        that.setData({
          user: res.data
        })
        console.log(that.data.user);
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