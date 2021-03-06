import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
//Square component renders a single <button>
function Square(props) {
    return (
      <button 
        className="square" 
        onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
class Board extends React.Component {
  renderSquare(i) {
    return <Square 
    value={this.props.squares[i]}
    onClick={() => this.props.onClick(i)} />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
    }
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }
  handleClick(i) {
    const history = this.state.history.slice(0,this.state.stepNumber + 1);
    const current = history[history.length -1];
    const squares = current.squares.slice();
    //console.log(squares[i]);
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X': 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    })
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
        const desc = move ?
        'Go to move #' + move :
        'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        )
    });
    let status;
    if(winner) {
      status = 'Winner ' + winner;
    }
    else {
      status='Next Player ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board 
          squares={current.squares}
          onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
*/
/*****************************
 * ********Victor*************
***************************** */
/*
function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    )
}
class Board extends React.Component {
  renderSquare(i) {
    return <Square 
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)} />
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
      
    )
  }
}
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
      squares: Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }
  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length -1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if(winner || squares[i]) {
      return;
    }
    squares[i] = (this.state.xIsNext ? 'X': 'O');
      this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[history.length -1];
    const winner = calculateWinner(current.squares);
    let status;
    if(winner) {
      status = 'winner' + winner;
    }
    else {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O')
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board 
          squares={current.squares}
          onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>
          {status}
          </div>
          <div>
            <ol>
              <li>Go to game start</li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      //console.log(squares[a]);
      return squares[a];
    }
  }
      return null;
}
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
*/
/**********************
 *******Victor*********
 *********************/
function Square(props) {
    return (
      <button 
      className="square" 
      onClick={props.onClick}>
          {props.value}
      </button>
    )
  }
class Board extends React.Component {
  renderSquare(i) {
    return <Square 
    value={this.props.squares[i]}
    onClick={() => this.props.onClick(i)}
    />
  }
  render() {
    return (
      <div>
      <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
      <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
    </div>
    )
  }
}
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{squares: Array(9).fill()},],
      xIsNext: true,
      stepNumber: 0,
    }
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1]; 
    const squares = current.squares.slice();
    if(caculatorWinner(squares) || squares[i]) {
      return
    }
    else {
      squares[i] = this.state.xIsNext ? 'X': 'O';
      this.setState({
        history: history.concat([{squares: squares}]),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length
    })
    }
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    })
  }
  render() {
    const history = this.state.history
    const squares = history[this.state.stepNumber].squares.slice();
    const moves = history.map((step, move) => {
      const desc = step ?
        'Go to game move #' + move :
        'Go to game start'      
      return (
        <li id={move}><button onClick={() => this.jumpTo(move)}>{desc}</button></li>
      )
    }
    );
    let  status ;
    let winner = caculatorWinner(squares);
    if(winner) {
      status = 'Winner: ' + winner;
    }
    else {
      status = 'The Next player ' + (this.state.xIsNext ? 'X': 'O');
    }
    return(
      <div className="game">
        <div className="game-board">
          <Board 
          squares={squares}
          onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div className="status">
           {status}
          </div>
          <div> 
            {moves}
          </div>
        </div>
        
      </div>
    )
  }
}
class App extends React.Component {
  render(){
    return (
      <div className="container">
          <header><h1>Victor Do Game</h1></header>
          <Game />
          <footer>
            <div>
              <h2>Writter by Victor Do</h2>
            </div>
            <div className="social">
              <div><h2>Facebook</h2></div>
              <div><h2>Youtube</h2></div>
              <div><h2>Medium</h2></div>
            </div>
          </footer>
      </div>
  )}
};
function caculatorWinner(square) {
  const arrayWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
  ];
  for(let i = 0 ; i < arrayWin.length; i++) {
    const [a, b, c] = arrayWin[i];
    if(square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a]
    }
  }
  return null
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
/**
 *let array1 = Array(9).fill(null);
let array2 = array1.slice();
array2[0] = '1';
array2[1] = '2';
array2[2] = '3';
array2[3] = '4';
array2[4] = '5';
array2[5] = '6';
array2[6] = '7';
array2[7] = '8';
array2[8] = '9';
array1 = array2

// fill with 0 from position 2 until position 4
console.log(array1);


 */
/**
 * const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((step, move) => {
      const a = step;
   const b = move;
return a,b})

console.log(map1);
// expected output: Array [2, 8, 18, 32]
 */