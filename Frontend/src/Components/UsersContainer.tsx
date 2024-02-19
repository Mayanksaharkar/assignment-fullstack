import React, { useContext, useState, useRef } from "react";
import userContext from "../Context/UserContext";
import UserCard from "./UserCard";
import { toast } from "react-toastify";
import { Fade } from "react-reveal";
function UsersContainer() {
  const { users } = useContext(userContext);

  return (
    <div className=' w-full '>
      <div className='grid  gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {users.map((user) => (
          <Fade>
            <div
              key={user.id}
              className='w-full flex flex-row justify-center  rounded-xl hover:transform hover:scale-105 transition-all duration-500'
            >
              <UserCard id={user.id} name={user.name}  />
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}

export default UsersContainer;
