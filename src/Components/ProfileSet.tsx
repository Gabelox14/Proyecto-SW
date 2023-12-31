import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
//import SideBar from '../Components/SideBar';
import { RxPerson } from 'react-icons/rx';




const ProfileSet = () => {
  const [userName, setFirstName] = useState('');
  const [userEmail, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  //async function get() {
  //  try{
  //    const endpoint = `/data-api/rest/dbservicios/user_id`;
  //    const response = await fetch(`${endpoint}/${id}`);
  //    const result = await response.json();
  //    console.table(result.value);
//
  //    if (result && result.value) {
  //      setFirstName(result.value.firstName); // Adjust the property name as needed
  //      setEmail(result.value.email);
  //    }
  //  } catch (error) {
  //    console.error("Error fetching user data:", error);
  //  }
  //    
  //  }
  
  useEffect(() => {
      
   // if (id) {
   //   get();
   //}

    const searchParams = new URLSearchParams(location.search);
    const storedFirstName = sessionStorage.getItem('userName');
    const storedEmail = sessionStorage.getItem('userEmail');
    

    setFirstName(storedFirstName || searchParams.get('userName') || '');
    setEmail(storedEmail || searchParams.get('userEmail') || '');
  }, [location]);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();
    searchParams.set('userName', userName);
    searchParams.set('userEmail', userEmail);

    sessionStorage.setItem('userName', userName);
    sessionStorage.setItem('userEmail', userEmail);


    navigate({
      pathname: '/profile',
      search: `?${searchParams.toString()}`,
    });


  };


  async function update() {
    const storedID = sessionStorage.getItem('userID');
    const storedPassword = sessionStorage.getItem('userPassword');
    const data = {
      name: userName ,
      email: userEmail,
      password: storedPassword
    };
  
    const endpoint = '/data-api/rest/dbservicios/user_id';
    const response = await fetch(`${endpoint}/${storedID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.table(result.value);
  }

  return (
    <>
      
      <form className="container mx-auto flex flex-col justify-center px-32 mb-20" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center mb-5 mt-8 gap-y-4">
          <div className="mx-aut flex flex-col items-center gap-2 overflow-hidden">
            <div className="w-[10rem] h-[10rem] overflow-hidden bg-[#efeeee] rounded-full relative flex items-end justify-center">
              <RxPerson className="w-[80%] h-[80%] text-[gray]/[0.5]" />
            </div>
            <p>Update your profile</p>
          </div>
          <div className="flex md:gap-x-4 md:justify-around gap-y-9 md:gap-y-0 lg:justify-around gap-x-4 flex-col sm:flex-row ml-[4%] w-[80%] sm:full md:w-[90%]">
            <div className="">
              <label htmlFor="firstName" className="font-[500] mb-2 ml-1">
                 Name
              </label>
              <div className="w-[24rem]">
                <input
                  className="border-none focus:outline-none text-sm pl-2 lg:pl-4 md:pl-4 h-12 w-[100%] bg-[#efeeee]/[0.5] border-transparent rounded-lg"
                  type="text"
                  placeholder="Enter your First Name"
                  value={userName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            
          </div>
        </div>
        <div className="flex flex-col justify-center md:items-center mb-10 mt-8">
          <label htmlFor="email" className="font-[500] mb-1">
            Email Address
          </label>
          <div className="lg:w-[32rem] text-center">
            <input
              className="border-none focus:outline-none text-sm pl-6 h-12 w-[80%] bg-[#efeeee]/[0.5] border-transparent rounded-lg"
              type="email"
              placeholder="sample@email.com"
              value={userEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" onClick={update} className="animated-btn px-[6rem] mx-auto py-[0.9rem] bg-brnadColor text-white rounded-[5px] flex" >
          Apply profile settings
        </button>
      </form>
    </>
  );
};

export default ProfileSet;
