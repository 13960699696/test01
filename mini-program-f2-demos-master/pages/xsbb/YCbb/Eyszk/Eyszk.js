var util = require('../../../../utils/common.js');
Page({
  data: {
  },
  onLoad: function (e) {
    let that = this;
    my.getSystemInfo({
      success: function (res) {
        let windowHeight = (res.windowHeight * (750 / res.windowWidth));
        // 屏幕高度rpx
        that.setData({
          windowHeight: windowHeight,
        })
      }
    })
    this.setData({
      title: e.a
    });
  },
  mlys(){
    let a = this.data.title;
    my.navigateTo({
      url: '../Eyszk/Ymlys/Ymlys?a=' + a + '&b=0'
    });
  },
  datePicker() {
    my.datePicker({
      format: 'yyyy-MM',
      currentDate: this.data.title,
      startDate: '2017-05',
      endDate: '2022-10',
      success: (res) => {
        if(res.date==undefined){
          return
        }
        this.setData({
          title: res.date
        });
      },
    });
  }
})
