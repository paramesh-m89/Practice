import React from 'react';
import Radio from './Components/Radio';
import CheckBox from './Components/CheckBox';
import TextBox from './Components/TextBox';
import Select from './Components/Select';

function App() {
  return (
    <div>
      <div>
        Please enter your name.<br/>
        <TextBox label='Name'/>
      </div>
      <div>
        Please Select your occupation.<br/>
        <Select 
          label='Select your answer' 
          name='occupation' 
          options='["Private","Govt","Self","Student","Retired"]'/>
      </div>      
      <div>
      Please select your age range below.<br/><br/>
      <div>
        <Radio label="18-25" name='r1'/>
        <Radio label="26-35" name='r1'/>
        <Radio label="36-50" name='r1'/>
      </div>
    </div>

    <div>
      Please select your Qualifications below.<br/><br/>
      <div>
      <CheckBox label="SSC" name='C1'/>
      <CheckBox label="X12" name='C1'/>
      <CheckBox label="BTech" name='C1'/>
      <CheckBox label="ITI" name='C1'/>
      <CheckBox label="Deploma" name='C1'/>
      <CheckBox label="None of the above" name='C1'/>
      </div>
    </div>


    </div>
  );
}

export default App;
