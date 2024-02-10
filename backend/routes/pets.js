var express = require("express");
const {
  addProduct,
  deleteProduct,
  updateProduct,
  deletePatient,
  updatePatient,
  addPet,
  fetchPets,
  deletePet,
  updatePet,
} = require("../src/repository/postgres/postgres");
var router = express.Router();

router.get("/", async function (req, res, next) {
  await fetchPets()
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
});

router.post("/", async function (req, res, next) {
  const { petname, owner, breed, contactnumber } = req.body;
  console.log(req.body);
  if (petname && owner && breed && contactnumber) {
    try {
      await addPet(
        petname,
        owner,
        breed,
        contactnumber,
        (data) => {
          return res.status(200).json(data);
        },
        (err) => {
          return res.status(500).json(err);
        }
      );
    } catch (error) {
      console.error("Authentication failed:", error.message);
      return res.status(500).json({ error: error.message });
    }
  } else {
    return res.status(400).json({ error: "Missing Required Parameters" });
  }
});

router.post("/:id", async function (req, res, next) {
  const { petname, owner, breed, contactnumber } = req.body;
  const { id } = req.params;
  console.log(req.body);
  if (petname && owner && breed && contactnumber && id) {
    await updatePet(id, petname, owner, breed, contactnumber)
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  } else {
    return res.status(400).json({ error: "Missing Required Parameters" });
  }
});

router.delete("/:id", async function (req, res, next) {
  const { id } = req.params;
  if (id) {
    await deletePet(id)
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  } else {
    return res.status(400).json({ error: "Missing Required Paramaters" });
  }
});
module.exports = router;
