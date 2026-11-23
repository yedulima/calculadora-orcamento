import home from "../pages/home.js";
import sobre from "../pages/sobre.js";
import notFound from "../pages/notFound.js";

// Tabela de rotas: caminho (após o "#") -> { title, page }.
//  - title: nome usado no título da aba
//  - page:  módulo da página (render, mount e unmount)
// Para criar uma nova tela: crie o arquivo em src/pages/ e registre aqui.
export const routes = {
	"/": { title: "Início", page: home },
	"/sobre": { title: "Sobre", page: sobre },
};

// Usada quando o caminho não existe em routes
export const notFoundRoute = { title: "Página não encontrada", page: notFound };
