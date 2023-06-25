import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { queryKeys } from '../../utils/queryKeys';
import { AllRecipeList, Ingredient, OnlyRecipeList } from '../../types/types';

// 재료, 준비과정 포함한 목록
const useGetAllRecipeList: () => UseQueryResult<
  AllRecipeList[],
  unknown
> = () => {
  const handleGetAllRecipeList = async () => {
    const { data, error } = await supabase
      .from('recipe_list')
      .select('*,ingredient(*),step(*)');
    if (error) {
      throw console.log(`RecipeList get error : ${error.message}`);
    }
    return data;
  };
  return useQuery<AllRecipeList[]>(
    queryKeys.current_all_recipe_list,
    handleGetAllRecipeList
  );
};

// 오직 레시피 내용만 출력
const useGetOnlyRecipeList: () => UseQueryResult<
  OnlyRecipeList[],
  unknown
> = () => {
  const handleGetOnlyRecipeList = async () => {
    const { data, error } = await supabase
      .from('recipe_list')
      .select(
        'id,curation,recipe_name,ingredient_id,youtube_video_thumbnail,cooking_time,category,level'
      );
    if (error) {
      throw console.log(`OnlyAllRecipeList : ${error.message}`);
    }
    return data;
  };
  return useQuery<OnlyRecipeList[]>(
    queryKeys.current_only_recipe_list,
    handleGetOnlyRecipeList
  );
};

// 현재 레시피에 해당하는 재료 리스트
const useGetOnlyIngredient = (recipe_id: number | undefined) => {
  const handleGetOnlyIngredient = async () => {
    const { data, error } = await supabase
      .from('ingredient')
      .select('*')
      .eq('id', recipe_id);
    if (error) {
      throw console.log(`GetOnlyIngredient : ${error.message}`);
    }
    return data;
  };
  return useQuery<Ingredient[]>(
    queryKeys.current_only_ingredient,
    handleGetOnlyIngredient
  );
};


// 레시피 이름으로 검색
const useSearch = (recipe_name: string | undefined) => {
  const handleSearch= async () => {
    const { data, error } = await supabase
      .from('recipe_list')
      .select('*')
      .eq('recipe_name',recipe_name );
    if (error) {
      throw console.log(`GetSearch : ${error.message}`);
    }
    return data;
  };
  return useQuery<AllRecipeList[]>(
    ['search_list'],
    handleSearch
  );
};
export const useRecipe = () => {
  return {
    useGetAllRecipeList,
    useGetOnlyRecipeList,
    useGetOnlyIngredient,
useSearch
  };
};