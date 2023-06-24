import { styled } from 'styled-components';
import IngridientsItem from './IngridientsItem';

const IngridientsModal = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <HeaderMainText>요리 재료 체크하기!</HeaderMainText>
        </Header>
        <ContentWrapper>
          <IngridientsItem text="감자" />
          <IngridientsItem text="떡볶이용 떡" />
          <IngridientsItem text="고추장" />
          <IngridientsItem text="족발" />
          <IngridientsItem text="배고프다" />
          <IngridientsItem text="후우" />
        </ContentWrapper>
        <FooterWrapper>
          <button>버튼 1</button>
          <button>버튼 2</button>
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
  min-height: 300px;
  height: auto;

  padding: 20px;
  gap: 16px;
  box-sizing: border-box;

  border-radius: 20px;
  box-shadow: 0px 4px 4px 0 #00000025;
`;

const Header = styled.div`
  display: flex;
`;

const HeaderMainText = styled.span`
  font-size: 20px;
  font-weight: bold;
  line-height: 120%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 4px;
`;

const OutsideWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #21252950;
`;

const FooterWrapper = styled.div``;
