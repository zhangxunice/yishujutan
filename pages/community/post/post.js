// pages/community/post/post.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },

  switch_nav: function(event){
    var type = event.currentTarget.dataset.type;
    this.setData({
      essayShowType: type
    })
    this.showEssay();
  },
  
  showEssay: function(){
    var that = this;
    wx.request({
      url: 'http://yishujutan.free.idcfengye.com/getEssaysByShowType',
      data: {
        showType: that.data.essayShowType,
        number: 10,
        user_id: app.globalData.user_id
      },
      method: 'GET',
      success: function(res){
        console.log(res.data);
        if (res.data == 'no essay') {
          that.setData({
            haveEssay: 0,
            essays: ''
          })
        }else {
          that.setData({
            haveEssay: 1,
            essays: res.data
          })
        }
      }
    })
  },

  toPosting: function () {
    wx.navigateTo({
      url: '../posting/posting',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      essayShowType: 'r'
    })
    this.showEssay();
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