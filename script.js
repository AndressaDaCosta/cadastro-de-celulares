document.addEventListener('DOMContentLoaded', function () {
	if (document.getElementById('celularForm')) {
		initCadastroPage();
	} else if (document.querySelector('.celulares-table')) {
		initListagemPage();
	}
});

function initCadastroPage() {
	const form = document.getElementById('celularForm');

	form.addEventListener('submit', function (event) {
		event.preventDefault();

		let celulares = JSON.parse(localStorage.getItem('celulares')) || [];

		const formData = new FormData(form);

		const marcaSelect = document.getElementById('marca');
		const marcaText = marcaSelect.options[marcaSelect.selectedIndex].text;

		const valorRaw = formData.get('valor');
		const valor = new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		}).format(valorRaw);

		const celular = {
			marca: marcaText,
			modelo: formData.get('modelo'),
			cor: formData.get('cor'),
			valor: valor,
			estado: formData.get('estado') === 'novo' ? 'Novo' : 'Usado',
			informacoes: formData.get('informacoes')
		};

		celulares.push(celular);

		localStorage.setItem('celulares', JSON.stringify(celulares));

		console.log('Dados do celular:', celular);

		alert('Celular cadastrado com sucesso!');

		form.reset();
	});
}

function initListagemPage() {
	const celulares = JSON.parse(localStorage.getItem('celulares')) || [];
	const tableBody = document.querySelector('.celulares-table tbody');

	if (celulares.length > 0) {
		tableBody.innerHTML = '';

		celulares.forEach((celular) => {
			const row = document.createElement('tr');

			const labels = [
				'Marca',
				'Modelo',
				'Cor',
				'Valor',
				'Estado',
				'Informações'
			];

			Object.entries(celular).forEach(([key, value], index) => {
				const cell = document.createElement('td');
				cell.textContent = value;

				cell.setAttribute('data-label', labels[index]);

				row.appendChild(cell);
			});

			tableBody.appendChild(row);
		});
	}
}
