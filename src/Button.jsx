import React from 'react';
//For question no2.
function Button({text,onclick}){
    return(
      <>
         <div>
            <button onClick={onclick}>{text} </button>
         </div>
      </>
    );
  }

  export default Button;