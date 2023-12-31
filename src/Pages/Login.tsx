import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login.css";

function Login() {
  const [name, setName] = useState("");
  //const [id] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(true);
  const navigate = useNavigate();

  //async function list() {
  //  const endpoint = '/data-api/rest/dbservicios';
  //  const response = await fetch(endpoint);
  //  const data = await response.json();
  //  console.table(data.value);
  //}

  async function get() {
    try {
      const endpoint = '/data-api/rest/dbservicios/';
      const response = await fetch(endpoint);
      const result = await response.json();
      console.table(result.value);

      for (let i = 0; i < result.value.length; i++) {
        const user = result.value[i];
        const userID = user.user_id; 
        const userName = user.name; 
        const userEmail = user.email; 
        const userPassword = user.password; 

        if (user.email === email && user.password === password) {
          console.log('ID del usuario almacenado:', userID);
          sessionStorage.setItem('userID', userID);
          sessionStorage.setItem('userName', userName);
          sessionStorage.setItem('userEmail', userEmail);
          sessionStorage.setItem('userPassword', userPassword);
          navigate("/home");
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
}

    //async function update() {
    //
    //
    //  const data = {
    //    name: name,
    //    email: email
    //  };
    //
    //  const endpoint = '/data-api/rest/dbservicios/user_id';
    //  const response = await fetch(`${endpoint}/${id}`, {
    //    method: "PUT",
    //    headers: { "Content-Type": "application/json" },
    //    body: JSON.stringify(data)
    //  });
    //  const result = await response.json();
    //  console.table(result.value);
    //}

    async function create() {
      const data = {
        name: name,
        email: email,
        password: password,
      };
      //console.table(data);
      const endpoint = `/data-api/rest/dbservicios/`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.table(result.value);
      get();
      //navigate("/home");
    }

    //async function del() {
    //
    //  const endpoint = '/data-api/rest/dbservicios/user_id';
    //  const response = await fetch(`${endpoint}/${id}`, {
    //    method: "DELETE"
    //  });
    //  if(response.ok) {
    //    console.log(`Record deleted: ${ id }`)
    //  } else {
    //    console.log(response);
    //  }
    //}

    return (
      <div>
        <div className="wrapper">
          <div className="bg-bgColor bg-white rounded-lg shadow-md p-8 w-full max-w-md">
            <h1 className="mb-4 text-2xl font-bold text-center text-gray-800">
              {isNewUser ? "Signup to Your Account" : "Login to Your Account"}
            </h1>
            <div className="space-y-4">
              {!isNewUser && (
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                  />

                  <label htmlFor="pssw">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
              )}

              {isNewUser && (
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                  />

                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                  />

                  <label htmlFor="pssw">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
              )}
            </div>

            <div className="mt-6 space-x-2 flex justify-center">
              {isNewUser ? (
                <button
                  type="button"
                  onClick={create}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
                >
                  Signup
                </button>
              ) : (
                <button
                  type="button"
                  onClick={get}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
                >
                  Login
                </button>
              )}
            </div>
            <p className="mt-4 text-center">
              {isNewUser
                ? "Already have an account?"
                : "Don't have an account yet?"}
              <span
                className="cursor-pointer text-blue-500 hover:underline"
                onClick={() => setIsNewUser(!isNewUser)}
              >
                {isNewUser ? "Login here" : "Signup here"}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }

export default Login;
