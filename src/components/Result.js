import React, { Component } from 'react';

class Result extends Component {
    
    _setStyle=()=>{
        return {
            color:this.props.color,
            fontSize:this.props.fontSize
        };
    }
    render() {
        return (

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Nội dung cài đặt - Fontsize: {this.props.fontSize}px</p>
                <div id="content" style={this._setStyle()}>
                    Nội dung cụ thể
                </div>
            </div>

        );
    }
}

export default Result;
