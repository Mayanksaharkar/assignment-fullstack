import "./App.css";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import UsersContainer from "./Components/UsersContainer";
import UserContextProvider from "./Context/UserContextProvider";
import { ToastContainer } from "react-toastify";
import { Fade } from "react-reveal";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <div className='min-h-screen bg-base-300 lg:px-80 md:px-4 sm:px-2 flex-row justify-center p-2'>
        <UserContextProvider>
          <Navbar />
          <Form />
          <UsersContainer />
          <ToastContainer
            position='top-right'
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='dark'
          />
        </UserContextProvider>
      </div>
    </>
  );
}

export default App;
