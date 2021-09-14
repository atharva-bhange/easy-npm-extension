export type PackageManagerType = 'npm' | 'yarn';

export interface PackageManagerContextType {
  packageManager: PackageManagerType;
  setPackageManager: React.Dispatch<React.SetStateAction<PackageManagerType>>;
}
