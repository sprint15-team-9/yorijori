import { styled } from 'styled-components';
import { Step } from './recipe';

export const StepCard = ({ stepData }: { stepData: Step }) => {
  return (
    <CardContainer>
      {/* progress bar */}
      <div className="progress"></div>
      <div className="content">
        <Title>{stepData.time_stamp}</Title>
        <H3Text>{stepData.step_description}</H3Text>
        <TipText>{stepData.tip}</TipText>
        <div>
          {stepData.tip2 && <Button>{stepData.tip2}</Button>}
          {stepData.timer && <Button>타이머 재기</Button>}
        </div>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.li`
  display: flex;
  min-width: 276px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.6em;
  position: relative;
  .progress {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -10px;
    width: 10px;
    height: 80%;
    border-radius: 15px;
    background: skyblue;
    &.active {
      background: skyblue;
    }
    &:after {
      content: '';
      position: absolute;
      top: 5%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #fff;
    }
  }
`;
const Title = styled.h1`
  padding: 0.5em 0;
  font-weight: 700;
  color: #ed7732;
`;
const H3Text = styled.h3`
  font-weight: semibold;
  padding: 0em 0;
  padding-bottom: 0.5em;
  font-weight: 500;
  color: #4e535f;
`;

const TipText = styled.p`
  font-size: 14px;
  color: #4e535f;
`;

const Button = styled.button`
  background: #fdebdc;
  border: none;
  color: #ed7732;
  border-radius: 6px;
  padding: 6px 6px 6px 10px;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin: 0.5em;
`;
