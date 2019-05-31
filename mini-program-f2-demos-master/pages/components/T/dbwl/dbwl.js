var util = require('../../../../utils/common.js');
var app = getApp();
Component({
  mixins: [],
  data: {
    dbcatId1: 508817
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
    this.require(this.data.dbcatId1)
  },
  didUpdate(prevProps, prevData) {
  },
  didUnmount() {
  },
  methods: {
    require(dbcatId1) {
      let a = this.props.title;
      let nf = (parseInt(a.substr(0, 4))).toString();
      if (a.length == 4) {
        var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=YCXS03DBN&nf=" + nf + "&catId1=" + dbcatId1 + "";
        url = encodeURI(url)
        util.Request(url).then((res) => {
          this.setData({
            listData: res.data
          });
        })
      } else {
        let yf = parseInt(a.substr(a.length - 2, 2))
        var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=YCXS03DB&nf=" + nf + "&yf=" + yf + "&catId1=" + dbcatId1 + "";
        url = encodeURI(url)
        util.Request(url).then((res) => {
          this.setData({
            listData: res.data
          });
        })
      }
    },
    MXNV(e) {
      // app.globalData.catId1
      app.globalData.catId1=e.target.dataset.index.catId1
      if (e.target.dataset.index.hasChild == "1") {
        this.require(e.target.dataset.index.catId1);
      } if (e.target.dataset.index.hasChild == "0") {
        let a = this.props.title;
        let nf = (parseInt(a.substr(0, 4))).toString();
        if (a.length == 4) {
          my.navigateTo({
            url: "../Tmlsales/FMX/FMX?catid1=" + e.target.dataset.index.catId1 + "&nf=" + nf + "&title=" + a + "&catName=" + e.target.dataset.index.catName + ""
          });
        } else {
          let yf = parseInt(a.substr(a.length - 2, 2))
          my.navigateTo({
          url: "../Tmlsales/FMX/FMX?catid1=" + e.target.dataset.index.catId1 + "&nf=" + nf + "&yf=" + yf + "&title=" + a + "&catName=" + e.target.dataset.index.catName + ""
        });
        }
      }
    }
  },
});