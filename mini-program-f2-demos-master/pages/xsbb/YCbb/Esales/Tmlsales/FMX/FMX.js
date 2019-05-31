var util = require('../../../../../../utils/common.js');
Page({
  data: {
    array: ['数量', '面积', '金额'],
    index: 0,
    imgindex: 1,
    showModal: false,
    pageIndex: 1,
    listData: [],
    getmothod: 0
  },
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value,
    }, () => {
      this.require()
    });
  },
  selecttop() {
    this.setData({
      imgindex: this.data.imgindex == 1 ? 2 : 1
    }, () => {
      this.require()
    });
  },
  onLoad: function (e) {
    this.setData({
      nf: e.nf,
      yf: e.yf,
      title: e.title,
      catName: e.catName,
      catid1: e.catid1
    });
    if (e.yf == undefined) {
      this.Nrequire(e.nf)
    } else {
      this.NYrequire(e.nf, e.yf)
    }
  },
  onShow() {
    // 页面显示
    this.setData({
      index: 0,
      imgindex: 1,
      showModal: false,
      pageIndex: 1,
      listData: []
    })
  },
  NYrequire(a, b) {
    var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=MX&nf=" + a + "&yf=" + b + "&catid1=" + this.data.catid1 + "&pageIndex=" + this.data.pageIndex + "";
    url = encodeURI(url)
    util.Request(url).then((res) => {
      // a.push.apply(a,[4,5,6]);
      this.data.listData.push.apply(this.data.listData, res.data)
      this.setData({
        listData: this.data.listData
      });
    })
  },
  Nrequire(a) {
    var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=MXN&nf=" + a + "&catid1=" + this.data.catid1 + "&pageIndex=" + this.data.pageIndex + "";
    url = encodeURI(url)
    util.Request(url).then((res) => {
      this.data.listData.push.apply(this.data.listData, res.data)
      this.setData({
        listData: this.data.listData
      });
    })
  },
  require() {
    let Num = null
    let sort = null
    if (this.data.index == 0) {
      Num = "Num"
    }
    if (this.data.index == 1) {
      Num = "Area"
    }
    if (this.data.index == 2) {
      Num = "AOM"
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
    if (this.data.yf == undefined) {
      var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=MXsortN&nf=" + this.data.nf + "&catid1=" + this.data.catid1 + "&Num=" + Num + "&sort=" + sort + "&pageIndex=" + this.data.pageIndex + "";
      url = encodeURI(url)
      util.Request(url).then((res) => {
        this.setData({
          listData: res.data,
        });
        // this.data.listData.push.apply(this.data.listData, res.data)
        // this.setData({
        //   listData: this.data.listData
        // });
      })
    } else {
      var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=MXsort&nf=" + this.data.nf + "&yf=" + this.data.yf + "&catid1=" + this.data.catid1 + "&Num=" + Num + "&sort=" + sort + "&pageIndex=" + this.data.pageIndex + "";
      url = encodeURI(url)
      util.Request(url).then((res) => {
        this.setData({
          listData: res.data,
        });
        // this.data.listData.push.apply(this.data.listData, res.data)
        // this.setData({
        //   listData: this.data.listData
        // });
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
      Num = "Num"
    }
    if (this.data.index == 1) {
      Num = "Area"
    }
    if (this.data.index == 2) {
      Num = "AOM"
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
      getmothod: 2
    });
    if (this.data.yf == undefined) {
      var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=MXsearchN&nf=" + this.data.nf + "&catid1=" + this.data.catid1 + "&Num=" + Num + "&sort=" + sort + "&itemSize=" + this.data.itemSize + "&pageIndex=" + this.data.pageIndex + "";
      url = encodeURI(url)
      util.Request(url).then((res) => {
        this.setData({
          listData: res.data
        });
      })
    } else {
      var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=MXsearch&nf=" + this.data.nf + "&yf=" + this.data.yf + "&&catid1=" + this.data.catid1 + "&Num=" + Num + "&sort=" + sort + "&itemSize=" + this.data.itemSize + "&pageIndex=" + this.data.pageIndex + "";
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
      itemSize: e.detail.value
    });
  },
  loading() {
    if(this.data.showModal==true){
      return
    }
    let Num = null
    let sort = null
    if (this.data.index == 0) {
      Num = "Num"
    }
    if (this.data.index == 1) {
      Num = "Area"
    }
    if (this.data.index == 2) {
      Num = "AOM"
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
    if (this.data.getmothod == 0) {
      if (this.data.yf == undefined) {
        this.Nrequire(this.data.nf)
      } else {
        this.NYrequire(this.data.nf, this.data.yf)
      }
    }
    if (this.data.getmothod == 1) {
      if (this.data.yf == undefined) {
        var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=MXsortN&nf=" + this.data.nf + "&catid1=" + this.data.catid1 + "&Num=" + Num + "&sort=" + sort + "&pageIndex=" + this.data.pageIndex + "";
        url = encodeURI(url)
        util.Request(url).then((res) => {
          this.data.listData.push.apply(this.data.listData, res.data)
          this.setData({
            listData: this.data.listData
          });
        })
      } else {
        var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=MXsort&nf=" + this.data.nf + "&yf=" + this.data.yf + "&catid1=" + this.data.catid1 + "&Num=" + Num + "&sort=" + sort + "&pageIndex=" + this.data.pageIndex + "";
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
      if (this.data.yf == undefined) {
        var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=MXsearchN&nf=" + this.data.nf + "&catid1=" + this.data.catid1 + "&Num=" + Num + "&sort=" + sort + "&itemSize=" + this.data.itemSize + "&pageIndex=" + this.data.pageIndex + "";
        url = encodeURI(url)
        util.Request(url).then((res) => {
          this.data.listData.push.apply(this.data.listData, res.data)
          this.setData({
            listData: this.data.listData
          });
        })
      } else {
        var url = "http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=MXsearch&nf=" + this.data.nf + "&yf=" + this.data.yf + "&&catid1=" + this.data.catid1 + "&Num=" + Num + "&sort=" + sort + "&itemSize=" + this.data.itemSize + "&pageIndex=" + this.data.pageIndex + "";
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
})
