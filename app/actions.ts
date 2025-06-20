"use server";
import { createClient } from "@/utils/supabase/server";
import { FormSchema } from "./components/lead-form";

export async function createLead(data: FormSchema) {
  const supabase = await createClient();
  const newLead = await supabase.from("leads").upsert({
    name: data.name,
    email: data.email,
    phone: data.phone,
    state: null,
  });
  return newLead;
}
