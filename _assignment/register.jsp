<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="css/common.css"></link>
  <link rel="stylesheet" type="text/css" href="css/register.css"></link>
  <title>Document</title>
 </head>
 <body>
 <%@ include file="header.jsp" %>
	<div id='main_body'>
	<img src='images/img27.jpg' class='imgs'>
				<div id="errbox" style='display:none'></div> 
		<table  id="login_box"  align='center' width="350px">
		<tr>
				<th colspan="2">User Registration</th>
			</tr>
			<tr>
				<td><input type='text' id="uname" class="inp" placeholder="Full Name" autocomplete="off" required/></td>
			</tr>
			<tr>
				<td><input type='text' id="email" class="inp" placeholder="Email" autocomplete="off" required/></td>
			</tr>
			<tr>
				<td><input type='password' id="passw"class="inp" placeholder="Password" required/><img src='images/eye.png' id="eyeicon" class="icon"/></td>
			</tr>
			<tr>
				<td colspan='2' align='center'><input type='submit' id="reg_btn" value="Register"  /></td>
			</tr>
		</table>
	</div>
  <%@ include file="footer.jsp" %>
 </body>
 <script src="js/register.js"></script>
 <script src="js/login.js"></script>
</html>
