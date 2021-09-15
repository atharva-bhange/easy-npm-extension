import React from 'react';

type Props = React.HTMLProps<HTMLDivElement>;

const Cursor = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div
      ref={ref}
      className="absolute top-0 w-full text-center transition-all bg-gray-300 rounded-l-lg h-1/3"
      {...props}
    />
  );
});

export default Cursor;
