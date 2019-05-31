var util = require('../../../../../utils/common.js');
Page({
  data: {
    title: '',
    currentTab: 0,
    css:0
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
    }, () => {
      if (this.data.title.length == 4) {
        this.setData({
          css: 1
        })
      }
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
        this.setData({
          currentTab: this.data.currentTab == 0 ? 1 : 0
        },()=>{
          this.setData({
          currentTab: this.data.currentTab == 0 ? 1 : 0
        });
        });
        
      },
    });
  },
})