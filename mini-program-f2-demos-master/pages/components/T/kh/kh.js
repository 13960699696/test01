var util = require('../../../../utils/common.js');
var app = getApp();
Component({
  mixins: [],
  data: {
    array: ['销售金额', '环比', '同比'],
    index: 0,
    imgindex: 1,
    showModal: false,
    state: "1",
    pageIndex: 1,
    listData: [],
    getmothod: 0
  },
  props: {
  },
  didMount() {
    this.setData({
      index: 0,
      imgindex: 1,
      showModal: false,
      pageIndex: 1,
      listData: []
    })
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
    this.require();
  },
  didUpdate() {
  },
  didUnmount() { },
  methods: {
    require() {
      let a = this.props.title;
      let nf = (parseInt(a.substr(0, 4))).toString();
      if (a.length == 4) {
        var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=KHN&nf=" + nf + "&catId1=" + app.globalData.catId1 + "&pageIndex=" + this.data.pageIndex + "";
        url = encodeURI(url)
        util.Request(url).then((res) => {
          this.data.listData.push.apply(this.data.listData, res.data)
          this.setData({
            listData: this.data.listData
          });
        })
      } else {
        let yf = parseInt(a.substr(a.length - 2, 2))
        let date = a + "-01";
        var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=KH&nf=" + nf + "&yf=" + yf + "&date=" + date + "&catId1=" + app.globalData.catId1 + "&pageIndex=" + this.data.pageIndex + "";
        url = encodeURI(url)
        util.Request(url).then((res) => {
          this.data.listData.push.apply(this.data.listData, res.data)
          this.setData({
            listData: this.data.listData
          });
        })
      }
    },
    bindPickerChange(e) {
      this.setData({
        index: e.detail.value,
      }, () => {
        this.KHrequire()
      });
    },
    selecttop() {
      this.setData({
        imgindex: this.data.imgindex == 1 ? 2 : 1
      }, () => {
        this.KHrequire()
      });
    },
    KHrequire() {
      let Num = null
      let sort = null
      if (this.data.index == 0) {
        Num = "AOM"
      }
      if (this.data.index == 1) {
        Num = "HB"
      }
      if (this.data.index == 2) {
        Num = "TB"
      }
      if (this.data.imgindex == 1) {
        sort = "desc"
      }
      if (this.data.imgindex == 2) {
        sort = ""
      }
      this.setData({
        pageIndex: 1,
        listData: [],
        getmothod: 1
      });
      let a = this.props.title;
      let nf = (parseInt(a.substr(0, 4))).toString();
      let date = a + "-01";
      if (a.length == 4) {
        var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=KHsortN&nf=" + nf + "&Num=" + Num + "&sort=" + sort + "&catId1=" + app.globalData.catId1 + "&pageIndex=" + this.data.pageIndex + "";
        url = encodeURI(url)
        util.Request(url).then((res) => {
          this.setData({
            listData: res.data
          });
        })
      } else {
        let yf = parseInt(a.substr(a.length - 2, 2))
        var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=KHsort&nf=" + nf + "&yf=" + yf + "&date=" + date + "&Num=" + Num + "&sort=" + sort + "&catId1=" + app.globalData.catId1 + "&pageIndex=" + this.data.pageIndex + "";
        url = encodeURI(url)
        util.Request(url).then((res) => {
          this.setData({
            listData: res.data
          });
        })
      }
    },
    /**
  * 弹窗
  */
    showDialogBtn: function () {
      this.setData({
        showModal: true
      })
    },
    /**
     * 弹出框蒙层截断touchmove事件
     */
    preventTouchMove: function () {
    },
    /**
     * 隐藏模态对话框
     */
    hideModal: function () {
      this.setData({
        showModal: false
      });
    },
    /**
     * 对话框取消按钮点击事件
     */
    onCancel: function () {
      this.hideModal();
    },
    /**
     * 对话框确认按钮点击事件
     */
    onConfirm: function () {
      this.hideModal();
      let Num = null
      let sort = null
      if (this.data.index == 0) {
        Num = "AOM"
      }
      if (this.data.index == 1) {
        Num = "HB"
      }
      if (this.data.index == 2) {
        Num = "TB"
      }
      if (this.data.imgindex == 1) {
        sort = "desc"
      }
      if (this.data.imgindex == 2) {
        sort = ""
      }
      let a = this.props.title;
      let nf = (parseInt(a.substr(0, 4))).toString();
      let date = a + "-01";
      this.setData({
        pageIndex: 1,
        listData: [],
        getmothod: 2
      });
      if (a.length == 4) {
        var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=KHsearchN&nf=" + nf + "&Num=" + Num + "&sort=" + sort + "&customerName=" + this.data.customerName + "&catId1=" + app.globalData.catId1 + "&pageIndex=" + this.data.pageIndex + "";
        url = encodeURI(url)
        util.Request(url).then((res) => {
          this.setData({
            listData: res.data
          });
        })
      } else {
        let yf = parseInt(a.substr(a.length - 2, 2))
        var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=KHsearch&nf=" + nf + "&yf=" + yf + "&date=" + date + "&Num=" + Num + "&sort=" + sort + "&customerName=" + this.data.customerName + "&catId1=" + app.globalData.catId1 + "&pageIndex=" + this.data.pageIndex + "";
        url = encodeURI(url)
        util.Request(url).then((res) => {
          this.setData({
            listData: res.data
          });
        })
      }
    },
    bindKeyInput1(e) {
      this.setData({
        customerName: e.detail.value
      });
    },
    loading() {
      if (this.data.showModal == true) {
        return
      }
      let Num = null
      let sort = null
      if (this.data.index == 0) {
        Num = "AOM"
      }
      if (this.data.index == 1) {
        Num = "HB"
      }
      if (this.data.index == 2) {
        Num = "TB"
      }
      if (this.data.imgindex == 1) {
        sort = "desc"
      }
      if (this.data.imgindex == 2) {
        sort = ""
      }
      let pageIndex = this.data.pageIndex + 1
      this.setData({
        pageIndex: pageIndex,
      });
      let a = this.props.title;
      let nf = (parseInt(a.substr(0, 4))).toString();
      let date = a + "-01";
      if (this.data.getmothod == 0) {
        if (this.data.yf == undefined) {
          this.require()
        } else {
          this.require()
        }
      }
      if (this.data.getmothod == 1) {
        if (a.length == 4) {
          var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=KHsortN&nf=" + nf + "&Num=" + Num + "&sort=" + sort + "&catId1=" + app.globalData.catId1 + "&pageIndex=" + this.data.pageIndex + "";
          url = encodeURI(url)
          util.Request(url).then((res) => {
            this.data.listData.push.apply(this.data.listData, res.data)
            this.setData({
              listData: this.data.listData
            });
          })
        } else {
          let yf = parseInt(a.substr(a.length - 2, 2))
          var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=KHsort&nf=" + nf + "&yf=" + yf + "&date=" + date + "&Num=" + Num + "&sort=" + sort + "&catId1=" + app.globalData.catId1 + "&pageIndex=" + this.data.pageIndex + "";
          url = encodeURI(url)
          util.Request(url).then((res) => {
            this.data.listData.push.apply(this.data.listData, res.data)
            this.setData({
              listData: this.data.listData
            });
          })
        }
      }
      if (this.data.getmothod == 2) {
        if (a.length == 4) {
          var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=KHsearchN&nf=" + nf + "&Num=" + Num + "&sort=" + sort + "&customerName=" + this.data.customerName + "&catId1=" + app.globalData.catId1 + "&pageIndex=" + this.data.pageIndex + "";
          url = encodeURI(url)
          util.Request(url).then((res) => {
            this.data.listData.push.apply(this.data.listData, res.data)
            this.setData({
              listData: this.data.listData
            });
          })
        } else {
          let yf = parseInt(a.substr(a.length - 2, 2))
          var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=KHsearch&nf=" + nf + "&yf=" + yf + "&date=" + date + "&Num=" + Num + "&sort=" + sort + "&customerName=" + this.data.customerName + "&catId1=" + app.globalData.catId1 + "&pageIndex=" + this.data.pageIndex + "";
          url = encodeURI(url)
          util.Request(url).then((res) => {
            this.data.listData.push.apply(this.data.listData, res.data)
            this.setData({
              listData: this.data.listData
            });
          })
        }
      }
    },
  },
});
