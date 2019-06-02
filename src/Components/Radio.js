import React from 'react';

export default class Radio extends React.Component{
render(){
        return (
            <div>
                <input type='radio' name={this.props.name}/><label>{this.props.label}</label>
            </div>
                );  
            }
}