import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {

    render() {
        return (
            <button className="square" onClick={() => {
                this.props.onClick()
            }}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: Array(9).fill(null)
        }
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}/>
        );
    } // 在 JSX 元素的最外层套上了一小括号，以防止 JavaScript 代码在解析时自动在换行处添加分号。

    handleClick(i) {
        // 我们使用了 .slice() 方法来将之前的数组数据浅拷贝到了一个新的数组中，而不是修改已有的数组。
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
        console.log(this.state.squares)
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
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
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
                    <Board/>
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

// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// );

export default Game;