function loaderAnimation() {
	var tl = gsap.timeline();
	tl.to(".loader-section", {
		opacity: 0,
		duration: 2.2,
		delay: 2.4,
		ease: "power4",
		onComplete: () =>
			document.querySelector("body").classList.remove("disable-scroll"),
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

function menuAnimation() {
	let menu = document.querySelector(".menu");
	let dark = document.querySelector(".full-menu #dark");
	let close = document.querySelector(".full-menu #close");
	var tl = gsap.timeline();
	tl.to(".full-menu", {
		right: 0,
		duration: 0.5,
	});

	tl.from(".full-menu h4", {
		x: 100,
		opacity: 0,
		stagger: 0.2,
		duration: 0.5,
	});

	tl.from(".full-menu i", {
		opacity: 0,
		scale: 0.5,
		duration: 0.2,
	});

	tl.pause();
	menu.addEventListener("click", () => {
		tl.play();
		menu.style.opacity = 0;
	});

	var body = document.querySelector("body");
	dark.addEventListener("click", () => {
		if (body.classList.contains("light-mode")) {
			body.classList.remove("light-mode");
			body.classList.add("dark-mode");
			dark.classList.add("ri-sun-line");
			dark.classList.remove("ri-moon-line");
		} else {
			body.classList.remove("dark-mode");
			body.classList.add("light-mode");
			dark.classList.remove("ri-sun-line");
			dark.classList.add("ri-moon-line");
		}
	});

	close.addEventListener("click", () => {
		tl.reverse();
		menu.style.opacity = 1;
	});
}

function fullAnimation() {
	let tl = gsap.timeline();
	tl.from(".categories-section h1", {
		y: 50,
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: ".categories-section",
			scroller: "body",
			start: "top 30%",
			end: "top 50%",
			scrub: 2,
		},
	});

	tl.from(".categories-filter", {
		y: 40,
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: ".categories-filter",
			scroller: "body",
			start: "top 35%",
			end: "top 50%",
			scrub: 2,
		},
	});

	tl.from(".categories-section .underline", {
		width: "0vw",
		opacity: 0,
		duration: 3,
		scrollTrigger: {
			trigger: ".categories-section",
			scroller: "body",
			start: "top 20%",
			end: "top 50%",
			scrub: 2,
		},
	});

	tl.from(".categories-cards .card, a", {
		y: 30,
		opacity: 0,
		stagger: 2,
		duration: 3,
		scrollTrigger: {
			trigger: ".categories-cards .card",
			scroller: "body",
			start: "top 47%",
			end: "bottom -65%",
			scrub: 2,
		},
	});

	tl.from(".deals-heading", {
		y: 50,
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: ".deals-section",
			scroller: "body",
			start: "top 25%",
			end: "top 50%",
			scrub: 2,
		},
	});

	tl.from(".deals-section .underline", {
		width: "0vw",
		opacity: 0,
		duration: 3,
		scrollTrigger: {
			trigger: ".deals-section",
			scroller: "body",
			start: "top 20%",
			end: "top 50%",
			scrub: 2,
		},
	});

	tl.from(".deals-cards .card-1", {
		x: -80,
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: ".deals-cards",
			scroller: "body",
			start: "top 25%",
			end: "top 50%",
			scrub: 2,
		},
	});

	tl.from(".deals-cards .card-2", {
		x: 80,
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: ".deals-cards",
			scroller: "body",
			start: "top 25%",
			end: "top 50%",
			scrub: 2,
		},
	});

	tl.from(".deal-banner", {
		y: 40,
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: ".deals-cards",
			scroller: "body",
			start: "top 15%",
			end: "top 50%",
			scrub: 2,
		},
	});

	tl.from(".best-sellers-heading", {
		y: 50,
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: ".best-sellers-section",
			scroller: "body",
			start: "top 40%",
			end: "top 50%",
			scrub: 2,
		},
	});

	tl.from(".best-sellers-section .underline", {
		width: "0vw",
		opacity: 0,
		duration: 3,
		scrollTrigger: {
			trigger: ".best-sellers-section",
			scroller: "body",
			start: "top 20%",
			end: "top 50%",
			scrub: 2,
		},
	});

	tl.from(".best-sellers-cards .card-1", {
		height: -40,
		opacity: 0,
		duration: 2,
		scrollTrigger: {
			trigger: ".best-sellers-cards",
			scroller: "body",
			start: "top 25%",
			end: "top 50%",
			scrub: 2,
		},
	});

	tl.from(".best-sellers-cards .card", {
		y: 40,
		opacity: 0,
		duration: 3,
		stagger: 2,
		scrollTrigger: {
			trigger: ".best-sellers-cards",
			scroller: "body",
			start: "top 25%",
			end: "top 50%",
			scrub: 2,
		},
	});

	tl.from(".services-section h1", {
		y: 50,
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: ".services-section",
			scroller: "body",
			start: "top 40%",
			end: "top 40%",
			scrub: 2,
		},
	});

	tl.from(".services-section .underline", {
		width: "0vw",
		opacity: 0,
		duration: 3,
		scrollTrigger: {
			trigger: ".services-section",
			scroller: "body",
			start: "top 35%",
			end: "top 50%",
			scrub: 2,
		},
	});

	tl.from(".services-cards .card-service", {
		y: 40,
		opacity: 0,
		duration: 3,
		stagger: 2,
		scrollTrigger: {
			trigger: ".services-cards",
			scroller: "body",
			start: "top 35%",
			end: "top 10%",
			scrub: 2,
		},
	});

	tl.from(".footer-content", {
		y: -70,
		opacity: 0,
		duration: 1,
		stagger: 2,
		scrollTrigger: {
			trigger: "footer",
			scroller: "body",
			start: "top 80%",
			end: "top 50%",
			scrub: 2,
			markers: true,
		},
	});
}

loaderAnimation();
heroSectionAnimation();
darkMode();
menuAnimation();
fullAnimation();
