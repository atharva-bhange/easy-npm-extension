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
    cursorRef.current!.style.left = `${cursorLeft - 6}px`;
  }, [packageManager]);

  return (
    <div
      ref={parentRef}
      className="relative flex items-center border-2 border-blue-400 border-solid rounded-xl"
    >
      <div
        ref={npmRef}
        className={`z-10 m-1 text-xs cursor-pointer ${
          packageManager === 'npm' ? 'text-white' : 'text-blue-400'
        }`}
        onClick={() => setPackageManager('npm')}
      >
        NPM
      </div>
      <div
        ref={yarnRef}
        className={`z-10 m-1 text-xs cursor-pointer ${
          packageManager === 'yarn' ? 'text-white' : 'text-blue-400'
        }`}
        onClick={() => setPackageManager('yarn')}
      >
        Yarn
      </div>
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 w-1/2 h-4 py-1 transition-all bg-blue-400 rounded-lg"
      ></div>
    </div>
  );
};

export default PackageManagerToggle;
