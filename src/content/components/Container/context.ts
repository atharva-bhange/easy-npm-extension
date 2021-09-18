import React from 'react';
import { PackageManagerContextType, ShowTypesContextType } from './types';

export const PackageManagerContext =
  React.createContext<PackageManagerContextType>({
    packageManager: 'npm',
    setPackageManager: () => {},
  });

export const ShowTypesContext = React.createContext<ShowTypesContextType>({
  showTypes: false,
  setShowTypes: () => {},
});
