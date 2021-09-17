export const getTypesName = (packageName: string) => {
  if (packageName[0] === '@') {
    return `@types/${packageName.slice(1).split('/').join('__')}`;
  } else {
    return `@types/${packageName}`;
  }
};
export const getCopyString = (
  packageManager: string,
  packageName: string,
  dev: boolean = false
) => {
  let copyString = '';
  if (packageManager === 'yarn')
    copyString = `yarn add ${dev ? '-D' : ''} ${packageName}`;
  else copyString = `npm i ${packageName} ${dev ? '--save-dev' : ''}`;
  return copyString;
};
