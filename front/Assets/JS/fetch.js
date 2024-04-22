export async function addLogin() {
  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  console.log(nom, prenom);

  try {
    const login = await fetch("http://localhost:3000/api/v1/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nom, prenom }),
    });
    if (!login.ok) {
      throw new Error("Erreur lors de l'envoie du login");
    }
    console.log("Login ajouté");
  } catch (error) {
    console.error(error);
  }
}

// export async function addReponse() {
//   const reponse_1 = document.getElementById("reponse_1").value;
//   const reponse_2 = document.getElementById("reponse_2").value;

//   try {
//     const login = await fetch("http://localhost:3000/api/v1/reponse/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         reponse_1: valeur_reponse_1,
//         reponse_2: valeur_reponse_2,
//       }),
//     });
//     if (!login.ok) {
//       throw new Error("Erreur lors de l'envoie du login");
//     }
//     console.log("Login ajouté");
//   } catch (error) {
//     console.error(error);
//   }
//   console.log(reponse_1);
// }

export async function addReponse() {
  const reponse_1 = document.getElementById("reponse_1");

  // Vérifier si les éléments sont non nuls avant d'accéder à leurs propriétés
  if (reponse_1) {
    const valeur_reponse_1 = reponse_1.value;
    console.log(valeur_reponse_1);

    try {
      const login = await fetch("http://localhost:3000/api/v1/reponse/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reponse: valeur_reponse_1,
          studentID: 90,
          questionID: 1,
        }),
      });
      if (!login.ok) {
        throw new Error("Erreur lors de l'envoie du login");
      }
      console.log("Login ajouté");
    } catch (error) {
      console.error(error);
    }
  } else {
    console.error("Les éléments HTML reponse_1 n'existe pas.");
  }
}
