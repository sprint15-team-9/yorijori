/* eslint no-unused-vars: 1 */

import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import RightIcon from '../../assets/icons/ic_recipe_tip_next.svg';
import TimerIcon from '../../assets/icons/ic_recipe_time.svg';
import HandIcon from '../../assets/icons/ic_recipe_hand.svg';
import { useEffect, useRef, useState } from 'react';
import useModal from '../../hooks/useModal';
import IngredintsModal from '../modal/IngredintsModal';
import DescisionButton from '../Button/DescisionButton';
import { useDetailPageState } from '../../pages/Detail';

import { AllRecipeList } from '../../types/types';
import VisibleTooltip from '../Tooltip/VisibleTooltip';
import useOutsideClick from '../../hooks/useOutsideClick';

const HALF_NUMBER = 8;
const isUserOpenedTooltipBefore = localStorage.getItem(
  'yorizori-step-tooltip-opened'
);

type RecipeCourseProps = {
  // 타입이름이 리스트지만 리스트가 아님
  recipe: AllRecipeList;
};
const RecipeCourse = ({ recipe }: RecipeCourseProps) => {
  const [stepTooltipVisible, setStepTooltipVisible] = useState(
    isUserOpenedTooltipBefore === 'true'
  );
  const tooltipRef = useRef<HTMLDivElement>(null);
  const stepGroup = recipe?.step.list!;

  const { player, currentTime } = useDetailPageState();

  const observedElementGroup = useRef<HTMLElement[]>([]);
  const [articleDomRect, setArticleDomRect] = useState<DOMRect[]>([]);
  const { isModalOpen, openModal, closeModal } = useModal();
  const [scrollPosition, setScrollPosition] = useState(0);

  const { id: receipeId } = useParams<{ id: string }>();

  const step = useRef(0);
  const scrollRef = useRef<HTMLElement | null>(null);

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
    const timeStamp = stepGroup[index].timestamp;
    if (player && timeStamp) {
      player.seekTo(timeStamp, true);
    }
  };

  // 타이머 버튼을 눌러 타이머를 재면 영상 멈춰볼까
  // 타이머 모달뜨고 설정하고 시작하고 그럴텐데 뒤에서 영상소리 시끄럽겠죠 그쵸!?
  const handleTimerButton = () => {
    if (player) {
      player.pauseVideo();
      // 타이머 모달 오픈
    }
  };

  const handleCloseStepTooltip = () => {
    setStepTooltipVisible(true);
    localStorage.setItem('yorizori-step-tooltip-opened', 'true');
  };

  useOutsideClick([tooltipRef], handleCloseStepTooltip);

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
    if (currentTime < (stepGroup[0].timestamp ?? -1)) {
      step.current = 0;
    } else if (
      currentTime > (stepGroup[stepGroup.length - 1].timestamp ?? -1)
    ) {
      step.current = stepGroup.length;
    } else {
      for (let i = 0; i < stepGroup.length - 1; i++) {
        if (
          currentTime >= (stepGroup[i].timestamp ?? -1) &&
          currentTime < (stepGroup[i + 1].timestamp ?? -1)
        ) {
          step.current = i + 1;
          break;
        }
      }
    }
  }, [stepGroup, currentTime]);

  useEffect(() => {
    const handleScrollTo = () => {
      const barHeight =
        calculateBarHeight() - 400 < 0 ? 0 : calculateBarHeight() * 0.4;

      if (barHeight && scrollRef.current) {
        setScrollPosition(barHeight); // Adjusted scroll position
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    handleScrollTo();
  }, [step.current]);

  return (
    <>
      <Wrapper>
        <Header>
          <Title>조리 과정</Title>
          <EmptyButton onClick={openModal}>재료 보기</EmptyButton>
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
            {recipe?.step.list.map((data, index) => {
              const currentIndex = index + 1;
              return (
                <Article
                  key={data.step_id}
                  ref={(el: any) => {
                    // observedElementGroup.current[index] = el as HTMLElement;
                    observedElementGroup.current[index] = el;
                    if (step.current === index) {
                      scrollRef.current = el;
                    }
                  }}
                >
                  <StepNumberWrapper>
                    <StepNumber>
                      {currentIndex === 1 && !stepTooltipVisible ? (
                        <>
                          <span>{currentIndex}</span>
                          <VisibleTooltip />
                        </>
                      ) : (
                        <span>{currentIndex}</span>
                      )}
                    </StepNumber>
                    <StepTime onClick={() => handleTimeButton(index!)}>
                      {getTime(data.timestamp!)}
                    </StepTime>
                  </StepNumberWrapper>
                  <Content>
                    <Description>{data.description}</Description>
                    {data.tip.map((tip) => {
                      return (
                        <>
                          <TipWrapper>
                            <img
                              src={HandIcon as unknown as string}
                              alt="Recipe Hand Icon"
                            />
                            <TipContent>{tip.description}</TipContent>
                          </TipWrapper>
                          <MethodButton
                            onClick={() =>
                              tip.image_url &&
                              window.open(tip.image_url, '_blank')
                            }
                          >
                            <span>{tip.title}</span>
                            <img
                              src={RightIcon as unknown as string}
                              alt="Right Chevron Icon"
                            />
                          </MethodButton>
                        </>
                      );
                    })}
                    {data.timer.length !== 0 && (
                      <TimerButton onClick={handleTimerButton}>
                        <img
                          src={TimerIcon as unknown as string}
                          alt="Right Chevron Icon"
                        />
                        <span>타이머 재기</span>
                      </TimerButton>
                    )}
                  </Content>
                </Article>
              );
            })}
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
  padding-top: 24px;
  padding-left: 20px;
  padding-right: 20px;

  overflow-y: auto;
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
  position: relative;
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
