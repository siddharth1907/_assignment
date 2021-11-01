window.onload=execfunc;
	function execfunc(){
		createChangePassBox();
		getAllElements();
		setAllActions();
	}
	var change_pass_box,row1,th1,td1,cancel_btn,row2,row3,row4,row5,td2,td3,td4,td5,oldpass,newpass,confpass,eyeicon,eyeicon2,eyeicon3,chng_pass_btn; 
	function createChangePassBox(){
	change_pass_box = document.createElement('table');
	document.body.appendChild(change_pass_box);
	change_pass_box.style.align = "center";
	change_pass_box.style.width = "350px";
	change_pass_box.id = 'change_pass_box';
	row1 = document.createElement('tr');
	change_pass_box.appendChild(row1);
	th1 = document.createElement('th');
	th1.innerText = 'Change Password';
	th1.colspan = '2';
	row1.appendChild(th1);
	td1 = document.createElement('td');
	td1.align = 'center';
	row1.appendChild(td1);
	cancel_btn = document.createElement('img');
	cancel_btn.src = 'images/cancel.png';
	cancel_btn.id = 'cancel_btn';
	cancel_btn.className = 'cancel';
	td1.appendChild(cancel_btn);

	row2 = document.createElement('tr');
	change_pass_box.appendChild(row2);
	td2 = document.createElement('td');
	td2.align = 'center';
	row2.appendChild(td2);
	oldpass = document.createElement('input');
	oldpass.type = 'password';
	oldpass.id = 'oldpass';
	oldpass.className = 'inp';
	oldpass.placeholder = 'Old Password';
	oldpass.autocomplete = 'off';
	oldpass.required = 'true';
	td2.appendChild(oldpass);
	eyeicon = document.createElement('img');
	eyeicon.src = 'images/eye.png'
	eyeicon.id = 'eyeicon';
	eyeicon.className = 'icon';
	td2.appendChild(eyeicon);

	row3 = document.createElement('tr');
	change_pass_box.appendChild(row3);
	td3 = document.createElement('td');
	td3.align = 'center';
	row3.appendChild(td3);
	newpass = document.createElement('input');
	newpass.type = 'password';
	newpass.id = 'newpass';
	newpass.className = 'inp';
	newpass.placeholder = 'New Password';
	newpass.autocomplete = 'off';
	newpass.required = 'true';
	td3.appendChild(newpass);
	eyeicon2 = document.createElement('img');
	eyeicon2.src = 'images/eye.png'
	eyeicon2.id = 'eyeicon';
	eyeicon2.className = 'icon';
	td3.appendChild(eyeicon2);

	row4 = document.createElement('tr');
	change_pass_box.appendChild(row4);
	td4 = document.createElement('td');
	td4.align = 'center';
	row4.appendChild(td4);
	confpass = document.createElement('input');
	confpass.type = 'password';
	confpass.id = 'confpass';
	confpass.className = 'inp';
	confpass.placeholder = 'Confirm Password';
	confpass.autocomplete = 'off';
	confpass.required = 'true';
	td4.appendChild(confpass);
	eyeicon3 = document.createElement('img');
	eyeicon3.src = 'images/eye.png'
	eyeicon3.id = 'eyeicon';
	eyeicon3.className = 'icon';
	td4.appendChild(eyeicon3);

	row5 = document.createElement('tr');
	change_pass_box.appendChild(row5);
	td5 = document.createElement('td');
	td5.align = 'center';
	row5.appendChild(td5);
	chng_pass_btn = document.createElement('input');
	chng_pass_btn.type = 'submit';
	chng_pass_btn.value = 'change';
	chng_pass_btn.id = 'chng_pass_btn';
	td5.appendChild(chng_pass_btn);


	change_pass_box.style.display = "none";
	icon = document.getElementsByClassName('icon');
	chng_pass.onclick  = showchangepassbox;
	cancel_btn.onclick = hidechangepassbox;
	chng_pass_btn.onclick = changePassword;
	for(i=0;i<icon.length;i++){
		icon[i].flag = 1;
		icon[i].onclick = hide_show;
	}

	function showchangepassbox(){
	change_pass_box.style.display = 'table';
		main_body.style.opacity = '40%';
		header.style.opacity = '40%';
		menu_bar.style.opacity = '40%';
		footer.style.opacity = '40%';
		main_body.style.pointerEvents = 'none';
		menu_bar.style.pointerEvents = 'none';
		header.style.pointerEvents = 'none';
}

function hidechangepassbox(){
	errbox.style.display = 'none';
	change_pass_box.style.display = 'none';
	main_body.style.opacity = '100%';
	header.style.opacity = '100%';
	menu_bar.style.opacity = '100%';
	footer.style.opacity = '100%';
	main_body.style.pointerEvents = 'auto';
	menu_bar.style.pointerEvents = 'auto';
	header.style.pointerEvents = 'auto';
}

var chngpass;
function  changePassword(){
	if(oldpass.value!=""&&newpass.value!=""&&confpass.value!=""){
		chngpass = new XMLHttpRequest();
		chngpass.open('get','change_pass.do?oldpass='+oldpass.value+'&newpass='+newpass.value+'&confpass='+confpass.value,true);
		chngpass.onreadystatechange = afterChangePassword;
		chngpass.send();
	}else{
		alert('All Feilds are mendatory!');
	}
}

function afterChangePassword(){
	if(chngpass.readyState==4&&chngpass.status==200){
		var resp = chngpass.responseText;
		if(resp=='success'){
			alert('your password is changed successfully');
			window.location = "HealthyEating.do";
		}else if(resp=='unsuccessful'){
			window.location = 'logout.do';
		}else if(resp=="Incorrect Old Password"){
			errbox.style.display = 'block';
			errbox.innerHTML = resp;
		}else{
			errbox.style.display = 'block';
			errbox.innerHTML = resp;
		}
	}
}
}



function getAllElements(){
	HealthyEating = document.getElementById('HealthyEating');
	mynotes = document.getElementById('mynotes');
	sharednotes = document.getElementById('sharednotes');
	sharedwithme = document.getElementById('sharedwithme');
	logout_btn = document.getElementById('logout');
	icon = document.getElementsByClassName('icon');
	chng_pass = document.getElementById('chng_pass');
	chng_pass_btn = document.getElementById('chng_pass_btn');
	change_pass_box = document.getElementById('change_pass_box');
	oldpass = document.getElementById('oldpass');
	uid = document.getElementById('uid');
	newpass = document.getElementById('newpass');
	confpass = document.getElementById('confpass');
	cancel_btn = document.getElementById('cancel_btn');
	errbox = document.getElementById('errbox');
	main_body = document.querySelector('#main_body');
	header = document.getElementById('header');
	footer = document.getElementById('footer');
	menu_bar = document.getElementById('menu_bar');
}

function setAllActions(){
	HealthyEating.onclick = function(){
		window.location = 'HealthyEating.do';
	}
	PhysicalActivity.onclick = function(){
		window.location = 'PhysicalActivity.do';
	}
	HealthSolution.onclick = function(){
		window.location = 'HealthSolution.do';
	}
	OtherActivity.onclick = function(){
		window.location = 'OtherActivity.do';
	}

	logout_btn.onclick = logout;
}

function logout(){
	window.location = 'logout.do';
}


function hide_show(){
	if(this.flag==1){
		this.src = 'images/eye1.png';
		this.parentNode.childNodes[0].type = 'text';
		this.flag = 0;
	}else{
		this.src = 'images/eye.png';
		this.parentNode.childNodes[0].type = 'password';
		this.flag = 1;
	}
}


