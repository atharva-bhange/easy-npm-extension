import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { storage } from '@extend-chrome/storage';

import Header from '../Header';
import Results from '../Results';
import { PackageManagerContext, ShowTypesContext } from './context';
import { PackageManagerType } from './types';
import npmApi from 'content/api/npmApi';
import Footer from '../Footer';
interface Props {
  search: string;
}

const Container: React.FC<Props> = ({ search }) => {
  const [packageManager, setPackageManager] =
    useState<PackageManagerType>('npm');

  const [showTypes, setShowTypes] = useState(false);

  const { data, isError, isLoading } = useQuery(
    'packages',
    () => npmApi.get('/search', { params: { q: search, size: 3 } }),
    { refetchOnWindowFocus: false, select: (data) => data.data.results }
  );

  useEffect(() => {
    getInitialPackageName();
    getInitialShowTypes();
  }, []);

  useEffect(() => {
    storage.local.set({ packageManager });
  }, [packageManager]);

  useEffect(() => {
    storage.local.set({ showTypes });
  }, [showTypes]);

  const getInitialPackageName = async () => {
    const manager = (await storage.local.get('packageManager')).packageManager;
    if (packageManager !== undefined) setPackageManager(manager);
  };

  const getInitialShowTypes = async () => {
    const types = (await storage.local.get('showTypes')).showTypes;
    if (types !== undefined) setShowTypes(types);
  };

  if (isLoading || isError) return <></>;

  if (!data || data.length === 0) return <></>;

  return (
    <PackageManagerContext.Provider
      value={{ packageManager, setPackageManager }}
    >
      <ShowTypesContext.Provider value={{ showTypes, setShowTypes }}>
        <div className="flex flex-col w-full p-2 bg-blue-100 rounded-lg">
          <Header search={search} />
          <Results packages={data} />
          <Footer />
        </div>
      </ShowTypesContext.Provider>
    </PackageManagerContext.Provider>
  );
};

export default Container;
