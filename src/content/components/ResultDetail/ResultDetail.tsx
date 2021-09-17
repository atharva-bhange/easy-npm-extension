import React, { useContext } from 'react';
import { useQuery } from 'react-query';

import npmApi from 'content/api/npmApi';
import Loader from '../Loader';
import CopyBox from './CopyBox';
import SideBar from './SideBar';
import { PackageManagerContext } from '../Container/context';

interface Props {
  packageName: string;
}

const ResultDetail: React.FC<Props> = ({ packageName }) => {
  const { packageManager } = useContext(PackageManagerContext);

  const getCopyString = (dev: boolean = false) => {
    let copyString = '';
    if (packageManager === 'yarn') copyString = `yarn add ${packageName}`;
    else copyString = `npm i ${packageName}`;
    return copyString;
  };

  const packageData = useQuery(
    ['package', packageName],
    () => npmApi.get(`/package/${encodeURIComponent(packageName)}`),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      select: (data) => data.data.collected,
    }
  );

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
            <CopyBox copyText={getCopyString()} />
            <CopyBox copyText={getCopyString()} />
          </div>
          <SideBar pkg={packageData.data} />
        </>
      )}
    </div>
  );
};

export default ResultDetail;
