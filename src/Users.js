import React, { useState, useEffect } from 'react';

const Users = ( data ) => {
  console.log(data);
  console.log(data.allUsersData);

  return (
    <div>
      <div>
        <ul>
          {data.allUsersData.map(item => (
            <li key={item.id}>{item.id}   <span>{item.name}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Users;