import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
} // 另外一部分简化的内容则是事件处理函数的写法，这里我们把 onClick={() => props.onClick()} 直接修改为
// onClick={props.onClick} , 注意不能写成 onClick={props.onClick()}
// 否则 props.onClick 方法会在 Square 组件渲染时被直接触发而不是等到 Board 组件渲染完成时通过点击触发，
// 又因为此时 Board 组件正在渲染中（即 Board 组件的 render() 方法正在调用），
// 又触发 handleClick(i) 方法调用 setState() 会再次调用 render() 方法导致死循环。

/***
 * 判断获胜方的算法函数
 * @param squares
 * @returns {*}
 */
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

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
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
        if (calculateWinner(squares) || squares[i]) {
            return;
        } // 当前方格内已经落子/有一方获胜就就无法继续落子
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
        console.log(this.state.squares)
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
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