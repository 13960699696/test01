var util = require('../../../utils/common.js');
Page({
  data: {
    title: '',
  },
  onLoad: function (e) {
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
    let ny = this.data.title;
    var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=kgl&ny=" + ny +"-01";
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
        },()=>{
          this.require();
        });
      },
    });
    
  },
})
