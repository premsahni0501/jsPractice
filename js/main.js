var nameLable = document.getElementById('demo');

var username = document.getElementById('username');

var password = document.getElementById('password');
var rePassword = document.getElementById('re-password');

var enterbtn = document.getElementById('enter');

var errorInUsername = document.getElementById('errorInUsername');
var errorInPassword = document.getElementById('errorInPassword');
var errorInRePassword = document.getElementById('errorInRePassword');
var errorMsg = document.getElementById('errorMsg');

var timeInterval = setInterval(displayTime,1000);

function displayTime()
{
  var d = new Date();
  document.getElementById('dateTimeDisplay').innerHTML = d.toLocaleTimeString()+" , " + GetDay(d.getDay()) + " " + d.getDate() + " " + GetMonth(d.getMonth()) + " " + (d.getYear()%100+2000);
}

function GetDay(dayNum)
{
  switch(dayNum)
  {
    case 0:return "Sunday";
    case 1:return "Monday";
    case 2:return "Tuesday";
    case 3:return "Wednesday";
    case 4:return "Thursday";
    case 5:return "Friday";
    case 6:return "Saturday";
  }
}

function GetMonth(month)
{
  switch(month)
  {
    case 0:return "January";
    case 1:return "February";
    case 2:return "March";
    case 3:return "April";
    case 4:return "May";
    case 5:return "June";
    case 6:return "July";
    case 7:return "August";
    case 8:return "September";
    case 9:return "October";
    case 10:return "November";
    case 11:return "December";
  }
}
