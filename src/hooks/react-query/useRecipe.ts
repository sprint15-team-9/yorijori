import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { queryKeys } from '../../utils/queryKeys';
interface RecipeList {
  id: string;
  title: string | null;
  created_at: string;
}
const useGetRecipeList: () => UseQueryResult<RecipeList[], unknown> = () => {
  const handleGetRecipeList = async () => {
    const { data, error } = await supabase.from('recipe_list').select('*');
    if (error) {
      throw console.log(`RecipeList get error : ${error.message}`);
    }
    return data;
  };
  return useQuery<RecipeList[]>(
    queryKeys.current_recipe_list,
    handleGetRecipeList
  );
};
export const useRecipe = () => {
  return {
    useGetRecipeList,
  };
};
