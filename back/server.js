import express from "express";
import cors from "cors";
import {
  getNotes,
  getNote,
  addNote,
  updateNote,
  getLogin,
  getReponse,
} from "./model/supabase.js";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/api/v1/login", async (req, res) => {
  try {
    const { nom, prenom } = req.body;

    await getLogin({ nom, prenom });
    res.status(200).json({ message: "Donnée enregistrés" });
  } catch (error) {
    console.error(
      "Erreur lors de l'insertion des données dans la base de données:",
      error
    );
    res.status(500).json({
      error: "Une erreur est survenue lors de l'insertion des données.",
    });
  }
});

app.post("/api/v1/reponse", async (req, res) => {
  try {
    const { reponse, studentID, questionID } = req.body;

    await getReponse({ reponse, studentID, questionID });
    res.status(200).json({ message: "reponse enregistrée" });
  } catch (error) {
    console.error(
      "Erreur lors de l'insertion des données dans la base de données:",
      error
    );
    res.status(500).json({
      error: "Une erreur est survenue lors de l'insertion des données.",
    });
  }
});

// recuperer toutes les notes
app.get("/api/v1", async (req, res) => {
  const { data, error } = await getNotes();
  res.json(data);
});

// recuperer une seule note avec un id
app.get("/api/v1/note/:id", async (req, res) => {
  const id = req.params.id;
  const { data, error } = await getNote(id);
  res.json(data);
});

//ajouter une  nouvelle note
app.post("/api/v1/note", async (req, res) => {
  const { data, error } = await addNote(req.body);
  res.json(data);
});

// modifier une note

app.put("/api/v1/note/:id", async (req, res) => {
  const id = req.params.id;
  const { data, error } = await updateNote(id, req.body);
  console.log(req.body);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
