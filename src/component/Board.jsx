import React from 'react'
import '../index.css'
import Square from './Square'

export default class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cells: Array(Math.pow(this.props.size, 2)).fill(null),
            isFirstPlayerTurn: true,
            winner: null
        }
    }

    onClick = (idx) => {
        if (this.state.cells[idx] === null && this.state.winner == null) {
            var cells = this.state.cells.slice();
            cells[idx] = this.state.isFirstPlayerTurn ? 'X' : '0';
            const winner = this.calculateWinner(cells)
            this.setState({
                cells: cells,
                isFirstPlayerTurn: !this.state.isFirstPlayerTurn,
                winner: winner
            });
        }
    }

    calculateWinner(squares) {
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

    renderSquare(i) {
        return <Square idx={i} value={this.state.cells[i]} onClick={this.onClick}/>
    }

    render() {
        const status = this.state.winner ? 'Winner is ' + this.state.winner : 'Next player: ' + (this.state.isFirstPlayerTurn ? 'X' : '0')
        return (
            <div>
                <div className='status'>{status}</div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}