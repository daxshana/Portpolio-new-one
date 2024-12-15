import React from 'react';
import image1 from '../img/IMG-20241009-WA0003.jpg';
const Profile = () => {
  return (
    <section id="profile" className="flex flex-col items-center justify-center min-h-screen">
      <img
        src={image1}
        alt="Daxshana"
        className="w-48 h-48 rounded-full shadow-lg"
      />
      <h1 className="mt-4 text-4xl font-bold">Daxshana Kirushnavelu</h1>
      <p className="text-teal-400">&lt;/ Student Developer &gt;</p>
      <div className="mt-4 space-x-4">
        <a href="http://linkedin.com/in/daxshana-kirushnavelu" className="text-2xl text-teal-400 hover:text-white">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="http://github.com/daxshana" className="text-2xl text-teal-400 hover:text-white">
          <i className="fa fa-github"></i>
        </a>
     
  
      </div>
    </section>
  );
};

export default Profile;
