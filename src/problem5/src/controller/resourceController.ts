import { Request, Response, NextFunction } from "express";
import Resource from "../models/resource";

export const createResource = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const resource = await Resource.create(req.body);
    res.status(201).json(resource);
  } catch (error) {
    next(error);
  }
};

export const getResources = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const resources = await Resource.find(req.query);
    res.status(200).json(resources);
  } catch (error) {
    next(error);
  }
};

export const getResource = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      res.status(404).json({ message: "Resource not found" });
      return;
    }
    res.status(200).json(resource);
  } catch (error) {
    next(error);
  }
};

export const updateResource = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!resource) {
      res.status(404).json({ message: "Resource not found" });
      return;
    }
    res.status(200).json(resource);
  } catch (error) {
    next(error);
  }
};

export const deleteResource = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) {
      res.status(404).json({ message: "Resource not found" });
      return;
    }
    res.status(200).json({ message: "Resource deleted successfully" });
  } catch (error) {
    next(error);
  }
};
