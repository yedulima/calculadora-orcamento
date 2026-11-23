export default {
	render() {
		return `
			<section>
				<h1>Sobre</h1>
				<p>Exemplo de uma segunda página.</p>
				<button id="btn-voltar" type="button">Voltar para Home</button>
			</section>
		`;
	},

	mount() {
		document.querySelector("#btn-voltar").addEventListener("click", () => {
			window.location.hash = "#/";
		});
	},
};
