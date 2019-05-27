// pages/community/circle/circle.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show1: false,
    show2: false,
    src1: '/images/community/right.png',
    src2: '/images/community/right.png',
  },

  showMyJoin: function(){
    var src;
    if (this.data.show1 != true) {
      src = '/images/community/unfold.png';
    }else {
      src = '/images/community/right.png';
    }
    this.setData({
      show1: !this.data.show1,
      src1: src
    })
  },

  toApply: function(){
    wx.navigateTo({
      url: 'apply',
    })
  },

  toDetail: function(event){
    var circleId = event.currentTarget.id;
    wx.navigateTo({
      url: 'detail?circleId=' + circleId,
    })
  },

  showMyBrowse: function () {
    var src;
    if (this.data.show2 != true) {
      src = '/images/community/unfold.png';
    } else {
      src = '/images/community/right.png';
    }
    this.setData({
      show2: !this.data.show2,
      src2: src
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var url = app.globalData.url;
    wx.request({
      url: url + 'getCircles',
      data: {
        user_id: app.globalData.user_id
      },
      method: 'GET',
      success(res){
        console.log(res.data);
        that.setData({
          myJoin: res.data.collectingCircle,
          myBrowse: res.data.browsedCircle,
        })
      },
      fail(res){
        console.log(res.errMsg);
      }
      
    })
    console.log(that.data);
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