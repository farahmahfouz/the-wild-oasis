import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://yymmlkqyrbwihzkqpekm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5bW1sa3F5cmJ3aWh6a3FwZWttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0MjkwMDksImV4cCI6MjA2ODAwNTAwOX0.smDwiC59nI-JgCZnRya8r3JDDsgrbGxhz7R6V0R_9QQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
