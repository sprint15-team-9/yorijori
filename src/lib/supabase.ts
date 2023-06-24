import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';
const { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } = import.meta.env;
const supabaseUrl = VITE_SUPABASE_URL;
const supabaseAnonKey = VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('supabase env파일 없는듯요?');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
