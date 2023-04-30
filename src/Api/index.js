import axios from 'axios';
const getUsers = async () => {
  const users = await axios.get('https://panorbit.in/api/users.json');
  return users;
};

export { getUsers };
