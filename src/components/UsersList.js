import React from 'react';
import User from './User';

export default function UsersList(props) {
  console.log(props);
  return (
    <div>
      {props.users.map((user) => {
        console.log(user);
        return (
          <User username={user.username} userAge={user.userAge} key={user.id} />
        );
      })}
    </div>
  );
}
