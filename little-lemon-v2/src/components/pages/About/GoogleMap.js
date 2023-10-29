import React from 'react';
import './GoogleMap.css';

const GoogleMap = () => {
  return (
    <div className="google-map">
      <iframe
        title="Google Map"
        width="600"
        height="400"
        frameBorder="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20160.795828219932!2d-87.64587586338988!3d41.87341053428837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2sin!4v1698471534304!5m2!1sen!2sin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;


