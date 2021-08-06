
window.onload = () => {
	$('#preloader').fadeOut('slow');
	initGallery();
	resizeGallery();

	if (window.innerWidth > 780) {
		let rellax = new Rellax('.rellax');
		SmoothScroll({
			// Scrolling Core
			animationTime: 1500, // [ms]
			stepSize: 150, // [px]

			// Acceleration
			accelerationDelta: 50, // 50
			accelerationMax: 3, // 3

			// Keyboard Settings
			keyboardSupport: true, // option
			arrowScroll: 50, // [px]

			// Pulse (less tweakable)
			// ratio of "tail" to "acceleration"
			pulseAlgorithm: true,
			pulseScale: 4,
			pulseNormalize: 1,

			// Other
			touchpadSupport: false, // ignore touchpad by default
			fixedBackground: true,
			excluded: '',
		});
	}
};

if (window.innerWidth <= 1280) {
	var mySwiper = new Swiper('.swiper-container', {
		loop: true,
		breakpoints: {
			1280: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			1020: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
		},
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	});
}


function initGallery() {
	let gallery = $('.gallery');
	console.log(gallery)
	if (gallery) {
		for (let i = 1; i < 15; i++) {
			let j = i > 7 ? 8 - (15 - i) : i;
			gallery.append(`
				<div class="img img-${i} ${i > 7 ? "hide" : ""}">
					<img src="dist/img/gal-${j}.png" alt="gallery" loading="lazy" />
				</div>
			`);
		}
	}
}

function resizeGallery() {
	let galleryWrapper = $(".gal-wrap"),
		gallery = $('.gallery'),
		showMore = $('#more');
	console.log(showMore)
	if (galleryWrapper && gallery) {
		showMore.click(() => {
			galleryWrapper.toggleClass("closed");
			gallery.children(".img").each(function (index) {
				index > 6 && $(this).toggleClass("hide");
			})
		})
	}
}
