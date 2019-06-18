// pages/community/post/post.js
var app = getApp();
var util = require('../../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    search_image: app.globalData.url + 'images/search.png'
  },

  comment: function (event) {
    wx.navigateTo({
      url: '/pages/community/essay?essay_id=' + event.currentTarget.dataset.essay_id
    })
  },

  toUserPage: function (event) {
    var user_id = event.currentTarget.dataset.user_id;
    wx.navigateTo({
      url: '/pages/community/friendsinfo?friends_id=' + user_id,
    })
  },

  search: function(e){
    wx.navigateTo({
      url: 'result?key=' + e.detail.value.value,
    })
  },

  praise: function(event){
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
        if (that.data.essays[index].isPraised==0){
          that.setData({
            [praise_number]: that.data.essays[index].praise_number + 1,
            [isPraised]: 1
          })
        }else{
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

  switch_nav: function(event){
    var type = event.currentTarget.dataset.type;
    this.setData({
      essayShowType: type
    })
    this.showEssay();
  },
  
  showEssay: function(){
    var that = this;
    var url = app.globalData.url;
    wx.request({
      url: url + 'getEssaysByShowType',
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
            essays: res.data,
            essaysTool: res.data
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