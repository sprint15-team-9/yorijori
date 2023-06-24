import { Ingredient, Step } from './types';

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      recipe_list: {
        Row: {
          id: number;
          recipe_name: string | null;
          channel_name: string | null;
          youtube_video_id: string | null;
          youtube_video_thumbnail: string | null;
          cooking_time: number | null;
          description: number | null;
          curation: string | null;
          category: string | null;
          ingredient_id: number | null;
          step_id: number | null;
          created_at: string;
          ingredient: Ingredient;
          step: Step;
        };
        Insert: {
          recipe_name: string | null;
          channel_name: string | null;
          youtube_video_id: string | null;
          youtube_video_thumbnail: string | null;
          cooking_time: number | null;
          description: number | null;
          curation: string | null;
          category: string | null;
          ingredient_id?: number | null;
          step_id?: number | null;
        };
        Update: {
          recipe_name: string | null;
          channel_name: string | null;
          youtube_video_id: string | null;
          youtube_video_thumbnail: string | null;
          cooking_time: number | null;
          description: number | null;
          curation: string | null;
          category: string | null;
          ingredient_id?: number | null;
          step_id?: number | null;
        };
      };
      ingredient: {
        Row: {
          id: number;
          list: Json | null;
          created_at: string;
        };
        Insert: {
          list: Json | null;
        };
        Update: {
          list?: Json | null;
        };
      };
    };
  };
}
