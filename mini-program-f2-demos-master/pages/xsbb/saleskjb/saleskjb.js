var util = require('../../../utils/common.js');
Page({
  data: {
  },
  onLoad: function () {
    let that=this;
    my.getSystemInfo({
      success: function (res) {
        let windowHeight = (res.windowHeight * (750 / res.windowWidth));
        // 屏幕高度rpx
        that.setData({
          windowHeight: windowHeight,
        })
      }
    })
    var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=Spacecloth";
    util.Request(url).then((res) => {
      res.data[0].zq = "上周";
      res.data[1].zq = "本周";
      res.data[2].zq = "上月";
      res.data[3].zq = "本月";
      res.data[4].zq = "上季";
      res.data[5].zq = "本季";
      res.data[6].zq = "本年";
      this.setData({
        listData: res.data
      });
    })
  }
})