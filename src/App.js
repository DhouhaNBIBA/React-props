import React from 'react';
import Profile from './profile/Profile.js';
import './App.css';
import athlete from '../src/profile/athlete.jpg'
function App() {
  const handleName=(name)=>alert(name) ;
  return (
    <div>
      <Profile handleName={handleName}>
      <img style={{ borderRadius: '5px' }} src={athlete} alt="ath" />
      </Profile>
    </div>
  );}
export default App;