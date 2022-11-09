const tabuleiro = document.getElementById('tabuleiro');

function puzzleGenerator(colunas) {

	let buildIn = '<div class="btn impedirSelecao" id="' + 1 + '"><div class="btn_">' + 1 + '</div></div>';

	for (let i = 2; i <= (colunas * colunas); i++) {
		buildIn += '<div class="btn impedirSelecao" id="' + i + '"><div class="btn_">' + i + '</div></div>';
	}

	tabuleiro.innerHTML = buildIn;

	const btns = document.getElementsByClassName('btn');

	for (let btn of btns) {
		btn.style.backgroundColor = 'black';
		btn.style.color = 'white';

		btn.addEventListener('click', function() {
			checkBtns(this, colunas);
		}, false)
	}
}

const gerador = document.getElementById('gerador')
const btnGen = document.getElementById('btnGenerator');
const columns = document.getElementById('columns');

btnGen.addEventListener('click', function() {
	gerador.style.top = '-70px';
	console.log(gerador.style)

	let cols = 'auto';
	let colunas = columns.value;

	for (i = 1; i < colunas; i++) {
		cols += ' auto';
	}

	tabuleiro.style.gridTemplateColumns = cols;

	puzzleGenerator(parseInt(colunas));
}, false)

function checkBtns(btn, colunas) {
	trocarCor(btn);

	let id = parseInt(btn.id);

	//Btn cima
	if ((id - colunas) > 0) {
		btn = document.getElementById(id - colunas);
		trocarCor(btn);
	}

	//Btn Esquerdo
	if ((id - 1) > 0 & !((id - 1) % colunas === 0)) {
		btn = document.getElementById(id - 1);
		trocarCor(btn);
	}

	//Btn Direito
	if (!((id + 1) > (colunas * colunas)) & !(id % colunas === 0)) {
		btn = document.getElementById(id + 1);
		trocarCor(btn);
	}

	//Btn baixo
	if (!((id + colunas) > (colunas * colunas))) {
		btn = document.getElementById(id + colunas);
		trocarCor(btn);
	}
}

function trocarCor(btn) {
	if (btn.style.backgroundColor === 'black') {
		btn.style.backgroundColor = 'white';
		btn.style.color = 'black';

	} else if (btn.style.backgroundColor === 'white') {
		btn.style.backgroundColor = 'red';
		btn.style.color = 'white';

	} else if (btn.style.backgroundColor === 'red') {
		btn.style.backgroundColor = 'black';
		btn.style.color = 'white';
	}
}

const btnReload = document.getElementById('reload');

btnReload.addEventListener('click', function() {
	const btns = document.getElementsByClassName('btn');

	console.log(btns.length)

	for (let btn of btns) {
		btn.style.backgroundColor = 'black';
		btn.style.color = 'white';
	}

}, false)

const btnSettings = document.getElementById('settings');

btnSettings.addEventListener('click', function() {
	gerador.style.top = '5px';
	tabuleiro.innerHTML = '';

}, false)