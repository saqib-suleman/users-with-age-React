import React, { useState } from 'react';
import ErrorModal from './ErrorModal';
import classes from './UserForm.module.css';

export default function UserForm(props) {
  const [username, setUsername] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState();

  const usernameChangeHandler = (evt) => {
    setUsername(evt.target.value);
  };

  const userAgeChangeHandler = (evt) => {
    setUserAge(evt.target.value);
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    if (username.trim().length === 0) {
      setError({
        header: 'Invalid name',
        message: 'Please input a valid name',
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        header: 'Invalid age',
        message: 'Please input a valid age (> 1)',
      });
      return;
    }
    props.onConfirm(username, userAge);
    setUsername('');
    setUserAge('');
  };

  const onUnderstoodHandler = () => {
    setError(false);
  };

  return (
    <>
      {error && (
        <ErrorModal
          header={error.header}
          message={error.message}
          onUnderstood={onUnderstoodHandler}
        />
      )}

      <form className={classes['user-form']} onSubmit={formSubmitHandler}>
        <div className={classes['form-control']}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            value={username}
          />
        </div>
        <div className={classes['form-control']}>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            onChange={userAgeChangeHandler}
            value={userAge}
          />
        </div>
        <button>Add User</button>
      </form>
    </>
  );
}
