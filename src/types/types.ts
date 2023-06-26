export interface OnlyRecipeList {
  id: number;
  recipe_name: string | null;
  youtube_video_thumbnail: string | undefined;
  cooking_time: number | null;
  ingredient_id: number | null;
  category: string | null;
  curation: string | null;
  level: string | null;
}
export interface AllRecipeList {
  id: number;
  recipe_name: string | null;
  channel_name: string | null;
  youtube_video_id: string | null;
  youtube_video_thumbnail: string | undefined;
  cooking_time: number | null;
  description: number | null;
  curation: string | null;
  category: string | null;
  ingredient_id: number | null;
  step_id: number | null;
  created_at: string;
  ingredient: Ingredient;
  step: Step;
}
export interface Ingredient {
  id: number;
  list: Array<IngredientContent>;
  created_at: string;
}
export interface IngredientContent {
  name: string | null;
  amount: string | null;
  description: string | null;
}
export interface Step {
  id: number;
  list: Array<StepContent>;
  created_at: string;
}
export interface StepContent {
  step_id: number | null;
  title: string | null;
  description: string | null;
  timestamp: number | null;
  tip:
    | [
        {
          tip_id: number | null;
          image_url: string | null;
          title: string | null;
          description: string | null;
        }
      ]
    | [];
  timer:
    | [
        {
          timer_id: number | null;
          base_time: number | null;
        }
      ]
    | [];
}
