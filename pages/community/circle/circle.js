// pages/community/circle/circle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show1: false,
    show2: false,
    src1: '/images/community/right.png',
    src2: '/images/community/right.png',

    myJoin: [{
      id: 0,
      index: 0,
      circleIcon: '/images/community/circle/dpcq.jpg',
      circleName: '斗破苍穹',
    },{
      id: 1,
      index: 1,
        circleIcon: '/images/community/circle/jobs.jpg',
      circleName: '乔布斯传',
    },{
      id: 2,
      index: 2,
        circleIcon: '/images/community/circle/pfdrs.jpg',
      circleName: '平凡的人生',
    }],
    
    myBrowse: [{
      id: 3,
      index: 0,
      circleIcon: '/images/community/circle/ky.jpg',
      circleName: '考研',
    }, {
      id: 4,
      index: 1,
        circleIcon: '/images/community/circle/jsjzcyl.jpg',
      circleName: '计算机组成原理',
    }, {
      id: 5,
      index: 2,
        circleIcon: '/images/community/circle/ts.jpg',
      circleName: '唐诗三百首',
    }, {
      id: 6,
      index: 3,
        circleIcon: '/images/community/circle/zggds.jpg',
      circleName: '中国古代史',
    }]
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