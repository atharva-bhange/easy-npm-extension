import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-end h-4 pt-1">
      {' '}
      <span className="text-xs text-gray-400 ">
        Powered by :{' '}
        <a href="https://www.npms.io" target="_blank">
          npms.io
        </a>
      </span>
    </div>
  );
};

export default Footer;
