import { createClient } from "@supabase/supabase-js";

export const supabase: any = createClient(
	"https://uemhbwbgdvahzqglsrmb.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlbWhid2JnZHZhaHpxZ2xzcm1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxOTk4NDAsImV4cCI6MjAwNzc3NTg0MH0.aSLohV1hDGcGLTSqtdpjR0autlWfGX9cUwlOb5G4ewk",
	{
		auth: {
			persistSession: true,
		},
	}
);
