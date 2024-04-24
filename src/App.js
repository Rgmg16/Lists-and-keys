import React from 'react';

const users = [
    { id: 1, name: 'John', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Alice', age: 30, email: 'alice@example.com' },
    { id: 3, name: 'Bob', age: 28, email: 'bob@example.com' }
];

function UserList() {
    const userList = users.map(user => (
        <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    ));

    return (
        <div>
            <h2><u>User List</u></h2>
            {userList}
        </div>
    );
}

export default UserList;

