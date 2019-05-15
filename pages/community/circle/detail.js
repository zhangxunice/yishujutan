// pages/community/circle/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    circle: [{
      id: 0,
      circleIcon: '/images/community/circle/dpcq.jpg',
      circleName: '斗破苍穹',
      circleCategory: '玄幻小说',
      circleDescription: ''
    },{
      id: 1,
        circleIcon: '/images/community/circle/jobs.jpg',
      circleName: '乔布斯传',
      circleCategory: '名人传记',
      circleDescription: ''
    },{
      id: 2,
        circleIcon: '/images/community/circle/pfdrs.jpg',
      circleName: '平凡的人生',
      circleCategory: '长篇小说',
      circleDescription: ''
    },{
      id: 3,
        circleIcon: '/images/community/circle/ky.jpg',
      circleName: '考研',
      circleCategory: '大学',
      circleDescription: ''
    }, {
      id: 4,
        circleIcon: '/images/community/circle/jsjzcyl.jpg',
      circleName: '计算机组成原理',
      circleCategory: '大学',
      circleDescription: ''
    }, {
      id: 5,
        circleIcon: '/images/community/circle/ts.jpg',
      circleName: '唐诗三百首',
      circleCategory: '古代文学',
      circleDescription: ''
    }, {
      id: 6,
        circleIcon: '/images/community/circle/zggds.jpg',
      circleName: '中国古代史',
      circleCategory: '学习',
      circleDescription: ''
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var circleId = options.circleId;
    this.setData({
      icon: this.data.circle[circleId].circleIcon,
      name: this.data.circle[circleId].circleName,
      category: this.data.circle[circleId].circleCategory,
      description: this.data.circle[circleId].circleDescription
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