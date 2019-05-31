var util = require('../../../utils/common.js');
Component({
  mixins: [],
  data: {
    inputValue1: '',
    selectShow: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['物料代码', '物料名称', '物料规格'],//下拉列表的数据
    index: 0,//选择的下拉列表下标
    itemNo: '',
    itemName: '',
    itemSize: '',
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
    search() {
      var index = parseInt(this.data.index);
      if (index == 0) {
        this.setData({
          itemNo: this.data.inputValue1
        });
      }
      if (index == 1) {
        this.setData({
          itemName: this.data.inputValue1
        });

      }
      if (index == 2) {
        this.setData({
          itemSize: this.data.inputValue1
        });
      }
      var url = "http://125.77.111.31:8105/DingTalk/MatList?act=sel&itemName=" + this.data.itemName + "&itemNo=" + this.data.itemNo + "&itemSize=" + this.data.itemSize + "&selCat=&freeNum=0";
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

