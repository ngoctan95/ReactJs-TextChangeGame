import React, { Component } from 'react';
import './App.css';
import Reset from './components/reset';
import Result from './components/Result';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <div class="row">
            <ColorPicker />
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SizeSetting />
              <Reset />
            </div>
            <Result />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
