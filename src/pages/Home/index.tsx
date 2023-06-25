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
        <RecipeNote />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  overflow-y: scroll;
`;
