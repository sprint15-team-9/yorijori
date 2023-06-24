import { styled } from 'styled-components';
import IngridientsItem from './IngridientsItem';
import DescisionButton from '../Button/DescisionButton';
import Tooltip from '../Tooltip';
import Badge from '../Badge';
import mensuration from '../../assets/img/mensuration.png';

const IngridientsModal = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <HeaderMainText>요리 재료 체크하기!</HeaderMainText>
          <Tooltip tooltipComponent={<TooltipContentImg src={mensuration} />}>
            <Badge color="red" text="asd" />
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
          <DescisionButton buttonType="back" innerText="돌아가기" />
          <DescisionButton buttonType="confirm" innerText="확인했어요!" />
        </FooterWrapper>
      </Wrapper>
      <OutsideWrapper />
    </>
  );
};

export default IngridientsModal;

const Wrapper = styled.div`
  position: absolute;
  width: 374px;
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
  width: 100%;
  height: 100vh;
  background-color: #21252950;
`;

const FooterWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const TooltipContentImg = styled.img`
  max-width: 100%;
`;
