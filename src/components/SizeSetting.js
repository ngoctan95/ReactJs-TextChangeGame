import React, { Component } from 'react';


class App extends Component {
    _onClickChange(number){
        this.props._onChangeSize(number);
    }
    render() {
        return (

            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size: {this.props.fontSize}px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={()=>this._onClickChange(2)}>Tăng</button>
                    <button type="button" className="btn btn-danger" onClick={()=>this._onClickChange(-2)}>Giảm</button>
                </div>
            </div>

        );
    }
}

export default App;
