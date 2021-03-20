'use strict';


document.addEventListener('DOMContentLoaded', () => {
	const container = document.querySelector(".calculator__field"),
		btnHiddenMenuOpen = document.querySelector('.cacluculator__hidden-menu'),
		btnHiddenMenuClose = document.querySelector('.hidden-menu__close'),
		hiddenMenu = document.querySelector('.hidden-menu'),
		switchThemeBtn = document.querySelector('.calculator__top-theme')
		;

	btnHiddenMenuOpen.addEventListener('click', (e) => {
		e.preventDefault();
		hiddenMenu.classList.add('hidden-menu--active');
	});
	btnHiddenMenuClose.addEventListener('click', (e) => {
		e.preventDefault();
		hiddenMenu.classList.remove('hidden-menu--active');
	});
	switchThemeBtn.addEventListener('click', () => switchTheme(document.body, 'dark-theme'));
	scrollToBottom(container);

});

function scrollToBottom(container) {
	container.scrollTop = container.scrollHeight;
}

function switchTheme(item, classActive) {
	item.classList.toggle(classActive);
	const img = item.querySelector('img');
	if (item.classList.contains(classActive)) {
		img.src = "./icons/moon.png";
	} else {
		img.src = "./icons/sun.png";
	}
}

