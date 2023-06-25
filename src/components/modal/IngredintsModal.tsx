import { styled } from 'styled-components';
import IngridientsItem from './IngredintsItem';
import DescisionButton from '../Button/DescisionButton';
import Tooltip from '../Tooltip';
import Badge from '../Badge';
import mensuration from '../../assets/img/mensuration.png';
import { useRecipe } from '../../hooks/react-query/useRecipe';

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
  const { useGetOnlyIngredient } = useRecipe();

  const { data: onlyIngredient } = useGetOnlyIngredient(receipeId);

  console.log(onlyIngredient);

  return (
    <>
      <Wrapper>
        <Header>
          <HeaderMainText>요리 재료 체크하기!</HeaderMainText>
          <Tooltip tooltipComponent={<TooltipContentImg src={mensuration} />}>
            <Badge color="red" text="계량 하기" />
          </Tooltip>
        </Header>
        <ContentWrapper>
          <IngridientsItem text="감자" />
          <IngridientsItem text="떡볶이용 떡" />
          <IngridientsItem text="고추장" />
          <IngridientsItem text="족발" />
          <IngridientsItem text="배고프다" />
          <IngridientsItem text="후우" />
          <IngridientsItem text="감자" />
          <IngridientsItem text="떡볶이용 떡" />
          <IngridientsItem text="고추장" />
          <IngridientsItem text="족발" />
          <IngridientsItem text="배고프다" />
          <IngridientsItem text="후우" />
          <IngridientsItem text="감자" />
          <IngridientsItem text="떡볶이용 떡" />
          <IngridientsItem text="고추장" />
          <IngridientsItem text="족발" />
          <IngridientsItem text="배고프다" />
          <IngridientsItem text="후우" />
          <IngridientsItem text="감자" />
          <IngridientsItem text="떡볶이용 떡" />
          <IngridientsItem text="고추장" />
          <IngridientsItem text="족발" />
          <IngridientsItem text="배고프다" />
          <IngridientsItem text="후우" />
        </ContentWrapper>
        <FooterWrapper>
          <DescisionButton
            buttontype="back"
            innerText="돌아가기"
            onClick={onClose}
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
