import React, { useState } from 'react';
import Header from '../Header';
import { PackageManagerContext } from './context';
import { PackageManagerType } from './types';

interface Props {
  search: string;
}

const Container: React.FC<Props> = ({ search }) => {
  const [packageManager, setPackageManager] =
    useState<PackageManagerType>('npm');

  return (
    <PackageManagerContext.Provider
      value={{ packageManager, setPackageManager }}
    >
      <div className="flex flex-col w-full bg-blue-100 rounded-lg">
        <Header search={search} />
      </div>
    </PackageManagerContext.Provider>
  );
};

export default Container;
