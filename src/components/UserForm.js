import React, { useState } from "react";

const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userDetails, setUserDetails] = useState([]);

  const sortData = userDetails.sort((a, b) => {
    let fa = a.LastName;
    let fb = b.LastName;

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});


  const formHandler = (e) => {
    e.preventDefault();
    if (firstName && lastName && phoneNumber) {
      setUserDetails((prevState) => {
        return [
          ...prevState,
          {
            FirstName: firstName,
            LastName: lastName,
            PhoneNumber: phoneNumber,
          },
        ];
      });
    }
    //console.log(userDetails);
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
  };


  return (
    <div className="shadow-lg w-[82rem] ml-1 mb-2 flex flex-col items-center">
      <form
        className="rounded-lg shadow-lg h-48 w-96 flex justify-around flex-col mt-16"
        onSubmit={formHandler}
      >
        <div className="ml-12 w-[282px]">
          <label>FirstName:</label>
          <input
            className="border border-gray-400 pl-3 ml-2"
            type="text"
            value={firstName}
            placeholder="Enter the FirstName"
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>
        <div className="ml-12 w-[282px]">
          <label>LastName:</label>
          <input
            className="border border-gray-400 pl-3 ml-2"
            type="text"
            value={lastName}
            placeholder="Enter the LastName"
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>
        <div className="ml-12 w-[282px]">
          <label>PhoneNumber:</label>
          <input
            className="border border-gray-400 pl-3 ml-2 w-[160px]"
            type="text"
            value={phoneNumber}
            placeholder="Enter the Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></input>
        </div>
        <div className="ml-36 bg-red-500 w-24 pl-5 py-2">
          <button type="submit">Submit</button>
        </div>
      </form>

      {userDetails.length > 0 ? (
        <div className="shadow-lg rounded-lg mt-7 bg-green-500 h-auto w-96">
          {sortData.map((user) => {
            return (
                <div className="bg-red-300 m-5 h-20 pt-1 shadow-lg rounded-lg" key={user?.PhoneNumber}>
              <ul className="text-center">
                <li>FirstName : {user?.FirstName} </li>
                <li>LastName : {user?.LastName}</li>
                <li>PhoneNumber : {user?.PhoneNumber}</li>
              </ul>
              </div>
            );
          })}
        </div>
      ) : (
        <h1 className="shadow-lg rounded-lg mt-7 px-32 py-2">No Data is Loaded</h1>
      )}
    </div>
  );
};

export default UserForm;
