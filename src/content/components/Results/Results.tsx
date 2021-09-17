import React, { useRef, useState } from 'react';
import ResultDetail from '../ResultDetail';
import Cursor from './Cursor';
import Tab from './Tab';
import { SearchDataType } from './types';

interface Props {
  packages: SearchDataType[];
}

const Results: React.FC<Props> = ({ packages }) => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [selectedPackage, setSelectedPackage] = useState(
    packages[0].package.name
  );

  const onTabClicked = (index: number) => {
    const tabTop = tabRefs.current[index]!.getBoundingClientRect().top;
    const parentTop = parentRef.current!.getBoundingClientRect().top;
    const offset = tabTop - parentTop;
    cursorRef.current!.style.top = `${offset}px`;
    setSelectedPackage(packages[index].package.name);
  };

  const renderTabs = () => {
    return packages.map((pkg, index) => (
      <Tab
        value={pkg.package.name}
        onClick={() => onTabClicked(index)}
        key={index}
        ref={(ref) => {
          tabRefs.current[index] === undefined
            ? tabRefs.current.push(ref)
            : (tabRefs.current[index] = ref);
        }}
      />
    ));
  };

  return (
    <div className="flex mt-2">
      <div
        style={{ flex: 1 }}
        className="relative flex flex-col"
        ref={parentRef}
      >
        {renderTabs()}
        <Cursor ref={cursorRef} />
      </div>
      <ResultDetail packageName={selectedPackage} />
      <div></div>
    </div>
  );
};

export default Results;
