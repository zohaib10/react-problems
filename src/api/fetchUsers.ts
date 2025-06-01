type User = {
  name: string;
  email: string;
  id: string;
};

export const fetchUsers = async () => {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    return (await resp.json()) as User[];
  } catch (error) {
    throw error;
  }
};
