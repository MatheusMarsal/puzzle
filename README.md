# Puzzle---HMTL-CSS-JavaScript
Ideia para um quebra cabeça escalável e pré configurável pelo usuário

* Ainda em desenvolvimento.

Inicialmente a ideia é construir um quebra cabeça semi-escalavel, onde o usuário realiza input do tamanho do quebra cabeça.
O tamanho pré estabelecido é posteriormente formado por uma matriz tamanho x tamanho.

O desafio do quebra cabeça, inicialmente, é preencher todos os "botões" com a cor vermelha.
A cada clique em um "botão", ele e seus "vizinhos" mudarão de cor, "somando" uma cor de uma sequência já estabelecida, inicialmente, via código.

A sequência de cores consiste em:
* Preto, branco e vermelho.

Caso clique em um "botão" preto, sua cor passará a ser branca, assim suscetivelmente...
Caso for vermelha, retornará à primeira cor da sequência, logo, a cor preta.

* Lembrando que os “vizinhos” não é considerado os que localizam-se nas diagonais.

* Exemplo:
Em um puzzle de tamanho 3 (3x3), enumerados de 1 à 9.
Caso clique no “botão” 1, os “botões” 1,2 e 4, “somarão” uma cor.
Caso clique no “botão” 5, os “botões” 2,4,5,6,8 “somarão” uma cor.
