import React from 'react';  // you must have this to use ref

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {         // step 2
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />            
    </div>  
  );
});

export default Input;