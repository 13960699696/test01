Page({
  data: {
    currentTab:0
  },
  onLoad() { },
  //原材料库存查询
  kcPage1: function (e) {
    my.navigateTo({
      url: './kcPage1/kcPage1'
    });
  },
  //成品半成品库存查询
  kcPage2: function (e) {
    my.navigateTo({
      url: './kcPage2/kcPage2'
    });
  },
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  }
});
