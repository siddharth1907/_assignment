getAllElements();
setAllActions();
var eye_icon,password;

function getAllElements(){
	eye_icon = document.getElementById('eyeicon');
	password = document.getElementById('passw');
}
function setAllActions(){
	eye_icon.onclick = showpass;
	eye_icon.style.cursor = 'pointer';
}

var flag = true;
function showpass(){
	if(flag){
		password.type = 'text';
		eye_icon.src = 'images/eye1.png';
		flag = false;
	}else{
		password.type = 'password';
		eye_icon.src = 'images/eye.png';
		flag = true;
	}
}