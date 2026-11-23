export default {
	render() {
		return `
			<div>
				<section>
					<h4>O <span>MELHOR</span> plano para você!</h4>
				</section>
				<hr>
				<section>
					<h4>Outros Planos</h4>
				</section>
				<button id="btn-voltar" type="button">Calcular novamente</button>
			</div>
		`;
	},

	mount() {
		const btnVoltar = document.getElementById("btn-voltar");

		btnVoltar.addEventListener("click", () => {
			window.location.hash = "#/calcular";
		})
	},
};
