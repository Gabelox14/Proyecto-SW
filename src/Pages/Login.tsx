import { createClient } from '@supabase/supabase-js';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../img/login.png';

const supabase = createClient(
  'https://amlztwycpfhonwfvzhca.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtbHp0d3ljcGZob253ZnZ6aGNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0ODI1NTksImV4cCI6MTk5MDA1ODU1OX0.NqV1vbExN3jpY11rTWPN4fEvEw-m5xjNmHVh2GwGIsI'
);

function Login() {
  const [name, setName] = useState('');

  const navigate = useNavigate();
  supabase.auth.onAuthStateChange(async (event) => {
    if (event === 'SIGNED_IN') {
      navigate('/home');
    } else {
      navigate('/');
    }
  });

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


  async function create() {

    const data = {
      Name: name
    };
  
    const endpoint = `/data-api/rest/dbservicios/`;
    const response = await fetch(endpoint, {
      method: "POST",
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
                <button type="submit" onClick={create}>Create</button>
                <button type="submit" onClick={list}>List</button>
                <button type="submit" onClick={get}>Get</button>
                <button type="submit" onClick={update}>Update</button>
                <button type="submit" onClick={del}>Delete</button>
              </div>
              <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
