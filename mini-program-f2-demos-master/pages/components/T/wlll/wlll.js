var util = require('../../../../utils/common.js');
var app = getApp();
Component({
  mixins: [],
  data: {
    catId1: 508610
  },
  props: {},
  didMount() {
    let that = this;
    my.getSystemInfo({
      success: function (res) {
        let windowHeight = (res.windowHeight * (750 / res.windowWidth));
        // 屏幕高度rpx
        that.setData({
          windowHeight: windowHeight * 0.37,
        })
      }
    })
    this.require(this.data.catId1)
  },
  didUpdate(prevProps, prevData) {
    // this.require()
  },
  didUnmount() {
  },
  methods: {
    require(catid1) {
      let a = this.props.title;
      let nf = (parseInt(a.substr(0, 4))).toString();
      if (catid1 == 508610) {
        if (a.length == 4) {
          var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=YCXS03MLN&nf=" + nf + "&catid1=" + catid1 + "";
          url = encodeURI(url)
          util.Request(url).then((res) => {
            this.setData({
              listData: res.data
            });
          })
        } else {
          let yf = parseInt(a.substr(a.length - 2, 2))
          var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=YCXS03ML&nf=" + nf + "&yf=" + yf + "&catid1=" + catid1 + "";
          url = encodeURI(url)
          util.Request(url).then((res) => {
            this.setData({
              listData: res.data
            });
          })
        }
      } else {
        if (a.length == 4) {
          var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=YCXS03MLN1&nf=" + nf + "&catid1=" + catid1 + "";
          url = encodeURI(url)
          util.Request(url).then((res) => {
            this.setData({
              listData: res.data
            });
          })
        } else {
          let yf = parseInt(a.substr(a.length - 2, 2))
          var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=YCXS03ML1&nf=" + nf + "&yf=" + yf + "&catid1=" + catid1 + "";
          url = encodeURI(url)
          util.Request(url).then((res) => {
            this.setData({
              listData: res.data
            });
          })
        }
      }

    },
    MXNV(e) {
      app.globalData.catId1 = e.target.dataset.index.catId1
      if (e.target.dataset.index.hasChild == "1") {
        this.require(e.target.dataset.index.catId1);
      } if (e.target.dataset.index.hasChild == "0") {
        let a = this.props.title;
        let nf = (parseInt(a.substr(0, 4))).toString();
        if (a.length == 4) {
          my.navigateTo({
            url: "../Tmlsales/FMX/FMX?catid1=" + e.target.dataset.index.catId1 + "&nf=" + nf + "&title=" + a + "&catName=" + e.target.dataset.index.catName1 + ""
          });
        } else {
          let yf = parseInt(a.substr(a.length - 2, 2))
          my.navigateTo({
            url: "../Tmlsales/FMX/FMX?catid1=" + e.target.dataset.index.catId1 + "&nf=" + nf + "&yf=" + yf + "&title=" + a + "&catName=" + e.target.dataset.index.catName1 + ""
          });
        }
      }

      // if (a.length == 4) {
      //   if (e.target.dataset.index.hasChild == "1") {
      //     var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=YCXS03MLN&nf=" + nf + "&catid1=" + e.target.dataset.index.catId1 + "";
      //     url = encodeURI(url)
      //     util.Request(url).then((res) => {
      //       this.setData({
      //         listData: res.data
      //       });
      //     })
      //   } if (e.target.dataset.index.hasChild == "0") {
      //     my.navigateTo({
      //       url: "../Tmlsales/FMX/FMX?catid1=" + e.target.dataset.index.catId1 + "&nf=" + nf + "&title=" + a + "&catName=" + e.target.dataset.index.catName1 + ""
      //     });
      //   }
      // } else {
      //   let yf = parseInt(a.substr(a.length - 2, 2))
      //   if (e.target.dataset.index.hasChild == "1") {
      //     var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=YCXS03ML&nf=" + nf + "&yf=" + yf + "&catid1=" + e.target.dataset.index.catId1 + "";
      //     url = encodeURI(url)
      //     util.Request(url).then((res) => {
      //       this.setData({
      //         listData: res.data
      //       });
      //     })
      //   } if (e.target.dataset.index.hasChild == "0") {
      //     my.navigateTo({
      //       url: "../Tmlsales/FMX/FMX?catid1=" + e.target.dataset.index.catId1 + "&nf=" + nf + "&yf=" + yf + "&title=" + a + "&catName=" + e.target.dataset.index.catName1 + ""
      //     });
      //   }
      // }
    }
  },
});
