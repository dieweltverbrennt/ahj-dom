export default class GamePlay {
  constructor(board, char) {
    this.board = board;
    this.char = char;
    this.boardSize = 4;
    this.current = null;
  }

  init() {
    this.drawBoard();
    this.cells = Array.from(document.querySelectorAll('.cell'));
    this.current = Math.floor(Math.random() * this.boardSize * this.boardSize);
    this.redrawChar(this.current);
    this.start();
  }

  drawBoard() {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.classList.add('container');
    const board = this.board.createBoard(this.boardSize);
    container.appendChild(board);
    body.appendChild(container);
  }

  redrawChar(index) {
    const char = this.char.createChar();
    this.cells[index].appendChild(char);
  }

  getRandomIndex() {
    let index = Math.floor((Math.random() * this.cells.length));
    if (index === this.current) {
      index = this.getRandomIndex();
    } else {
      this.current = index;
    }
    return index;
  }

  removeChar() {
    this.cells[this.current].firstChild.remove();
  }

  start() {
    setInterval(() => {
      this.removeChar();
      const index = this.getRandomIndex();
      this.redrawChar(index);
    }, 1000);
  }
}
