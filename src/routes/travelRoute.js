import { Router } from "express";
const travelRouter = Router();
import {
  deleteTravel,
  getAllTravels,
  getEdit,
  getTravel,
  postTravel,
  putTravel,
} from "../controllers/travelsController";

travelRouter.get("/all", getAllTravels);
travelRouter.post("/create", postTravel);
travelRouter.get("/:id", getTravel);
travelRouter.get("/:id/edit", getEdit)
travelRouter.put("/:id", putTravel);
travelRouter.delete("/:id/destroy", deleteTravel);

export default travelRouter;
