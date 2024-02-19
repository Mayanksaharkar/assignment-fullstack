import { useState, useContext } from "react";
import userContext from "../Context/UserContext";
import { toast } from "react-toastify";
function Form() {
  const {  addUser } = useContext(userContext);
  const [id, setId] = useState(null);
  const [name, setName] = useState("");

  const handleAddClick = async () => {
    if (id === null && name === "") {
      toast.warning("Enter the Details");
    } else {
      // console.log(id, name);
      const res = await addUser(id, name);
      // console.log(res);
      if (res === 200) {
        toast.success("User Created !");
      } else if (res === 409) {
        toast.info("User Already Exists!");
      } else if (res === 500) {
        toast.error("Server Down!");
      } else {
        toast.error("Someting Went Wrong!");
      }
    }
    setId(0);
    setName("");
  };

  return (
    <div className='max-w-lg mx-auto grid grid-cols-12 gap-2  my-32'>
      <input
        type='number'
        min={0}
        placeholder='ID'
        className='input w-full bg-base-100 max-w-xs col-span-3 appearance-none remove-arrow'
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <input
        type='text'
        placeholder='Username here'
        className='input w-full bg-base-100 max-w-xs col-span-8'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 448 512'
        className='col-span-1 flex justify-center align-middle w-full h-full cursor-pointer hover:scale-125 transition-all'
        onClick={(e) => {
          e.preventDefault();
          handleAddClick();
        }}
      >
        <path
          fill='#1f1f1f'
          d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z'
        />
      </svg>
    </div>
  );
}

export default Form;
