// pages/community/community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [{
      id: 1,
      name: '发  贴',
      bgColor: '#f16033',
      icon: '/images/community/addpost_white.png',
    }, {
      id: 2,
      name: '贴  吧', 
      bgColor: '#09bb07',
        icon: '/images/community/post_white.png',
    },{
      id: 3,
      name: '圈  子',
      bgColor: '#95dfde', 
        icon: '/images/community/circle_white.png',
      
    }],

    message: [{
      id: 1,
      icon: '/images/community/xiaoyan.png',
      msgNumber: 1,
      content1: '不停息的风',
      content2: '飞流直下三千尺',
      time: '今天'
    },{
      id: 2,
        icon: '/images/community/zhang.png',
      msgNumber: 0,
      content1: '张旭',
      content2: '疑是银河落九天',
      time: '昨天'
    },{
      id: 3,
        icon: '/images/community/zuo.png',
      msgNumber: 0,
      content1: '左智豪',
      content2: '床前明月光',
      time: '星期五'
    },{
      id: 4,
        icon: '/images/community/chen.png',
      msgNumber: 1,
      content1: '陈桓',
      content2: '疑是地上霜',
      time: '星期四'
    },{
      id: 5,
        icon: '/images/community/kun.png',
      msgNumber: 3,
      content1: '张坤',
      content2: '两个黄莹鸣翠柳',
      time: '星期四'
    },{
      id: 6,
        icon: '/images/community/img.png',
      msgNumber: 0,
      content1: '管理员',
      content2: '这里是内容',
      time: '星期二'
    },{
      id: 7,
        icon: '/images/my/my.png',
      msgNumber: 2,
      content1: '书友',
      content2: '这里是内容',
      time: '星期二'
    }]
  },


  jump: function(event){
    var index = event.currentTarget.dataset.index;
    var jumpTo = '';
    switch (index){
      case 1:
        jumpTo = 'posting/posting';
        break;
      case 2:
        jumpTo = 'post/post';
        break;
      case 3:
        jumpTo = 'circle/circle';
        break;
      default:
        console.log('跳转出错');
        break;
    }
    wx.navigateTo({
      url: jumpTo,
    })
  },

  getTotalMsgNumber: function(){
    console.log('调用getTotalMsgNumber');
    var total = 0;
    var i;
    for (i = 0; i < this.data.message.length; i++) {
      total += this.data.message[i].msgNumber;
    }
    this.setData({
      totalMsg: total
    })
  },

  seeDetail: function(event){
    var index = event.currentTarget.dataset.index;
    if (this.data.message[index].msgNumber > 0){
      var data = 'message[' + index + '].msgNumber';
      this.setData({
          [data]: 0
      })
      this.getTotalMsgNumber();
    }
    wx.navigateTo({
      url: 'friendsinfo',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var total = 0;
    var i;
    for(i = 0; i < this.data.message.length; i++){
      total += this.data.message[i].msgNumber;
    }
    var that = this;
    that.setData({
      totalMsg: total
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