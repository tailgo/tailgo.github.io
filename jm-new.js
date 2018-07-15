function stringPaddingStart(src, targetLength, padString) {
    targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
    padString = String(padString || ' ');
    if (src.length > targetLength) {
        return String(src);
    } else {
        targetLength = targetLength - src.length;
        if (targetLength > padString.length) {
            padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
        }
        return padString.slice(0, targetLength) + String(src);
    }
}

function initDayComp(day, $dom) {
  var str = String(day);

  $dom.innerHTML = str;
}

function timer(start, cb) {
  var now = Date.now();
  var day = 0, hours = 0, minutes = 0, seconds = 0;
  var delta = now - start;
  var timeStr = '';
  if (delta > 86400000) {
    day = ~~(delta / 86400000);
    delta = delta % 86400000;
  }

  // if (oday !== day) {
  //   initDayComp(day);
  //   oday = day;
  // }

  if (delta > 3600000) {
    hours = ~~(delta / 3600000);
    delta = delta % 3600000;
  }
  timeStr += String(hours).padStart(2, '0') + ':';

  if (delta > 60000) {
    minutes = ~~(delta / 60000);
    delta = delta % 60000;
  }
  timeStr += String(minutes).padStart(2, '0') + '\'';

  seconds = ~~(delta / 1000);
  timeStr += String(seconds).padStart(2, '0') + '"';

  cb(day, timeStr);
}

var START_DATE = new Date('2017/09/15 21:15:00+0800');
var $day = document.getElementById('day');
var $timer = document.getElementById('time');
var oday;
function main() {
  timer(START_DATE, function (day, timeStr) {
    if (oday !== day) {
      initDayComp(day, $day);
      oday = day;
    }
    $timer.innerHTML = timeStr;
  });
}

function showMsg(className, cb) {
  setTimeout(function () {
    document.querySelector(className).style.display = 'block';
    cb();
  }, 1000);
}
function showDesc(className) {
  setTimeout(function () {
    let $desc = document.querySelector(className);
    $desc.style.opacity = 1;
    $desc.style.display = 'flex';
  }, 1000);
}

showMsg('.left', function () {
  showMsg('.right', function () {
    showDesc('.desc-box', function () {});
  });
});

main();
setInterval(function () {
  main();
}, 1000);


