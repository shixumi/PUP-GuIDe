function popup() {
	const overlay = document.getElementById('overlay_main');
	overlay.classList.toggle('active');
	overlay.style.display = "block";
}

function feedback_popup() {
	console.log("feedback called")
	const overlay = document.getElementById('feedback_overlay_main');
	overlay.classList.toggle('active');
	overlay.style.display = "block";
}

function redirect_button() {
	window.location.replace("https://shixumi.github.io/PUP-GuIDe/");
}