const travels = [
  {
    id: 1,
    destination: "Paris",
    description: "Decouvrez la ville de l'amour.",
    price: 500,
  },
  {
    id: 2,
    destination: "New York",
    description: "Decouvrez la ville qui ne dort jamais. ",
    price: 800,
  },
  {
    id: 3,
    destination: "Tokyo",
    description: "La capitale du Japon. ",
    price: 700,
  },
  {
    id: 4,
    destination: "Sydney",
    description: "Detendez-vous sur les plages australiennes.",
    price: 600,
  },
];
const getAllTravels = async (req, res) => {
  try {
    let allTravels = await travels;
    res.render('travels', {travels: allTravels});
  } catch (error) {
    console.error({ message: error.message });
  }
};
const getTravel = async (req, res) => {
  const id = req.params.id;

  try {
    const travel = await travels.find((travel) => travel.id === Number(id));
    if (travel) res.json(travel);
    else res.status(404).json({ message: "Travel not found" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const postTravel = async (req, res) => {
  try {
    const newTravel = await req.body;
    travels.push(newTravel);
    res.status(201).json({ message: "Travel added successfully", newTravel });
  } catch (error) {
    console.error({ message: error.message });
  }
};
const putTravel = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTravel = await req.body;
    const index = travels.findIndex((t) => t.id === id);
    travels[index] = updatedTravel;
    res.json({ message: "Travel updated successfully", updatedTravel });
  } catch (error) {
    res.status(404).json({ message: "Travel not found", ERROR: error.message });
  }
};
const deleteTravel = async (req, res) => {
  const id = req.params.id;
  const index = await travels.findIndex((travel) => travel.id === id);
  try {
    const deletedTravel = travels.splice(index, 1);
    res.json({ message: "Travel deleted successfully", deletedTravel });
  } catch (error) {
    console.error(error.message);
  }
};

export { getAllTravels, getTravel, postTravel, putTravel, deleteTravel };
