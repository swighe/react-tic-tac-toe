import React from 'react';
import '../index.css';
import ConnectedBoard from './ConnectedBoard'

export default class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <ConnectedBoard size={3}/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}