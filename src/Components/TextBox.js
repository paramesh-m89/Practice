import React from 'react';

export default class TextBox extends React.Component{

render(){
    return(
        <div>
            <label>{this.props.label}: </label><input type='text'/>
        </div>
    )
}

}