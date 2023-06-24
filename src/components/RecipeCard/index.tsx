import { styled } from 'styled-components';
import { StepCard } from './StepCard';
import { Step } from './recipe';

const STEP_MOCK: Step[] = [
  {
    step_order: 1,
    time_stamp: '05:30',
    step_description:
      '감자는 껍질을 제거하고 감자전 믹서기에 잘 갈아지도록 듬성듬성 썰어준다.',
    tip: '기왕이면 깍둑썰기로 썰어주세요',
    tip2: '감자 깍둑썰기',
    isCompleted: true,
  },
  {
    step_order: 2,
    time_stamp: '07:30',
    step_description:
      '채에 내려진 물은 20분 정도 가라앉혀서 감자전분 앙금을 만들어 준다.',
    timer: 5,
    isCompleted: false,
  },
];

/**currentTime,duratin, */
export const RecipeCard = () => {
  return (
    <>
      <DescriptionWrapper>
        <p>조리 과정</p>
        <button>재료 보기</button>
      </DescriptionWrapper>
      {STEP_MOCK.map((stepData: Step) => (
        <StepCard key={stepData.step_order} stepData={stepData} />
      ))}
    </>
  );
};

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
  p {
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    color: #4e535f;
  }
  button {
    padding: 6px 13px 6px 13px;
    border: 1px solid #ed7732;
    color: #ed7732;
    border-radius: 20px;
    outline: none;
    font-size: 14px;
    line-height: 16.8px;
    font-weight: bold;
    background: #fff;
    cursor: pointer;
  }
`;
