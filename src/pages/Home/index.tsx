import { useRecipe } from '../../hooks/react-query/useRecipe';

export default function Home() {
  const { useGetRecipeList } = useRecipe();
  const { data } = useGetRecipeList();
  return (
    <ul>
      {data?.map((item) => {
        return (
          <li key={item.id}>
            <h2>{item.id}</h2>
            <h1>{item.title}</h1>
          </li>
        );
      })}
    </ul>
  );
}
