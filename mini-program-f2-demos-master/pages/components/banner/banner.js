var util = require('../../../utils/common.js');
Component({
  mixins: [],
  data: {
    array: ['全部', '面料产成品A级仓',
      '面料产成品A级短米仓', '面料产成品B级仓',
      '上海办事处A级仓', '上海办事处B级仓', '威海办事处A级仓',
      '威海办事处B级仓', '广州办事处A级仓', '广州办事处B级仓',
      '郑州办事处A级仓', '郑州办事处B级仓', '上海办事处A级短米仓',
      '威海办事处A级短米仓', '广州办事处A级短米仓', '郑州办事处A级短米仓',
      '面料产成品C级仓', '产成品待处理仓', '剪刀样消耗仓',
      '地板产成品A级仓', '面料产成品C级仓', '上海办事处(地板)A级仓',
      '上海办事处(地板)B级仓', '义乌办事处(地板)A级仓', '义乌办事处(地板)B级仓',
      '临沂办事处(地板)A级仓', '临沂办事处(地板)B级仓', '武汉办事处(地板)A级仓',
      '武汉办事处(地板)B级仓', '广州办事处(地板)A级仓', '广州办事处(地板)B级仓',
      '上海办事处格顿(地板)A级仓', '广州办事处格顿(地板)A级仓', '成都办事处(地板)A级仓',
      '成都办事处(地板)B级仓', '厦门办事处(地板)A级仓', '厦门办事处(地板)B级仓',
      '佛山石井(地板)A级仓', '无锡办事处(地板)A级仓', '无锡办事处(地板)B级仓',
      '面料产成品待检仓'],
    objectArray: [
      {
        id: 0,
        name: '全部',
      },
      {
        id: 1,
        name: '面料产成品A级仓',
      },
      {
        id: 2,
        name: '面料产成品A级短米仓',
      },
      {
        id: 3,
        name: '面料产成品B级仓',
      }, {
        id: 4,
        name: '上海办事处A级仓',
      },
      {
        id: 5,
        name: '上海办事处B级仓',
      },
      {
        id: 6,
        name: '威海办事处A级仓',
      },
      {
        id: 7,
        name: '威海办事处B级仓',
      }, {
        id: 8,
        name: '广州办事处A级仓',
      },
      {
        id: 9,
        name: '广州办事处B级仓',
      },
      {
        id: 10,
        name: '郑州办事处A级仓',
      },
      {
        id: 11,
        name: '郑州办事处B级仓',
      }, {
        id: 12,
        name: '上海办事处A级短米仓',
      },
      {
        id: 13,
        name: '威海办事处A级短米仓',
      }, {
        id: 14,
        name: '广州办事处A级短米仓',
      },
      {
        id: 15,
        name: '郑州办事处A级短米仓',
      }, {
        id: 16,
        name: '面料产成品C级仓',
      },
      {
        id: 17,
        name: '产成品待处理仓',
      }, {
        id: 18,
        name: '剪刀样消耗仓',
      },
      {
        id: 19,
        name: '地板产成品A级仓',
      }, {
        id: 20,
        name: '面料产成品C级仓',
      },
      {
        id: 21,
        name: '上海办事处(地板)A级仓',
      }
      ,
      {
        id: 22,
        name: '上海办事处(地板)B级仓',
      },
      {
        id: 23,
        name: '义乌办事处(地板)A级仓',
      }
      ,
      {
        id: 24,
        name: '义乌办事处(地板)B级仓',
      },
      {
        id: 25,
        name: '临沂办事处(地板)A级仓',
      }
      ,
      {
        id: 26,
        name: '临沂办事处(地板)B级仓',
      },
      {
        id: 27,
        name: '武汉办事处(地板)A级仓',
      }
      ,
      {
        id: 28,
        name: '武汉办事处(地板)B级仓',
      },
      {
        id: 29,
        name: '广州办事处(地板)A级仓',
      }
      ,
      {
        id: 30,
        name: '广州办事处(地板)B级仓',
      },
      {
        id: 31,
        name: '上海办事处格顿(地板)A级仓',
      }
      ,
      {
        id: 32,
        name: '广州办事处格顿(地板)A级仓',
      },
      {
        id: 33,
        name: '成都办事处(地板)A级仓',
      }
      ,
      {
        id: 34,
        name: '成都办事处(地板)B级仓',
      },
      {
        id: 35,
        name: '厦门办事处(地板)A级仓',
      }
      ,
      {
        id: 36,
        name: '厦门办事处(地板)B级仓',
      },
      {
        id: 37,
        name: '佛山石井(地板)A级仓',
      },
      {
        id: 38,
        name: '无锡办事处(地板)A级仓',
      }
      ,
      {
        id: 39,
        name: '无锡办事处(地板)B级仓',
      },
      {
        id: 40,
        name: '面料产成品待检仓',
      }
    ],
    arrIndex: 0,
    zindex: 0,
    inputValue1: '',
    selectShow: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['订单号', '客户名称', '业务员', '物料代码', '物料名称', '物料规格', '货号'],//下拉列表的数据
    index: 0,//选择的下拉列表下标
    itemNo: '',
    itemName: '',
    itemSize: '',
    customerName: '',
    orderNo: '',
    salesmanName: '',
    GoodsCode: '',
    // 默认选中菜单
    currentTab: 0,
    pick_name: "",
    list: [],
  },
  props: {},
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    //物料查询
    bindKeyInput1(e) {
      this.setData({
        inputValue1: e.detail.value,
      });
    },
    // 点击下拉显示框
    selectTap() {
      this.setData({
        selectShow: !this.data.selectShow
      });
    },
    // 点击下拉列表
    optionTap(e) {
      let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
      this.setData({
        index: Index,
        selectShow: !this.data.selectShow
      });
    },
    bindPickerChange(e) {
      this.setData({
        zindex: e.detail.value,
      });
    },
    search() {
      var index = parseInt(this.data.index);
      if (index == 0) {
        this.setData({
          orderNo: this.data.inputValue1
        });
      }
      if (index == 1) {
        this.setData({
          customerName: this.data.inputValue1
        });
      }
      if (index == 2) {
        this.setData({
          salesmanName: this.data.inputValue1
        });
      }
      if (index == 3) {
        this.setData({
          itemNo: this.data.inputValue1
        });
      }
      if (index == 4) {
        this.setData({
          itemName: this.data.inputValue1
        });
      }
      if (index == 5) {
        this.setData({
          itemSize: this.data.inputValue1
        });
      }
      if (index == 6) {
        this.setData({
          GoodsCode: this.data.inputValue1
        });
      }
      let typeId = "";
      if (this.data.zindex != 0) {
        typeId = (parseInt(this.data.zindex) + 27).toString();
      }
      var url = "http://125.77.111.31:8105/DingTalk/SalesOrderStock?act=sel&itemSize=" + this.data.itemSize + "&GoodsCode=" + this.data.GoodsCode + "&typeId=" + typeId + "&orderNo=" + this.data.orderNo + "&itemName=" + this.data.itemName + "&seHao=&customerName=" + this.data.customerName + "&itemNo=" + this.data.itemNo + "&wbSize=&huaWen=&salesmanName=" + this.data.salesmanName + "&OldSysItem=&productCode=&Overdue=1&catIds=&Qkstatus=1";
      url = encodeURI(url)
      util.Request(url).then((res) => {
        this.setData({
          total: res.data.total,
          list: res.data.rows
        });
      })
    }
  },
});
