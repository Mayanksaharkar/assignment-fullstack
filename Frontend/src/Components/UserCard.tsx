import React, { useContext } from "react";
import img from "../asstes/user.png";
import userContext from "../Context/UserContext";
import { toast } from "react-toastify";
function UserCard(props) {
  const { deleteUser } = useContext(userContext);
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

  return (
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
              props.showmodal({ id: props.id, name: props.name });
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
  );
}

export default UserCard;
