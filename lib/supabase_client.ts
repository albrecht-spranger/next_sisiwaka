import { createClient } from '@supabase/supabase-js';

export const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
export const supabase_anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase_client = createClient(supabase_url, supabase_anon_key);
