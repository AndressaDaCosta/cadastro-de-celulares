document.addEventListener('DOMContentLoaded', function () {
	if (document.getElementById('celularForm')) {
		initCadastroPage();
	} else if (document.querySelector('.celulares-table')) {
		initListagemPage();
	}
});

function initCadastroPage() {
	const form = document.getElementById('celularForm');
	const saveButton = form.querySelector('.btn-save');

	// Função para verificar se todos os campos obrigatórios estão preenchidos
	function checkFormValidity() {
		const marca = document.getElementById('marca').value;
		const modelo = document.getElementById('modelo').value.trim();
		const cor = document.getElementById('cor').value.trim();
		const valor = document.getElementById('valor').value;
		const estado = document.querySelector('input[name="estado"]:checked');

		const isFormValid = marca && modelo && cor && valor && estado;

		if (isFormValid) {
			saveButton.style.cursor = 'pointer';
		} else {
			saveButton.style.cursor = 'not-allowed';
		}

		saveButton.disabled = !isFormValid;
	}

	saveButton.disabled = true;
	saveButton.style.cursor = 'not-allowed';

	const requiredFields = ['marca', 'modelo', 'cor', 'valor'];
	requiredFields.forEach((fieldId) => {
		const field = document.getElementById(fieldId);
		field.addEventListener('input', checkFormValidity);
		field.addEventListener('change', checkFormValidity);
	});

	const estadoRadios = document.querySelectorAll('input[name="estado"]');
	estadoRadios.forEach((radio) => {
		radio.addEventListener('change', checkFormValidity);
	});

	form.addEventListener('submit', function (event) {
		event.preventDefault();

		try {
			let celulares = JSON.parse(localStorage.getItem('celulares')) || [];

			const formData = new FormData(form);

			const marcaSelect = document.getElementById('marca');
			const marcaText =
				marcaSelect.options[marcaSelect.selectedIndex].text;

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
				informacoes: formData.get('informacoes') || ''
			};

			celulares.push(celular);

			localStorage.setItem('celulares', JSON.stringify(celulares));

			form.reset();

			saveButton.disabled = true;
			saveButton.style.cursor = 'not-allowed';

			alert('Dados salvos com sucesso!');
		} catch (error) {
			console.error('Erro ao salvar dados:', error);
			alert('Erro ao salvar os dados. Tente novamente!');
		}
	});
}

function initListagemPage() {
	const celulares = JSON.parse(localStorage.getItem('celulares')) || [];
	const tableBody = document.querySelector('.celulares-table tbody');

	// Adicionar os dados do localStorage aos dados mockados existentes
	addLocalStorageDataToTable(celulares, tableBody);

	// Adicionar listener para pesquisa em tempo real
	const searchInput = document.getElementById('search');
	if (searchInput) {
		searchInput.addEventListener('input', searchCelulares);
		searchInput.addEventListener('keyup', searchCelulares);
	}
}

function addLocalStorageDataToTable(celulares, tableBody) {
	if (celulares.length > 0) {
		celulares.forEach((celular, index) => {
			const row = document.createElement('tr');

			// Adicionar uma classe para identificar dados do localStorage
			row.classList.add('localStorage-data');
			row.setAttribute('data-index', index);

			const labels = [
				'Marca',
				'Modelo',
				'Cor',
				'Valor',
				'Estado',
				'Informações'
			];

			Object.entries(celular).forEach(([key, value], labelIndex) => {
				const cell = document.createElement('td');
				cell.textContent = value;
				cell.setAttribute('data-label', labels[labelIndex]);
				row.appendChild(cell);
			});

			const actionsCell = document.createElement('td');
			actionsCell.setAttribute('data-label', 'Ações');
			actionsCell.innerHTML = `
				<button class="btn btn-delete" onclick="deleteCelular(${index})" title="Excluir este celular">
					Excluir
				</button>
			`;
			row.appendChild(actionsCell);

			tableBody.appendChild(row);
		});
	}
}

function searchCelulares() {
	const searchInput = document.getElementById('search');
	const searchTerm = searchInput.value.trim();
	const tableBody = document.querySelector('.celulares-table tbody');
	const allRows = tableBody.querySelectorAll('tr');

	// Se não há termo de busca, mostrar todas as linhas
	if (!searchTerm) {
		allRows.forEach((row) => {
			row.style.display = '';
		});
		return;
	}

	const normalizedSearchTerm = normalizeText(searchTerm);

	allRows.forEach((row) => {
		const marcaElement = row.querySelector('[data-label="Marca"]');
		const modeloElement = row.querySelector('[data-label="Modelo"]');

		if (!marcaElement || !modeloElement) {
			return;
		}

		const marca = normalizeText(marcaElement.textContent);
		const modelo = normalizeText(modeloElement.textContent);

		const matchFound =
			marca.includes(normalizedSearchTerm) ||
			modelo.includes(normalizedSearchTerm);

		if (matchFound) {
			row.style.display = '';
		} else {
			row.style.display = 'none';
		}
	});
}

// Função auxiliar para normalizar texto (remove acentos, converte para minúsculas, etc.)
function normalizeText(text) {
	if (!text) return '';

	return text
		.toLowerCase()
		.normalize('NFD') // Decompor caracteres acentuados
		.replace(/[\u0300-\u036f]/g, '') // Remover acentos
		.replace(/[^\w\s]/g, '') // Remover caracteres especiais exceto espaços e letras/números
		.trim();
}

function displayCelulares(celulares, tableBody) {
	tableBody.innerHTML = '';

	if (celulares.length > 0) {
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
	} else {
		const row = document.createElement('tr');
		const cell = document.createElement('td');
		cell.setAttribute('colspan', '6');
		cell.style.textAlign = 'center';
		cell.style.padding = '20px';
		cell.style.fontStyle = 'italic';
		cell.style.color = '#666';
		cell.textContent =
			'Nenhum celular cadastrado ainda. Clique em "Adicionar Celular" para começar.';
		row.appendChild(cell);
		tableBody.appendChild(row);
	}
}

function deleteCelular(index) {
	const confirmDelete = confirm(
		'Tem certeza que deseja excluir este celular?'
	);

	if (confirmDelete) {
		try {
			let celulares = JSON.parse(localStorage.getItem('celulares')) || [];

			celulares.splice(index, 1);

			localStorage.setItem('celulares', JSON.stringify(celulares));

			refreshTable();

			alert('Celular excluído com sucesso!');
		} catch (error) {
			console.error('Erro ao excluir celular:', error);
			alert('Erro ao excluir o celular. Tente novamente!');
		}
	}
}

// Função para "deletar" dados mockados (apenas mostra aviso)
function deleteMockData(button) {
	alert(
		'Este é um dado de exemplo e não pode ser excluído. Apenas os celulares que você cadastrar podem ser excluídos.'
	);
}

function refreshTable() {
	const tableBody = document.querySelector('.celulares-table tbody');

	const localStorageRows = tableBody.querySelectorAll('.localStorage-data');
	localStorageRows.forEach((row) => row.remove());

	const celulares = JSON.parse(localStorage.getItem('celulares')) || [];
	addLocalStorageDataToTable(celulares, tableBody);
}
