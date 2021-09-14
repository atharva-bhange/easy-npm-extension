import React from 'react';
import { PackageManagerContextType } from './types';

export const PackageManagerContext =
  React.createContext<PackageManagerContextType>({
    packageManager: 'npm',
    setPackageManager: () => {},
  });
