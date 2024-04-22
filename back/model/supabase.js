import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://djqxviocchakwiatxrgd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqcXh2aW9jY2hha3dpYXR4cmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxNTY3NDgsImV4cCI6MjAyNDczMjc0OH0.Nkh_IsulCEeC_Rvo3vf7uWpaOMUF8sUtQ5WnIDhj0Jw";
const supabase = createClient(supabaseUrl, supabaseKey);

async function getNotes() {
  const { data, error } = await supabase.from("notes").select();
  return { data, error };
}

async function getNote(id) {
  let { data, error } = await supabase.from("notes").select().eq("id", id);
  return { data, error };
}

async function addNote(info) {
  const { data, error } = await supabase.from("notes").insert(info).select();

  return { data, error };
}

async function updateNote(id, info) {
  const { data, error } = await supabase
    .from("notes")
    .update(info)
    .eq("id", id)
    .select();
  return { data, error };
}

async function getLogin(info) {
  console.log("Data received in getLogin", info);

  const { data, error } = await supabase.from("login").insert(info).select();
  if (error) {
    console.error("Error inserting data into Supabase:", error);
  } else {
    console.log("Data inserted successfully into Supabase:", data);
  }
  return { data, error };
}
async function getIdLogin(info) {
  const { data, error } = await supabase
    .from("login")
    .select("id")
    .order("id", { ascendin: false })
    .limit(1);
  if (error) {
    console.error("Error get id  data from Supabase:", error);
  } else {
    console.log("Data get successfully from Supabase:", data);
  }

  return { data, error };
}

async function getReponse(info) {
  console.log("Data received in getReponse", info);

  // Appeler la fonction getLogin pour obtenir les données d'authentification de l'élève
  // const loginInfo = await getLogin({
  //   nom: info.nom,
  //   prenom: info.prenom,
  // });
  // if (loginInfo.error) {
  //   console.error("Error getting login info:", loginInfo.error);
  //   return;
  // }

  const { data, error } = await supabase
    .from("reponse_eleve")
    .insert(info)
    .select();
  if (error) {
    console.error("Error inserting data into Supabase:", error);
  } else {
    console.log("Data inserted successfully into Supabase:", data);
  }
  return { data, error };
}

export {
  getIdLogin,
  getNotes,
  getNote,
  addNote,
  updateNote,
  getLogin,
  getReponse,
};
