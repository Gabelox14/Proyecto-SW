import "../styles/button.css";
import { SetStateAction, useState,useEffect } from 'react';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import {  useLocation } from 'react-router-dom';


const Security = () => {

  const [newpassword, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userID] = useState('');

  const location = useLocation();

  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };

  async function update() {

    
    const data = {
      password: newpassword
    };
  
    const endpoint = '/data-api/rest/dbservicios/user_id';
    const response = await fetch(`${endpoint}/${userID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.table(result.value);
  }

  return (
    <>
      <form className="container mx-auto flex flex-col justify-center px-32 mb-36">
        <div className="flex flex-col justify-center mb-8 mt-8 gap-y-4">
          <div className=" flex flex-col justify-center md:items-center my-4">
            <label htmlFor="password" className="font-semibold mb-1">
              Current Password
            </label>
            <div className="lg:w-[32rem] text-center">
              <input
                className="border-none focus:outline-none text-sm pl-6 h-12 w-[80%] bg-[#efeeee]/[0.5] border-transparent rounded-lg text-white"
                type="password"
                placeholder="*******"
              />
            </div>
          </div>
          <div className=" flex flex-col justify-center md:items-center my-4">
            <label htmlFor="password" className="font-semibold mb-1">
              New Password
            </label>
            <div className="lg:w-[32rem] text-center">
              <input
                className="border-none focus:outline-none text-sm pl-6 h-12 w-[80%] bg-[#efeeee]/[0.5] border-transparent rounded-lg text-white"
                type="password"
                placeholder="*******"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center md:items-center my-4">
            <label htmlFor="password" className="font-semibold text-lg mb-1">
              Confirm Password
            </label>
            <div className="lg:w-[32rem] text-center relative">
              <div className="relative">
                <input
                  className="border-none focus:outline-none text-sm pl-6 h-12 w-[80%] bg-[#fafafa]/[0.5] border-transparent rounded-lg text-white"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="*******"
                  value={newpassword}
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <RiEyeOffFill className="text-gray-500" />
                  ) : (
                    <RiEyeFill className="text-gray-500" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="animated-btn px-[6rem] mx-auto py-[0.9rem] bg-brnadColor text-white rounded-[5px] flex" onClick={update}>
          Update Password
        </button>
      </form>
    </>
  )
}

export default Security