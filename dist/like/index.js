// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onlike: function(e) {
      let likes = this.properties.like;
      let counts = this.properties.count;
      counts = likes ? counts - 1 : counts + 1
      this.setData({
        count:counts,
        like:!likes
      })
    }
  }
})