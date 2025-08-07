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
			checkAllRed();
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

function checkAllRed() {
	const btns = document.getElementsByClassName('btn');
	if (btns.length === 0) return;

	let allRed = true;
	for (let btn of btns) {
		if (btn.style.backgroundColor !== 'red') {
			allRed = false;
			break;
		}
	}

	if (allRed) {
		showCongrats();
	}
}

function showCongrats() {
	let modal = document.getElementById('congrats-modal');
	if (!modal) {
		modal = document.createElement('div');
		modal.id = 'congrats-modal';
		modal.style.position = 'fixed';
		modal.style.top = '0';
		modal.style.left = '0';
		modal.style.width = '100vw';
		modal.style.height = '100vh';
		modal.style.background = 'rgba(0,0,0,0.5)';
		modal.style.display = 'flex';
		modal.style.alignItems = 'center';
		modal.style.justifyContent = 'center';
		modal.style.zIndex = '9';
		modal.innerHTML = '<div id="congrats-content" style="background: white; padding: 40px 30px; border-radius: 16px; box-shadow: 0 2px 16px #0003; text-align: center; font-size: 1.5rem;"></div>';
		document.body.appendChild(modal);
	}

	const content = document.getElementById('congrats-content');
	content.innerHTML = `<strong>Parabéns!</strong><br>Você completou o puzzle.<br><br>Resets: <b>${counterReset}</b><br>Clicks: <b>${counterClicks}</b><br><br><button id="close-modal" style="margin-top:20px;padding:10px 20px;border-radius: 10px;font-size:1rem;cursor:pointer;">Menu</button>`;
	modal.style.display = 'flex';

	document.getElementById('close-modal').onclick = function() {
		modal.style.display = 'none';
		home();
	};
}

const btnReload = document.getElementById('reload');

btnReload.addEventListener('click', function() {
	if (counterClicks > 0) {
		btnReload.classList.add('spin');
		setTimeout(() => btnReload.classList.remove('spin'), 1000);

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

btnSettings.addEventListener('click', home, false)

function home() {
	btnSettings.classList.add('flip');
	setTimeout(() => btnSettings.classList.remove('flip'), 500);

	const contadorClicks = document.getElementById('contadorClicks');
	const contadorResets = document.getElementById('contadorResets');

	counterClicks = 0;
	counterReset = 0;

	gerador.style.top = '5px';
	tabuleiro.innerHTML = '';
	contadorClicks.innerHTML = '';
	contadorResets.innerHTML = '';
}

function cntdrClick(counterClicks) {
	const contadorClicks = document.getElementById('contadorClicks');
	contadorClicks.innerHTML = counterClicks + ' clicks'
}

function cntdrReset(counterReset) {
	const contadorResets = document.getElementById('contadorResets');
	contadorResets.innerHTML = counterReset + ' resets'
}
