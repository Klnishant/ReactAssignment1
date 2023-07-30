import React from 'react';

// for question no4.

function List(props) {
  const listItems = props.items.map((item) =>
    <li key={item}>{item}</li>
  );
  
  return <ul>{listItems}</ul>;
}


export default List;