import React from 'react'
import '../index.css'
import Move from './Move'

export default class Moves extends React.PureComponent {
    renderMove = (i, onJumpToClick, status) => {
        return (
            <Move i={i} onJumpToClick={onJumpToClick} status={status}/>
        )
    }

    render() {
        return (
            <div className='move'>
                <ul>
                    <li key='0'>{this.renderMove(0, this.props.onJumpToClick, 'Move to start')}</li>
                    {this.range(1, this.props.numMoves).map((_, i) => i > 0 ? <li key={i}>{this.renderMove(i, this.props.onJumpToClick, 'Jump to move#' + i)}</li> : null)}
                </ul>
            </div>
        )
    }

    range = (start, end) => {
        if (end < 0) return []
        if(start >= end) return [start]
        return [start, ...this.range(start + 1, end)]
    }

}