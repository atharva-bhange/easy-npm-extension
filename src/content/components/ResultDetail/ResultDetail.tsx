import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { decode } from 'js-base64';

import npmApi from 'content/api/npmApi';
import { contentRepo } from 'content/api/githubApi';
import Loader from '../Loader';
import CopyBox from './CopyBox';
import SideBar from './SideBar';
import {
  PackageManagerContext,
  ShowTypesContext,
} from 'content/components/Container/context';
import { getCopyString, getTypesName } from './util';
import NotTyped from './NotTyped';
import InBuiltTyped from './InBuiltTyped';

interface Props {
  packageName: string;
}

const ResultDetail: React.FC<Props> = ({ packageName }) => {
  const { packageManager } = useContext(PackageManagerContext);
  const { showTypes } = useContext(ShowTypesContext);

  const packageData = useQuery(
    ['package', packageName],
    () => npmApi.get(`/package/${encodeURIComponent(packageName)}`),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      select: (data) => data.data.collected,
    }
  );

  const packageTypes = useQuery(
    ['package', packageName, 'types'],
    () =>
      npmApi.get(`/package/${encodeURIComponent(getTypesName(packageName))}`),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      select: (data) => data.data.results,
      retry: false,
      enabled: packageData.isSuccess && showTypes,
    }
  );

  const packageGithub = useQuery(
    ['package', packageName, 'github'],
    () => contentRepo(packageData.data.metadata.repository.url).get('/'),
    {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: Infinity,
      enabled: packageData.isSuccess && showTypes,
      onSuccess: (data) => {
        console.log('GITHUB DATA');
        console.log(data);
      },
      select: (data) => {
        try {
          return JSON.parse(decode(data.data.content));
        } catch (err) {
          return data;
        }
      },
    }
  );

  const renderTypesCopyBox = () => {
    if (!showTypes) return <></>;
    if (packageTypes.isFetching && packageGithub.isLoading)
      return (
        <div className="flex items-center justify-center h-7">
          <Loader className="w-5 h-5 loader" />
        </div>
      );
    if (
      packageGithub.data &&
      ('types' in packageGithub.data || 'typings' in packageGithub.data)
    ) {
      return <InBuiltTyped />;
    } else if (packageTypes.isSuccess && !packageTypes.isError) {
      return (
        <CopyBox
          copyText={getCopyString(
            packageManager,
            getTypesName(packageName),
            true
          )}
        />
      );
    } else {
      return <NotTyped />;
    }
  };

  return (
    <div
      style={{ flex: 3, minHeight: '151.2px' }}
      className="flex bg-gray-300 rounded-r-lg"
    >
      {packageData.isFetching ? (
        <Loader className="ml-auto mr-auto w-7 h-7 place-self-center loader" />
      ) : (
        <>
          <div className="flex flex-col justify-around flex-auto">
            <div className="mx-6 text-sm">
              {packageData.data.metadata.description}
            </div>
            <CopyBox copyText={getCopyString(packageManager, packageName)} />
            {renderTypesCopyBox()}
          </div>
          <SideBar pkg={packageData.data} />
        </>
      )}
    </div>
  );
};

export default ResultDetail;
