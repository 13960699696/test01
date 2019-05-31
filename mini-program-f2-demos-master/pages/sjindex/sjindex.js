Page({
  data: {
    charts: [
      // { name: 'ksh', value: '销售报表' },
      { name: '10001', value: '销售趋势' },
      { name: '10002', value: '库存查询' },
      { name: '10003', value: '空间布销售' },
      { name: '10004', value: '洋葱报表' },
      // { name: 'ooopic_1554780361', value: '销售报表' },
      // { name: 'ooopic_1554780362', value: '销售报表' },
      // { name: 'ooopic_1554780363', value: '销售报表' },
      // { name: 'ooopic_1554780364', value: '销售报表' },
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
    // else {
    //   my.navigateTo({
    //     url: '../xsbb/line/index'
    //   });
    // }
  },
  onLoad: function () {
  }
})
