function joinOr(board, separator = ', ', joiningWord = 'or') {
  switch (board.length) {
    case 0: return '';
    case 1: return `${board[0]}`;
    case 2: return `${board[0]} ${joiningWord} ${board[1]}`;
    default:
      return board.slice(0, board.length - 1).join(separator) + `${separator}${joiningWord} ` + board[board.length - 1];
  }
}

// Test cases:
console.log(joinOr([]) === "");
console.log(joinOr([5]) === "5");
console.log(joinOr([1, 2, 3]) === "1, 2, or 3");
console.log(joinOr([1, 2, 3], '; ') === "1; 2; or 3");
console.log(joinOr([1, 2, 3], ', ', 'and') === "1, 2, and 3");
console.log(joinOr([1, 2]) === "1 or 2");