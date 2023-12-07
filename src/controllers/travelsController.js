import Travel from "../models/travelModel";

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
    let allTravels = await Travel.find();
    res.render("travels", { travels: allTravels });
  } catch (error) {
    console.error({ message: error.message });
  }
};
const getTravel = async (req, res) => {
  const id = req.params.id;
  try {
    const travel = await Travel.findOne({ _id: id });
    res.render("travel", { travel: travel });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const postTravel = async (req, res) => {
  try {
    const newTravel = await new Travel(req.body);
    newTravel.save();
    res.status(201).json({ message: "Travel added successfully", newTravel });
  } catch (error) {
    console.error({ message: error.message });
  }
};
const getEdit = async (req, res) => {
  const id = req.params.id;
  try {
    let travel = await Travel.findOne({ _id: id });
    console.log(travel.description, travel.price);
    res.render("edit", { travel: travel });
  } catch (error) {
    res.json({ message: "Travel not found", ERROR: error.message });
  }
};
const putTravel = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTravel = await Travel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.redirect("/travels/all");
  } catch (error) {
    res.status(404).json({ message: "Travel not found", ERROR: error.message });
  }
};
const deleteTravel = async (req, res) => {
  const id = req.params.id;
  try {
    await Travel.findOneAndDelete({ _id: id });
    res.redirect("/travels/all");
  } catch (error) {
    console.error(error.message);
  }
};

export {
  getAllTravels,
  getTravel,
  postTravel,
  putTravel,
  deleteTravel,
  getEdit,
};
