import React from 'react';

import classes from './ErrorModal.module.css';

export default function ErrorModal(props) {
  return (
    <>
      <div onClick={props.onUnderstood} className={classes.backdrop}></div>
      <div className={classes['error-modal']}>
        <h3>{props.header}</h3>
        <p>{props.message}</p>
        <button onClick={props.onUnderstood}>Understood</button>
      </div>
    </>
  );
}
