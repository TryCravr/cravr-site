document.addEventListener('DOMContentLoaded', () => {
	const menuToggle = document.querySelector('.menu-toggle');
	const mobileMenu = document.querySelector('.mobile-menu');

	if (menuToggle && mobileMenu) {
		menuToggle.addEventListener('click', () => {
			mobileMenu.classList.toggle('active');
		});
	}

	// Smooth scroll for anchor links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			const targetId = this.getAttribute('href');
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: 'smooth',
				});
			}

			// Close mobile menu on link click
			if (mobileMenu.classList.contains('active')) {
				mobileMenu.classList.remove('active');
			}
		});
	});

	// Handle form submission
	const emailForm = document.querySelector('.email-form');
	if (emailForm) {
		emailForm.addEventListener('submit', (e) => {
			e.preventDefault();
			const emailInput = emailForm.querySelector('input');
			alert(`Thanks for joining the Crave List! We'll notify you at ${emailInput.value} when we launch in your city.`);
			emailInput.value = '';
		});
	}
});
