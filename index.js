var countDownDate = new Date("September 28, 2021 22:00:00").getTime();

var myfunc = setInterval(function () {}, 1000);

var now = new Date().getTime();
var timeleft = countDownDate - now; //

var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
