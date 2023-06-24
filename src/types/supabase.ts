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
          title: string | null;
          created_at: string;
        };
        Insert: {
          author?: string | null;
          data?: Json | null;
          id?: number;
          inserted_at?: string;
          name?: string | null;
          updated_at?: string;
        };
        Update: {
          author?: string | null;
          data?: Json | null;
          id?: number;
          inserted_at?: string;
          name?: string | null;
          updated_at?: string;
        };
      };
    };
  };
}
