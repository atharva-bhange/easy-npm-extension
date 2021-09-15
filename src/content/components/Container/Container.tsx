import React, { useState } from 'react';
import { useQuery } from 'react-query';

import Header from '../Header';
import Results from '../Results';
import { PackageManagerContext } from './context';
import { PackageManagerType } from './types';
import npmApi from 'content/api/npmApi';
interface Props {
  search: string;
}

const Container: React.FC<Props> = ({ search }) => {
  const [packageManager, setPackageManager] =
    useState<PackageManagerType>('npm');

  const { data, isError, isLoading } = useQuery(
    'packages',
    () => npmApi.get('/search', { params: { q: search, size: 3 } }),
    { refetchOnWindowFocus: false, select: (data) => data.data.results }
  );

  if (isLoading || isError) return <></>;

  return (
    <PackageManagerContext.Provider
      value={{ packageManager, setPackageManager }}
    >
      <div className="flex flex-col w-full p-2 bg-blue-100 rounded-lg">
        <Header search={search} />
        <Results packages={data} />
      </div>
    </PackageManagerContext.Provider>
  );
};

export default Container;
