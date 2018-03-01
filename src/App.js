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
   
  }
  _onSetColor=(params)=> {
    this.setState({
      color: params
    });
  }
  _onChangeSize=(params)=> {
    this.setState({
      
      fontSize:(this.state.fontSize+params>=0 || this.state.fontSize+params<40)?this.state.fontSize+params:0
    });
  
  }
  onReset=()=>{
    this.setState({
      fontSize:15,
      color:'green'
    })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <ColorPicker color={this.state.color} onReceiveColor={this._onSetColor} />
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SizeSetting fontSize={this.state.fontSize} _onChangeSize={this._onChangeSize} />
              <Reset onReset={this.onReset}/>
            </div>
            <Result color={this.state.color} fontSize={this.state.fontSize} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
