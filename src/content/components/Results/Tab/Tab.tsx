import React, { MutableRefObject } from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

type Props = React.HTMLProps<HTMLDivElement> & {
  value: string;
};

const Tab = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({ placement: 'top', offset: [0, -10] });

  const { value, ...rest } = props;
  return (
    <div
      ref={(r) => {
        setTriggerRef(r);
        if (typeof ref === 'function') {
          ref(r);
        } else if (ref) {
          (ref as MutableRefObject<HTMLDivElement>).current = r;
        }
      }}
      style={{ maxWidth: '163px' }}
      className="z-10 p-4 overflow-hidden rounded-l-lg cursor-pointer whitespace-nowrap overflow-ellipsis hover:bg-blue-200"
      {...rest}
    >
      {value}

      {visible && value.length > 21 && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({
            className: 'tooltip-container rounded-lg text-xs',
          })}
        >
          <div {...getArrowProps({ className: 'tooltip-arrow' })} />
          {value}
        </div>
      )}
    </div>
  );
});

export default Tab;
