// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import SideBar from "../Components/SideBar";

// const Profile = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);

//   const firstName = searchParams.get('firstName') || 'N/A';
//   const lastName = searchParams.get('lastName') || 'N/A';
//   const email = searchParams.get('email') || 'N/A';

//   return (
//     <>
//       <SideBar />
//       <div>
//         <h1>Profile</h1>
//         <p>First Name: {firstName}</p>
//         <p>Last Name: {lastName}</p>
//         <p>Email: {email}</p>
//       </div>
//     </>
//   );
// };

// export default Profile;





import { useState, useEffect } from 'react';
import SideBar from '../Components/SideBar';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';


import "../styles/profile.css";

const Profile = () => {
  const [userName, setFirstName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userID] = useState('');

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const storedFirstName = sessionStorage.getItem('userName');
    const storedEmail = sessionStorage.getItem('userEmail');

    setFirstName(searchParams.get('userName') || storedFirstName || '');
    setEmail(searchParams.get('userEmail') || storedEmail || '');
  }, [location]);

  

    
  async function update() {

    
    
    const storedPassword = sessionStorage.getItem('userPassword');
    
    const data = {
      name: userName ,
      email: userEmail,
      password: storedPassword
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
      <SideBar />
      <section>
        <section className="profile-container">
            <section className="profile-details">
              <h1>Your Profile</h1>
              <p className="profile-loc">Name: {userName}</p>
              <p className="profile-loc">Email: {userEmail}</p>
              <Link to="/settings"><button className="animated-btn mt-6" onClick={update}>Update profile</button></Link>
            </section>
        </section>
      </section>
    </>
  );
};

export default Profile;

