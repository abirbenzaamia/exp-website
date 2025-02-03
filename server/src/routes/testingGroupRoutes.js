import express from "express";
import { createTestingGroup, deleteTestingGroup, getAllTestingGroups, getTestingGroupById, getTestingGroupByProlificId, updateTestingGroup } from "../controllers/testingGroupController.js";
const router = express.Router();

router.post("/testing_group", createTestingGroup);
router.get("/testing_group", getAllTestingGroups);
router.get("/testing_group/:id", getTestingGroupById);
router.get("/testing_group/prolific/:prolific_id", getTestingGroupByProlificId);
router.put("/testing_group/:id", updateTestingGroup);
router.delete("/testing_group/:id", deleteTestingGroup);

export default router;