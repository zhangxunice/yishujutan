// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: 'null',
    options: [{
      id: '1',
      text: '我的发布',
      icon: '/images/my/issue.png',
      }, {
      id: '2',
      text: '我的圈子',
      icon: '/images/my/circle.png',
      }, {
      id: '3',
      text: '我的收藏',
      icon: '/images/my/like.png',
    }]
  },

  jumpToMy: function(event){
    var address = '';
    switch (event.currentTarget.dataset.index){
      case '1':
        address = 'myIssue';
        break;
      case '2':
        address = '../community/circle/circle';
        break;
      case '3':
        address = 'myCollect';
        break;
      case '4':
        address = 'setting';
        break;
    }
    wx.navigateTo({
      url: address
    })
    console.log(address);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'http://10.128.211.78:8080/jsp_lesson_war_exploded/getusername?id=152',
    //   success:res=>{
    //     this.setData({
    //       username: res.data.username
    //     })
    //     console.log(res);
    //   }
    // })
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