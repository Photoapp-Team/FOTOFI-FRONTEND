import React from "react";
import WhereToVoteSharpIcon from "@mui/icons-material/WhereToVoteSharp";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Address.css";

const Address = (props) => {
  console.log(props);
  return (
    <>
      <div className="profile-address">
        <div className="profile-location">
          <div className="address-icon-container">
            <WhereToVoteSharpIcon className="address-icon" />
          </div>
          <div className="address-text">
            <span>
              {props.location.city} {props.location.state}
            </span>
            <br />
            <span>
              Calle {props.location.street} #{props.location.number}
            </span>
            <br />
            <span>Col. {props.location.suburb}</span>
            <br />
            <span> C.P {props.location.zipCode}</span>
          </div>
        </div>
      </div>
      <div className="profile-phone">
        <div className="phone-icon-container">
          <PhoneInTalkOutlinedIcon className="address-icon" />
        </div>
        <div className="phone-text">{props.phoneNumber}</div>
      </div>
      <div className="profile-phone">
        <div className="phone-icon-container">
          <MarkEmailReadOutlinedIcon className="address-icon" />
        </div>
        <div className="phone-text">{props.email}</div>
      </div>
      <div className="profile-socialNetworks">
        <InstagramIcon className="socialnetwork-icon" />
        <LanguageOutlinedIcon className="socialnetwork-icon" />
        <FacebookIcon className="socialnetwork-icon" />
      </div>
    </>
  );
};

export default Address;
