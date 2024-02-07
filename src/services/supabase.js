
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tpclqghdujwoxbzkypwn.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwY2xxZ2hkdWp3b3hiemt5cHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4OTI4NTcsImV4cCI6MjAyMjQ2ODg1N30.Z3yZVewazUN_VEN8PO5lqtRqfa8zuXFSTeOHXpLn3t8";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;