import React from 'react';
import Logo from '../../assets/images/logo.svg';
const App: React.FC = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center pt-1 text-2xl">
        <Logo />
        <div className="ml-1">Easy NPM</div>
      </div>
      <div className="px-2 py-1 text-justify ">
        Google NPM package names and get commands to install them!
      </div>
      <div className="text-xs text-center text-gray-500">
        <a href="https://forms.gle/piLPQrHimwnfr68c6" target="_blank">
          Feedback
        </a>
      </div>
    </div>
  );
};

export default App;
