<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="css/common.css"></link>
  <title>Document</title>
 </head>
 <body>
  <div id='header'>Elderly care
	<div id="unm">Welcome ${user.userName}</div>
	<input type="hidden"  id="uid" value=${user.userId}>
	<div id="chng_pass">Change Password</div>
	<img src='images/logout.png' id="logout" title="Logout">
  </div>

  	<div id='menu_bar' style="color:black;">
		<div  class='menu' id='HealthyEating' title='Healthy Eating'>Healthy Eating</div>
		<div class="vl"></div>
		<div  class='menu' id='PhysicalActivity' title='Physical Activities'>Physical Activities</div>
		<div class="vl"></div>
		<div  class='menu' id='HealthSolution' title='Health Solutions'>Health Solutions</div>
		<div class="vl"></div>
		<div  class='menu' id='OtherActivity' title='Other Activities'>Other Activities</div>
	</div> 

 </body>

</html>
 