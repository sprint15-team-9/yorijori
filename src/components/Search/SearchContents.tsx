import { styled } from 'styled-components';
import LogoIcon from '../../assets/icons/LogoIcon';

export default function SearchContents() {
  return (
    <Wrapper>
      <NotContentsBox>
        <LogoIcon />
        <h3>원하는 레시피를 검색해 보세요!</h3>
      </NotContentsBox>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  h3 {
    margin-top: 20px;
    font-size: 16px;
    color: #95989f;
  }
`;
