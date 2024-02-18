import userContext from "./UserContext";
import React, { useState, useEffect } from "react";

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const json = await response.json();
      setUsers(json);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async (id: Number, name: String) => {
    try {
      const newUser = { id: Number(id), name: name };
      const response = await fetch(`http://localhost:3000/user`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      // console.log(response.status);
      fetchAllUsers();
      return response.status;
    } catch (error) {
      console.log(error);
      fetchAllUsers();
      return 500;
    }
  };

  const deleteUser = async (id: Number) => {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log(response.status);
      await fetchAllUsers();
      return response.status;
    } catch (error) {
      fetchAllUsers();
      return 500;
    }
  };

  const updateUser = async (id: Number, name: String) => {
    const newUser = { id: Number(id), name: name };
    try {
      const response = await fetch(`http://localhost:3000/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      await fetchAllUsers();
      return response.status;
    } catch (error) {
      console.log(error);
      fetchAllUsers();
      return 500;
    }
  };

  return (
    <userContext.Provider
      value={{
        users,
        setUsers,
        fetchAllUsers,
        addUser,
        deleteUser,
        updateUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
export default UserContextProvider;
