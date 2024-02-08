function popup() {
	const overlay = document.getElementById('overlay_main');
	overlay.classList.toggle('active');
	overlay.style.display = "block";
}

function lc_feedback_popup() {
	const overlay = document.getElementById('lc_overlay_main');
	overlay.classList.toggle('active');
	overlay.style.display = "block";
}

function li_feedback_popup() {
	const overlay = document.getElementById('li_overlay_main');
	overlay.classList.toggle('active');
	overlay.style.display = "block";
}

function ni_feedback_popup() {
	const overlay = document.getElementById('ni_overlay_main');
	overlay.classList.toggle('active');
	overlay.style.display = "block";
}

function contact_feedback_popup() {
	const overlay = document.getElementById('contact_overlay_main');
	overlay.classList.toggle('active');
	overlay.style.display = "block";
}

function redirect_button() {
	window.location.replace("https://shixumi.github.io/PUP-GuIDe/");
}