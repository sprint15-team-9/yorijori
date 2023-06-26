import RecipeNote from '../../components/Home/RecipeNote';
import Header from '../../components/Home/Header';
import { styled } from 'styled-components';
import Carousel from '../../components/Home/Carousel';
import { useRecipe } from '../../hooks/react-query/useRecipe';
import { randomNumList } from '../../utils/randomNumList';

export default function Home() {
  const { useGetOnlyRecipeList } = useRecipe();
  const { data: recipes } = useGetOnlyRecipeList();
  if (!recipes) {
    return null;
  }
  const numList = randomNumList(recipes?.length, 3);
  const random_recipes = numList?.map((num) => {
    return recipes[num];
  });
  console.log(random_recipes);
  if (!random_recipes) {
    return null;
  }
  return (
    <>
      <Header />
      <Wrapper>
        <Carousel onlyRecipes={random_recipes} />
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
  margin-top: 26px;
`;
