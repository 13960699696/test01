if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$.js?appxworker=1');


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
require('../../pages/index/index.js?appxworker=1');
require('../../pages/charts/line/index.js?appxworker=1');
require('../../pages/charts/area/index.js?appxworker=1');
require('../../pages/charts/column/index.js?appxworker=1');
require('../../pages/charts/bar/index.js?appxworker=1');
require('../../pages/charts/dodge/index.js?appxworker=1');
require('../../pages/charts/dodge-bar/index.js?appxworker=1');
require('../../pages/charts/stack-column/index.js?appxworker=1');
require('../../pages/charts/stack-bar/index.js?appxworker=1');
require('../../pages/charts/ring/index.js?appxworker=1');
require('../../pages/charts/pie/index.js?appxworker=1');
require('../../pages/charts/rose/index.js?appxworker=1');
require('../../pages/charts/radar/index.js?appxworker=1');
require('../../pages/charts/gauge/index.js?appxworker=1');
require('../../pages/charts/double-axis/index.js?appxworker=1');
require('../../pages/charts/stack-area/index.js?appxworker=1');
}
self.bootstrapApp ? self.bootstrapApp({ success: success }) : success();
}