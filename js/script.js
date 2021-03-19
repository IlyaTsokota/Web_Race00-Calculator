'use strict';


document.addEventListener('DOMContentLoaded', () => {
	const container = document.querySelector(".calculator__field"),
		btnHiddenMenuOpen = document.querySelector('.cacluculator__hidden-menu'),
		btnHiddenMenuClose = document.querySelector('.hidden-menu__close'),
		hiddenMenu = document.querySelector('.hidden-menu')
		;

	btnHiddenMenuOpen.addEventListener('click', (e) => {
		e.preventDefault();
		hiddenMenu.classList.add('hidden-menu--active');
	});
	btnHiddenMenuClose.addEventListener('click', (e) => {
		e.preventDefault();
		hiddenMenu.classList.remove('hidden-menu--active');
	});
	scrollToBottom(container);

});

function scrollToBottom(container) {
	container.scrollTop = container.scrollHeight;
}


