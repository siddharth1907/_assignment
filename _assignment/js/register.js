getAllElements();
setAllActions();

var uname,email,password;
function getAllElements(){
	uname = document.getElementById('uname');
	email = document.getElementById('email');
	password = document.getElementById('passw');
	reg_btn = document.getElementById('reg_btn');
	errbox = document.getElementById('errbox');
}

function setAllActions(){
	reg_btn.onclick = registerUser;
}



var reguser;
function  registerUser(){
		reg_btn.disabled = true;
		reguser = new XMLHttpRequest();
		reguser.open('get','register.do?password='+password.value+'&email='+email.value+'&userName='+uname.value,true);
		reguser.onreadystatechange = afterRegisterUser;
		reguser.send();
}

function afterRegisterUser(){
	if(reguser.readyState==4&&reguser.status==200){
		var resp = reguser.responseText;
		if(resp=='success'){
			alert('your account is registered successfully');
			window.location = "show_register.do";
		}else{
			alert('your account is already registered');
			window.location = "show_register.do";
		}
	}
}