const users = [];

//addUser, removeUser, getUser, getUsers

const addUser = ({ id, username, room }) => {
  //Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //Validate the data
  if (!username || !room) {
    return {
      error: "Username and room are required!",
    };
  }

  //Check for existing user
  const existingUser = users.find(
    (user) => user.room === room && user.username === username
  );

  //Validate Username
  if (existingUser) {
    return {
      error: "Username is in use",
    };
  }

  //Store users
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  const user = users.find((user) => user.id === id);
  if (!user) {
    return undefined;
  }
  return user;
};

const getUsersInRoom = (room) => {
  const usersInRoom = users.filter(
    (user) => user.room === room.trim().toLowerCase()
  );
  if (usersInRoom.length === 0) {
    return [];
  }
  return usersInRoom;
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
