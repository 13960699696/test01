// import F2 from '@antv/my-f2';
const F2 = require('@antv/my-f2');
const app = getApp();
var util = require('../../../utils/common.js');
let chart = null;

function drawChart(_this, canvas, width, height) {
  var data = _this.data.sjdata;
  var chart = new F2.Chart({
    syncY: true,
    el: canvas,
    width,
    height
  });

  chart.source(data, {
    'ple': {
      tickCount: 5
    },
  });
  chart.scale('ple', {
    tickInterval: 1000
  });
  chart.coord({
    transposed: false
  });
  chart.axis('State', {
    line: F2.Global._defaultAxis.line,
    grid: null
  });
  chart.axis('Solidline', false);
  chart.axis('Dottedline', false);
  chart.axis('ple', {
    line: null,
    grid: F2.Global._defaultAxis.grid
  });
  chart.tooltip({
    showCrosshairs: false,
    crosshairsStyle: {
      stroke: '#1890ff'
    },
    background: {
      fill: '#1890ff'
    },
    nameStyle: {
      fill: '#fff'
    },
    onShow: function onShow(ev) {
      ev.items.pop(); // 将重复的去除
    },
    custom: true, // 自定义 tooltip 内容框
    onChange: function (obj) {
      var legend = chart.get('legendController').legends.top[0];
      var tooltipItems = obj.items;
      var legendItems = legend.items;
      var map = {};
      legendItems.map(function (item) {
        map[item.name] = Object.assign({}, item);
      });
      tooltipItems.map(function (item, index) {
        var mldblength = _this.data.mldbtotle.length;
        var yearindexlength = _this.data.yearindex.length;
        var yearlength = _this.data.year.length;
        var name = item.name;
        var value = item.value;
        if (map[name]) {
          map[name].value = (value);
        }
        if (item.title) {
          map["ml"] = Object.assign({}), map["面料"];
          map["ml"].name = "今年合计";
          map["ml"].value = (parseInt(item.title - 1) < mldblength) ? parseInt(_this.data.mldbtotle[parseInt(item.title - 1)].leviedTotal2) : null;
          map["ml"].marker = { fill: "#5627ff", radius: 3, symbol: "circle", stroke: "#fff" }
          map["qn"] = Object.assign({}), map["面料"];
          map["qn"].name = "去年";
          map["qn"].value = (parseInt(item.title - 1) < yearlength) ? parseInt(_this.data.year[parseInt(item.title - 1)].leviedTotal2) : null;
          map["qn"].marker = { fill: "#ff35168", radius: 3, symbol: "circle", stroke: "#fff" }
          map["yq"] = Object.assign({}), map["面料"];
          map["yq"].name = "今年预期";
          map["yq"].value = (parseInt(item.title - 1) < yearindexlength) ? parseInt(_this.data.yearindex[parseInt(item.title - 1)].leviedTotal2) : null;
          map["yq"].marker = { fill: "#159763", radius: 3, symbol: "circle", stroke: "#fff" }
        }
      });
      legend.setItems(Object.values(map));
    },
  });
  chart.interval().position('State*ple').color('type', type => {
    if (type === '地板') {
      return '#7FFFAA';
    }
    if (type === '面料') {
      return '#1E90FF';
    }
  }).adjust('stack');
  chart.line().position('State*Solidline').color('#F08080').shape('Solidline', Solidline => { // 回调函数
    return 'smooth';
  });
  chart.line().position('State*Dottedline').color('#FFB90F').shape('Dottedline', Dottedline => { // 回调函数
    return 'smooth';
  }).style({
    lineDash: [4, 4]
  });
  chart.render();
  return chart;
}

Page({
  data: {
    sjdata: null,
  },
  onLoad() {
    var getml = 'http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=getml';
    var getdb = 'http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=getdb';
    var getmldbtotle = 'http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=getmldbtotle';
    var getThisYearPlanurl = 'http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=getThisYearPlan';
    var getLastYearurl = 'http://125.77.111.31:8105/DingTalk/GetAnnualSales?action=getLastYear';
    util.Request(getml).then((res) => {
      this.setData({
        ml: res.data
      });
      util.Request(getdb).then((res) => {
        this.setData({
          db: res.data
        });
        util.Request(getmldbtotle).then((res) => {
          this.setData({
            mldbtotle: res.data
          });
          util.Request(getThisYearPlanurl).then((res) => {
            this.setData({
              yearindex: res.data
            });
            util.Request(getLastYearurl).then((res) => {
              this.setData({
                year: res.data
              });
              this.cldata()
              my.createSelectorQuery()
                .select('#stackBar')
                .boundingClientRect()
                .exec((res) => {
                  // 获取分辨率
                  const pixelRatio = my.getSystemInfoSync().pixelRatio;
                  // 获取画布实际宽高
                  const canvasWidth = res[0].width;
                  const canvasHeight = res[0].height;
                  this.setData({
                    width: canvasWidth * pixelRatio,
                    height: canvasHeight * pixelRatio
                  }, () => {
                    const myCtx = my.createCanvasContext('stackBar');
                    myCtx.scale(pixelRatio, pixelRatio); // 必要！按照设置的分辨率进行放大
                    const canvas = new F2.Renderer(myCtx);
                    this.canvas = canvas;
                    drawChart(this, canvas, res[0].width, res[0].height);
                  });
                });
            });
          });
        });
      });
    });
  },

  touchStart(e) {
    if (this.canvas) {
      this.canvas.emitEvent('touchstart', [e]);
    }
  },
  touchMove(e) {
    if (this.canvas) {
      this.canvas.emitEvent('touchmove', [e]);
    }
  },
  touchEnd(e) {
    if (this.canvas) {
      this.canvas.emitEvent('touchend', [e]);
    }
  },
  cldata() {
    var mllength = this.data.ml.length;
    var dblength = this.data.db.length;
    var yearindexlength = this.data.yearindex.length;
    var yearlength = this.data.year.length;
    let ml = {}
    let db = {}
    var json = []
    for (var i = 0; i < 12; i++) {
      ml.State = (i + 1).toString();
      ml.type = '面料';
      ml.ple = (i < mllength) ? parseInt(this.data.ml[i].leviedTotal2) : null;
      ml.Solidline = (i < yearlength) ? parseInt(this.data.year[i].leviedTotal2) : null;
      ml.Dottedline = (i < yearindexlength) ? parseInt(this.data.yearindex[i].leviedTotal2) : null;

      db.State = (i + 1).toString();
      db.type = '地板';
      db.ple = (i < dblength) ? parseInt(this.data.db[i].leviedTotal2) : null;
      db.Solidline = (i < yearlength) ? parseInt(this.data.year[i].leviedTotal2) : null;
      db.Dottedline = (i < yearindexlength) ? parseInt(this.data.yearindex[i].leviedTotal2) : null;
      json.push(ml)
      json.push(db)
      ml = {}
      db = {}
    }
    this.setData({
      sjdata: json
    });
  }
});
