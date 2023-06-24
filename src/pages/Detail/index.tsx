import { RecipeCard } from '../../components/RecipeCard';
import { styled } from 'styled-components';

const Detail = () => {
  return (
    <Wrapper>
      {/* 비디오 */}
      <RecipeCard />
    </Wrapper>
  );
};

export default Detail;

const Wrapper = styled.section`
  padding: 2em;
  background: fff;
`;
