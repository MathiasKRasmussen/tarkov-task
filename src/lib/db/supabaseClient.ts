import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env['VITE_SUPABASE_URL'] ? process.env['VITE_SUPABASE_URL'] : ''; // import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = process.env['VITE_SUPABASE_ANON_KEY'] ? process.env['VITE_SUPABASE_ANON_KEY'] : ''; //import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
