const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const submit = document.getElementById('submit');
const commentList = document.querySelector('div > h3');
const commentForm = document.getElementById('comment-form');
let i = 0;
let running = true;

document.addEventListener("DOMContentLoaded", function() {
	
	startStuff(time, 1000);

	plus.addEventListener("click", function() {
		i++;
		counter.innerText = i;
	})

	minus.addEventListener("click", function() {
		i--;
		counter.innerText = i;
	})

	pause.addEventListener("click", function() {
		if (running) {
			stopStuff();
			plus.disabled = true;
			minus.disabled = true;
			heart.disabled = true;
			pause.innerHTML = "resume";
		} else {
			startStuff(time, 1000);
			plus.disabled = false;
			minus.disabled = false;
			heart.disabled = false;
			pause.innerHTML = "pause";
		}
		running = !running;
	})

	submit.addEventListener("click", function() {
		const content = document.createElement("p");
		content.textContent = `${commentForm.querySelector('input').value}`;
		commentList.appendChild(content);
	})
})

let interval = null;    

function startStuff(func, time) {
    interval = setInterval(func, time);
}

function stopStuff() {
    clearInterval(interval);
	i = -1;
}

function time() {
	if (i < Number.MAX_SAFE_INTEGER) {
		i++;
		counter.innerText = i;
	}
}


  
