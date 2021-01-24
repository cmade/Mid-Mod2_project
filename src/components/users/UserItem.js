import React from 'react';
//A User item functional component that passes user state properties: avatar which is the photo of the github profile, login: which is the name of the github profile and a link to the github profile.
const Useritem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '170px' }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className='btn btn-dark my-1'>
          More
        </a>
      </div>
    </div>
  );
};

export default Useritem;
