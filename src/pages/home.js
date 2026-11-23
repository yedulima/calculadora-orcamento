export default {
	render() {
		return `
			<header>
				<h1>
					Calculadora de <br>
					<span>Orçamento</span>
				</h1>
				<span>
					Descubra o melhor plano com base <br>
					no seu perfil!
				</span>
				<button id="btn-descobrir-plano">
					Descobrir meu plano
				</button>
			</header>
		`;
	},

	mount() {
		const btnDescobrirPlano = document.getElementById("btn-descobrir-plano");

		btnDescobrirPlano.addEventListener("click", () => {
			window.location.hash = "#/calcular";
		})
	}
};
