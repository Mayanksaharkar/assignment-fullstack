import React, { useContext, useState, useRef } from "react";
import img from "../asstes/user.png";
import userContext from "../Context/UserContext";
import { toast } from "react-toastify";
function UserCard(props) {
  const { deleteUser, users, updateUser } = useContext(userContext);

  const handleDeleteUserClick = async (id: Number) => {
    const res = await deleteUser(id);
    if (res === 200) {
      toast.success("User Deleted!");
    } else if (res === 404) {
      toast.error("User Not Found!");
    } else {
      toast.error("Somthing Went Wrong!");
    }
  };

  const [id, setId] = useState(null);
  const [name, setName] = useState("");

  const modal = useRef(null);
  const closebtn = useRef(null);

  const showmodal = (currUser) => {
    // console.log("click");
    setId(currUser.id);
    setName(currUser.name);
    modal.current.showModal();
  };

  const handleUpdate = async () => {
    const res = await updateUser(props.id, id, name);
    if (res === 200) {
      toast.success("Details Updated");
    } else if (res === 401) {
      toast.error("User Not Found!");
    } else if (res === 500) {
      toast.error("Server Down!");
    } else {
      toast.error("Something Went Wrong!");
    }
    closebtn.current.click();
  };

  return (
    <>
      <dialog
        id='my_modal_5'
        className='modal modal-bottom sm:modal-middle'
        ref={modal}
      >
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
                    // disabled
                    onChange={(e) => {
                      e.preventDefault();
                      setId(e.target.value);
                    }}
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
                  Update
                </button>
              </div>
            </div>
          </form>

          <div className='modal-action'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button className='btn' id='closeBtn' ref={closebtn}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <div
        className='rounded-lg w-full mx-4 bg-neutral text-card-foreground shadow-sm'
        data-v0-t='card'
      >
        <div className='flex flex-col space-y-1.5 p-6 pb-6'>
          <div className='flex items-center space-x-4'>
            <span className='relative flex shrink-0 overflow-hidden h-11 w-11'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='full'
                width='full'
                viewBox='0 0 512 512'
              >
                <path
                  fill='primary'
                  d='M256 288A144 144 0 1 0 256 0a144 144 0 1 0 0 288zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7H481.3c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320H161.3z'
                />
              </svg>
            </span>
            <div className='text-lg font-bold capitalize overflow-hidden'>
              {props.name}
            </div>
          </div>
        </div>
        <div className='p-6 pt-0'>
          <div className='grid gap-1.5'>
            <div className='text-sm font-medium'>ID</div>
            <div className='text-sm'>{props.id}</div>
          </div>
          <div className='flex justify-end gap-4 mt-4'>
            <button
              className=' text-md font-medium rounded-lg  px-4 py-2 hover:bg-primary-content text-primary transition-all duration-500'
              onClick={(e) => {
                e.preventDefault();
                showmodal({ id: props.id, name: props.name });
              }}
            >
              Update
            </button>
            <button
              className=' text-md font-medium rounded-lg  px-4 py-2 hover:text-primary-content text-primary hover:bg-primary bg-primary-content  transition-all duration-500'
              onClick={(e) => {
                e.preventDefault();
                handleDeleteUserClick(props.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCard;
