const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];

// Вариант 1
let onlineUsers1 = [];
for (let i = 0; i < users.length; i++) {
    if (users[i].status === 'online') {
        onlineUsers1.push(users[i].username);
    }
}
console.log(onlineUsers1);
alert(`Сейчас в онлайн следующие пользователи: ${onlineUsers1}`);



// Вариант 2
 const onlineUsers = users.filter(({status}) =>
    status === 'online'
);
 const usersOnlineNames =[];
 for (let i = 0; i < onlineUsers.length; i++) {
        usersOnlineNames.push(onlineUsers[i].username);
}
console.log(usersOnlineNames);
alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);