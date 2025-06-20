"use server";
import { createClient } from "@/utils/supabase/server";
import { FormSchema } from "./components/lead-form";
import statesJson from "../lib/estado-por-ddd.json";

function findStateByDDD(ddd: string) {
  //@ts-ignore
  const state = statesJson[ddd];
  return state || null;
}
export async function createLead(data: FormSchema) {
  const supabase = await createClient();
  const cleanedPhone = data.phone.replace(/\D/g, "").trim();
  const ddd = cleanedPhone.slice(0, 2);

  let state = findStateByDDD(ddd);
  console.log(state);

  const newLead = await supabase.from("leads").upsert({
    name: data.name,
    email: data.email,
    phone: cleanedPhone,
    state: state,
  });
  return newLead;
}
