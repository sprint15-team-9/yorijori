import { useRecipe } from '../../hooks/react-query/useRecipe';

export default function Supabase() {
  const { useGetAllRecipeList, useGetOnlyRecipeList, useGetOnlyIngredient } =
    useRecipe();

  // 상세페이지용 전체 출력
  const { data: allRecipe, isLoading } = useGetAllRecipeList();

  // 메인페이지용 심플 레시피 출력
  const { data: onlyRecipe } = useGetOnlyRecipeList();

  // recipe테이블의 ingredient_id 넣어주면 준비재료 출력
  const { data: onlyIngredient } = useGetOnlyIngredient(1);
  if (!allRecipe) {
    return <h1>에러났어요! 다온을 찾아오세요!</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log('only recipe');
  console.log(onlyRecipe);

  console.log('---------------------------------------------------');

  console.log('onlyIngredient');
  console.log(onlyIngredient);

  console.log('recipe_list');
  console.log(allRecipe);

  console.log('---------------------------------------------------');

  console.log('ingredient');
  console.log(allRecipe?.[0].ingredient.list);

  console.log('---------------------------------------------------');

  console.log('step');
  console.log(allRecipe?.[0].step.list);

  return (
    <ul>
      {allRecipe?.map((item) => {
        return (
          <li key={item.id}>
            <h2>{item.id}</h2>
            <h1>{item.channel_name}</h1>
            <img src={item.youtube_video_thumbnail} alt="썸네일" />
            <h1>STEP</h1>
            {item.step.list.map((item) => {
              return (
                <div>
                  <h2>{item.step_id}</h2>
                  <h2>{item.timestamp}</h2>
                  <h2>{item.title}</h2>
                </div>
              );
            })}
            <h1>INGREDIENT</h1>
            {item.ingredient.list.map((item) => {
              return (
                <div>
                  <h2>{item.name}</h2>
                  <h2>{item.description}</h2>
                </div>
              );
            })}
          </li>
        );
      })}
    </ul>
  );
}
