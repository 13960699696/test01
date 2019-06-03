Page({
  data: {
    charts: [
      { name: '10001', value: '销售趋势' },
      { name: '10002', value: '库存查询' },
      { name: '10003', value: '空间布销售' },
      { name: '10004', value: '洋葱报表' },
    ],
    charts1: [
      { name: '10005', value: '机台开工率' },
    ],
  },
  gotoPage: function (e) {
    var page = e.currentTarget.dataset.page;
    if (page == '10001') {
      my.navigateTo({
        url: '../xsbb/stack-bar/index'
      });
    } 
    if (page == '10002') {
      my.navigateTo({
        url: '../xsbb/stocksel/stocksel'
      });
    }
    if (page == '10003') {
      my.navigateTo({
        url: '../xsbb/saleskjb/saleskjb'
      });
    }
    if (page == '10004') {
      my.navigateTo({
        url: '../xsbb/YCbb/YCbb'
      });
    }
  },
  gotoPage1: function (e) {
    var page = e.currentTarget.dataset.page;
    if (page == '10005') {
      my.navigateTo({
        url: '../xsbb/scqk/scqk'
      });
    }
  },
  onLoad: function () {
  }
})
