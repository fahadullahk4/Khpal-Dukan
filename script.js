function loaderAnimation() {
	gsap.to(".loader-section", {
		duration: 1,
		delay: 3.5,
		ease: "power1",
		opacity: 0,
	});

	gsap.from(".loader h1", {
		y: 45,
		opacity: 0,
		duration: 1,
		delay: 0.4,
	});

	gsap.from(".loader-animation", {
		y: -45,
		opacity: 0,
		duration: 1,
		delay: 0.4,
	});

	gsap.to(
		".loader-section",
		{
			duration: 0.5,
			ease: "power1.out",
			display: "none",
		},
		"-=0.8"
	);
}

function heroSectionAnimation() {
	var tl = gsap.timeline();

	tl.from(".info .pt-1, .info .pt-2,.info .pt-3", {
		y: 120,
		duration: 0.7,
		opacity: 0,
	});

	tl.from("nav h1", {
		y: 30,
		opacity: 0,
		duration: 0.5,
	});

	tl.from("nav h4, nav input, nav i", {
		opacity: 0,
	});

	tl.from(".content-wrapper", {
		opacity: 0,
	});

	tl.from(".side-2 img", {
		x: 100,
		opacity: 0,
	});

	tl.from(".side-1 h5", {
		opacity: 0,
	});

	tl.from(".side-1 h1", {
		y: 40,
		duration: 0.5,
		opacity: 0,
	});

	tl.from(".side-1 p", {
		opacity: 0,
	});

	tl.from(".side-1 button", {
		y: 30,
		duration: 0.3,
		opacity: 0,
	});
}

var darkMode = document.querySelector("#dark");
// var lightMode = document.querySelector("#dark");
var body = document.querySelector("body");
darkMode.addEventListener("click", () => {
	console.log("click");
	body.classList.add("dark-mode");
	darkMode.classList.add("ri-sun-line");
	darkMode.classList.remove("ri-moon-line");
});
darkMode.addEventListener("click", () => {
	console.log("click");
	body.classList.remove("dark-mode");
	darkMode.classList.remove("ri-sun-line");
	darkMode.classList.add("ri-moon-line");
});
// modes.addEventListener("click", () => {
// 	body.classList.add("dark-mode");
// });

// loaderAnimation();
// heroSectionAnimation();
