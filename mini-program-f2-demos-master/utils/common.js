function Request(url) {
  return new Promise(function (resolve, reject) {
    my.httpRequest({
      url: url,
      success: function (res) {
        resolve(res);
      },
      fail: () => {
        reject("系统异常，请重试！")
      }
    });
  })
}

function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = (Array(2).join('0') + month).slice(-2);
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return year + "-" + month;
}

module.exports = {
  Request: Request,
  formatTime: formatTime,
}