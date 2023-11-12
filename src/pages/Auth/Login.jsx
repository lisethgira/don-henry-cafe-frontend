import React, { useState } from 'react';
import { get } from '../../utils/localStorage';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/^[a-z0-9]+$/i.test(password)) {
      alert("contraseña con letras y numeros");
      return;
    }
    /* const user = JSON.parse(get('user'));
    if (user && user.email === email && user.password === password) {
      console.log('Login successful');
      setEmail('');
      setPassword('');
      // Display user's photo
      const userPhotoElement = document.getElementById('userPhoto');
      if (userPhotoElement) {
        userPhotoElement.src = user.photo;
      }
    } else {
      alert('Invalid email or password');
    } */
    const users = JSON.parse(localStorage.getItem('users'))
    const userExists = users.find(user => user.email === email && user.password === password)
    if(userExists){
      window.location.href="http://localhost:3000/"
      
    }
    else{
      alert("tu contraseña o email estan incorrectos");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;