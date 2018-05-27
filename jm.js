if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
    padString = String(padString || ' ');
    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return padString.slice(0, targetLength) + String(this);
    }
  };
}

var $dayUL = document.getElementById('day-ul');
var $unit = $dayUL.querySelector('.day-unit');

function initDayComp(day) {
  var str = String(day);
  // str = str.padStart(4, '0');
  var r = '';
  for (var i = 0; i < str.length; ++i) {
    r += '<li>' + str[i] + '</li>';
  }
  $dayUL.innerHTML = r += $unit.outerHTML;

  let paddingLeft = ($dayUL.offsetWidth - ($dayUL.children[0].offsetWidth * str.length)) / 2;
  $dayUL.children[0].style.paddingLeft = paddingLeft + 'px';
}


var START_DATE = new Date('2017/09/15 21:15:00+0800');

var $span = document.getElementById('time').children[0];

var oday, ohours, ominutes;

function timer() {
  var now = Date.now();
  var day = 0, hours = 0, minutes = 0, seconds = 0;
  var delta = now - START_DATE;
  var timeStr = '';
  if (delta > 86400000) {
    day = ~~(delta / 86400000);
    delta = delta % 86400000;
  }

  if (oday !== day) {
    initDayComp(day);
    oday = day;
  }

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

  $span.innerHTML = timeStr;
}
timer();
setInterval(function () {
  timer();
}, 1000);


var COLOR_SET = [
  '#00BFA5',
  '#00B8D4',
  '#FF1744',
  '#CDDC39',
  '#DD2C00',
  '#FFCC80',
  '#FF6F00'
];
var $ballContainer = document.getElementById('ball-container');
function makeBall() {
  var i = COLOR_SET[0];
  COLOR_SET = COLOR_SET.sort(function () {
    return Math.random() > 0.5 ? 1 : -1;
  });
  var $ball = document.createElement('div');
  $ball.className = 'float-ball'
  $ball.style.backgroundColor = i;
  $ball.style.left = ~~(Math.random() * 70 + 10) + '%';
  return $ball;
}

function showBall() {
  var ball = makeBall();
  $ballContainer.appendChild(ball);
  setTimeout(function () {
    ball.className += ' float-ball-after';
    setTimeout(function () {
      ball.remove();
    }, 3000);
  }, 100);
}

setTimeout(function () {
  showBall();
  setTimeout(arguments.callee, 1000);
}, 1000);
