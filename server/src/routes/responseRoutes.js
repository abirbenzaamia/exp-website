import express from "express";
import {createResponse, getAllResponses, getResponseById, updateResponse, deleteResponse}  from "../controllers/responseController.js"
const router = express.Router();

router.post("/response", createResponse);
router.get("/response", getAllResponses);
router.get("/response/:id", getResponseById);
router.put("/response/:id", updateResponse);
router.delete("/response/:id", deleteResponse);

export default router;