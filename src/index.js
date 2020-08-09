import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Square component renders a single <button>
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    } 
  }
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      square: Array(9).fill(null),
    }
  }
  handleClick(i) {
    const square = this.state.square.slice();
    square[i] = 'X';
    this.setState({square: square});
  }
  renderSquare(i) {
    return <Square  value={this.state.square[i]}
                    onClick ={() => this.handleClick(i)}
           />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
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
          
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
