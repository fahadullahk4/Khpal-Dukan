function loaderAnimation() {
	var tl = gsap.timeline();
	tl.to(".loader-section", {
		opacity: 1,
		duration: 2.8,
		ease: "power1",
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

	tl.to(".loader-section", {
		ease: "power1.out",
		scale: 0,
		display: "none",
	});
}

function heroSectionAnimation() {
	var tl = gsap.timeline();

	tl.from(".info .pt-1, .info .pt-2,.info .pt-3", {
		y: 120,
		duration: 0.7,
		opacity: 0,
		delay: 3.2,
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

function darkMode() {
	var darkMode = document.querySelector("#dark");
	var body = document.querySelector("body");
	darkMode.addEventListener("click", () => {
		if (body.classList.contains("light-mode")) {
			body.classList.remove("light-mode");
			body.classList.add("dark-mode");
			darkMode.classList.add("ri-sun-line");
			darkMode.classList.remove("ri-moon-line");
		} else {
			body.classList.remove("dark-mode");
			body.classList.add("light-mode");
			darkMode.classList.remove("ri-sun-line");
			darkMode.classList.add("ri-moon-line");
		}
	});
}

// loaderAnimation();
// heroSectionAnimation();
darkMode();
