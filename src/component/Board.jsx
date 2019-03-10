import React from 'react'
import '../index.css'
import Square from './Square'

export default class Board extends React.PureComponent {
    renderSquare(i) {
        return <Square idx={i} value={this.props.body.cells[i]} onClick={this.props.onCellClick}/>
    }

    render() {
        console.log("Board called : " + this.props.body.cells)
        return (
            <div>
                <div className='status'>{this.props.status}</div>
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