import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import useModal from '../../hooks/useModal';
import { CircularProgressbarStyles } from 'react-circular-progressbar/dist/types';
import MinimizeTimer from './MinimizeTimer';

const TimerModal = () => {
  const [timeRemaining, setTimeRemaining] = useState(1200); // 5 minutes in seconds
  const [isPaused, setIsPaused] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [addedTime, setAddedTime] = useState(0);
  const { closeModal } = useModal();
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isPaused && timeRemaining > 0) {
      timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsCompleted(true);
    }

    return () => clearTimeout(timer);
  }, [isPaused, timeRemaining]);

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleModalClose = () => {
    closeModal();
  };

  const handleReset = () => {
    setAddedTime(0);
    setTimeRemaining(1200); // Reset timer to 20 minutes
  };

  const handlePause = () => {
    if (isCompleted) {
      return;
    }
    setIsPaused((prevState) => !prevState); // Toggle pause state
  };

  const handleAddMinute = () => {
    setAddedTime((prevTime) => prevTime + 60); // Add 1 minute to the added time
    setTimeRemaining((prevTime) => prevTime + 60); // Add 1 minute to the timer
  };

  const calculateProgress = () => {
    const totalTime = 1200 + addedTime; // Total time including the added time
    const progress = ((totalTime - timeRemaining) / totalTime) * 100;
    return progress;
  };

  return (
    <ModalOverlay>
      {isMinimized ? (
        <MinimizeTimer
          timeRemaining={timeRemaining + addedTime}
          handleMaximize={() => setIsMinimized(false)}
        />
      ) : (
        <ModalWrapper>
          <Header>
            {isMinimized ? (
              <MinimizeTimer
                timeRemaining={timeRemaining + addedTime}
                handleMaximize={() => setIsMinimized(false)}
              />
            ) : (
              <MinimizeButton onClick={handleMinimize}>
                {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="none"
                  >
                    <path
                      stroke="#4E535F"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 14h16"
                    />
                  </svg>
                }
              </MinimizeButton>
            )}
            <CloseButton onClick={handleModalClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none"
              >
                <g
                  stroke="#4E535F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="m8.343 8.343 11.314 11.314" />
                  <path d="M19.657 8.343 8.343 19.657" />
                </g>
              </svg>
            </CloseButton>
          </Header>
          <CircularProgressbar
            value={calculateProgress()}
            text={`${Math.floor((timeRemaining + addedTime) / 60)
              .toString()
              .padStart(2, '0')}:${Math.floor((timeRemaining + addedTime) % 60)
              .toString()
              .padStart(2, '0')}`}
            styles={customStyles}
          />
          <SettingButton>
            <ResetButton onClick={handleReset}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                fill="none"
              >
                <circle cx="26" cy="26" r="26" fill="#B1B8C0" />
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M15 17v6.25h6.5"
                />
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M16.803 29.625a9.438 9.438 0 0 0 3.793 4.689 10.044 10.044 0 0 0 5.963 1.555 9.968 9.968 0 0 0 5.738-2.203 9.322 9.322 0 0 0 3.209-5.076 9.044 9.044 0 0 0-.609-5.912 9.525 9.525 0 0 0-4.181-4.373 10.083 10.083 0 0 0-6.076-1.079 9.9 9.9 0 0 0-5.53 2.649l-3.61 2.803"
                />
              </svg>
            </ResetButton>
            <PauseButton onClick={handlePause}>
              {isCompleted ? (
                '완료'
              ) : isPaused ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  fill="none"
                >
                  <circle cx="26" cy="26" r="26" fill="#B1B8C0" />
                  <path
                    fill="#fff"
                    d="M21 34.1V18.9c0-1.629 1.844-2.574 3.167-1.623l10.573 7.599a2 2 0 0 1 0 3.248l-10.573 7.6c-1.323.95-3.167.005-3.167-1.624Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  fill="none"
                >
                  <circle cx="26" cy="26" r="26" fill="#B1B8C0" />
                  <rect
                    width="3"
                    height="18"
                    x="20"
                    y="17"
                    fill="#fff"
                    rx="1.5"
                  />
                  <rect
                    width="3"
                    height="18"
                    x="29"
                    y="17"
                    fill="#fff"
                    rx="1.5"
                  />
                </svg>
              )}
            </PauseButton>
            <AddMinuteButton onClick={handleAddMinute}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                fill="none"
              >
                <circle cx="26" cy="26" r="26" fill="#ED7732" />
                <path
                  fill="#fff"
                  d="M35.5 25a1.5 1.5 0 0 1 0 3h-19a1.5 1.5 0 0 1 0-3h19Z"
                />
                <path
                  fill="#fff"
                  d="M27.5 35.5a1.5 1.5 0 0 1-3 0v-19a1.5 1.5 0 0 1 3 0v19Z"
                />
              </svg>
            </AddMinuteButton>
          </SettingButton>
        </ModalWrapper>
      )}
    </ModalOverlay>
  );
};

const customStyles: CircularProgressbarStyles = {
  root: {
    width: '190px',
    height: '190px',
  },
  path: {
    stroke: '#ed7732',
    strokeLinecap: 'round',
    strokeWidth: 3,
  },
  trail: {
    stroke: '#DFE2E5',
    strokeLinecap: 'round',
    strokeWidth: 3,
  },
  text: {
    fill: '#000000',
    fontSize: '23px',
    dominantBaseline: 'central',
  },
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  width: 277px;
  height: 330px;
  position: relative;
  background: white;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 28px;
  margin-top: 20px;
`;

const MinimizeButton = styled.button`
  margin-right: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
`;

const CloseButton = styled.button`
  margin-right: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
`;

const SettingButton = styled.div`
  width: 192px;
  display: flex;
  justify-content: space-between;
  padding: 20px 0 24px;
`;

const ResetButton = styled.button`
  width: 52px;
  height: 52px;
  border: none;
  border-radius: 9999px;
  padding: 0;
  cursor: pointer;
`;

const PauseButton = styled.button`
  width: 52px;
  height: 52px;
  border: none;
  border-radius: 9999px;
  padding: 0;
  background-color: #b1b8c0;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`;

const AddMinuteButton = styled.button`
  width: 52px;
  height: 52px;
  border: none;
  border-radius: 9999px;
  padding: 0;
  cursor: pointer;
`;

export default TimerModal;
