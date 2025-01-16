import express from "express";
import {createParticipant, getAllParticipants, getParticipantById, updateParticipant, deleteParticipant}  from "../controllers/participantController.js"

const router = express.Router();

router.post("/participant", createParticipant);
router.get("/participant", getAllParticipants);
router.get("/participant/:id", getParticipantById);
router.put("/participant/:id", updateParticipant);
router.delete("/participant/:id", deleteParticipant);

export default router;