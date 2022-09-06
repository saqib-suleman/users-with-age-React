import React, { useState } from 'react';

import './App.css';
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const onConfirmHandler = (username, userAge) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { username: username, userAge: userAge, id: Math.random() },
      ];
    });
  };

  return (
    <div className="app">
      <UserForm onConfirm={onConfirmHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
