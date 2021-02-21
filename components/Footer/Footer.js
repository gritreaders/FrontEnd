import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <Image
        src='/images/grit-readers.png'
        alt='Logo'
        width={100}
        height={100}
      />
      <h3>
        Platzi Master
        <br />
        2021
      </h3>
      <h3>With love by Israel's Team</h3>
    </>
  );
};

export default Footer;
