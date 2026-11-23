import "./style.css";
import { routes, notFoundRoute } from "./routes/index.js";

const app = document.querySelector("#app");

// Página atualmente na tela (usada para chamar o unmount() ao sair dela)
let currentPage = null;

// Lê a rota atual da URL (ex: "http://site/#/sobre" -> "/sobre")
function getCurrentPath() {
	const hash = window.location.hash.slice(1);
	return hash === "" ? "/" : hash;
}

// Renderiza a página correspondente à rota atual dentro de #app
function renderPage() {
	const route = routes[getCurrentPath()] || notFoundRoute;
	const page = route.page;

	// Avisa a página anterior que ela está saindo, para limpar o que ficou pendente
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

// Troca de tela sempre que o hash da URL mudar (links "#/rota" ou botão voltar do navegador)
window.addEventListener("hashchange", renderPage);

// Primeira renderização
renderPage();
