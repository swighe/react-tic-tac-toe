import React from 'react'
import '../index.css'
import Board from './Board'

export default class ConnectedBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            boards: [
                {
                    cells: Array(Math.pow(this.props.size, 2)).fill(null),
                    isFirstPlayerTurn: true,
                }
            ],
            curIdx: 0,
            winner: null
        }
    }

    goPrev = () => {
        if (this.state.curIdx > 0) {
            console.log('Prev' + this.state.boards.filter((_, j) => this.state.boards.length - 1 !== j))
            this.setState({
                boards: this.state.boards.filter((_, j) => this.state.boards.length - 1 !== j),
                curIdx: this.state.curIdx - 1,
                winner: null
            })
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

    onCellClick = (idx) => {
        if (this.state.boards[this.state.curIdx].cells[idx] === null && this.state.winner == null) {
            var cells = this.state.boards[this.state.curIdx].cells.slice();
            cells[idx] = this.state.boards[this.state.curIdx].isFirstPlayerTurn ? 'X' : '0';
            const winner = this.calculateWinner(cells)
            this.setState({
                boards: this.state.boards.concat({
                    cells: cells,
                    isFirstPlayerTurn: !this.state.boards[this.state.curIdx].isFirstPlayerTurn
                }),
                curIdx: this.state.curIdx + 1,
                winner: winner
            })
        };
    }

    render = () => {
        const status = this.state.winner ? 'Winner is ' + this.state.winner : 'Next player: ' + (this.state.boards[this.state.curIdx].isFirstPlayerTurn ? 'X' : '0')
        return (
            <div>
                <Board body={this.state.boards[this.state.curIdx]} status={status} onCellClick={this.onCellClick}/>
                <button className='.button' onClick={this.goPrev}>Prev</button>
            </div>
        )
    }
}