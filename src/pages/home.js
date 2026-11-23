// Cada página exporta um objeto com:
//  - render():  retorna o HTML (string) da página
//  - mount():   (opcional) roda depois do HTML estar na tela, ideal para addEventListener
//  - unmount(): (opcional) roda antes de sair da página; use para limpar o que NÃO some junto
//               com o HTML (listeners em window/document, setInterval, setTimeout...)
// O título da aba fica em src/routes/index.js.
export default {
	render() {
		return `
			<section>
				<h1>Calculadora de Orçamento</h1>
				<p>Página inicial.</p>
				<a href="#/sobre">Ir para Sobre</a>
			</section>
		`;
	},
};
