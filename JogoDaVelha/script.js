const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameover = false;

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.innerHTML !== '' || gameover) {
      return;
    }
    cell.innerHTML = currentPlayer;
    if (checkForWin()) {
      alert(currentPlayer + ' venceu!');
      gameover = true;
    } else if (checkForTie()) {
      alert('Empate!');
      gameover = true;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  });
});

function checkForWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
    [0, 4, 8], [2, 4, 6] // diagonais
  ];
  return winningCombos.some(combo => {
    return cells[combo[0]].innerHTML !== '' && cells[combo[0]].innerHTML === cells[combo[1]].innerHTML && cells[combo[1]].innerHTML === cells[combo[2]].innerHTML;
  });
}

function checkForTie() {
  return Array.from(cells).every(cell => cell.innerHTML !== '');
}
