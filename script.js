	/* ================= NHẠC ================= */

	const cards = document.querySelectorAll(".music-card");

	cards.forEach(card => {
		const audio = card.querySelector(".demo-audio");

		card.addEventListener("mouseenter", () => {
			if (!audio) return;

			document.querySelectorAll(".demo-audio").forEach(item => {
				if (item !== audio) {
					item.pause();
					item.currentTime = 0;
				}
			});

			audio.currentTime = 0;

			audio.play().catch(err => {
				console.log("Không phát được audio:", err);
			});
		});

		card.addEventListener("mouseleave", () => {
			if (!audio) return;

			audio.pause();
			audio.currentTime = 0;
		});
	});
	/* ================= CUỘN MƯỢT MENU ================= */

	document.querySelectorAll(".menu a").forEach(link => {

		link.addEventListener("click", function(e) {

			const targetId = this.getAttribute("href");

			if (!targetId.startsWith("#")) return;

			const target = document.querySelector(targetId);

			if (!target) return;

			e.preventDefault();

			const start = window.pageYOffset;

			const end = target.offsetTop - 80;

			const distance = end - start;

			const duration = 1000; // chỉnh tốc độ ở đây

			let startTime = null;

			function scrollAnimation(currentTime) {

				if (startTime === null) {
					startTime = currentTime;
				}

				const timeElapsed = currentTime - startTime;

				const progress = Math.min(
					timeElapsed / duration,
					1
				);

				const ease =
					progress < 0.5
						? 2 * progress * progress
						: 1 - Math.pow(-2 * progress + 2, 2) / 2;

				window.scrollTo(
					0,
					start + distance * ease
				);

				if (progress < 1) {
					requestAnimationFrame(scrollAnimation);
				}
			}

			requestAnimationFrame(scrollAnimation);
		});

	});
	/* ================= HIỆU ỨNG KHI CUỘN ================= */

	const sections = document.querySelectorAll("section");

	sections.forEach(section => {
		section.classList.add("reveal");
	});

	const observer = new IntersectionObserver(entries => {

		entries.forEach(entry => {

			if (entry.isIntersecting) {
				entry.target.classList.add("show");
			}

		});

	}, {
		threshold: 0.15
	});

	sections.forEach(section => {
		observer.observe(section);
	});
	document.querySelector("#home").classList.add("show");
