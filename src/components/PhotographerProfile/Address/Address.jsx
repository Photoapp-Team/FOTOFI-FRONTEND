import React from "react";
import WhereToVoteSharpIcon from "@mui/icons-material/WhereToVoteSharp";
import "./Address.css";

const Address = (props) => {
  console.log(props);
  return (
    <div className="profile-address">
      <div>
        <WhereToVoteSharpIcon {...props} />
      </div>
      <div>
        <span>
          {props.location.city} {props.location.state}
        </span>
        <br />
        <span>
          Calle {props.location.street} #{props.location.number}
        </span>
        <br />
        <span>Col. {props.location.suburb}</span>
        <span> C.P {props.location.zipCode}</span>
      </div>
    </div>
  );
};

export default Address;
