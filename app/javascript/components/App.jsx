import React from "react";
import Routes from "../routes";
import { ToastContainer } from "react-toastify";

const App = (props) => {
  return (
    <>
      {Routes}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
export default App;
