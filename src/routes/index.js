import home from "../pages/home.js";
import calcular from "../pages/calcular.js";
import resultado from "../pages/resultado.js";
import notFound from "../pages/notFound.js";

export const routes = {
	"/": {
		title: "Início",
		page: home,
	},
	"/calcular": {
		title: "Calcular",
		page: calcular,
	},
	"/resultado": {
		title: "Resultados",
		page: resultado,
	},
};

export const notFoundRoute = { title: "Página não encontrada", page: notFound };
