document.addEventListener(`DOMContentLoaded`, function () {
	const nav = document.querySelector(`.navbar`)
	const navShow = document.querySelector(`.collapse`)
	const linkShow = document.querySelectorAll(`.nav-link`)

	function addshadow() {
		if (window.scrollY >= 0) {
			nav.classList.add(`shadow-bg`)
		} else nav.classList.remove(`shadow-bg`)
	}
	function hidenav() {
		navShow.classList.toggle(`show`)
	}

	window.addEventListener(`scroll`, addshadow)
	navShow.addEventListener(`click`, hidenav)
})
