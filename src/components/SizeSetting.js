import React, { Component } from 'react';


class App extends Component {
    render() {
        return (

            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size: 15px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success">Tăng</button>
                    <button type="button" className="btn btn-danger">Giảm</button>
                </div>
            </div>

        );
    }
}

export default App;
