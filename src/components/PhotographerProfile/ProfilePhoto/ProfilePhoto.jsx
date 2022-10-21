import React from 'react'
import './ProfilePhoto.css'

const ProfilePhoto = ({profilePic}) => {
  return (
    <div className="profilepic"><img src={profilePic} /></div>
  )
}

export default ProfilePhoto 