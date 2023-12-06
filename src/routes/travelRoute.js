import { Router } from "express";
const travelRouter = Router();
import {
  deleteTravel,
  getAllTravels,
  getTravel,
  postTravel,
  putTravel,
} from "../controllers/travelsController";

travelRouter.get("/all", getAllTravels);
travelRouter.post("/create", postTravel);
travelRouter.get("/:id", getTravel);
travelRouter.put("/:id/edit", putTravel);
travelRouter.delete("/:id/destroy", deleteTravel);

export default travelRouter;
