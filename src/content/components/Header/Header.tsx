import React from 'react';
import PackageManagerToggle from './PackageManagerToggle';

interface Props {
  search: string;
}

const Header: React.FC<Props> = ({ search }) => {
  return (
    <div className="flex items-center justify-between flex-grow ">
      <div className="text-xs">Top Results for ‘{search}’</div>
      <PackageManagerToggle />
    </div>
  );
};

export default Header;
