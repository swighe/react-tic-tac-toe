import React from 'react';
import '../index.css';
import ConnectedBoard from './ConnectedBoard'

export default class Game extends React.Component {
    render() {
        return (
            <div>
                <div className="game-board">
                    <ConnectedBoard size={3}/>
                </div>
            </div>
        );
    }
}