import React, { useContext, useState } from "react";
import userContext from "../Context/UserContext";
import UserCard from "./UserCard";
import { toast } from "react-toastify";
import { Fade } from "react-reveal";
function UsersContainer() {
  const { users, updateUser } = useContext(userContext);
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const newUser = { id: Number(id), name: name };

  const showmodal = (currUser ) => {
    // console.log("click");
    setId(currUser.id);
    setName(currUser.name);
    document.getElementById("my_modal_5").showModal();
  };

  const handleUpdate = async () => {
    const res = await updateUser(id, name);
    if (res === 200) {
      toast.success("Details Updated");
    } else if (res === 401) {
      toast.error("User Not Found!");
    } else if (res === 500) {
      toast.error("Server Down!");
    } else {
      toast.error("Something Went Wrong!");
    }
    document.getElementById("closeBtn").click();
  };

  return (
    <div className=' w-full '>
  
      <dialog id='my_modal_5' className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <form className=' w-full h-full mt-4'>
            <div className='flex flex-col w-full h-full justify-center align-middle'>
              <div className='flex col-md-6 w-full justify-center'>
                <label className='form-control w-full max-w-xs'>
                  ID:
                  <input
                    type='number'
                    placeholder='Id Here'
                    className='input input-bordered w-full max-w-xs rounded'
                    value={id}
                    disabled
                  />
                </label>
              </div>
              <div className='flex col-md-6 w-full justify-center my-4'>
                <label className='form-control w-full max-w-xs' htmlFor='name'>
                  Name:
                  <input
                    type='text'
                    name='tag'
                    placeholder='Name Here'
                    className='input input-bordered w-full max-w-xs rounded'
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </label>
              </div>

              <div className='flex col-md-6 mt-11 w-full justify-center '>
                <button
                  className='btn btn-active btn-primary w-full max-w-xs '
                  onClick={(e) => {
                    e.preventDefault();
                    handleUpdate();
                  }}
                >
                  Update Note
                </button>
              </div>
            </div>
          </form>

          <div className='modal-action'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button className='btn' id='closeBtn'>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <div className='grid  gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {users.map((user) => (
          <Fade>
            <div
              key={user.id}
              className='w-full flex flex-row justify-center  rounded-xl hover:transform hover:scale-105 transition-all duration-500'
            >
              <UserCard id={user.id} name={user.name} showmodal={showmodal} />
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}

export default UsersContainer;
