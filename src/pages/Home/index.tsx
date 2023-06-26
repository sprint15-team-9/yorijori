import RecipeNote from '../../components/Home/RecipeNote';
import Curation from '../../components/Home/Curation';
import Header from '../../components/Home/Header';
import { styled } from 'styled-components';

export default function Home() {
  return (
    <>
      <Header />
      <Wrapper>
        <Curation />
        <DivideLine />
        <RecipeNote />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 52px);
  overflow-y: auto;
  flex-direction: column;
`;

const DivideLine = styled.div`
  height: 16px;
  background: ${({ theme }) => theme.color.gray_1};
  margin-top: 20px;
`;
