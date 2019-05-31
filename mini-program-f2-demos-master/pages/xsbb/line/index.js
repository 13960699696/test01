// import F2 from '@antv/my-f2';
// 按需引入 F2 模块
// import F2 from '@antv/my-f2/lib/core';
const F2=require('@antv/my-f2/lib/core');
require('@antv/f2/lib/geom/line');
require('@antv/f2/lib/scale/time-cat');
const Tooltip = require('@antv/f2/lib/plugin/tooltip');
const Legend = require('@antv/f2/lib/plugin/legend');
var util = require('../../../utils/common.js');
const app = getApp();

let chart = null;
function clone(obj) {
  var o;
  if (typeof obj == "object") {
    if (obj === null) {
      o = null;
    } else {
      if (obj instanceof Array) {
        o = [];
        for (var i = 0, len = obj.length; i < len; i++) {
          o.push(clone(obj[i]));
        }
      } else {
        o = {};
        for (var j in obj) {
          o[j] = clone(obj[j]);
        }
      }
    }
  } else {
    o = obj;
  }
  return o;
}

function drawChart(_this, canvas, width, height) {
  var data = _this.data.sjdata
  chart = new F2.Chart({
    el: canvas,
    width,
    height,
    plugins: [Tooltip, Legend]
  });

  chart.source(data);
  chart.scale('date', {
    tickCount: 31
  });
  chart.scale('value', {
    tickCount: 5
  });
  chart.tooltip({
    custom: true, // 自定义 tooltip 内容框
    onChange: function onChange(obj) {
      var legend = chart.get('legendController').legends.top[0];
      var tooltipItems = obj.items;
      var legendItems = legend.items;
      var map = {};
      legendItems.map(function (item) {
        map[item.name] = clone(item);
      });
      tooltipItems.map(function (item) {
        var name = item.name;
        var value = item.value;
        if (map[name]) {
          map[name].value = value;
        }
      });
      legend.setItems(Object.values(map));
    },
    onHide: function onHide() {
      var legend = chart.get('legendController').legends.top[0];
      legend.setItems(chart.getLegendItems().country);
    }
  });
  chart.line().position('date*value').color('type', type => {
    if (type === '今年') {
      return 'red';
    }
    if (type === '去年') {
      return '#666666';
    }
    return '#00FF00'
  }).shape('type', type => { // 回调函数
    if (type === '今年指标') {
      return 'dash';
    }
    if (type === '今年') {
      return 'smooth';
    }
    return 'smooth';
  });
  chart.render();
  return chart;
}

Page({
  data: {
    sjdata: [],
    Lastdata: [],
    yearindex: [],
    year: [],
  },
  onLoad() {
    var getLastYearurl='http://125.77.111.31:8105//DingTalk/GetAnnualSales?action=getLastYear';
    var getThisYearPlanurl='http://125.77.111.31:8105//DingTalk/GetAnnualSales?action=getThisYearPlan';
    var getThisYearurl='http://125.77.111.31:8105//DingTalk/GetAnnualSales?action=getThisYear';
    util.Request(getLastYearurl).then((res) => {
      this.setData({
        Lastdata: res.data
      });
      util.Request(getThisYearPlanurl).then((res) => {
        this.setData({
          yearindex: res.data
        });
        util.Request(getThisYearurl).then((res) => {
          this.setData({
            year: res.data
          });
          this.cldata()
          my.createSelectorQuery()
            .select('#line')
            .boundingClientRect()
            .exec((res) => {
              // 获取分辨率
              const pixelRatio = my.getSystemInfoSync().pixelRatio / 2;
              // 获取画布实际宽高
              const canvasWidth = res[0].width;
              const canvasHeight = res[0].height;
              this.setData({
                width: canvasWidth * pixelRatio,
                height: canvasHeight * pixelRatio
              });
              const myCtx = my.createCanvasContext('line');
              myCtx.scale(pixelRatio, pixelRatio); // 必要！按照设置的分辨率进行放大
              const canvas = new F2.Renderer(myCtx);
              this.canvas = canvas;
              drawChart(this, canvas, res[0].width, res[0].height);
            });
        })
      })
    })
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
    var length = this.data.year.length
    var qn = {}
    var jnzb = {}
    var jn = {}
    var json = []
    for (var i = 0; i < 12; i++) {
      qn.date = (i + 1).toString()
      qn.type = '去年'
      qn.value = parseInt(this.data.Lastdata[i].leviedTotal2)

      jnzb.date = (i + 1).toString()
      jnzb.type = '今年指标'
      jnzb.value = parseInt(this.data.yearindex[i].leviedTotal2)

      jn.date = (i + 1).toString()
      jn.type = '今年'
      if (i < length) {
        jn.value = parseInt(this.data.year[i].leviedTotal2)
      } else {
        jn.value = null
      }
      json.push(qn)
      json.push(jnzb)
      json.push(jn)
      qn = {}
      jnzb = {}
      jn = {}
    }
    this.setData({
      sjdata: json
    });
  }
});
