import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
    AccountBalance
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";

  import './sellerEditProfile.css';

  import { useState } from "react";
  import Auth from "../../utils/auth";

  import { useQuery } from "@apollo/client";
  import { QUERY_USER } from '../../utils/queries';

   
  export default function SellerEditProfile() {

    const { data } =  useQuery(QUERY_USER);
    let user;
  
    if (data) {
      user = data.user;
    }
    console.log(user)
    // const [seller, setSeller]= useState(user)
    // console.log(seller);

    const role = user.role;
    const capsRole = role.charAt(0).toUpperCase()+role.slice(1);
    console.log(capsRole);
    

      return (
      <>
        {user? (<div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit Your Profile</h1>
          
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="/s3images/752db96da2905e8a5622fabec79cdcf4"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{user.firstName + " "+ user.lastName}</span>
                <span className="userShowUserTitle">{capsRole} since 12/1/2021</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{user.firstName + " "+ user.lastName}</span>
              </div>
              <div className="userShowInfo">
                <AccountBalance className="userShowIcon" />
                <span className="userShowInfoTitle">Check via USPS</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+1 (952) 754-4657</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{user.email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{user.state} | USA</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder={user.firstName}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>last Name</label>
                  <input
                    type="text"
                    placeholder={user.lastName}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder={user.email}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 (952) 754-4657"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder= {user.state+ " | USA"} 
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="/s3images/752db96da2905e8a5622fabec79cdcf4"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>)
        :null}
        </>
      )
  }
  