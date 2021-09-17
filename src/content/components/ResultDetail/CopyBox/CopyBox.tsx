import React, { useState } from 'react';
import { clipboard } from '@extend-chrome/clipboard';
import { usePopperTooltip } from 'react-popper-tooltip';

interface Props {
  copyText: string;
}

const CopyBox: React.FC<Props> = ({ copyText }) => {
  const [controlledVisible, setControlledVisible] = useState(false);

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    placement: 'right',
    interactive: true,
    trigger: 'click',
    onVisibleChange: setControlledVisible,
    closeOnOutsideClick: false,
    visible: controlledVisible,
    offset: [0, 0],
  });

  const copy = async () => {
    await clipboard.writeText(copyText);

    setTimeout(() => setControlledVisible(false), 1500);
  };

  return (
    <div
      ref={setTriggerRef}
      onClick={copy}
      className="flex items-center px-1 py-0 mx-6 border-2 border-blue-400 border-solid cursor-pointer hover:bg-opacity-50 rounded-xl hover:bg-blue-200"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
      <div className="flex-grow">{copyText}</div>
      <svg
        className="w-6 h-6 text-blue-400 transition transform hover:scale-110"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
      </svg>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({
            className: 'tooltip-container rounded-lg text-xs',
          })}
        >
          <div {...getArrowProps({ className: 'tooltip-arrow' })} />
          Command Copied
        </div>
      )}
    </div>
  );
};

export default CopyBox;
