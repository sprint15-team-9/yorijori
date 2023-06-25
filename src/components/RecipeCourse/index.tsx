import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import RightIcon from '../../assets/icons/ic_recipe_tip_next.svg';
import TimerIcon from '../../assets/icons/ic_recipe_time.svg';
import { useEffect, useRef, useState } from 'react';
import useModal from '../../hooks/useModal';
import IngredintsModal from '../modal/IngredintsModal';
import DescisionButton from '../Button/DescisionButton';
import { useDetailPageState } from '../../pages/Detail';
import { useRecipe } from '../../hooks/react-query/useRecipe';

const HALF_NUMBER = 8;

const RecipeCourse = () => {
  const { useGetAllRecipeList } = useRecipe();
  const { data: allRecipe, isLoading } = useGetAllRecipeList();

  if (isLoading === undefined) return null;

  const { id } = useParams();
  const recipe = allRecipe?.find((list) => list.id === Number(id));
  const stepGroup = recipe?.step.list!;

  const { player, currentTime } = useDetailPageState();

  const observedElementGroup = useRef<HTMLElement[]>([]);
  const [articleDomRect, setArticleDomRect] = useState<DOMRect[]>([]);
  const { isModalOpen, closeModal } = useModal();

  const { id: receipeId } = useParams<{ id: string }>();

  const step = useRef(0);

  const calculateBarHeight = () => {
    if (step.current === 0)
      return articleDomRect[step.current]?.top + HALF_NUMBER;
    if (step.current === articleDomRect.length)
      return articleDomRect[step.current - 1]?.top + HALF_NUMBER * 2;
    return (
      articleDomRect[step.current - 1]?.top +
      (articleDomRect[step.current - 1]?.height ?? 0) / 2
    );
  };

  const getTime = (timestamp: number) => {
    const minutes = Math.floor(timestamp / 60); // 분 계산
    const remainingSeconds = timestamp % 60; // 초 계산
    const formattedTime = `${minutes}:${String(remainingSeconds).padStart(
      2,
      '0'
    )}`; // 문자열 형식 조합
    return formattedTime;
  };

  const handleTimeButton = (index: number) => {
    player.seekTo(stepGroup[index].timestamp, true);
  };

  useEffect(() => {
    const margin = observedElementGroup.current[0]?.getBoundingClientRect().top;
    observedElementGroup.current?.forEach((entry) => {
      const rect = entry.getBoundingClientRect();
      setArticleDomRect((prev) => [
        ...prev,
        {
          ...rect,
          top: rect.top - margin + HALF_NUMBER,
          height: rect.height,
        },
      ]);
    });
  }, [recipe?.step.list]);

  useEffect(() => {
    if (!stepGroup) return;
    if (currentTime < stepGroup[0].timestamp) {
      step.current = 0;
    } else if (currentTime > stepGroup[stepGroup.length - 1].timestamp) {
      step.current = stepGroup.length;
    } else {
      for (let i = 0; i < stepGroup.length - 1; i++) {
        if (
          currentTime >= stepGroup[i].timestamp &&
          currentTime < stepGroup[i + 1].timestamp
        ) {
          step.current = i + 1;
          break;
        }
      }
    }
  }, [stepGroup, currentTime]);

  return (
    <>
      <Wrapper>
        <Header>
          <Title>조리 과정</Title>
          <EmptyButton>재료 보기</EmptyButton>
        </Header>
        <Main>
          <ProgressOuter
            top={
              articleDomRect[articleDomRect.length - 1]?.top + HALF_NUMBER * 2
            }
          >
            <ProgressInner top={calculateBarHeight()} />
            {Array.from({ length: stepGroup?.length }, (_, i) => (
              <ProgressStep key={i} top={articleDomRect[i]?.top} />
            ))}
          </ProgressOuter>
          <StepWrapper>
            {recipe?.step.list.map((data, index) => (
              <Article
                key={data.step_id}
                ref={(el) => (observedElementGroup.current[index] = el)}
              >
                <StepNumberWrapper>
                  <StepNumber>
                    <span>{index}</span>
                  </StepNumber>
                  <StepTime onClick={() => handleTimeButton(index!)}>
                    {getTime(data.timestamp!)}
                  </StepTime>
                </StepNumberWrapper>
                <Content>
                  <Description>{data.description}</Description>
                  {/* {data.tip && (
                  <TipWrapper>
                    <img src={HandIcon} alt="Recipe Hand Icon" />
                    <TipContent>{data.tip}</TipContent>
                  </TipWrapper>
                )} */}
                  {data.title && (
                    <MethodButton>
                      <span>{data.title}</span>
                      <img src={RightIcon} alt="Right Chevron Icon" />
                    </MethodButton>
                  )}
                  {data.timer.length !== 0 && (
                    <TimerButton>
                      <img src={TimerIcon} alt="Right Chevron Icon" />
                      <span>타이머 재기</span>
                    </TimerButton>
                  )}
                </Content>
              </Article>
            ))}
          </StepWrapper>
        </Main>
      </Wrapper>
      {isModalOpen && (
        <IngredintsModal
          receipeId={Number(receipeId)}
          onClose={closeModal}
          footerContents={[
            <DescisionButton
              buttontype="confirm"
              innerText="확인했어요!"
              onClick={closeModal}
            />,
          ]}
        />
      )}
    </>
  );
};

export default RecipeCourse;

const Wrapper = styled.section`
  margin-top: 24px;
  padding: 0 20px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;

const EmptyButton = styled.button`
  padding: 6px 13px;
  border: 1px solid #ed7732;
  color: #ed7732;
  border-radius: 20px;
  outline: none;
  font-size: 14px;
  line-height: 16.8px;
  font-weight: bold;
  background: #fff;
  cursor: pointer;
`;

const Main = styled.main`
  display: flex;
`;

const ProgressOuter = styled.div<Top>`
  position: relative;
  width: 10px;
  height: ${(props) => `${props.top}px`};
  border-radius: 12px;
  background-color: #f2f4f6;
  margin-right: 0.75rem;
`;

type Top = {
  top: number;
};
const ProgressInner = styled.div<Top>`
  position: absolute;
  left: 0;
  top: 0;
  width: 10px;
  height: ${(props) => `${props.top}px`};
  border-radius: 12px;
  background-color: #ed7732;
  transition: height 0.3s ease-in-out;
  will-change: height;
`;

const ProgressStep = styled.div<Top>`
  position: absolute;
  left: 50%;
  top: ${(props) => `${props.top}px`};
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fff;
`;

const StepWrapper = styled.div`
  width: 300px;
`;

const Article = styled.article`
  padding-bottom: 40px;
`;

const StepNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ed7732;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 8px;

  span {
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    color: #fff;
  }
`;

const StepTime = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  color: #ed7732;
`;

const Content = styled.div`
  padding-left: 24px;
`;

const Description = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  word-break: break-all;
`;

const TipWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    margin-right: 6px;
  }
`;

const TipContent = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  word-break: break-all;
  color: #4e535f;
`;

const MethodButton = styled.button`
  display: flex;
  align-items: center;
  background: #fdebdc;
  border: none;
  color: #ed7732;
  margin: 0;
  border-radius: 6px;
  padding: 6px 6px 6px 10px;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
  }

  svg {
    margin-left: 5px;
  }
`;

const TimerButton = styled.button`
  display: flex;
  align-items: center;
  background: #eaf3fe;
  border: none;
  color: #4880ee;
  margin: 0;
  border-radius: 6px;
  padding: 8px 10px;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  img {
    margin-right: 4px;
  }

  span {
    margin-right: 5px;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
  }
`;
