const tabuleiro = document.getElementById('tabuleiro');
let counterClicks = 0;
let counterReset = 0;

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
			counterClicks += 1;
			cntdrClick(counterClicks);
			checkBtns(this, colunas);

		}, false)
	}
}

const gerador = document.getElementById('gerador')
const btnGen = document.getElementById('btnGenerator');
const columns = document.getElementById('columns');
const menu = document.getElementsByClassName('menu')[0];

btnGen.addEventListener('click', function() {
	gerador.style.top = '-70px';

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
	if (counterClicks > 0) {
		const btns = document.getElementsByClassName('btn');

		for (let btn of btns) {
			btn.style.backgroundColor = 'black';
			btn.style.color = 'white';
		}

		counterReset += 1;
		cntdrReset(counterReset);

		counterClicks = 0;
		cntdrClick(0);

	}
}, false)

const btnSettings = document.getElementById('settings');

btnSettings.addEventListener('click', function() {
	const contadorClicks = document.getElementById('contadorClicks');
	const contadorResets = document.getElementById('contadorResets');

	counterClicks = 0;
	counterReset = 0;

	gerador.style.top = '5px';
	tabuleiro.innerHTML = '';
	contadorClicks.innerHTML = '';
	contadorResets.innerHTML = '';

}, false)

function cntdrClick(counterClicks) {
	const contadorClicks = document.getElementById('contadorClicks');
	contadorClicks.innerHTML = counterClicks + ' clicks'
}

function cntdrReset(counterReset) {
	const contadorResets = document.getElementById('contadorResets');
	contadorResets.innerHTML = counterReset + ' resets'
}