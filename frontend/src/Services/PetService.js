import defaultData from "../Commons/Commons";

const sendAddPetRequest = (
  petname,
  owner,
  breed,
  contactnumber,
  registered_date
) => {
  return new Promise((resolve, reject) => {
    fetch(defaultData.petsURL, {
      method: "POST",
      body: JSON.stringify({
        petname,
        owner,
        breed,
        contactnumber,
        registered_date,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          reject(new Error("Network response was not ok"));
        } else {
          resolve(response);
        }
      })
      .then((data) => {
        // Simulating a successful account creation
        resolve(data);
      })
      .catch((error) => {
        console.error("Error creating patient:", error);
        reject(error);
      });
  });
};

const fetchPetRequest = (email, password) => {
  return new Promise((resolve, reject) => {
    fetch(defaultData.petsURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          reject(new Error("Network response was not ok"));
        }
        resolve(response);
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        reject(error);
      });
  });
};

const deletePetRequest = (id) => {
  return new Promise((resolve, reject) => {
    fetch(defaultData.petsURL + `/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          reject(new Error("Network response was not ok"));
        }
        resolve(response);
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        reject(error);
      });
  });
};

const sendUpdatePetRequest = (
  id,
  petname,
  owner,
  breed,
  contactnumber,
  registered_date
) => {
  return new Promise((resolve, reject) => {
    fetch(defaultData.petsURL + `/${id}`, {
      method: "POST",
      body: JSON.stringify({
        petname,
        owner,
        breed,
        contactnumber,
        registered_date,
        btnUpdate: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          reject(new Error("Network response was not ok"));
        } else {
          resolve(response);
        }
      })
      .then((data) => {
        // Simulating a successful account creation
        resolve(data);
      })
      .catch((error) => {
        console.error("Error updating pet:", error);
        reject(error);
      });
  });
};

export {
  sendAddPetRequest,
  fetchPetRequest,
  deletePetRequest,
  sendUpdatePetRequest,
};
