import { PackageManagerContext } from 'content/components/Container/context';
import React, { useContext, useEffect, useRef } from 'react';

const PackageManagerToggle = () => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const npmRef = useRef<HTMLDivElement | null>(null);
  const yarnRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  //   const [cursorLeft, setCursorLeft] = useState(0);

  const { packageManager, setPackageManager } = useContext(
    PackageManagerContext
  );

  useEffect(() => {
    // console.log(packageManager);
    const parentLeft = parentRef.current!.getBoundingClientRect().left;
    const npmLeft = npmRef.current!.getBoundingClientRect().left;
    const yarnLeft = yarnRef.current!.getBoundingClientRect().left;
    const cursorLeft =
      packageManager === 'npm' ? npmLeft - parentLeft : yarnLeft - parentLeft;
    // console.log({ yarnLeft, npmLeft, parentLeft, cursorLeft });
    cursorRef.current!.style.left = `${cursorLeft - 11}px`;
  }, [packageManager]);

  return (
    <div
      ref={parentRef}
      style={{ borderWidth: '3px', boxSizing: 'border-box' }}
      className="relative flex items-center border-blue-400 border-solid rounded-xl hover:bg-blue-200"
    >
      <div
        ref={npmRef}
        className={`z-10 my-1 mx-2 text-xs cursor-pointer ${
          packageManager === 'npm' ? 'text-white' : 'text-blue-400'
        }`}
        onClick={() => setPackageManager('npm')}
      >
        NPM
      </div>
      <div
        ref={yarnRef}
        className={`z-10 my-1 mx-2 text-xs cursor-pointer ${
          packageManager === 'yarn' ? 'text-white' : 'text-blue-400'
        }`}
        onClick={() => setPackageManager('yarn')}
      >
        Yarn
      </div>
      <div
        ref={cursorRef}
        style={{ paddingTop: '0.375rem', paddingBottom: '0.375rem' }}
        className="absolute left-0 w-1/2 h-4 px-0 transition-all bg-blue-400 rounded-lg"
      ></div>
    </div>
  );
};

export default PackageManagerToggle;
