export default {
	render() {
		return `
			<div class="widget">
				<h3>Insira seus dados</h3>
				<label for="idade">Idade</label>
				<input type="text" id="idade" name="idade"> <br>

				<label for="peso">Peso</label>
				<input type="text" id="peso" name="peso"> <br>

				<label for="altura">Altura</label>
				<input type="text" id="altura" name="altura">

				<button id="btn-calcular-resultado">
					Descobrir meu plano
				</button>
			</div>
		`;
	},

	mount() {
		const btnCalcularResultado = document.getElementById("btn-calcular-resultado");

		btnCalcularResultado.addEventListener("click", () => {
			window.location.hash = "#/resultado";
		});
	},
};
