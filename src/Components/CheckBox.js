import React from 'react';

export default class CheckBox extends React.Component{

render(){
return (
<div>
    <input type='checkbox' name={this.props.name}/><label>{this.props.label}</label>
</div>

)

}    

}