import React, { Component } from 'react';
import './App.css';
import Reset from './components/reset';
import Result from './components/Result';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 15,
      color: 'green'
    }
    this._onSetColor=this._onSetColor.bind(this);
  }
  _onSetColor(params) {
    // console.log(params);
    this.setState({
      color:params
    })
    // console.log(this.state.color)
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <ColorPicker color={this.state.color} onReceiveColor={this._onSetColor} />
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SizeSetting />
              <Reset />
            </div>
            <Result color={this.state.color}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
