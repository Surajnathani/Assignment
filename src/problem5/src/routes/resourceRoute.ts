import express from "express";
import {
  createResource,
  getResources,
  getResource,
  updateResource,
  deleteResource,
} from "../controller/resourceController";

const router = express.Router();

router.post("/", createResource);
router.get("/", getResources);
router.get("/:id", getResource);
router.put("/:id", updateResource);
router.delete("/:id", deleteResource);

export default router;
