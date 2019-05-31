var util = require('../../../utils/common.js');
Page({
  data: {
    title: '2019-05',
    listData: []
  },
  onLoad() {
    var time = util.formatTime(new Date())
    this.setData({
      title: time
    });
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
    this.require();
  },
  require() {
    let a = this.data.title;
    let yf = parseInt(a.substr(a.length - 2, 2))
    let nf = (parseInt(a.substr(0, 4))).toString();
    var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=YCXS01&nf=" + nf + "&yf=" + yf + "";
    url=encodeURI(url)
    util.Request(url).then((res) => {
      this.setData({
        listData: res.data
      });
    })
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
        this.require();
      },
    });
  },
  by() {
    let a = this.data.title;
    my.navigateTo({
      url: '../YCbb/Esales/Esales?a=' + a + '&b=0'
    });
  },
  sy() {
    let a = this.data.title;
    let yf = parseInt(a.substr(a.length - 2, 2))
    let nf = (parseInt(a.substr(2, 2)) - 1).toString();
    a = a.split('');
    if (yf == 1) {
      a.splice(2, 2, nf);
      a.splice(4, 2, '12');
      a = a.join('');
    } else {
      yf = yf - 1
      yf = (Array(2).join('0') + yf).slice(-2)
      a.splice(5, 2, yf);
      a = a.join('');
    }
    my.navigateTo({
      url: '../YCbb/Esales/Esales?a=' + a + '&b=0'
    });
  },
  bn() {
    let a = this.data.title;
    a = a.substr(0, 4);
    my.navigateTo({
      url: '../YCbb/Esales/Esales?a=' + a + '&b=1'
    });
  },
  yszk() {
    let a = this.data.title;
    my.navigateTo({
      url: '../YCbb/Eyszk/Eyszk?a=' + a + '&b=0'
    });
  },
  kcje() {
    let a = this.data.title;
    my.navigateTo({
      url: '../YCbb/Ekcje/Ekcje?a=' + a + '&b=0'
    });
  }
})
