import React from "react";
import { useSelector } from "react-redux";
import "./CustomModal.css";

const CustomModal = ({ id, setShowPopup }) => {
      const allusers = useSelector((state) => state.app.users);


      const singleUser = allusers.filter((ele) => ele._id == id);
      console.log("singleuser", singleUser[0]);

      return (
            <div className="modalBackground">
                  <div className="modalContainer">
                        <div className="  flex justify-end items-end">
                              <button className="btn btn-sm btn-secondary z-20 font-bold" onClick={() => setShowPopup(false)}>X</button>
                        </div>
                        <h1 className="text-center text-xl font-bold">User Info.</h1>
                        <div className=" space-y-4 text-center mt-4">
                              <h2 className="text-black font-bold">ID : {singleUser[0]._id}</h2>
                              <h2 className="text-black font-bold">Name: {singleUser[0].name}</h2>
                              <h3 className="text-black font-semibold ">Email : {singleUser[0].email}</h3>
                              <h4 className="text-black font-semibold"> Phone: {singleUser[0].phoneNumber}</h4>
                        </div>

                  </div>
            </div>
      );
};

export default CustomModal;