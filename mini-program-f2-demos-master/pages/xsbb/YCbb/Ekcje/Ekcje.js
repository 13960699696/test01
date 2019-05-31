var util = require('../../../../utils/common.js');
Page({
  data: {
    title: ''
  },
  onLoad(e) {
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
  datePicker() {
    my.datePicker({
      format: 'yyyy-MM',
      currentDate: this.data.title,
      startDate: '2017-05',
      endDate: '2022-10',
      success: (res) => {
        if (res.date == undefined) {
          return
        }
        this.setData({
          title: res.date
        });
      },
    });
  },
  mlsyb() {
    my.navigateTo({
      url: '../Ekcje/Tkcje/Tkcje?a=' + this.data.title + ''
    });
  },
  require() {
    let a = this.data.title;
    let nf = (parseInt(a.substr(0, 4))).toString();
    if (a.length == 4) {
      var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=YCXS02N&nf=" + nf + "";
      url=encodeURI(url)
      util.Request(url).then((res) => {
        this.setData({
          listData: res.data
        });
      })
    } else {
      let yf = parseInt(a.substr(a.length - 2, 2))
      var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=YCXS02&nf=" + nf + "&yf=" + yf + "";
      url=encodeURI(url)
      util.Request(url).then((res) => {
        this.setData({
          listData: res.data
        });
      })
    }
  },
})
