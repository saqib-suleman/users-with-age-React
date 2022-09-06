import React from 'react';

import classes from './User.module.css';

export default function User(props) {
  return (
    <div className={classes.user}>
      <h3>
        {props.username}, {props.userAge}
      </h3>
    </div>
  );
}
