import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../img/login.png';
import { useMsal } from '@azure/msal-react';

interface UserData {
  Name: string,
  Email: string,
  Address: string,
  Phont: string
};

async function create(data: UserData) {
  const endpoint = `/data-api/rest/dbservicios/`;
  const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
  });
  const result = await response.json();
  console.table(result.value);
}

function Login() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const { instance } = useMsal();
  const history = useNavigate(); 

  const handleCreate = async () => {
    const data: UserData  = {
        Name: name,
        Email: email,
        Address: address,
        Phont: phone
    };
    console.log(data);
    await create(data);
  };

  const handleLogin = async () => {
    const loginRequest = {
      scopes: ['openid', 'profile', 'email'],
    };

    await instance.loginRedirect(loginRequest);
  };

  useEffect(() => {
    const checkAuthenticationStatus = async () => {
      const accounts = await instance.getAllAccounts();

      if (accounts.length > 0) {
        history('/home');
      } else {
        history('/');
      }
    };

    checkAuthenticationStatus();
  }, [instance, history]);


  // function Login() {
  //   const navigate = useNavigate();
  //   supabase.auth.onAuthStateChange(async (event) => {
  //     if (event === 'SIGNED_IN') {
  //       navigate('/home');
  //     } else {
  //       navigate('/');
  //     }
  //   });

  async function list() {
    const endpoint = '/data-api/rest/dbservicios';
    const response = await fetch(endpoint);
    const data = await response.json();
    console.table(data.value);
  }


  async function get() {
    const id = 1;
    const endpoint = `/data-api/rest/dbservicios/Id`;
    const response = await fetch(`${endpoint}/${id}`);
    const result = await response.json();
    console.table(result.value);
  }
  

  async function update() {

    const id = 1;
    const data = {
      Name: "Molly"
    };
  
    const endpoint = '/data-api/rest/dbservicios/Id';
    const response = await fetch(`${endpoint}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.table(result.value);
  }

  async function del() {
    const id = 3;
    const endpoint = '/data-api/rest/dbservicios/Id';
    const response = await fetch(`${endpoint}/${id}`, {
      method: "DELETE"
    });
    if(response.ok) {
      console.log(`Record deleted: ${ id }`)
    } else {
      console.log(response);
    }
  }

  


  return (
    <>
<div>
    <button id="list" onClick={list}>List</button>
    <button id="get" onClick={get}>Get</button>
    <button id="update" onClick={update}>Update</button>
    <button id="delete" onClick={del}>Delete</button>
</div>

      <div className="container mx-auto flex justify-center py-8 text-white">
        <div className="flex-1 h-full max-w-full md:ml-20 md:mr-16 mt-4 bg-bgColor">
          <div className="flex flex-col md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img className="object-cover w-full h-full" src={login}
                alt="login" />
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-72">
                <h1 className="mb-4 text-2xl font-bold text-center text-white">
                  Signup/Login to Your Account
                </h1>
                <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />

            <label htmlFor="address">Address:</label>
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} /><br /><br />

            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} /><br /><br />

            <button onClick={handleCreate}>Submit</button>
        </div>
                <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;