import React from 'react'
import '../index.css'
import Square from './Square'
//import update from 'react-addons-update'

export default class Board extends React.Component {
    constructor(props) {
        super(props)
        this.setState({
            cells: Array(8).fill(null)
        })
    }

    onClick = (idx) => {
        this.setState({
            ...this.state,
            //cells: update(this.state.cells, {idx: {$set: 'X'}})
        })
    }


    renderSquare = (i, value, onClick) => {
        return <Square idx={i} value={value[i]} onClick={onClick}/>
    }

    render() {
        const status = 'Next player: X'

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0, this.state.cells, this.onClick)}
                    {this.renderSquare(1, this.state.cells, this.onClick)}
                    {this.renderSquare(2, this.state.cells, this.onClick)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3, this.state.cells, this.onClick)}
                    {this.renderSquare(4, this.state.cells, this.onClick)}
                    {this.renderSquare(5, this.state.cells, this.onClick)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6, this.state.cells, this.onClick)}
                    {this.renderSquare(7, this.state.cells, this.onClick)}
                    {this.renderSquare(8, this.state.cells, this.onClick)}
                </div>
            </div>
        )
    }
}