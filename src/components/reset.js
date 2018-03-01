import React, { Component } from 'react';
class reset extends Component {
    _onClickReset=()=>{
        this.props.onReset();
    }
    render() {
        return (
            <button type="button" className="btn btn-primary warning" onClick={this._onClickReset}>Reset</button>
        );
    }
}

export default reset;
