import React from 'react';
import PackageManagerToggle from './PackageManagerToggle';
import TypeToggle from './TypeToggle';

interface Props {
  search: string;
}

const Header: React.FC<Props> = ({ search }) => {
  return (
    <div className="flex items-center flex-grow ">
      <div className="flex-grow text-xs">Top Results for ‘{search}’</div>
      <TypeToggle />
      <PackageManagerToggle />
    </div>
  );
};

export default Header;
