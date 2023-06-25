import { styled } from 'styled-components';
import IngridientsItem from './IngredintsItem';
import DescisionButton from '../Button/DescisionButton';
import Tooltip from '../Tooltip';
import Badge from '../Badge';
import mensuration from '../../assets/img/mensuration.png';
import { useRecipe } from '../../hooks/react-query/useRecipe';
import useOutsideClick from '../../hooks/useOutsideClick';
import { useEffect, useRef, useState } from 'react';
import { Ingredient } from '../../types/types';

type IngredintsModalProps = {
  receipeId: number;
  onClose: () => void;
  onConfirm?: () => void;
};
const IngredintsModal = ({
  receipeId,
  onClose,
  onConfirm,
}: IngredintsModalProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { handleGetOnlyIngredient } = useRecipe();

  const [onlyIngredient, setOnlyIngredient] = useState<Ingredient[]>([]);

  useEffect(() => {
    handleGetOnlyIngredient(receipeId).then((res) => setOnlyIngredient(res));
  }, [receipeId]);

  const handleClose = () => {
    onClose();
  };

  useOutsideClick([wrapperRef], handleClose);

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <Header>
          <HeaderMainText>요리 재료 체크하기!</HeaderMainText>
          <Tooltip tooltipComponent={<TooltipContentImg src={mensuration} />}>
            <Badge color="red" text="계량 하기" />
          </Tooltip>
        </Header>
        <ContentWrapper>
          {onlyIngredient.length !== 0 &&
            onlyIngredient[0].list.map(({ name, amount }) => {
              const text = `${name ?? ''} ${amount ?? ''}`;
              return <IngridientsItem text={text} />;
            })}
        </ContentWrapper>
        <FooterWrapper>
          <DescisionButton
            buttontype="back"
            innerText="돌아가기"
            onClick={handleClose}
          />
          {onConfirm && (
            <DescisionButton
              buttontype="confirm"
              innerText="확인했어요!"
              onClick={onConfirm}
            />
          )}
        </FooterWrapper>
      </Wrapper>
      <OutsideWrapper />
    </>
  );
};

export default IngredintsModal;

const Wrapper = styled.div`
  position: absolute;
  width: 320px;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;

  display: flex;
  flex-direction: column;
  height: 385px;

  padding: 20px;
  gap: 16px;
  box-sizing: border-box;

  border-radius: 20px;
  box-shadow: 0px 4px 4px 0 #00000025;

  z-index: 3;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderMainText = styled.span`
  font-size: 20px;
  font-weight: bold;
  line-height: 120%;
`;

const ContentWrapper = styled.div`
  display: flex;
  overflow-y: auto;
  flex: 1;
  flex-direction: column;
  gap: 4px;
`;

const OutsideWrapper = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: #21252950;
  z-index: 2;
`;

const FooterWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const TooltipContentImg = styled.img`
  max-width: 100%;
`;
