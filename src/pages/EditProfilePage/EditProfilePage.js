import React from "react";
import EditProfileForm from "../../components/Forms/EditProfileForm";
import { ReactComponent as ReactLogo } from "../../assets/Logo/Logo.svg";
import "./EditProfilePage.css";

const EditProfilePage = () => {
    return (
        <div className="editProfile">
            <EditProfileForm />
        </div>
    );
};

export default EditProfilePage;