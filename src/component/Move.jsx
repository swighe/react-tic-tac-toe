import React from 'react'
import '../index.css'

export default class Move extends React.PureComponent {
    render() {
        return (
            <div>
                <button onClick={() => {this.props.onJumpToClick(this.props.i)}}>
                    {this.props.status}
                </button>
            </div>
        )
    }
}