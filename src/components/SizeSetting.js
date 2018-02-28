import React, { Component } from 'react';


class App extends Component {
    render() {
        return (

            <div class="panel panel-warning">
                <div class="panel-heading">
                    <h3 class="panel-title">Size: 15px</h3>
                </div>
                <div class="panel-body">
                    <button type="button" class="btn btn-success">Tăng</button>
                    <button type="button" class="btn btn-danger">Giảm</button>
                </div>
            </div>

        );
    }
}

export default App;
