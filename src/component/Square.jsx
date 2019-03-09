import React from 'react';
import '../index.css';

export default class Square extends React.PureComponent {
    render() {
        return (
          <button className="square" onClick={this.props.onClick(this.props.idx)}>
            {this.props.value}
          </button>
    );
  }
}