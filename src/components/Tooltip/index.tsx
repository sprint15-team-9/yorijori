import React from 'react';
import { styled } from 'styled-components';
import useIsHover from '../../hooks/useIsHover';

type TooltipProps = {
  children: React.ReactNode;
  tooltipComponent?: React.ReactNode;
};

export default function Tooltip({ tooltipComponent, children }: TooltipProps) {
  const { isHover, onMouseEnter, onMouseLeave } = useIsHover();
  return (
    <TooltipWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
      {isHover && <Wrapper>{tooltipComponent}</Wrapper>}
    </TooltipWrapper>
  );
}

const TooltipWrapper = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 48px;
  right: -10px;
  padding: 10px 10px 10px 10px;
  background: #ffffff;
  border-radius: 5px;
  border: #dfe2e5 solid 1px;
  position: absolute;
  font-size: 16px;
  text-align: left;
  width: 276px;
  height: 213px;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.18);
  z-index: 4;

  &::after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 16px 20px 17.5px;
    border-color: #ffffff transparent;
    display: block;
    width: 0;
    top: -18.5px;
    left: 230px;
  }
  &::before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 16px 20px 17.5px;
    border-color: #dfe2e5 transparent;
    display: block;
    width: 0;
    z-index: 0;
    top: -20px;
    left: 230px;
  }
`;
