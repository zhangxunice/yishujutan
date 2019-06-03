// pages/community/circle/detail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    request_time:0,
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

  writeNew: function(){
    wx.navigateTo({
      url: '../posting/posting',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var circleId = options.circleId;
    var that = this;
    var url = app.globalData.url;
    wx.request({
      url: url + 'getCircleInfo',
      data: {
        user_id: app.globalData.user_id,
        circle_id: circleId,
        circle_number: that.data.request_time
      },
      method: 'GET',
      success(res){
        console.log(res.data);
        if(res.data.flag == 'no'){
          that.setData({
            noEssay: true,
            circleinfo: res.data.circleinfo,
          })
        }else if (res.data.flag == 'no more'){
          that.setData({
            noMoreEssay: true,
            noEssay: false,
            request_time: that.data.request_time + 1,
            circleinfo: res.data.circleinfo,
            essays: res.data.essays,
            flag: res.data.flag
          })
        }else{
          that.setData({
            noEssay: false,
            noMoreEssay: false,
            request_time: that.data.request_time + 1,
            circleinfo: res.data.circleinfo,
            essays: res.data.essays,
            flag: res.data.flag
          })
        }
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