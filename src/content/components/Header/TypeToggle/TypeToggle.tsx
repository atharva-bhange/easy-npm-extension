import { ShowTypesContext } from 'content/components/Container/context';
import React, { useContext, useEffect, useRef } from 'react';

const TypeToggle = () => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const yesRef = useRef<HTMLDivElement | null>(null);
  const noRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const { setShowTypes, showTypes } = useContext(ShowTypesContext);

  useEffect(() => {
    const parentLeft = parentRef.current!.getBoundingClientRect().left;
    const yesLeft = yesRef.current!.getBoundingClientRect().left;
    const noLeft = noRef.current!.getBoundingClientRect().left;
    const cursorLeft = !showTypes ? yesLeft - parentLeft : noLeft - parentLeft;
    cursorRef.current!.style.left = `${cursorLeft - 12}px`;
  }, [showTypes]);

  return (
    <div className="flex items-center mr-1">
      <div className="mr-1 text-sm">Show Types</div>
      <div
        ref={parentRef}
        style={{ borderWidth: '3px', boxSizing: 'border-box' }}
        className="relative flex items-center border-blue-400 border-solid rounded-xl hover:bg-blue-200"
      >
        <div
          ref={yesRef}
          className="mx-2 my-1 text-xs text-blue-400 cursor-pointer"
          onClick={() => setShowTypes(!showTypes)}
        >
          Yes
        </div>
        <div
          ref={noRef}
          className="mx-2 my-1 text-xs text-blue-400 cursor-pointer "
          onClick={() => setShowTypes(!showTypes)}
        >
          No
        </div>
        <div
          ref={cursorRef}
          style={{ paddingTop: '0.375rem', paddingBottom: '0.375rem' }}
          className="absolute left-0 w-1/2 h-4 px-0 transition-all bg-blue-400 rounded-lg"
        ></div>
      </div>
    </div>
  );
};

export default TypeToggle;
