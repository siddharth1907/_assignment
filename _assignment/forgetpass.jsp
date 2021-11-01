<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="css/common.css"></link>
  <link rel="stylesheet" type="text/css" href="css/forgetpass.css"></link>
  <title>Document</title>
 </head>
 <body>
 <div class="loader" id='loader'></div>
 <%@ include file="header.jsp" %>
	<div id='mid'>
		<% String error = (String)request.getAttribute("errmsg"); %>
		<div id="errbox" style='display:<%= error==null?"none":"block" %>'>
			<%= error %>
		</div>
		<table  id="login_box"  align='center' width="350px">
		<tr>
				<th colspan="2">Generate New Password</th>
			</tr>
			<tr>
				<td><img src='images/profile.png' id="uicon" class="icon"/><input type='text' id="en_no" name='enroll_no' class="inp" placeholder="Enrollment No" autocomplete="off" required/></td>
			</tr>
			<tr>
				<td colspan='2' align='center'><input type='submit' value="search" id="srch_btn"  /></td>
			</tr>
		</table>

	<table border="1" width="70%" align="center" id="rec_tbl">
			<tr>
				<td id='enroll_no'></td>
				<td id='uname'></td>
				<td id='email'></td>
			</tr>
			<tr>
				<td colspan="3" align="center"><input type="submit"  value="generate" id="gen_btn"/></td>
			</tr>
		</table>

	

	</div>
  <%@ include file="footer.jsp" %>
 </body>
 <script src='js/forgetpass.js'></script>
</html>
