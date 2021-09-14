import React from 'react';
import PackageManagerToggle from './PackageManagerToggle';

interface Props {
  search: string;
}

const Header: React.FC<Props> = ({ search }) => {
  return (
    <div className="flex items-center justify-between flex-grow p-2">
      <div className="text-xs">Top 3 Results for ‘{search}’</div>
      <PackageManagerToggle />
    </div>
  );
};

export default Header;
