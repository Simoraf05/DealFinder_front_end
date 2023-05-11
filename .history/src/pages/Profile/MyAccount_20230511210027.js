import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import '../../styles/muAcc.css'
const MyAccount = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem('user');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    }
  }, []);

  return (
    <div>
      <Sidebar></Sidebar>
      <div class="container rounded bg-white mt-5 mb-5 ">
        <div class="row myInfo__">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
          </div>
          <div class="col-6 border-right">
            <div class="p-3 py-5 info__inputs">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-6"><label class="labels">Name</label><input type="text"  placeholder="first name" value="" /></div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6"><label class="labels">Mobile Number</label><input type="text"  placeholder="enter phone number" value="" /></div>
                <div class="col-md-6"><label class="labels">Address Line 1</label><input type="text"  placeholder="enter address line 1" value="" /></div>
                <div class="col-md-6"><label class="labels">Email</label><input type="text"  placeholder="enter email" value="" /></div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6"><label class="labels">Password</label><input type="password"  placeholder="Password" value="" /></div>
                <div class="col-md-6"><label class="labels">Confirm Password</label><input type="password"  value="" placeholder="Confirm Password" /></div>
              </div>
              <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccount