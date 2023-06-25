import { styled } from 'styled-components';
import { Step } from './recipe';
import { CaretRightIcon } from '../../assets/icons/CaretRight';
import { TimerIcon } from '../../assets/icons/TimerIcon';

type StepProps = {
  stepData: Step;
  openModal: () => void;
};

export const StepCard = ({ stepData, openModal }: StepProps) => {
  const handleClickModal = () => openModal();
  return (
    <div>
      <CardContainer>
        <div className="progress"></div>
        <div className="content">
          <div className="orderbox">
            <div>{stepData.step_order}</div>
            <h2>{stepData.time_stamp}</h2>
          </div>
          <p className="description">{stepData.step_description}</p>
          {stepData.tip && (
            <div className="tipbox">
              <span role="img" aria-label="indexfinger">
                ☝️
              </span>
              <p>{stepData.tip}</p>
            </div>
          )}

          <div>
            {stepData.tip2 && (
              <Button1 onClick={handleClickModal}>
                {stepData.tip2}
                <CaretRightIcon />
              </Button1>
            )}

            {stepData.timer && (
              <Button2 onClick={handleClickModal}>
                <TimerIcon />
                타이머 재기
              </Button2>
            )}
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.li`
  display: flex;
  min-width: 276px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .content {
    padding: 12px;
    .description {
      padding: 10px 0;
      margin-left: 10px;
      font-weight: semibold;
      line-height: 22px;
      padding-bottom: 0.5em;
      font-weight: 500;
      color: ${({ theme }) => theme.color.gray_6};
    }
    .orderbox {
      display: flex;
      align-items: center;
      width: 70px;
      h2 {
        font-weight: 700;
        color: #ed7732;
      }
      div {
        background-color: ${({ theme }) => theme.color.primary_1};
        padding: 0 1px 2px 4px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        line-height: 14.4px;
        color: #fff;
        font-size: 12px;
        margin-right: 8px;
      }
    }
    .tipbox {
      display: flex;
      span {
        width: 20px;
        height: 20px;
      }
      p {
        font-size: 14px;
        line-height: 16.71px;
        font-weight: 500;
        color: #6f7687;
      }
    }
  }
  .progress {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -10px;
    width: 10px;
    height: 87%;
    border-radius: 15px;
    background: ${({ theme }) => theme.color.primary_1};
    &.active {
      background: skyblue;
    }
    &:after {
      content: '';
      position: absolute;
      top: 5%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #fff;
    }
  }
`;

const Button1 = styled.button`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.primary_2};
  border: none;
  color: #ed7732;
  border-radius: 6px;
  padding: 6px 6px 6px 10px;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin: 10px;
  svg {
    margin-left: 5px;
  }
`;

const Button2 = styled.button`
  display: flex;
  align-items: center;
  background: #eaf3fe;
  border: none;
  color: #4880ee;
  border-radius: 6px;
  padding: 6px 6px 6px 10px;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin: 0.5em;
  svg {
    margin-right: 5px;
  }
`;
