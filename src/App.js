import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div class="panel panel-primary">
                <div class="panel-heading" >
                  <h3 class="panel-title" >Color Picker</h3>
                </div>
                <div class="panel-body">
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div class="panel panel-warning">
                <div class="panel-heading">
                  <h3 class="panel-title">Size: 15px</h3>
                </div>
                <div class="panel-body">
                  <button type="button" class="btn btn-success">Tăng</button>
                  <button type="button" class="btn btn-danger">Giảm</button>
                </div>
                <div>
                  <button type="button" class="btn btn-primary warning">Reset</button>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" s>
              <p>Nội dung cài đặt - Fontsize: 15px</p>
              <div id="content" >
                Nội dung cụ thể
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
