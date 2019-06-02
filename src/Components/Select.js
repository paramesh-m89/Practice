import React from 'react';

export default class Select extends React.Component{

render(){

return(
<select name={this.props.name}>
    <option value="-1">{this.props.label}</option>
    {this.props.options.map(item => <option name={item}>{item}</option>)}
</select>

)    

}

}