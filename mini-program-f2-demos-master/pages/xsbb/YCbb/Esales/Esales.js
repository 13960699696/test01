var util = require('../../../../utils/common.js');
Page({
  data: {
    title: '2019-05',
    css:0
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
    }, () => {
      if (this.data.title.length == 4) {
        this.setData({
          css: 1
        })
      }
    });
    this.require()
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
        this.require();
      },
    });
  },
  mlsyb() {
    my.navigateTo({
      url: '../Esales/Tmlsales/Tmlsales?a=' + this.data.title + ''
    });
  },
  dbsyb() {
    my.navigateTo({
      url: '../Esales/Tdbsales/Tdbsales?a=' + this.data.title + ''
    });
  },
  ks() {
    my.navigateTo({
      url: '../Esales/Tks/Tks?a=' + this.data.title + ''
    });
  },
  require() {
    let a = this.data.title;
    let nf = (parseInt(a.substr(0, 4))).toString();
    if (a.length == 4) {
      var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=YCXS02N&nf=" + nf + "";
      util.Request(url).then((res) => {
        this.setData({
          listData: res.data
        });
      })
    } else {
      let yf = parseInt(a.substr(a.length - 2, 2))
      var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=YCXS02&nf=" + nf + "&yf=" + yf + "";
      util.Request(url).then((res) => {
        this.setData({
          listData: res.data
        });
      })
    }

  },
})
