<?php
$urlList = array ('think'  => 'portfolio.php');

$cookieName = 'validpassword';

if (isset ($_POST['submit']) && strlen($_POST['password']) > 0) {

  if (array_key_exists ($_POST['password'], $urlList)) {   
    setcookie ($cookieName, 0, NULL,'/');  

    header ("Location: " . $urlList[$_POST['password']]);
  }
  else {
    
  }
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html  lang="en-GB" xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Luis Acevedo</title>
<meta name="robots" content="noindex, nofollow" />
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/password.css" rel="stylesheet">
</head>

<body>
<a class="navbar-brand active-left" href="#"><h1>Luis Acevedo</h1><img src="/images/logo-white.png"></a>

<form id="myform" action="index.php" method="post">
<span style="color: #ff0000;">
<input type="password" name="password" maxlength="12" size="12" placeholder="PASSWORD" class="pass" />
<input type="submit" name="submit" value="unlock" class="btn" />
</span></p>
</form>

</div>
</body>
</html>

