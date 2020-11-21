var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play(); 
	volumeAmount = document.querySelector("#volumeSlider").value;
	document.querySelector("#volume").textContent = volumeAmount + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = 0.9 * video.playbackRate;
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 5 < video.duration) {
		video.currentTime = video.currentTime + 5;
	}
	else {
		video.currentTime = 0;
	}
	console.log("Current location " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (document.querySelector("#mute").textContent == "Mute") {
		video.muted = true;
		document.querySelector("#mute").textContent = "Unmute";
	}
	else {
		video.muted = false;
		document.querySelector("#mute").textContent = "Mute";
	}
});

var slider = document.getElementById("volumeSlider");
var output = document.getElementById("volume");

slider.oninput = function() {
  output.innerHTML = this.value + "%";
  video.volume = this.value / 100;
  console.log(video.volume)
}

document.querySelector("#old").addEventListener("click", function() {
	if (document.querySelector("#myVideo").classList[0] != "oldTime") {
		document.querySelector("#myVideo").className += "oldTime";
	}
});

document.querySelector("#original").addEventListener("click", function() {
	if (document.querySelector("#myVideo").classList[0] == "oldTime") {
		document.querySelector("#myVideo").classList.remove("oldTime");
	}
});
