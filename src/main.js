import "./style.css";
import { routes, notFoundRoute } from "./routes/index.js";

const app = document.querySelector("#app");

let currentPage = null;

function getCurrentPath() {
	const hash = window.location.hash.slice(1);
	return hash === "" ? "/" : hash;
}

function renderPage() {
	const route = routes[getCurrentPath()] || notFoundRoute;
	const page = route.page;

	if (currentPage && currentPage.unmount) {
		currentPage.unmount();
	}

	app.innerHTML = page.render();
	document.title = route.title;
	currentPage = page;

	if (page.mount) {
		page.mount();
	}
}

window.addEventListener("hashchange", renderPage);

renderPage();
