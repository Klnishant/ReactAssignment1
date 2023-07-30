import React from 'react'
import Person from './Person.jsx'
import Button from './Button.jsx'
import Header from './Header.jsx'
import List from './List.jsx'

function App(){
    return (
      <div>
        <Person name="Rahul" age="25" />
        <Button text="click" onclick={()=>{console.log("Button clicked")}} />
        <Header title="Welcome to my web page" />
        <List items={['apple', 'banana', 'orange']} />

      </div>
    );
}
  
export default App;