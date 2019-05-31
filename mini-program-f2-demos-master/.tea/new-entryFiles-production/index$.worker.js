if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$.js?appxworker=1');
require('./importScripts$.js?appxworker=1');

var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../../app.js?appxworker=1');
require('../../pages/sjindex/sjindex.js?appxworker=1');
require('../../pages/charts/line/index.js?appxworker=1');
require('../../pages/xsbb/line/index.js?appxworker=1');
require('../../pages/xsbb/stack-bar/index.js?appxworker=1');
}
self.bootstrapApp ? self.bootstrapApp({ success: success }) : success();
}