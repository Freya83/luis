function getCookieValue (cookieName) {
  var exp = new RegExp (cookieName + "=([^;]+)");
  if (exp.test (document.cookie + ";")) {
    exp.exec (document.cookie + ";");
    return unescape(RegExp.$1);
  }
  else return false
}

var invalidpassword  = "/index.php";
if (!getCookieValue ("validpassword")) {
  location.replace (invalidpassword);
}
else {
  var myCookie = getCookieValue ("password");

  if (myCookie != "0") {location.replace (myCookie);}
}