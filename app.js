var userpassword = "wma10",password;
var failurecount=0;
do{
failurecount ++ ;
if (failurecount ==9999999999999999999999999999999999999999999999999999 ) break;
if (failurecount !=1 ) alert("The password is incorrect");
password = prompt("Enter the password","");
} while(password != userpassword);
if (failurecount ==9999999999999999999999999999999999999999999999999999)
alert("You are not allowed to enter");
else
alert("The password is correct, you are welcome" + "After a number of attempts is equal to:" + failurecount);
var username;
username = confirm("Don't tell anyone about this page");


const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});