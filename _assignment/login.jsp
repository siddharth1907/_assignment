<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="css/common.css"></link>
  <link rel="stylesheet" type="text/css" href="css/login.css"></link>
  <title>Document</title>
 </head>
 <body>
 <%@ include file="header.jsp" %>
	<div id='main_body'>
	<img src='images/img27.jpg' class='imgs'>
		<% String error = (String)request.getAttribute("errmsg"); %>
		<div id="errbox" style='display:<%= error==null?"none":"block" %>'>
			<%= error %>
		</div>
		<form action='login.do' method='post'>
		<table  id="login_box"  align='center' width="350px">
		<tr>
				<th colspan="2">User Login</th>
			</tr>
			<tr>
				<td><img src='images/profile.png' id="uicon" class="icon"/><input type='text' id="email" name='email' class="inp" placeholder="Email" autocomplete="off" required/></td>
			</tr>
			<tr>
				<td><img src='images/lock.png' id="picon" class="icon"/><input type='password' id="passw"  name='passw' class="inp" placeholder="Password" required/><img src='images/eye.png' id="eyeicon" class="icon"/></td>
			</tr>
			<tr>
				<td colspan='2' align='center'><input type='submit' id="sub_btn" value="Login"  /></td>
			</tr>
		</table>
		</form>
	</div>
  <%@ include file="footer.jsp" %>
 </body>
 <script src='js/login.js'></script>
</html>
