import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getHotel, getHotels, updatedHotel,countByCity,countByType, getHotelRooms } from "../controllers/hotelController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/",verifyAdmin, createHotel);  

router.put("/:id",verifyAdmin,updatedHotel);

router.delete("/:id",verifyAdmin,deleteHotel);

router.get("/find/:id", getHotel);

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType); 
router.get("/room/:id", getHotelRooms);


export default router;