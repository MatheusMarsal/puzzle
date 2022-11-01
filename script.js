const tabuleiro = document.getElementById('tabuleiro')

function puzzleGenerator(colunas) {
	
	let buildIn = '<div class="quadrado btn impedirSelecao"><div class="quadrado_">' + 1 + '</div></div>'

	for (let i = 2; i < (colunas * colunas) + 1; i++) {
		buildIn += '<div class="quadrado btn impedirSelecao"><div class="quadrado_">' + i + '</div></div>'
	}

	tabuleiro.innerHTML = buildIn

	const btns = document.getElementsByClassName('btn')

	for (let btn of btns) {
		btn.style.backgroundColor = 'black';

		btn.addEventListener('click', function() {
			console.log(this.style.backgroundColor)

			if (this.style.backgroundColor === 'black') {
				this.style.backgroundColor = 'white';
				this.style.color = 'black';
			} else if (this.style.backgroundColor === 'white') {
				this.style.backgroundColor = 'black';
				this.style.color = 'white';
			}
		}, false)
	}
}

const btnGen = document.getElementById('btnGenerator')

btnGen.addEventListener('click', function() {
	
	let cols = 'auto'
	let colunas = 3
	for (i = 1; i < colunas; i++){
		cols += ' auto'
	}
	
	tabuleiro.style.gridTemplateColumns = cols;
	
	
	puzzleGenerator(colunas)
}, false)