import React from 'react';
import styled from 'styled-components';

interface MinimizeTimerProps {
  timeRemaining: number;
  handleMaximize: () => void;
}

const MinimizeTimer: React.FC<MinimizeTimerProps> = ({
  timeRemaining,
  handleMaximize,
}) => {
  const minutes = Math.floor(timeRemaining / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (timeRemaining % 60).toString().padStart(2, '0');

  return (
    <TooltipBox onClick={handleMaximize}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        fill="none"
      >
        <circle cx="32" cy="32" r="31.5" stroke="#fff" opacity=".4" />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="1rem"
          fontWeight={700}
        >
          {minutes}:{seconds}
        </text>
      </svg>
    </TooltipBox>
  );
};

const TooltipBox = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 5rem;
  height: 5rem;
  border-radius: 16px;
  opacity: 0.7;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
`;

export default MinimizeTimer;
